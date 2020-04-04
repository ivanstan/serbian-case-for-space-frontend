import React from 'react'
import 'animate.css/animate.min.css'
import { HashRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Partners from './pages/Partners'
import Blog from './pages/Blog'
import Home from './pages/Home'
import { observer } from 'mobx-react'
import { store } from './stores/Store'
import { I18n } from 'react-polyglot'
import { Helmet } from 'react-helmet'
import ProjectDetail from './pages/ProjectDetail'

@observer
export default class App extends React.Component<any, any> {

  render(): any {
    return (
      <div className="flex-wrapper">
        <Helmet>
          <meta charSet="utf-8"/>
          {/*<title>My Title</title>*/}
          {/*<link rel="canonical" href="http://mysite.com/example"/>*/}
        </Helmet>

        <I18n locale={store.locale} messages={store.messages} allowMissing={true}>
          <Router>
            <Header/>
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
            >
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route path="/projects" exact component={Projects}/>
              <Route path="/team" exact component={Team}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/partners" exact component={Partners}/>
              <Route path="/blog" exact component={Blog}/>
              <Route path="/project/:id" exact component={ProjectDetail}/>
            </AnimatedSwitch>
            <Footer/>
          </Router>
        </I18n>
      </div>
    )
  }
}
