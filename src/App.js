import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyPic from "./images/mypic.jpg";
import Projects from "./projects";
import SimpleReactLightbox from "simple-react-lightbox";

class App extends Component {
  state = {};

  gitHub = () => {
    window.open("https://github.com/jmccaskey813");
  };
  email = () => {
    window.open("mailto:mccaskey316@gmail.com");
  };

  linkedin = () => {
    window.open("https://www.linkedin.com/in/jacob-mccaskey-29b259147/");
  };

  resume = () => {
    window.open(
      "https://drive.google.com/open?id=1ES2s5B9yDr2F-5a2WhP7__gREqzFVenV"
    );
  };

  render() {
    return (
      <div className="text-left">
        <div className=" top-full p-5 mb-3 bg-dark text-left font-weight-bold" />
        <img className=" photo" src={MyPic} alt="MyPicture" />
        <div className="space"></div>
        <div className="text-left p-3">
          <h1 className=" cursive text-danger"> Jacob McCaskey</h1>
          <span className="text-secondary">Software Developer</span>
          <div className="inline pb-2 pt-1">
            <button
              className="m-1 btn btn-primary"
              onClick={() => this.gitHub()}
              value="GitHub"
            >
              github
            </button>
            <button
              className="m-1 btn btn-primary"
              onClick={() => this.email()}
            >
              email
            </button>
            <button
              className="m-1 btn btn-primary"
              onClick={() => this.resume()}
            >
              resume
            </button>
            <button
              className="m-1 btn btn-primary"
              onClick={() => this.linkedin()}
            >
              linkedin
            </button>
          </div>
          <p className="container-sm left-align">
            I am a full stack web developer. The best part about programming is
            that I am never done learning. There is always something evolving,
            changing, and growing within our world and I love every moment of
            it. I am a self taught learner, and I know the journey has just
            begun. There are several projects I am working on, and all have been
            made publicy available on my GitHub. Please take a look and leave
            some feedback!
          </p>

          <p className="left-align container-sm">
            My strongest language is Javascript and I am familiar with React and
            Node. Most of my projects of recently are written in React, but I
            have some experience in other frameworks like Vue. I have used
            Firebase extensively on the backend for many projects, as well as
            mongoDB. I am a huge fan of git, npm, & webpack, and frequently use
            Bootstrap to style my pages. Dont be worried though, I can get down
            with CSS.
          </p>

          <p className="left-align container-sm">
            When I am not at my computer or with my beautiful girlfriend, the
            most beautiful woman in the world, I am usually thinking about
            problems that I haven't solved. To deal with that, I enjoy mountain
            biking, reading a lot of science fiction, traveling(with my
            beautiful girlfriend), and thinking about ways to better organize my
            living space. I try to spend most of my time coding though.
          </p>
        </div>
        <h3 className="pl-4 text-weight-bold">
          Some Projects I've Been Working On:
        </h3>
        <div className="container-sm mb-2">
          <SimpleReactLightbox>
            <Projects />
          </SimpleReactLightbox>
        </div>
      </div>
    );
  }
}

export default App;
