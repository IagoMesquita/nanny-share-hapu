import "./App.css";
//components
import HeroSection from "./components/HeroSection";
import NotificationAvailability from "./components/NotificationAvailability";
import IntroSection from "./components/IntroSection";
import Footer from "./components/Footer/inex";
import ShareSection from "./components/ShareSection";
import PaymentMethodsSection from "./components/PaymentMethodsSection";
import BillingHistorySection from "./components/BillingHistorySection";
import NannyDiarySection from "./components/NannyDiarySection";

function App() {
  return (
    <>
      <HeroSection />
      <NotificationAvailability />
      <main>
        <IntroSection/>
        <ShareSection/>
        <PaymentMethodsSection/>
        <BillingHistorySection/>
        <NannyDiarySection/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
