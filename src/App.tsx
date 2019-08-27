import React from 'react';
import "animate.css/animate.min.css";

import {HashRouter as Router, Route} from "react-router-dom";
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Home} from "./pages/home";

const App: React.FC = () => {
  return (
    <div className="flex-wrapper">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
