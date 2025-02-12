import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
        <SocialsList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="pfp.jpg" alt="Sooram Karthik" className="avatar" />;
}

function Data() {
  return (
    <div>
      <p className="data">
        {" "}
        Full stack web developer and an upcoming intern at JP Morgan Chase & Co.
        I like watching movies and cooking.{" "}
      </p>
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <h1>Sooram Karthik</h1>
      <Data />
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" style={{ backgroundColor: "red" }} />
      <Skill skill="CSS" style={{ backgroundColor: "blue" }} />
      <Skill skill="JavaScript" style={{ backgroundColor: "yellow" }} />
      <Skill skill="React" style={{ backgroundColor: "purple" }} />
      <Skill skill="Node.js" style={{ backgroundColor: "green" }} />
      <Skill skill="Express" style={{ backgroundColor: "orange" }} />
      <Skill skill="MongoDB" style={{ backgroundColor: "grey" }} />
    </div>
  );
}
//give emoji to each skill
const skillEmojis = {
  HTML: "🌐",
  CSS: "🎨",
  JavaScript: "💻",
  React: "⚛️",
  "Node.js": "🟢",
  Express: "🚀",
  MongoDB: "🍃",
};

function Skill(props) {
  return (
    <div className="skill" style={props.style}>
      <h3>
        {skillEmojis[props.skill]} {props.skill}
      </h3>
    </div>
  );
}

function SocialsList() {
  return (
    <div className="socials-list">
      <Socials
        name="LinkedIn"
        link="https://www.linkedin.com/in/sooram-karthik-b4089121a/"
      />
      <Socials name="Leetcode" link="https://leetcode.com/u/SooramKarthik/" />
      <Socials name="GitHub" link="https://github.com/KarthikSooram" />
    </div>
  );
}

function Socials(props) {
  return (
    <div className="socials">
      <h3>
        <a href={props.link}>{props.name}</a>
      </h3>
    </div>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
