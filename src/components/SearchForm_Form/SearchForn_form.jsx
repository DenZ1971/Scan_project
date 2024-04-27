
import './SearchForm_form.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useNavigate } from 'react-router-dom';
import { validateInn } from '../../InnValidation/InnValidation';

export default function SearchForm_form({onResult}) {

    const navigate = useNavigate();

    const handleResult = (searchData) => {
        onResult(searchData); 
    }
    const [errorMessage, setErrorMessage] = useState('');
    const {
        register,
        formState: { errors, },
        handleSubmit,
        reset,
        getValues,
        setValue,
    } = useForm({
        mode: 'onBlur',
    });

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const formatDateToString = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0'); 
        return `${year}-${month}-${day}`;
    };

    const handleStartDateChange = (date) => {
        const formattedDate = formatDateToString(date);
        setStartDate(formattedDate);
        setValue('startDate', date);
    };

    const handleEndDateChange = (date) => {
        const formattedDate = formatDateToString(date);
        setEndDate(formattedDate);
        setValue('endDate', date);
    };

    const validateStartDate = (value) => {
        const endDate = getValues('endDate');
        if (!value || !endDate) return true; 
        return value <= endDate || 'Дата начала не может быть позже даты окончания';
    };

    const validateEndDate = (value) => {
        const startDate = getValues('startDate');
        if (!value || !startDate) return true; 
        return value >= startDate || 'Дата окончания не может быть раньше даты начала';
    };

    const onSubmit = async (data) => {
        data.startDate = startDate;
        data.endDate = endDate;
        try {
            const accessToken = localStorage.getItem('accessToken');      
            const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        
        const response = await axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms', {
            
            issueDateInterval: {
                startDate: startDate,
                endDate: endDate,
            }, 
                searchContext: {
                    targetSearchEntitiesContext: {
                        targetSearchEntities: [
                            {
                                type: 'company',
                                sparkId: null,
                                entityId: null,
                                inn: data.inn,
                                maxFullness: true,
                                inBusinessNews: null,
                            },
                        ],
                        onlyMainRole: true,
                        tonality: data.tonality,
                        onlyWithRiskFactors: false,
                        riskFactors: {
                            and: [],
                            or: [],
                            not: [],
                        },
                        themes: {
                            and: [],
                            or: [],
                            not: [],
                        },
                    },
                    themesFilter: {
                        and: [],
                        or: [],
                        not: [],
                    },
                },
                searchArea: {
                    includedSources: [],
                    excludedSources: [],
                    includedSourceGroups: [],
                    excludedSourceGroups: [],
                },
                attributeFilters: {
                    excludeTechNews: true,
                    excludeAnnouncements: true,
                    excludeDigests: true,
                },
                similarMode: 'duplicates',
                limit: data.documentCount,
                sortType: 'sourceInfluence',
                sortDirectionType: 'desc',
                intervalType: 'month',
                histogramTypes: ['totalDocuments', 'riskFactors'],

            } ,{headers});
           
            const secondRequestData = {
                issueDateInterval: {
                    startDate: startDate,
                    endDate: endDate,
                }, 
                    searchContext: {
                        targetSearchEntitiesContext: {
                            targetSearchEntities: [
                                {
                                    type: 'company',
                                    sparkId: null,
                                    entityId: null,
                                    inn: data.inn,
                                    maxFullness: true,
                                    inBusinessNews: null,
                                },
                            ],
                            onlyMainRole: true,
                            tonality: data.tonality,
                            onlyWithRiskFactors: false,
                            riskFactors: {
                                and: [],
                                or: [],
                                not: [],
                            },
                            themes: {
                                and: [],
                                or: [],
                                not: [],
                            },
                        },
                        themesFilter: {
                            and: [],
                            or: [],
                            not: [],
                        },
                    },
                    searchArea: {
                        includedSources: [],
                        excludedSources: [],
                        includedSourceGroups: [],
                        excludedSourceGroups: [],
                    },
                    attributeFilters: {
                        excludeTechNews: true,
                        excludeAnnouncements: true,
                        excludeDigests: true,
                    },
                    similarMode: 'duplicates',
                    limit: data.documentCount,
                    sortType: 'sourceInfluence',
                    sortDirectionType: 'desc',
                    intervalType: 'month',
                    histogramTypes: ['totalDocuments', 'riskFactors'],
                } ;
                
            const secondResponse = await axios.post('https://gateway.scan-interfax.ru/api/v1/objectsearch', secondRequestData ,{headers});

            reset(); 
            onResult(response.data.data);
            console.log('onResult:', onResult);
            navigate('/result', { state: { searchData: response.data.data, secondSearchData: secondResponse.data } });
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Ошибка при отправке данных');
        }
    };

    return (
        <form className="searchform" onSubmit={handleSubmit(onSubmit)}>
            <div className="searchform__content"  >
                <div className="searchform__content-left" >
                    <div className="searchform__form">
                        <div className="searchform__form-docs">
                            <label for='inn'>
                                ИНН компании*
                                </label>
                                <input
                                    id='inn'
                                    {...register('inn', {
                                        required: 'Поле обязательно к заполнению',
                                        validate: (value) => validateInn(value),
                                    })}
                                    placeholder="10 цифр"
                                />
                            {errors.inn && <p className="error">{errors.inn.message}</p>}
                        </div>
                        <div className="searchform__form-docs">
                            <label htmlFor='tonality'>
                                Тональность
                            </label>
                                <select
                                    id="tonality"
                                    {...register('tonality', {
                                        required: 'Введите корректные данные',
                                    })}
                                >
                                    <option value="any">любая</option>
                                    <option value="positive">позитивная</option>
                                    <option value="negative">негативная</option>
                                </select>
                        </div>
                        <div className="searchform__form-docs">
                            <label htmlFor='documentCount'>
                                Количество документов в выдаче*
                            </label>
                                <input
                                    id="documentCount"
                                    {...register('documentCount', {
                                        required: 'Поле обязательно к заполнению',
                                        pattern: {
                                            value: /^(?:[1-9]\d{0,2}|1000)$/,
                                            message: 'Введите число от 1 до 1000',
                                        },
                                    })}
                                    placeholder="От 1 до 1000"
                                />
                            {errors.documentCount && <p className="error">{errors.documentCount.message}</p>}
                        </div>
                        <div className="searchform__form-date">
                            <label htmlFor='startDate'>
                                Диапазон поиска*
                            </label>
                            <div className="searchform__date-inputs">
                                <DatePicker
                                    {...register('startDate', {
                                        validate: validateStartDate,
                                    })}
                                    placeholderText="Дата начала"
                                    id="startDate"
                                    dateFormat="yyyy-MM-dd"
                                    selected={startDate}
                                    onChange={(date)=>{handleStartDateChange(date)} }
                                />
                                <DatePicker
                                    {...register('endDate', {
                                        validate: validateEndDate
                                    })}
                                    placeholderText="Дата конца"
                                    id="endDate"
                                    dateFormat="yyyy-MM-dd"
                                    selected={endDate}
                                    onChange={(date)=>{handleEndDateChange(date)} }
                                />
                            </div>
                        </div>  
                    </div>
                    <div>{errors.startDate && <p className="error-date">{errors.startDate.message}</p>}</div>
                    <input className="button-mobile" type="submit" value="Поиск"  />
                    <div className="searchform__text-mobile">* Обязательные к заполнению поля</div>  
                </div>
                <div className="searchform__form" >
                    <div className="searchform__content-right" >
                        <div className="searchform__checkbox">
                            <input type="checkbox" {...register('maxCompleteness')} id='maxCompleteness'/>
                            <label htmlFor="maxCompleteness">Признак максимальной полноты</label>
                        </div>

                        <div className="searchform__checkbox">
                            <input type="checkbox" {...register('mentionsInBusinessContext')} id='mentionsInBusinessContext'/>
                            <label htmlFor="mentionsInBusinessContext">Упоминания в бизнес-контексте</label>
                        </div>

                        <div className="searchform__checkbox">
                            <input type="checkbox" {...register('mainRoleInPublication')} id='mainRoleInPublication'/>
                            <label htmlFor="mainRoleInPublication">Главная роль в публикации</label>
                        </div>

                        <div className="searchform__checkbox">
                            <input type="checkbox" {...register('publicationsWithRiskFactors')} id='publicationsWithRiskFactors'/>
                            <label htmlFor="publicationsWithRiskFactors">Публикации только с риск-факторами</label>
                        </div>

                        <div className="searchform__checkbox">
                            <input type="checkbox" {...register('includeTechnicalMarketNews')} id='includeTechnicalMarketNews'/>
                            <label htmlFor="includeTechnicalMarketNews">Включать технические новости рынков</label>
                        </div>

                        <div className="searchform__checkbox">
                            <input type="checkbox" {...register('includeAnnouncementsAndCalendars')} id='includeAnnouncementsAndCalendars'/>
                            <label htmlFor="includeAnnouncementsAndCalendars">Включать анонсы и календари</label>
                        </div>

                        <div className="searchform__checkbox">
                            <input type="checkbox" {...register('includeNewsDigests')} id='includeNewsDigests'/>
                            <label htmlFor="includeNewsDigests">Включать сводки новостей</label>
                        </div>

                        <input className="button" type="submit" value="Поиск"  />
                        <div className="searchform__text">* Обязательные к заполнению поля</div>
                    </div>
                </div>
            </div>
        </form>
    );
}
