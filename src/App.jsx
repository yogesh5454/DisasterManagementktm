import "./App.css";
import Action from "./Components/Action/Action";
import Details from "./Components/Details/Details";
import Disasterdata from "./Components/Disasterdata/Disasterdata";
import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
import Head from "./Components/Head/Head";
import Marquee from "./Components/Head/Marquee";
import Navbar from "./Components/Navbar/Navbar";
import Newsdata from "./Components/News/Newsdata";
import Reports from "./Components/Reports/Reports";
function App() {
  return (
    <>
      <div>
        <Head />
        <Marquee />
        <Navbar/>
        <Details/>
        <Reports/>
        <Disasterdata/>
        <Newsdata/>
        <Action/>
        <Events/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
