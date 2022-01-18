import React, { Component } from 'react';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Portfolio from './PortfolioComponent';
import AlbumContents from './AlbumContentsComponent';
import { ALBUMS } from '../shared/albums';
import { CONTENTS } from '../shared/contents';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: ALBUMS,
      contents: CONTENTS
    }
  }

  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    };

    const AlbumPhotos = ({match}) => {
      return (
          <AlbumContents
              album={this.state.albums.filter(album => album.id === +match.params.albumId)[0]}
              contents={this.state.contents.filter(content => content.albumid === +match.params.albumId)}
          />
      );
    };

    return (
      <div>
        
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/portfolio' render={() => <Portfolio albums={this.state.albums} />} />
          <Route path='/portfolio/:albumId' component={AlbumPhotos} />
          <Route path='/aboutus' render={() => <About />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
