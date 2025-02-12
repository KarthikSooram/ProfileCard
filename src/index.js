import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const socialAcs = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sooram-karthik-b4089121a/",
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/u/SooramKarthik/",
  },
  {
    name: "GitHub",
    link: "https://github.com/KarthikSooram",
  },
];

const skills = [
  {
    skill: "HTML",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "CSS",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Node.js",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Express",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
  return <img src="images/pfp.jpg" alt="Sooram Karthik" className="avatar" />;
}

function Data() {
  return (
    <div>
      <p className="data">
        {" "}
        I'm a Full stack web developer and an upcoming intern at JP Morgan Chase
        & Co. I like watching movies, playing video games and cooking.{" "}
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
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
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
    <div className="skill" style={{ backgroundColor: props.color }}>
      <h3>
        {skillEmojis[props.skill]} {props.skill}
      </h3>
      <p>{props.level}</p>
    </div>
  );
}

function SocialsList() {
  return (
    <div className="socials-list">
      {socialAcs.map((social) => (
        <Socials name={social.name} link={social.link} />
      ))}
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
