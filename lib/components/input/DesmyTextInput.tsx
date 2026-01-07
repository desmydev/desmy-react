import React, { Component, RefObject } from "react";
import Commons from "../apis/DesmyCommons";
import { HexColorPicker } from "react-colorful";
import { DesmyState } from "../apis/DesmyState";
import DesmyCommons from "../apis/DesmyCommons";
import { DesmyDropdown } from "../dropdown/DesmyDropdown";
import countries from "../../assets/countries.json";

interface TextInputProps {
  defaultValue?: string;
  type?: string;
  readOnly?: boolean;
  hasRequest?: boolean;
  className?: string;
  inputClassName?: string;
  emailExtensions?: string[];
  dialCode?: string;
  onChange?: (value: string) => void;
  onChangeWithData?: (value: string, data: any) => void;
  onSearch?: (value: any) => void;
  onRef?: (instance: HTMLInputElement | null) => void;
  autoFocus?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  disabled?: boolean;
  maxLength?: number;
  rows?: number;
  label: string;
  theme?: string;
  prefix?: string;
  postfix?: string;
}

interface TextInputState {
  dropdownPopoverShow: boolean;
  countryList: any[];
  hasPressed: boolean;
  input: {
    [key: string]: string | string[];
  };
  selectedCountry?: { id: string; name: string; data: any };
}

class DesmyTextInput extends Component<TextInputProps, TextInputState> {
  enteredInput: string = "";
  hasDefault: boolean = false;

  private popoverDropdownRef: RefObject<HTMLDivElement | null> =
    React.createRef();
  private inputRef: RefObject<HTMLInputElement | null> = React.createRef();

  private inputId: string = `data-${Commons.generateKey()}`;

  constructor(props: TextInputProps) {
    super(props);

    // -------------------------------
    // 1. SAFELY MAP COUNTRIES
    // -------------------------------
    const mappedCountries = (Array.isArray(countries) ? countries : [])
      .filter(
        (c: any) =>
          typeof c?.dial_code === "string" && c.dial_code.startsWith("+")
      )
      .map((c: any) => {
        const dial = c.dial_code.trim();

        return {
          id: dial,
          name: `${String(c.en_short_name ?? "Unknown")} (${dial})`,
          data: c,
        };
      });

    // -------------------------------
    // 2. NORMALIZE DEFAULT VALUE
    // -------------------------------
    const rawDefault = props.defaultValue;

    const safeDefault =
      typeof rawDefault === "string"
        ? rawDefault
        : Array.isArray(rawDefault)
        ? rawDefault[0]
        : rawDefault != null
        ? String(rawDefault)
        : "";

    // -------------------------------
    // 3. DETERMINE SELECTED COUNTRY
    // -------------------------------
    let selected =
      mappedCountries.find((c) => c.id === "+233") || mappedCountries[0];

    // If defaultValue has dial code (highest priority)
    if (safeDefault.startsWith("+")) {
      const dialFromDefault = safeDefault.match(/^\+\d+/)?.[0];
      if (dialFromDefault) {
        const found = mappedCountries.find((c) => c.id === dialFromDefault);
        if (found) selected = found;
      }
    }
    // else dialCode prop
    else if (props.dialCode) {
      const found = mappedCountries.find((c) => c.id === props.dialCode);
      if (found) selected = found;
    }

    // -------------------------------
    // 4. INITIAL STATE
    // -------------------------------
    this.state = {
      dropdownPopoverShow: false,
      hasPressed: false,
      countryList: mappedCountries,
      selectedCountry: selected,
      input: {
        data: Commons.getDefaultValue(safeDefault) || "",
      },
    };
  }

  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this.inputRef.current);
    }

    this.applyDialCodeIfNeeded();
  }

  componentDidUpdate(prevProps: TextInputProps) {
    // ✅ If defaultValue changes, only update if input is empty
    if (prevProps.defaultValue !== this.props.defaultValue) {
      const newDefault = Commons.getDefaultValue(this.props.defaultValue) || "";

      if (Commons.isEmptyOrNull(this.state.input.data)) {
        this.setState(
          (prev) => ({ input: { ...prev.input, data: newDefault } }),
          () => this.applyDialCodeIfNeeded()
        );
      }
    }

    // ✅ If dialCode changes, update selected country + adjust input
    if (prevProps.dialCode !== this.props.dialCode && this.props.dialCode) {
      this.applyDialCodeIfNeeded();
    }
  }

  applyDialCodeIfNeeded = () => {
    if (this.props.type !== DesmyState.PHONE_WITH_COUNTRY_CODE) return;

    const dialProp = this.props.dialCode;
    const currentValue = String(this.state.input.data ?? "");

    // Determine the best dial code
    let selected = this.state.selectedCountry;

    // If dialCode prop exists, use it
    if (dialProp) {
      const match = this.state.countryList.find((c) => c.id === dialProp);
      if (match) selected = match;
    }

    // If currentValue already has a dial code, prefer it
    if (currentValue.startsWith("+")) {
      const dialFromValue = currentValue.match(/^\+\d+/)?.[0];
      if (dialFromValue) {
        const found = this.state.countryList.find((c) => c.id === dialFromValue);
        if (found) selected = found;
      }
    }

    if (!selected) return;

    this.setState({ selectedCountry: selected }, () => {
      this.ensureDialCodeInValue(selected!.id);
    });
  };

  ensureDialCodeInValue = (dial: string) => {
    const current = String(this.state.input.data ?? "");
    if (current.startsWith(dial)) return;

    // Remove any previous dial code from input, keep digits only
    const digitsOnly = current.replace(/^\+\d+/, "").replace(/[^0-9]/g, "");
    const fullValue = dial + digitsOnly;

    this.setState(
      (prev) => ({ input: { ...prev.input, data: fullValue } }),
      () => this.props.onChangeWithData?.(fullValue, this.state.selectedCountry)
    );
  };

  sanitizeInput = (value: string): string => {
    const { type } = this.props;
    let cleaned = value;

    // Remove spacing characters
    if (
      type === DesmyState.PHONE_NUMBER ||
      type === DesmyState.PHONE_WITH_COUNTRY_CODE ||
      type === DesmyState.NUMBER ||
      type === DesmyState.AMOUNT ||
      type === DesmyState.DECIMAL
    ) {
      cleaned = cleaned.replace(/[\s\-()]/g, "");
    }

    if (type === DesmyState.PHONE_WITH_COUNTRY_CODE) {
      let plus = cleaned.startsWith("+") ? "+" : "";
      let numbersOnly = cleaned.replace(/[^0-9]/g, "");
      return plus + numbersOnly;
    }

    if (type === DesmyState.PHONE_NUMBER) cleaned = cleaned.replace(/[^0-9+]/g, "");
    if (type === DesmyState.NUMBER) cleaned = cleaned.replace(/[^0-9]/g, "");
    if (type === DesmyState.AMOUNT || type === DesmyState.DECIMAL)
      cleaned = cleaned.replace(/[^0-9.]/g, "");
    if (type === DesmyState.EMAIL) cleaned = cleaned.trim();

    return cleaned;
  };

  validateInput = (inputValue: string, type: string): boolean => {
    switch (type) {
      case DesmyState.PHONE_NUMBER:
        return /^[0-9+]*$/.test(inputValue);

      case DesmyState.PHONE_WITH_COUNTRY_CODE:
        return /^[+0-9]*$/.test(inputValue);

      case DesmyState.NUMBER:
        return /^[0-9]*$/.test(inputValue);

      case DesmyState.AMOUNT:
      case DesmyState.DECIMAL:
        return /^\d*(\.\d{0,2})?$/.test(inputValue);

      case DesmyState.EMAIL: {
        const isValidEmail = Commons.validateEmail(inputValue);

        if (this.props.emailExtensions && this.props.emailExtensions.length > 0) {
          const validExtensions = this.props.emailExtensions.map((ext) => ext.trim());
          return isValidEmail && validExtensions.some((ext) => inputValue.endsWith(ext));
        }
        return isValidEmail;
      }

      default:
        return true;
    }
  };

  handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const raw = event.clipboardData.getData("text");
    const cleaned = this.sanitizeInput(raw);

    if (this.props.type === DesmyState.PHONE_WITH_COUNTRY_CODE) {
      const dial = this.state.selectedCountry?.id || "";

      // Remove dial if user pasted a full number with dial
      const digitsOnly = cleaned.replace(/^\+\d+/, "").replace(/[^0-9]/g, "");
      const fullValue = dial + digitsOnly;

      this.setState(
        (prev) => ({ input: { ...prev.input, data: fullValue } }),
        () => this.props.onChangeWithData?.(fullValue, this.state.selectedCountry)
      );

      return;
    }

    this.setState(
      (prev) => ({ input: { ...prev.input, data: cleaned } }),
      () => this.props.onChange?.(cleaned)
    );
  };

  handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    this.setState(
      (prev) => ({ input: { ...prev.input, data: inputValue } }),
      () => this.props.onChange?.(inputValue)
    );
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { type } = this.props;
    let inputValue = event.target.value;

    // ✅ PHONE WITH COUNTRY CODE
    if (type === DesmyState.PHONE_WITH_COUNTRY_CODE) {
      const dial = this.state.selectedCountry?.id || "";

      // Always enforce dial prefix
      if (!inputValue.startsWith(dial)) {
        inputValue = dial;
      }

      const numberPart = inputValue.replace(dial, "");
      const cleanedNumber = this.sanitizeInput(numberPart).replace(/^\+/, "");

      const fullValue = dial + cleanedNumber;

      this.setState(
        (prev) => ({ input: { ...prev.input, data: fullValue } }),
        () => this.props.onChangeWithData?.(fullValue, this.state.selectedCountry)
      );

      return;
    }

    // ✅ NORMAL INPUTS
    const cleanedValue = this.sanitizeInput(inputValue);
    const isValid = this.validateInput(cleanedValue, String(type));

    this.setState(
      (prev) => ({ input: { ...prev.input, data: cleanedValue } }),
      () => {
        if (isValid) this.props.onChange?.(cleanedValue);
      }
    );
  };

  handleClick = (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (this.props.readOnly && this.props.onFocus) {
      const focusEvent = {
        ...event,
        type: "focus",
        target: event.target as HTMLInputElement | HTMLTextAreaElement,
      } as unknown as React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>;
      return this.props.onFocus(focusEvent);
    }
  };

  handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (this.props.readOnly) return;

    if (this.props.type === DesmyState.COLOR) {
      this.setState({ dropdownPopoverShow: true });
    } else if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleCountryChange = (item: any) => {
    const dial = item.id;
    const current = String(this.state.input.data ?? "");

    const digitsOnly = current.replace(/^\+\d+/, "").replace(/[^0-9]/g, "");
    const fullValue = dial + digitsOnly;

    this.setState(
      {
        selectedCountry: item,
        input: { data: fullValue },
      },
      () => this.props.onChangeWithData?.(fullValue, item)
    );
  };

  handleColorPicker = () => {
    this.setState({ dropdownPopoverShow: true });
  };

  closeDropdownPopover = () => {
    this.setState({ dropdownPopoverShow: false });
  };

  render() {
    const { prefix, postfix, type } = this.props;
    const isPhoneWithCountry = type === DesmyState.PHONE_WITH_COUNTRY_CODE;

    const inputValue = String(this.state.input.data ?? ""); // ✅ ALWAYS CONTROLLED

    return (
      <div
        className={`${isPhoneWithCountry ? `flex w-full` : ``} ${
          this.props.className || "bg-white dark:bg-darkBackground"
        } transition-colors duration-300 space-x-5`}
      >
        {isPhoneWithCountry && (
          <div className="w-40">
            <DesmyDropdown
              data={this.state.countryList}
              defaultValue={this.state.selectedCountry?.id}
              placeholder="Country"
              handleChange={(item) => this.handleCountryChange(item)}
            />
          </div>
        )}

        <div
          className={`relative bg-inherit ${
            this.props.type === DesmyState.SEARCH
              ? "flex w-full space-x-3"
              : isPhoneWithCountry
              ? `w-full`
              : ""
          }`}
        >
          <div
            className={`flex items-center ${
              (!DesmyCommons.isEmptyOrNull(prefix) ||
              !DesmyCommons.isEmptyOrNull(postfix)
                ? `border border-black dark:border-white`
                : ``)
            } bg-inherit`}
          >
            {prefix && (
              <span className="px-1 text-sm text-gray-600 dark:text-gray-300 mr-2">
                {prefix}
              </span>
            )}

            {/* TEXTAREA */}
            {this.props.type === DesmyState.TEXTAREA ? (
              <textarea
                id={this.inputId}
                name="data"
                rows={this.props.rows}
                disabled={!!this.props.disabled}
                autoFocus={!!this.props.autoFocus}
                onFocus={this.handleFocus}
                onClick={this.props.readOnly ? this.handleClick : undefined}
                placeholder={this.props.label}
                readOnly={this.props.readOnly}
                maxLength={this.props.maxLength}
                value={inputValue}
                onChange={this.handleTextAreaChange}
                className={`peer bg-transparent border border-black text-xs/7 dark:border-white dark:text-white placeholder-transparent 2xl:text-sm/7 ring-0 px-2 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`}
              />
            ) : (
              <input
                type={`${this.props.type === DesmyState.PASSWORD ? "password" : "text"}`}
                id={this.inputId}
                name="data"
                autoComplete="data"
                ref={this.inputRef}
                readOnly={this.props.readOnly}
                maxLength={this.props.maxLength}
                onFocus={this.handleFocus}
                onClick={this.props.readOnly ? this.handleClick : undefined}
                disabled={!!this.props.disabled}
                autoFocus={!!this.props.autoFocus}
                onPaste={this.handlePaste}
                value={inputValue}
                onChange={this.handleChange}
                className={`peer bg-transparent h-12 ${
                  !(!DesmyCommons.isEmptyOrNull(prefix) ||
                  !DesmyCommons.isEmptyOrNull(postfix))
                    ? `border border-black px-2`
                    : ``
                }  ${
                  this.props.disabled ? "cursor-not-allowed" : ""
                } dark:border-white dark:text-white placeholder-transparent text-xs 2xl:text-sm ring-0 w-full focus:outline-none focus:ring-0 dark:focus:border-white ${this.props.inputClassName}`}
                placeholder={this.props.label}
              />
            )}

            <label
              htmlFor={this.inputId}
              className={`pointer-events-none absolute cursor-text left-0 text-[11px] dark:text-white bg-inherit mx-1 px-2
              ${
                !(!DesmyCommons.isEmptyOrNull(prefix) ||
                !DesmyCommons.isEmptyOrNull(postfix))
                  ? `peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-black -top-3.5 peer-focus:text-[11px]`
                  : `-top-3.5 text-[11px]`
              }
              dark:peer-focus:text-white transition-all`}
            >
              <div className="w-full line-clamp-1">{this.props.label}</div>
            </label>

            {this.props.type === DesmyState.COLOR && (
              <div
                onClick={this.handleColorPicker}
                className="absolute top-0 bottom-0 right-2 rounded-2xl cursor-pointer w-12 my-auto h-8"
                style={{ background: `${inputValue}` }}
              ></div>
            )}

            {this.props.type === DesmyState.SEARCH && (
              <div className="bg-primary text-white p-3 rounded-xl cursor-pointer">
                {this.props.hasRequest ? (
                  <svg
                    role="status"
                    className="inline w-5 h-5 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  this.props.onSearch !== undefined && (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      onClick={() => this.props.onSearch?.(inputValue)}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      className="w-5"
                    >
                      <path d="M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {this.props.type === DesmyState.COLOR && this.state.dropdownPopoverShow && (
          <div
            ref={this.popoverDropdownRef}
            className="absolute border-none z-[800] w-auto float-left py-2 bg-inherit list-none text-left rounded shadow-lg mt-1"
          >
            <HexColorPicker
              color={inputValue}
              onChange={(data) =>
                this.setState(
                  (prev) => ({ input: { ...prev.input, data } }),
                  () => this.props.onChange?.(data)
                )
              }
            />
          </div>
        )}
      </div>
    );
  }
}

export { DesmyTextInput };
