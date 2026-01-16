
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/layout/Navbar";

// Pages
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import BlogList from "./pages/BlogList"; 
import BlogPost from "./pages/BlogPost";

// About Pages
import Identity from "./pages/About/Identity";
import WhyWeExist from "./pages/About/WhyWeExist";
import VisionMission from "./pages/About/VisionMission";
import Team from "./pages/About/Team";
import Governance from "./pages/About/Governance";

// What We Do Pages
import ThematicAreas from "./pages/WhatWeDo/ThematicAreas";
import ApproachMethodology from "./pages/WhatWeDo/ApproachMethodology";
import CoreCompetencies from "./pages/WhatWeDo/CoreCompetencies";
import SDGAlignment from "./pages/WhatWeDo/SDGAlignment";

// PROGRAMS
import GEP from "./pages/Programs/GEP";
import SLEP from "./pages/Programs/SLEP";
import ProjectUmtazi from "./pages/Programs/ProjectUmtazi";
import YoungClimateEntrepreneurs from "./pages/Programs/YoungClimateEntrepreneurs";
import AITransition from "./pages/Programs/AITransition";
import PolicyLab from "./pages/Programs/PolicyLab";
import GMIHub from "./pages/Programs/GMIHub";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
    
        <Route path="/about/identity" element={<Identity />} />
        <Route path="/about/why-we-exist" element={<WhyWeExist />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/governance" element={<Governance />} />

        
        <Route path="/WhatWeDo/thematic-areas" element={<ThematicAreas />} />
        <Route path="/WhatWeDo/approach-methodology" element={<ApproachMethodology />} />
        <Route path="/WhatWeDo/core-competencies" element={<CoreCompetencies />} />
        <Route path="/WhatWeDo/sdg-alignment" element={<SDGAlignment />} />

          {/* PROGRAMS */}
        <Route path="/programs/gep" element={<GEP />} />
        <Route path="/programs/slep" element={<SLEP />} />
        <Route path="/programs/umtazi" element={<ProjectUmtazi />} />
        <Route path="/programs/climate" element={<YoungClimateEntrepreneurs />} />
        <Route path="/programs/ai" element={<AITransition />} />
        <Route path="/programs/policy-lab" element={<PolicyLab />} />
        <Route path="/programs/hub" element={<GMIHub />} />
      </Routes>
    </Router>
  );
}