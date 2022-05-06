import "./App.css";
import Navbar from "./components/Navbar";
import About from "./containers/About/About";
import BecomeVolunteer from "./containers/BecomeVolunteer/BecomeVolunteer";
import Donors from "./containers/Donors/Donors";
import Footer from "./containers/Footer/Footer";
import Hero from "./containers/Hero/Hero";
import Services from "./containers/Services/Services";
import UpcomingCause from "./containers/UpcomingCause/UpcomingCause";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Donors />
      <Services />
      <BecomeVolunteer />
      <Footer />
    </div>
  );
}

export default App;
