import { Component } from 'react';
import { format, parseISO, isValid } from 'date-fns';
import { DesmyModalContainer } from '../modalcontainer/DesmyModalContainer';
import DesmyAuth from '../apis/DesmyAuth';
import { DesmyState as CommonState } from '../apis/DesmyState';
import { DesmyDropdown } from '../dropdown/DesmyDropdown';
import { DesmyDropdownItem } from '../apis/SharedProps';
import DesmyCommons from '../apis/DesmyCommons';
import { DesmyButton } from '../button/DesmyButton';
import { DesmyDatePicker } from '../datepicker/DesmyDatePicker';

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
            console.log("content=",this.props.content," updatedInput=",updatedInput)
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
                this.setState({ filters: data.data, isLoading: false });
            } else {
            }
        } catch (_) {
        } finally {
            this.setState({ hasRequest: false });
        }
    };

    handleOnSubmit = async () => {
        const { input } = this.state;
        this.props.onSuccess?.(input);
    };

    render() {
        const { filters, input, isLoading } = this.state;
        const filterEntries = Object.entries(filters);

        let startDate: Date | undefined;
        let endDate: Date | undefined;
        const dateFilter = filterEntries.find(([key]) => key.toLowerCase().includes('date'));

        if (dateFilter) {
            const [, dataList] = dateFilter;
            if (dataList?.[0]?.startDate && dataList?.[0]?.endDate) {
                startDate = new Date(dataList[0].startDate);
                endDate = new Date(dataList[0].endDate);
            }
        }
        return (
            <>
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
                                    {Array.apply(0, Array(3)).map((x, i) => (
                                        <div key={i} className={`flex ${i == 0 ? `w-4/5` : i == 1 ? `w-3/5` : `w-2/5`} rounded-full h-4 bg-gray-300 dark:bg-darkPrimaryBorderLight`}></div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            filterEntries.map(([key, dataList], index) => {
                                if (dataList && dataList.length > 0) {
                                    const isDateField = key.toLowerCase().includes('date');
                                    if (isDateField) {
                                        return (
                                            <DesmyDatePicker
                                                key={index}
                                                defaultValue={input[key]?.value}
                                                label={DesmyCommons.toSentenceCase(String(key.replace('_', ' ').toUpperCase()))}
                                                minDate={startDate}
                                                maxDate={endDate}
                                                displayFormat="MMMM dd, yyyy"
                                                useRange={true}
                                                withTime={true}
                                                onSelected={(dates: { startDate?: string; endDate?: string }) => {
                                                    const { startDate, endDate } = dates;
                                                    if (startDate && endDate) {
                                                        const selectedValue = {
                                                            id: startDate,
                                                            name: `${isValid(parseISO(startDate)) ? format(parseISO(startDate), 'MMMM dd, yyyy hh:mm a') : ''} - ${isValid(parseISO(endDate)) ? format(parseISO(endDate), 'MMMM dd, yyyy hh:mm a') : ''}`,
                                                            value: { startDate, endDate },
                                                            label: "Date"
                                                        };
                                                        this.setState(prevState => ({
                                                            input: {
                                                                ...prevState.input,
                                                                [key]: selectedValue
                                                            }
                                                        }));
                                                    }
                                                }}
                                            />
                                        );
                                    } else {
                                        return (
                                            <DesmyDropdown
                                                key={index}
                                                defaultValue={input[key]?.id} 
                                                placeholder={DesmyCommons.toSentenceCase(String(key.replace('_', ' ').toUpperCase()))} 
                                                data={dataList.map((item: DesmyDropdownItem) => ({
                                                    id: item.id,
                                                    name: item.name,
                                                    value: item.id || item, 
                                                    label: item.name || item, 
                                                }))}
                                                handleChange={(data: DesmyDropdownItem | DesmyDropdownItem[]) =>
                                                    (!DesmyCommons.isEmptyOrNull(data) && this.setState(prevState => ({
                                                        input: { 
                                                            ...prevState.input, 
                                                            [key]: Array.isArray(data) ? data : data
                                                        }
                                                    })))
                                                }
                                            />
                                        );
                                    }
                                }
                                return null;
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
            </>
        );
    }
}

export default DesmyFilter;
