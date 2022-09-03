import "./App.css";
import Navbar from "./components/organism/Navbar/Navbar";
import Card from "./components/pages/Card/Card";
import Footer from "./components/organism/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
