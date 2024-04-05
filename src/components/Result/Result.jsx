import Summary from "../Summary/Summary"
import Articles from "../Articles/Articles"
import ResultCarousel from "../ResultCarousel/ResultCarousel"
import { Navigate, useLocation } from 'react-router-dom';



export default function Result() {
  const location = useLocation();
  const searchData = location.state?.searchData;
  const secondSearchData = location.state?.secondSearchData;

  if (!searchData) {
    // Если searchData не определено, перенаправляем пользователя на страницу поиска
    return <Navigate to='/' />;
  }

  // Если searchData определено, продолжаем рендерить компонент Result
  return (

      <>
      <Summary searchData = {searchData}/> 
      <ResultCarousel searchData = {searchData}/>
      <Articles Data = {secondSearchData}/>
      </>
    )
  }