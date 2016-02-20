"use-strict";

require("./node_modules/bootstrap/dist/css/bootstrap.min.css");
require('font-awesome/css/font-awesome.css');
require("./style.scss");

import React from 'react';
import ReactDOM from 'react-dom';

export class Contain extends React.Component {
  render () {
    return (
      <div className={"contain " + this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <Contain className="footerContain">
          <div className="footerInfo">&copy; 2016 Dan Cormier</div>
          <Social/>
        </Contain>
      </footer>
    );
  }
}

export class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <Contain className="headerContain">
          <h1 className="headerHeading">Dan Cormier</h1>
          <h2 className="headerSubheading">Front End Developer and UI Designer</h2>
          <Nav/>
        </Contain>
      </header>
    );
  }
}

export class Item extends React.Component {
  render () {
    return (
      <div className={"item "+this.props.className}>
        <Contain className="itemContain">
          <div className="itemImg">
            <img className="itemImgFile" src={this.props.img} alt={"Image of "+this.props.heading}/>
          </div>
          <div className="itemDetails">
            <h4 className="itemHeading">{this.props.heading}</h4>
            <p className="itemDescription">{this.props.description}</p>
            {this.props.btns
              ? <div className="itemBtns">
                  {
                    this.props.btns.map(function(btn, i) {
                        return (
                          <a className="itemBtn btn btn-default" href={btn.url} key={i} role="button" target="_blank">
                            {btn.label}
                          </a>
                        )
                      }
                    )
                  }
                </div>
              : <span/>
            }
          </div>
        </Contain>
      </div>
    );
  }
}

export class Nav extends React.Component {
  render () {
    var links = [
      {
        href: "#about",
        label: "About Me"
      }, {
        href: "#portfolio",
        label: "Portfolio"
      }, {
        href: "https://docs.google.com/document/d/1XcjhIYcCvxCqTJQaYUWsokPwOX4lrHoD9FEq519urXM/edit?usp=sharing",
        label: "Resume",
        blank: true
      }
    ]
    return (
      <nav className="nav">
        {links.map((link) => {
          return <a className="navLink" href={link.href} target={link.blank ? "_blank" : ""}>{link.label}</a>
        } )}
      </nav>
    );
  }
}

export class Section extends React.Component {
  render () {
    return (
      <section className={"section " + this.props.className} id={this.props.id}>
        {this.props.heading
          ? <h3 className="sectionHeading">{this.props.heading}</h3>
          : <span/>
        }
        {this.props.children}
      </section>
    );
  }
}

export class Social extends React.Component {
  render () {
    var links = [
      {
        icon: "github",
        href: "http://github.com/dancormier"
      }, {
        icon: "stack-overflow",
        href: "http://stackoverflow.com/users/652353/dan-cormier"
      }, {
        icon: "twitter",
        href: "http://twitter.com/dancormier"
      }, {
        icon: "facebook-square",
        href: "http://facebook.com/dancormier"
      }
    ]
    return (
      <div className="social">
        {links.map((link) => {
          return (
            <a className="socialLink" href={link.href} target="_blank">
              <i className={"socialIcon fa fa-"+link.icon}/>
            </a>
          )
        } )}
      </div>
    );
  }
}

export class App extends React.Component {
  render () {
    return (
      <div className="wrap">
        <Header/>
        <div className="main">
          <Contain className="mainContain">
            <Section
              className="about"
              id="about"
              heading="About Me">
              <p>Currently, I’m the a Frontend Developer and UI Designer at <a href="http://redgage.com/landing">RedGage</a>, where I’ve coded and designed interfaces for web, iOS, and Android.</p>
              <p>I’m also the creator of <a href="http://github.com/dancormier/react-native-swipeout">Swipeout for React Native</a>. It’s a component that allows iOS-style swipable elements that move to reveal buttons. It has been written about, used by large companies, and contributed to by many in the React Native open-source community.</p>
              <p>I’ve gone from designing UIs and dabbling with HTML, CSS and jQuery to creating with ES6 JavaScript, React, React Native, Sass, Less, Cordova/PhoneGap. I use Git, Atom, Terminal, Sketch, and PhotoShop  on a daily basis. I even have some experience with Angular, Ruby, Objective-C, and Java.</p>
            </Section>
            <Section
              className="portfolio"
              id="portfolio">
              <Item
                className="itemRedGage reverse"
                heading="RedGage"
                description="For RedGage, I've coded and designed interfaces for web, iOS, and Android in a distributed team using advanced development and coding techniques. In my time at RedGage, I've managed all phases of website and app creation from conception to release."
                btns={[
                  { label: "iOS", url: "https://itunes.apple.com/mx/app/redgage/id566684073" },
                  { label: "Android", url: "https://play.google.com/store/apps/details?id=com.redgage.RedGage" },
                  { label: "Desktop", url: "http://redgage.com/landing" }
                ]}
                img={require("./img/redgage.png")}/>
              <Item
                className="itemSwipeout"
                heading="React Native Swipeout"
                description="I created this React Native component used in iOS and Android apps which adds “swipeout” buttons that revealed from behind a component. It is one of the most widely-included components for React Native apps and an open-source contribution I'm proud of."
                btns={[
                  { label: "Swipeout on GitHub", url: "http://github.com/dancormier/react-native-swipeout" }
                ]}
                img={require("./img/swipeout.png")}/>
              <Item
                className="itemMasshollow reverse"
                heading="Mass Hollow"
                description="For Mass Hollow, I designed and created this responsive, single-page site for musician Mass Hollow. Built using React, WebPack, and Sass."
                btns={[
                  { label: "masshollow.com", url: "http://masshollow.com" },
                  { label: "GitHub repo", url: "https://github.com/dancormier/react-webpack-babel/tree/masshollow" }
                ]}
                img={require("./img/mass-hollow.png")}/>
            </Section>
          </Contain>
          <Footer/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector("#myApp"));
