import React, { Component } from 'react';
import axios from 'axios'; 
import { DesmyClickOutsideListener } from '../clickoutsidelistener/DesmyClickOutsideListener';
import { State as CommonState } from '../apis/Constants';
import DesmyAuth from '../apis/DesmyAuth';

interface RequestProps {
    url: string;
    isEnable?: boolean;
    serverRequest: boolean;
    list?: Array<{ name: string }>;
    onSelect: (data: any) => void;
}

interface PopupMenuProps {
    request: RequestProps;
    className?: string;
    dropdownClassName?: string;
    children: React.ReactNode;
}

interface PopupMenuState {
    isOpen: boolean;
    datalist: Array<{ name: string }>;
    isLoading: boolean;
}

class DesmyPopupMenu extends Component<PopupMenuProps, PopupMenuState> {
    constructor(props: PopupMenuProps) {
        super(props);
        this.state = {
            isOpen: false,
            datalist: [],
            isLoading: false,
        };
    }

    toggleDropdown = () => {
        try {
            if (this.props.request.isEnable === undefined || this.props.request.isEnable) {
                this.setState(prevState => ({
                    isOpen: !prevState.isOpen
                }));
            }
        } catch (e) {
            console.error(e);
        }
    };

    componentDidMount = async () => {
        this.setState({ isLoading: true }, this.fetch);
    };

    fetch = async () => {
        const { serverRequest, url, list } = this.props.request;
        if (serverRequest) {
            try {
                const response = await axios.get(url, {
                    headers: {
                        "X-CSRFToken": `${DesmyAuth.getCookie('csrftoken')}`,
                        "Authorization": `Token ${DesmyAuth.get(CommonState.ACCESS_TOKEN)}`,
                    },
                });
                const data = response.data;
                if (data.success) {
                    this.setState({ datalist: data.data, isLoading: false });
                } else {
                    this.handleAlert();
                }
            } catch (e) {
                this.handleAlert();
            }
        } else if (list) {
            this.setState({ datalist: list, isLoading: false });
        }
    };

    handleOnSelect = (data: { name: string }) => {
        this.setState({ isOpen: false }, () => {
            this.props.request.onSelect(data);
        });
    };

    handleClickAway = () => {
        this.setState({ isOpen: false });
    };

    handleAlert = (_message?: string) => {
        this.setState({ isLoading: false });
    };

    render() {
        return (
            <DesmyClickOutsideListener onClickOutside={this.handleClickAway}>
                <div className="inline-block text-left dropdown font-poppinsRegular dark:text-white">
                    <span className="rounded-md shadow-sm">
                        <div
                            className={`${this.props.className}`}
                            onClick={this.toggleDropdown}
                            aria-expanded={this.state.isOpen ? 'true' : 'false'}
                        >
                            {this.props.children}
                        </div>
                    </span>
                    <div
                        className={`${
                            this.state.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        } dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 z-20 mt-3`}
                    >
                        <div
                            className={`absolute flex flex-col w-72 min-h-24 -top-5 lg:min-w-96 lg:max-w-96 mt-2 py-3 max-h-96 overflow-auto origin-top-right bg-white dark:bg-darkPrimary  border border-[#e5e7eb] dark:border-[#1a1a1a] divide-y dark:divide-[#1a1a1a] divide-[#f3f4f6]  rounded-md shadow-sm outline-none ${this.props.dropdownClassName}`}
                        >
                            {this.state.isLoading ? (
                                <></>
                            ) : (
                                this.state.datalist.map((data, i) => (
                                    <div
                                        key={`piexmxx${i}`}
                                        className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-100  dark:hover:bg-white dark:hover:text-black transition ease-in-out duration-150"
                                        onClick={() => this.handleOnSelect(data)}
                                    >
                                        {data.name}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </DesmyClickOutsideListener>
        );
    }
}

export {DesmyPopupMenu};

/*
    <PopupMenu
        request={{
            url: "api url here",
            isEnable: Boolean,
            serverRequest: Boolean, // true or false
            onSelect: (e) => { // when data is selected

            }
        }}
    >
    </PopupMenu>
*/
