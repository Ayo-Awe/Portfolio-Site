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
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";
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
            <h2 className="text-slate-800 font-medium tracking-[0.2em] pt-4 md:hidden">
              HI, I AM AWE
            </h2>
            <img
              src={hero}
              alt="hero"
              className="max-w-[15rem] sm:max-w-sm m-auto col-span-1 sm:order-1"
            />
            <div className="py-10 max-w-md col-span-1">
              <h2 className="text-slate-800 font-medium tracking-[0.2em] hidden md:inline">
                HI, I AM AWE
              </h2>
              <h1 className="md:text-[2.75rem] text-[2rem] my-5 font-bold leading-snug text-slate-800 font-['montserrat'] tracking-wider">
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
                <button className="py-2 px-5 rounded-full bg-blue-500 text-white">
                  Contact Me
                </button>
                <SocialIcon Icon={FaGithub} link="https://github.com/Ayo-Awe" />
                <SocialIcon
                  Icon={FaTwitter}
                  link="https://twitter.com/AweAyomidipupo"
                />
                <SocialIcon Icon={FaLinkedinIn} link="https" />
                <img src={arrow} alt="arrow" className="invisible md:visible" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#ffffff] py-10">
        <div className="max-w-[1100px] m-auto px-10">
          <div className="lg:grid grid-cols-2 lg:gap-x-16 md:gap-x-8 ">
            <h2 className="text-center mb-6 text-4xl md:text-[3rem] col-span-2 text-slate-800 font-['montserrat'] font-bold m-auto tracking-wider">
              What do I do?
            </h2>
            <div className="col-span-1 md:mx-auto max-w-xl sm:order-1 mb-10">
              <p className="leading-loose text-center ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita debitis sequi, reprehenderit voluptates harum quisquam,
                error rem, iure fugit molestiae perspiciatis voluptatum tempore
                neque ab repellat quia officia! Nulla delectus laboriosam
                numquam alias sunt et autem modi jfoei eiow fdkf.
              </p>
              <div className="flex justify-around mt-4">
                <div>
                  <p className="text-3xl md:text-4xl  font-bold text-slate-700">
                    120+
                  </p>
                  <p>Merged PRs</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-slate-700">
                    3000+
                  </p>
                  <p>Commits</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 max-w-xl mx-auto lg:mx-0">
              <SkillCard
                Icon={FaServer}
                title="Backend Dev"
                skills={["Express", "TypeScript", "MongoDB"]}
              />
              <SkillCard
                Icon={FaTerminal}
                title="Systems Programming"
                skills={["C", "Rust", "Python"]}
              />
              <SkillCard
                Icon={FaCode}
                title="Frontend Dev"
                skills={["React", "TypeScript", "Zustand"]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-10">
        <div className="max-w-[1100px] m-auto px-6">
          <Timeline
            position="right"
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                sm: {
                  flex: 1,
                },
                xs: {
                  flex: 0,
                  padding: 0,
                },
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <div className="border-slate-400 rounded-full px-3 border-dashed border-2 mb-1 flex items-center justify-center">
                  <TimelineDot sx={{ backgroundColor: "rgb(148 163 184)" }} />
                </div>
                <div className="h-20 border-l-2 border-dashed border-slate-400 mb-1"></div>
              </TimelineSeparator>
              <TimelineContent>
                <h3 className="text-lg font-semibold text-slate-600">
                  ALX Software Engineering
                </h3>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <div className=" rounded-full px-3 border-slate-400 border-dashed border-2 mb-1 flex items-center justify-center">
                  <TimelineDot sx={{ backgroundColor: "rgb(118 169 250)" }} />
                </div>
                <div className="h-20 border-l-2 border-dashed border-slate-400 mb-1"></div>
              </TimelineSeparator>
              <TimelineContent>
                <h3 className="text-lg font-semibold text-slate-600">
                  Hotels NG
                </h3>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <div className=" rounded-full px-3 border-slate-400 border-dashed border-2 mb-1 flex items-center justify-center">
                  <TimelineDot sx={{ backgroundColor: "rgb(148 163 184)" }} />
                </div>
                <div className="h-20 border-l-2 border-dashed border-slate-400 mb-1"></div>
              </TimelineSeparator>
              <TimelineContent>
                <h3 className="text-lg font-semibold text-slate-600">
                  HacktoberFest
                </h3>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </section>
    </div>
  );
}

export default App;
