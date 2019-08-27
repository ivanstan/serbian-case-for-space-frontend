import React from 'react';
import "animate.css/animate.min.css";

import {HashRouter as Router, Route} from "react-router-dom";
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {About} from "./pages/about";
import {Home} from "./pages/home";
import {Projects} from "./pages/projects";
import {Team} from "./pages/team";
import {Contact} from "./pages/contact";
import {Partners} from "./pages/partners";
import {Blog} from "./pages/blog";

const App: React.FC = () => {
  return (
    <div className="flex-wrapper">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/team" exact component={Team} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/partners" exact component={Partners} />
        <Route path="/blog" exact component={Blog} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
