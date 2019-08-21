import React, { useContext } from 'react';
import { Route, Switch, __RouterContext, Redirect } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, display: 'none', transition: 'all 0.3s linear' },
    enter: { opacity: 1, display: 'block' },
    leave: { opacity: 0, display: 'none' },
  });
  return (
    <LanguageProvider>
      <div className='App'>
        <Navbar />
        {transitions.map(({ item, props, key }) => {
          return (
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Route exact path='/' component={Home} />
                <Route exact path='/resume' component={Resume} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/contact' component={Contact} />
                <Redirect from='*' exact to='/' />
              </Switch>
            </animated.div>
          );
        })}
      </div>
    </LanguageProvider>
  );
};

export default App;
