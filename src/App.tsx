import NavBar from "./components/NavBar";
import NavLink from "./components/NavLink";
import hero from "./assets/hero.png";
import logo from "./assets/logo.png";
import arrow from "./assets/arrow.svg";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "./components/SocialIcon";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ExperienceTimelineItem from "./components/ExperienceTimelineItem";
import { experience, skills, intro, socials } from "../portfolio";
import { Icon } from "@iconify-icon/react";
import Section from "./components/Section";
import TopButton from "./components/TopButton";

function App() {
  return (
    <div className="text-[#9d9d9d] ">
      <TopButton />
      <Section id="home">
        <NavBar logo={logo}>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="experience">Experience</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </NavBar>
        <div className="m-auto grid lg:grid-cols-2">
          <img
            src={hero}
            alt="hero"
            className="max-w-[18rem] sm:max-w-sm m-auto col-span-1 lg:order-1"
          />
          <div className="py-10 max-w-xl m-auto col-span-1 text-center lg:text-left">
            <h2 className="text-slate-800 font-medium tracking-[0.2em] uppercase ">
              {intro.heading}
            </h2>
            <h1 className="md:text-[2.75rem] text-[2rem] my-5 font-bold leading-snug text-slate-800 font-['montserrat'] tracking-wider">
              {intro.tagline}
            </h1>
            <p>{intro.description}</p>
            <div className="my-8 flex items-center justify-between max-w-[18rem] md:max-w-[30rem] m-auto lg:mx-0 lg:max-w-sm">
              <button className="py-2 px-5 rounded-full bg-blue-500 text-white font-['montserrat']">
                <a href="/resume.pdf">My Resume</a>
              </button>
              <SocialIcon Icon={FaGithub} link={socials.github} />
              <SocialIcon Icon={FaTwitter} link={socials.twitter} />
              <SocialIcon Icon={FaLinkedinIn} link={socials.linkedin} />
              <img src={arrow} alt="arrow" className="hidden md:inline" />
            </div>
          </div>
        </div>
      </Section>
      <Section id="skills" variant="white" padding="large" title="My Skills">
        <div className="text-center ">
          {skills.map(({ icon, name }) => (
            <div className="mx-3 mb-10 inline-flex flex-col items-center">
              <Icon icon={icon} key={name} className="text-5xl" />
              <span className="text-sm mt-4">{name}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section id="experience" padding="large" title="My Experience">
        <ExperienceTimeline>
          {experience.map((e, i) => (
            <ExperienceTimelineItem
              {...e}
              variant={i % 2 == 0 ? "gray" : "blue"}
            />
          ))}
        </ExperienceTimeline>
      </Section>
    </div>
  );
}

export default App;
