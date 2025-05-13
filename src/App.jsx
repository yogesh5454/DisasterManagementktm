import "./App.css";
import Details from "./Components/Details/Details";
import Disasterdata from "./Components/Disasterdata/Disasterdata";
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
      </div>
    </>
  );
}

export default App;
