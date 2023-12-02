import { Route, Routes  } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";




function App() {
  return (
    <div>
      <Header />
      <Routes>
        
        <Route path='' element={< Home />} />
        <Route path="/auth" element={<Auth />} />

        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
