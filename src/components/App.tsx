import NavBar from "./NavBar";
import NavLink from "./NavLink";
import arrow from "../assets/arrow.svg";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceTimelineItem from "./ExperienceTimelineItem";
import { experience, skills, intro, socials, projects } from "../portfolio";
import { Icon } from "@iconify-icon/react";
import Section from "./Section";
import TopButton from "./TopButton";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

function App() {
  return (
    <div className="text-[#9d9d9d] md:mb-16">
      <TopButton />
      <Section id="home">
        <NavBar logo="https://personal-stuff.nyc3.cdn.digitaloceanspaces.com/logo.png">
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="experience">Experience</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </NavBar>
        <div className="m-auto grid lg:grid-cols-2">
          {/** eslint-disable-next-line */}
          <img
            src="https://personal-stuff.nyc3.cdn.digitaloceanspaces.com/hero.png"
            alt="hero"
            className="max-w-[18rem] md:max-w-sm m-auto col-span-1 lg:order-1"
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
              <Image src={arrow} alt="arrow" className="hidden md:inline" />
            </div>
          </div>
        </div>
      </Section>
      <Section id="skills" variant="white" padding="large" title="My Skills">
        <div className="text-center ">
          {skills.map(({ icon, name }) => (
            <div
              className="mx-3 mb-10 inline-flex flex-col items-center"
              key={name}
            >
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
              key={e.companyName}
              variant={i % 2 == 0 ? "gray" : "blue"}
            />
          ))}
        </ExperienceTimeline>
      </Section>
      <Section
        id="projects"
        padding="large"
        title="Featured Projects"
        variant="white"
      >
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </div>
      </Section>
      <Section
        id="contact"
        padding="large"
        title="Let's Connect!"
        variant="gray"
      >
        <img
          src="https://personal-stuff.nyc3.cdn.digitaloceanspaces.com/T9YKRJATW-U04FRHBUJRK-ed0629adb638-512-photoaidcom-cropped.png"
          className="h-60 md:inline mx-auto md:float-left md:mr-10"
        ></img>
        <p className="text-xl text-center md:text-left mt-4">
          Want to discuss a project or just want to say hi? My inbox is always
          open.
        </p>
        <div className="my-8 flex items-center justify-between max-w-[18rem] m-auto md:mx-0 ">
          <button className="py-2 px-5 rounded-full bg-blue-500 text-white font-['montserrat']">
            <a href="mailto: hello@ayoawe.com">Contact Me</a>
          </button>
          <SocialIcon Icon={FaGithub} link={socials.github} />
          <SocialIcon Icon={FaTwitter} link={socials.twitter} />
          <SocialIcon Icon={FaLinkedinIn} link={socials.linkedin} />
        </div>
      </Section>
    </div>
  );
}

export default App;
