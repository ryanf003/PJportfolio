import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Portfolio from './PortfolioComponent';
import { ALBUMS } from '../shared/albums';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: ALBUMS,
    }
  }

  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    };

    return (
      <div>
        
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/portfolio' render={() => <Portfolio albums={this.state.albums} />} />
          <Route path='/aboutus' render={() => <About />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
