import './SearchForm.css'
import searchImage_1 from '../img/image 1.png';
import searchImage_2 from '../img/image 2.png';
import searchImage_3 from '../img/image 3.png';
import SearchForm_form from '../SearchForm_Form/SearchForn_form';
import { useState } from 'react';
import Result from '../Result/Result'
import { Link } from 'react-router-dom';




export default function SearchForm({onResult}) {
    const handleResult = (event ) => {
        onResult(event.target.searchData);
    }
    
    const [searchData, setSearchData] = useState('');
    const handleSearchResult = (searchData) => {
        setSearchData(searchData);
        console.log('Search result in SearchForm:', searchData);
      };
  return (
    <div className="search">
        <div className="container">
            <div className="search__content">
                <div className="search__text">
                    <div className="search__title">Найдите необходимые данные в пару кликов.</div>
                    <div className="search__desc">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</div>
                   
                </div>
                    <div className="search__image">
                        <div className="search__image-wrapper_1">
                            <img src={searchImage_2} alt="Img"></img>
                        </div>
                        <div className="search__image-wrapper_2">
                            <img src={searchImage_3} alt="Img"></img>
                        </div>
                      
                    </div>
            </div>    
            <div className='search__form-content'>
            <div className="search__form-wrapper">
                        <SearchForm_form onResult={handleSearchResult}/>
                        {/* {isDataLoaded && (
                            <Link to={{ pathname: "/result", state: { searchData } }}>
                                Go to Result
                            </Link>
                        )} */}
                        
                        
                    </div>               
                     
                    <div className="search__image-bottom">
                        <div className="search__image-wrapper_3">
                        <img src={searchImage_1} alt="Img"></img>
                        </div>
                    </div>
            </div>
        </div>
        
        
    </div>
  );
};

