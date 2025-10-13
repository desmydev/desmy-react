import React,{ Component } from 'react';
import { format, parseISO, isValid } from 'date-fns';
import { DesmyModalContainer } from '../modalcontainer/DesmyModalContainer';
import DesmyAuth from '../apis/DesmyAuth';
import { DesmyState as CommonState } from '../apis/DesmyState';
import { DesmyDropdown } from '../dropdown/DesmyDropdown';
import DesmyCommons from '../apis/DesmyCommons';
import { DesmyButton } from '../button/DesmyButton';
import { DesmyDatePicker } from '../datepicker/DesmyDatePicker';
import { DesmyToast } from '../toasify/DesmyToast';

interface CreateProps {
    filter?: any;
    content?: any[];
    onClose: () => void;
    onSuccess?: (data: any) => void;
}

interface InputState {
    [key: string]: any;
    date?: {
        id: string;
        name: string;
        value: { startDate: string; endDate: string };
        label: string;
    };
    date_filters?: any;
}

interface FiltersState {
    extra_fields?: { 
        id: string; 
        child?: { id: string; use_selected_name?: boolean }; 
        is_multiple?: boolean 
    }[];
    date_filters?: any[];
    [key: string]: any;
}

interface CreateState {
    hasRequest: boolean;
    isLoading: boolean;
    input: InputState;
    filters: FiltersState;
}

class DesmyFilter extends Component<CreateProps, CreateState> {
    constructor(props: CreateProps) {
        super(props);
        this.state = {
            isLoading: true,
            hasRequest: false,
            input: {},
            filters: {},
        };
    }

    componentDidMount() {
        if (this.props.content) {
            const updatedInput: InputState = { ...this.state.input };
            this.props.content.forEach(item => {
                if (item.label && item.value !== null) {
                    updatedInput[item.label] = item;
                }
            });
            this.setState({ input: updatedInput });
        }
        this.fetchFilters();
    }

    fetchFilters = async () => {
        try {
            this.setState({ hasRequest: true });

            const response = await fetch(this.props.filter?.url, {
                method: 'GET',
                headers: {
                    "X-CSRFToken": `${DesmyAuth.getCookie('csrftoken')}`,
                    "Authorization": this.props.filter?.token ?? `Token ${DesmyAuth.get(CommonState.ACCESS_TOKEN)}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                if (data && data.success) {
                    this.setState({ filters: data.data, isLoading: false });
                } else {
                    this.handleError(data?.message || 'Failed to fetch filters');
                }
            } else {
                this.handleError('Failed to fetch filters');
            }
        } catch (error) {
            this.handleError('An error occurred while fetching filters');
        } finally {
            this.setState({ hasRequest: false });
        }
    };

    handleError = (message: string) => {
        DesmyToast.error(message);
        this.setState({ isLoading: false, hasRequest: false });
        this.props.onClose?.();
    };

    handleOnSubmit = async () => {
        const { input } = this.state;
        this.props.onSuccess?.(input);
    };

    render() {
        const { filters, input, isLoading } = this.state;
        const extraFields = filters.extra_fields || [];

        return (
            <DesmyModalContainer
                data={{ title: `Filter` }}
                containerClassName={`bg-white dark:bg-darkBackground border-[1px] border-gray-100 dark:border-darkDialogBackground`}
                className={`add-event-multi-modal ${(!isLoading && extraFields.length > 5) ? `max-w-4xl` : `max-w-lg`} p-2 transition-all`}
                onClose={this.props.onClose}
            >
                <div className='flex flex-col w-full min-h-52 space-y-6'>
                    {isLoading ? (
                        <div className='flex flex-col px-4 py-5 dark:bg-darkDialogBackground w-full animate-pulse'>
                            <div className='flex w-24 rounded-full h-4 bg-gray-300 dark:bg-darkPrimaryBorderLight'></div>
                            <div className='flex flex-col w-full mt-10 space-y-6'>
                                {Array.apply(0, Array(3)).map((_, i) => (
                                    <div key={i} className={`flex ${i === 0 ? `w-4/5` : i === 1 ? `w-3/5` : `w-2/5`} rounded-full h-4 bg-gray-300 dark:bg-darkPrimaryBorderLight`}></div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className={`grid ${extraFields.length > 5 ? `grid-cols-2` : `grid-cols-1`} gap-6`}>
                            {extraFields.map((field, index) => {
                                const fieldKey = field.id;
                                const childKey = field.child?.id;
                                const useSelectedName = field.child?.use_selected_name;
                                const isMultiple = field.is_multiple === true;

                                const currentSelection = input[fieldKey];

                                return (
                                    <React.Fragment key={index}>
                                        {/* Parent dropdown */}
                                        <div className="flex flex-col">
                                            <DesmyDropdown
                                                request={{
                                                    url: `${this.props.filter?.url}?option=${fieldKey}`,
                                                    token: this.props.filter?.token ?? `${DesmyAuth.get(CommonState.ACCESS_TOKEN)}`
                                                }}
                                                defaultValue={currentSelection}
                                                placeholder={DesmyCommons.toSentenceCase(String(fieldKey.replace('_', ' ').toUpperCase()))}
                                                is_multiple={isMultiple}
                                                handleChange={(data: any) => {
                                                    if (!DesmyCommons.isEmptyOrNull(data)) {
                                                        this.setState(prevState => {
                                                            let newInput = { ...prevState.input };

                                                            if (isMultiple) {
                                                                const mapped = data.map((d: any) => ({
                                                                    id: d.id,
                                                                    name: d.name,
                                                                    ...(d.value ? { data: d.value } : {})
                                                                }));
                                                                newInput[fieldKey] = mapped;
                                                            } else {
                                                                newInput[fieldKey] = data;
                                                            }

                                                            if (childKey) Reflect.deleteProperty(newInput, childKey);
                                                            return { input: newInput };
                                                        });
                                                    }
                                                }}
                                            />
                                        </div>

                                        {/* Child dropdown */}
                                        {childKey && input[fieldKey] && !isMultiple && (
                                            <div className="flex flex-col">
                                                <DesmyDropdown
                                                    request={{
                                                        url: `${this.props.filter?.url}?option=${childKey}&value=${input[fieldKey].id}`,
                                                        token: this.props.filter?.token ?? `${DesmyAuth.get(CommonState.ACCESS_TOKEN)}`
                                                    }}
                                                    defaultValue={input[childKey]}
                                                    placeholder={
                                                        useSelectedName && input[fieldKey]?.name
                                                            ? input[fieldKey].name
                                                            : DesmyCommons.toSentenceCase(String(childKey.replace('_', ' ').toUpperCase()))
                                                    }
                                                    handleChange={(data: any) => {
                                                        if (!DesmyCommons.isEmptyOrNull(data)) {
                                                            this.setState(prevState => ({
                                                                input: { ...prevState.input, [childKey]: data }
                                                            }));
                                                        }
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}

                            {/* Date filters */}
                            {filters.date_filters && (
                                <div className="flex flex-col space-y-4">
                                    <DesmyDropdown
                                        defaultValue={input["date_filters"]}
                                        placeholder="Date Filters"
                                        data={filters.date_filters.map((item: any) => ({
                                            id: item.key,
                                            name: item.name,
                                            value: item,
                                            label: item.name,
                                        }))}
                                        handleChange={(data: any) => {
                                            if (!DesmyCommons.isEmptyOrNull(data)) {
                                                this.setState(prevState => {
                                                    const newInput: InputState = { ...prevState.input, ["date_filters"]: data };
                                                    if (data?.id !== "date") Reflect.deleteProperty(newInput, "date");
                                                    return { input: newInput };
                                                });
                                            }
                                        }}
                                    />

                                    {input["date_filters"]?.id === "date" && (
                                        <div className='flex w-full mt-3'>
                                            <DesmyDatePicker
                                                defaultValue={input['date']?.value || { startDate: undefined, endDate: undefined }}
                                                label={`Select Date Range`}
                                                minDate={parseISO(filters.date_filters.find((d: any) => d.key === "date")?.minDate || "")}
                                                maxDate={parseISO(filters.date_filters.find((d: any) => d.key === "date")?.maxDate || "")}
                                                displayFormat="MMMM dd, yyyy hh:mm a"
                                                useRange={true}
                                                withTime={true}
                                                onSelected={(dates: { startDate?: string; endDate?: string }) => {
                                                    const { startDate, endDate } = dates;
                                                    if (startDate && endDate) {
                                                        const formattedName = `${isValid(parseISO(startDate)) ? format(parseISO(startDate), 'MMMM dd, yyyy hh:mm a') : ''} - ${isValid(parseISO(endDate)) ? format(parseISO(endDate), 'MMMM dd, yyyy hh:mm a') : ''}`;
                                                        const selectedValue = {
                                                            id: 'custom',
                                                            name: formattedName,
                                                            value: { startDate, endDate },
                                                            label: "Custom Date Range"
                                                        };
                                                        this.setState(prevState => ({
                                                            input: { ...prevState.input, ['date']: selectedValue }
                                                        }));
                                                    }
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    <div className='flex justify-end mt-5'>
                        <DesmyButton
                            onClick={this.handleOnSubmit}
                            hasRequest={this.state.hasRequest}
                            label={`Save And Continue`}
                        />
                    </div>
                </div>
            </DesmyModalContainer>
        );
    }
}

export { DesmyFilter };
