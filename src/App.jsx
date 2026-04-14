import { useState } from "react";
import "./index.css";
import Navbar            from "./components/Navbar.jsx";
import Home              from "./pages/Home.jsx";
import About             from "./pages/About.jsx";
import Work              from "./pages/Work.jsx";
import Contact           from "./pages/Contact.jsx";
import Insights          from "./pages/Insights.jsx";
import CaseStudyBranding from "./pages/CaseStudyBranding.jsx";
import CaseStudyDM       from "./pages/CaseStudyDM.jsx";
import Services          from "./pages/Services.jsx";


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
      <main style={{ minHeight: "100vh" }}>{renderPage()}</main>
    </>
  );
}