
import './SearchForm_form.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useNavigate } from 'react-router-dom';

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
    } = useForm({
        mode: 'onBlur',
    });

    
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const formatDateToString = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // добавляем ведущий ноль, если месяц < 10
        const day = String(date.getDate()).padStart(2, '0'); // добавляем ведущий ноль, если день < 10
        return `${year}-${month}-${day}`;
    };


    const handleStartDateChange = (date) => {
        const formattedDate = formatDateToString(date);
        setStartDate(formattedDate);
    };

    const handleEndDateChange = (date) => {
        const formattedDate = formatDateToString(date);
        setEndDate(formattedDate);
        
    };

    

    
    const onSubmit = async (data) => {
        console.log('startDate:', startDate);
        console.log('endDate:', endDate);
        try {
            const accessToken = localStorage.getItem('accessToken');      
            const headers = {
            'Authorization': `Bearer ${accessToken}`
        };
        

        console.log(headers);
        console.log('Do', data);
        
        
        // startDate = startDate;
        // endDate = endDate;


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
           
            console.log('Response:', response.data);
            reset(); // Очистка формы после успешной отправки
            onResult(response.data.data);
            navigate('/result', { state: { searchData: response.data.data } });
        } catch (error) {
            console.error('Error:', error);
            // Обработка ошибок
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
                                        required: 'is required',
                                    })}
                                    placeholder="10 цифр"
                                />
                            
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
                                        required: 'Введите корректные данные',
                                    })}
                                    placeholder="От 1 до 1000"
                                />
                            
                        </div>

                        <div className="searchform__form-date">
                            <label htmlFor='startDate'>
                                Диапазон поиска*
                            </label>
                            <div className="searchform__date-inputs">
                                <DatePicker
                                    {...register('startDate', {
                                        
                                    })}
                                    placeholderText="Дата начала"
                                    id="startDate"
                                    dateFormat="yyyy-MM-dd"
                                    selected={startDate}
                                    onChange={(date)=>{handleStartDateChange(date)} }
                                />
                                <DatePicker
                                    {...register('endDate', {
                                        
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



