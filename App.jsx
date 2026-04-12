import { useState } from "react";
import "./index.css";
import Navbar            from "./components/Navbar";
import Home              from "./pages/Home";
import About             from "./pages/About";
import Work from "./pages/Work";
import Contact           from "./pages/Contact";
import Insights          from "./pages/Insights";
import CaseStudyBranding from "./pages/CaseStudyBranding";
import CaseStudyDM from "./pages/CaseStudyDM";
import Services from "./pages/Services";


export default function App() {
  const [page, setPage] = useState("Home");

  const onNav = (destination) => {
    setPage(destination);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (page) {
      case "Home":               return <Home              onNav={onNav} />;
      case "About Us":           return <About             onNav={onNav} />;
      case "Work":               return <Work              onNav={onNav} />;
      case "Services":           return <Services          onNav={onNav} />;
      case "Insights":           return <Insights          onNav={onNav} />;
      case "Contact":            return <Contact           onNav={onNav} />;
      case "CaseStudy-Branding": return <CaseStudyBranding onNav={onNav} />;
      case "CaseStudy-DM":       return <CaseStudyDM       onNav={onNav} />;
      default:                   return <Home              onNav={onNav} />;
    }
  };

  return (
    <>
      <Navbar currentPage={page} onNav={onNav} />
      <main>{renderPage()}</main>
    </>
  );
}