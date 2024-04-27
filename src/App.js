import { Navigate, Route, Routes  } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Result from "./components/Result/Result";
import SearchForm from "./components/SearchForm/SearchForm";
import { useState } from 'react';
import { AuthProvider } from './components/AuthContext/AuthContext'
import { AuthContext } from './components/AuthContext/AuthContext';
import React, { useContext } from 'react';




function App() {
  const isAuthenticated = localStorage.getItem('accessToken') !== null;
  console.log('isAuthenticated:', isAuthenticated);
  const [searchData, setSearchData] = useState(null);
  const handleResult = (searchData ) => {
    setSearchData(searchData);
  }
  
  return (
    <div>
      <AuthProvider>
      <Header />
      <Routes>
        <Route path='' element={< Home  />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/search" element={isAuthenticated ? <SearchForm onResult={handleResult} /> : <Navigate to="/auth" />} />
        <Route path="/result" element={<Result  searchData = {searchData}/>} />
      </Routes>
      <Footer />
      </AuthProvider>
    </div>
  );
}

function ResultPage({ searchData }) {
  if (!searchData) {
    return <Navigate to=" " />;
  }

  return <Result searchData={searchData} />;
}

export default App;
