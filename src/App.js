import { Route, Routes  } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Result from "./components/Result/Result";
import SearchForm from "./components/SearchForm/SearchForm";
import { useState } from 'react';




function App() {
  const [searchData, setSearchData] = useState(null);
  const handleResult = (searchData ) => {
    setSearchData(searchData);
    console.log('Search data in App:', searchData);
    
  }
  
  

  

  return (
    <div>
      <Header />
      <Routes>
        
        <Route path='' element={< Home  />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/search" element={<SearchForm onResult={handleResult}/>} />
        <Route path="/result" element={<Result  searchData = {searchData}/>} />

        
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
