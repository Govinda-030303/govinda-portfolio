import {  useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/mainZsection/MainSection";
import IntroPage from "./components/IntroPage";



const App = () => {

  const [showScreen, setShowScreen] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScreen(false);
    }, 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, []
  )

  return (

    <div className="">
      {
        showScreen ? <div className="">
          <IntroPage />
        </div> :

          <div className="p-3 overflow-hidden bg-linear-to-r form-blue-200 via-cyan-100 to-cyan-100/30">
            <Header />
            <MainSection />
            <Footer />
          </div>
      }

    </div>

  );
};


export default App;