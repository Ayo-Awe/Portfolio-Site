import NavBar from "./components/NavBar";
import NavLink from "./components/NavLink";
import hero from "./assets/hero.png";
import memoji from "./assets/memoji.png";
import arrow from "./assets/arrow.svg";
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaCode,
  FaTerminal,
  FaServer,
} from "react-icons/fa";
import SocialIcon from "./components/SocialIcon";
import SkillCard from "./components/SkillCard";
import { Timeline } from "@mui/lab";
function App() {
  return (
    <div className="text-[#9d9d9d] ">
      <section className="bg-[#fafafa]">
        <div className="max-w-[1100px] m-auto px-6">
          <NavBar logo={memoji}>
            <NavLink>Home</NavLink>
            <NavLink active={true}>About Me</NavLink>
            <NavLink>Projects</NavLink>
          </NavBar>
          <div className="m-auto grid sm:grid-cols-2">
            <img
              src={hero}
              alt="hero"
              className="max-w-xs sm:max-w-sm m-auto col-span-1 sm:order-1"
            />
            <div className="py-10 max-w-md col-span-1">
              <h2 className="text-slate-800 font-medium tracking-[0.2em]">
                HI, I AM AWE
              </h2>
              <h1 className="text-4xl my-5 font-bold leading-snug text-slate-800 font-['montserrat'] tracking-wider">
                Your friendly <br />
                neighbourhood <br />
                tech bro
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                consectetur, maxime dolorum corrupti perspiciatis laboriosam
                aperiam.
              </p>
              <div className="my-8 flex items-center justify-between max-w-sm">
                <button className="py-2 px-5 rounded-full bg-blue-600 text-white">
                  Contact Me
                </button>
                <SocialIcon Icon={FaGithub} link="https://github.com/Ayo-Awe" />
                <SocialIcon
                  Icon={FaTwitter}
                  link="https://twitter.com/AweAyomidipupo"
                />
                <SocialIcon Icon={FaLinkedinIn} link="https" />
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#ffffff] py-10">
        <div className="max-w-[1100px] m-auto px-6">
          <div className="sm:grid grid-cols-2 mt-10 gap-8">
            <div className="col-span-1 order-1">
              <h2 className="text-center text-4xl text-slate-800 font-['montserrat'] font-bold m-auto">
                What do I do?
              </h2>
              <p className="mt-6 leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                culpa repellendus totam eum eligendi sit odit quis voluptatibus
                laboriosam. Aliquid est nostrum necessitatibus ipsa sit
                similique quasi eligendi totam ab!
              </p>
            </div>
            <div className="col-span-1 ">
              <SkillCard
                Icon={FaServer}
                title="Backend Development"
                skills={["Express", "TypeScript", "MongoDB", "SQL"]}
              />
              <SkillCard
                Icon={FaTerminal}
                title="Systems Programming"
                skills={["C", "Rust", "Python"]}
              />
              <SkillCard
                Icon={FaCode}
                title="Frontend Development"
                skills={["React", "TypeScript", "Zustand"]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-10">
        <div className="max-w-[1100px] m-auto px-6"></div>
      </section>
    </div>
  );
}

export default App;
