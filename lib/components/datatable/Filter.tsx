import { Component } from 'react';
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

interface CreateState {
    hasRequest: boolean;
    isLoading: boolean;
    input: {
        [key: string]: any;
    };
    filters: { [key: string]: Array<any> };
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
            const updatedInput: { [key: string]: any } = { ...this.state.input };
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
                    "Authorization": `Token ${DesmyAuth.get(CommonState.ACCESS_TOKEN)}`
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
        const filterEntries = Object.entries(filters);

        let minDate: Date | undefined;
        let maxDate: Date | undefined;

        return (
            <DesmyModalContainer
                data={{ title: `Filter` }}
                containerClassName={`bg-white dark:bg-darkBackground border-[1px] border-gray-100 dark:border-darkDialogBackground`}
                className="add-event-multi-modal max-w-lg p-2"
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
                        filterEntries.map(([key, dataList], index) => {
                            if (!dataList || dataList.length === 0) return null;

                            // For date_filters, currentSelection is the id of the selected option (e.g. 'date', 'today')
                            // For others, use id or value
                            let currentSelection;
                            if (key === "date_filters") {
                                currentSelection = input[key]?.id || input[key];
                            } else {
                                currentSelection = input[key]?.id || input[key]?.value || input[key];
                            }

                            let showDatePicker = false;
                            if (key === "date_filters" && input[key] !== undefined) {
                                const selectedFilter = input[key];
                                showDatePicker = selectedFilter?.id === "date" || selectedFilter?.value?.key === "date";

                                const data = selectedFilter?.value || {};
                                minDate = data.minDate ? parseISO(data.minDate) : undefined;
                                maxDate = data.maxDate ? parseISO(data.maxDate) : undefined;
                            }

                            return (
                                <div key={index} className="flex flex-col space-y-4">
                                    <DesmyDropdown
                                        defaultValue={currentSelection}
                                        placeholder={DesmyCommons.toSentenceCase(String(key.replace('_', ' ').toUpperCase()))}
                                        data={dataList.map((item: any) => ({
                                            id: item.id || item,
                                            name: item.name || item,
                                            value: item.id || item,
                                            label: item.name || item,
                                        }))}
                                        handleChange={(data: any) => {
                                            if (!DesmyCommons.isEmptyOrNull(data)) {
                                                this.setState(prevState => {
                                                    const newInput = {
                                                        ...prevState.input,
                                                        [key]: data,
                                                    };
                                                    if (key === "date_filters" && data?.id !== "date") {
                                                        delete newInput['date'];
                                                    }
                                                    return { input: newInput };
                                                });
                                            }
                                        }}
                                    />

                                    {showDatePicker && (
                                        <div className='flex w-full mt-3'>
                                            <DesmyDatePicker
                                                defaultValue={input['date']?.value || { startDate: undefined, endDate: undefined }}
                                                label={`Select Date Range`}
                                                minDate={minDate}
                                                maxDate={maxDate}
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
                                                            input: {
                                                                ...prevState.input,
                                                                ['date']: selectedValue
                                                            }
                                                        }));
                                                    }
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    )}

                    <div className='flex justify-end mt-5'>
                        <DesmyButton
                            onClick={this.handleOnSubmit}
                            hasRequest={this.state.hasRequest}
                            label={`Save`}
                        />
                    </div>
                </div>
            </DesmyModalContainer>
        );
    }
}

export default DesmyFilter;
