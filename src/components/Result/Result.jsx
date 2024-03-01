import Summary from "../Summary/Summary"
import Articles from "../Articles/Articles"
import ResultCarousel from "../ResultCarousel/ResultCarousel"
import { useLocation } from 'react-router-dom';





export default function Result() {
  const location = useLocation();
  const searchData = location.state?.searchData;
  console.log('Search data in Result:', searchData);
    return (
      <>
      <Summary /> 
      <ResultCarousel searchData = {searchData}/>
      <Articles />
      </>
    )
  }