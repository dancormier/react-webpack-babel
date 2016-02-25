"use-strict";

require("./node_modules/bootstrap/dist/css/bootstrap.min.css");
require('font-awesome/css/font-awesome.css');
require("./style.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';

var {
  albums,
  navLinks,
  navLinksMobile,
  social,
  videos
} = require('./data.js');

var isMobile = typeof window.orientation !== 'undefined'

var Albums = React.createClass({
  getInitialState: function() {
    return {
      ready: [false, false, false]
    }
  },
  componentDidMount: function() {
    var self = this;
    albums.map((album, i) => {
      document.getElementById("album"+i).onload = function() {
        var ready = self.state.ready;
        ready[i] = true;
        self.setState({ ready: ready });
      }
    });
  },
  render () {
    var self = this;
    return (
      <Section className="albums">
        {albums.map((album, i) => {
          var url = "https://bandcamp.com/EmbeddedPlayer/album=" + album.id +  "/size=large/bgcol=212225/linkcol=ffffff/transparent=true/";
          var ready = self.state.ready[i];
          return (
            <span key={i} className={"album album"+(ready ? "Ready" : "Loading")}>
              <iframe id={"album"+i} className="albumIframe" src={url} seamless />
              <div className="albumIcon">
                <i className="icon fa fa-circle-o-notch fa-spin"></i>
              </div>
            </span>
          )
        } )}
      </Section>
    );
  }
});


export class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <Social/>
        <div className="footerInfo">&copy; 2016 Mass Hollow</div>
      </footer>
    );
  }
}

export class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <h1 className="headerHeading">Mass Hollow</h1>
        <Nav {...this.props}/>
        <Footer/>
      </header>
    );
  }
}

var Nav = React.createClass({
  active : function(name) {
    this.props.callback(name);
  },
  render () {
    var self = this;
    var links = !isMobile ? navLinks : navLinksMobile;
    return (
      <nav className="nav">
        {links.map((link, i) => {
          var active = self.props.active === link.name ? " active" : ""
          return (
            <a
              key={i}
              href="#"
              className={"navLink" + active}
              onClick={() => self.active(link.name)}
            >
              {link.label}
            </a>
          )
        } )}
      </nav>
    );
  }
});

export class Section extends React.Component {
  render () {
    return (
      <div className={"section "+this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export class Social extends React.Component {
  render () {
    return (
      <div className="social">
        {social.map((link, i) => {
          return (
            <a key={i} className="socialLink" href={link.href} target="_blank">{ link.text }</a>
          )
        } )}
      </div>
    );
  }
}

var Videos = React.createClass({
  getInitialState: function() {
    var video = videos[0];
    return {
      ready: false,
      video: video.name,
      videoAlbum: '',
      videoId: video.id,
      videoTitle: video.title,
      videoOpts: null,
      width: 0
    }
  },
  componentDidMount: function() {
    var self = this;
    setTimeout(() => {
      self.setState({
        ready: true,
        videoOpts: {
          height: Math.abs(self.refs.videosFeature.getBoundingClientRect().height),
          width: Math.abs(self.refs.videosFeature.getBoundingClientRect().width),
          playerVars: {
            autoplay: 1
          }
        }
      })
    }, 1000)
  },
  active: function(video) {
    this.setState({
      video: video.name,
      videoId: video.id,
      videoTitle: video.title,
      videoAlbum: video.album
    });
  },
  render () {
    var self = this;
    let { ready, videoOpts } = this.state;
    var featureDetails = [
      {
        heading: "Now Playing",
        text: this.state.videoTitle,
        url: 'https://www.youtube.com/watch?v='+this.state.videoId
      }, {
        heading: "Off the album",
        text: this.state.videoAlbum,
        url: 'https://masshollow.bandcamp.com/album/'+this.state.videoAlbum
      }
    ];
    return (
      <Section className="videos">
        {!isMobile ?
          <div className="videosFeature">
            <div className="videosVideo" ref="videosFeature">
              {ready && videoOpts ?
                <YouTube videoId={this.state.videoId} opts={this.state.videoOpts} />
              : <span/>
              }
            </div>
            <div className="videosDetails">
              {featureDetails.map((detail, i) => {
                return detail.text ? (
                  <div key={i} className="videosDetail">
                    <div className="videosDetailHeading">{detail.heading}</div>
                    <a className="videosDetailText" href={detail.url} target="_blank">{detail.text}</a>
                  </div>
                ) : ""
              } )}
            </div>
          </div>
        : <span/>
        }
        <div className="videosList">
          {videos.map((video, i) => {
            var bgImg = {backgroundImage: "url("+video.img+")"};
            var active = self.state.video === video.name ? " active" : "";
            var href = !isMobile ? "#" : "https://www.youtube.com/watch?v="+video.id;
            var target = !isMobile ? "_self" : "_blank";
            var hide = !isMobile && i > 5;

            return hide ? false : (
              <a key={i} className={"video" + active} href={href} target={target}>
                <div
                  className="videoLink"
                  style={bgImg}
                  onClick={() => self.active(video)}
                >
                  <div className="videoText">
                    { video.title }
                  </div>
                </div>
              </a>
            )
          } )}
        </div>
      </Section>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      active: 'videos',
      ready: false,
    }
  },
  componentDidMount: function() {
    this.setState({
      ready: true,
    });
  },
  active: function(active) {
    this.setState({ active: active });
  },
  render () {
    let { active } = this.state;
    return (
      <div className="wrap">
        <Header active={active} callback={this.active}/>
        <div className="main">
          { active === "videos" ? <Videos /> : <span/> }
          { active === "albums" ? <Albums /> : <span/> }
          { active === "social" ? <Social /> : <span/> }
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <App/>, document.querySelector("#myApp"));
