import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/mainZsection/MainSection";



const App = () => {
  return (
    <div className="p-3 overflow-hidden ">
      <Header/>
      <MainSection/>
      <Footer/>
    </div>
  );
};


export default App;