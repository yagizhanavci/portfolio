import React, { Component,useContext } from 'react';
import { Route,Switch,__RouterContext } from 'react-router-dom';
import { useTransition,animated } from 'react-spring';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';


const App = () => {

    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname,{
      from:{opacity:0,transform:"translate(100%,0)"},
      enter:{opacity:1,transform:"translate(0%,0)"},
      leave:{opacity:0,transform:"translate(-50%,0)"}
    })
    return (
        <div className="App">
        <Navbar/>
        {transitions.map(({item,props,key}) => {
          return(
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Route exact path="/" component={Home}/>
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
              </Switch>  
            </animated.div>
          )
        })}
              
        </div>
    );
  }

export default App;
