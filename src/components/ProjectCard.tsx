import { Icon } from "@iconify-icon/react";

interface Props {
  githubUrl: string;
  publicUrl?: string;
  title: string;
  description: string;
  tools: string[];
}

const ProjectCard = (props: Props) => {
  return (
    <div className="bg-white shadow-md  rounded-lg p-4">
      <div className="flex justify-between items-baseline">
        <h3 className="text-2xl font-semibold mb-3 text-slate-700 font-alegreya">
          {props.title}
        </h3>
        <div className="text-[1.3rem]">
          <a
            href={props.githubUrl}
            target="_blank"
            className="mr-2 inline-flex items-center justify-center"
          >
            <Icon icon="uiw:github" className="text-slate-700" />
          </a>
          {props.publicUrl && (
            <a
              href={props.publicUrl}
              target="_blank"
              className=" inline-flex items-center justify-center"
            >
              <Icon icon="mdi:link-variant" className="text-slate-700" />
            </a>
          )}
        </div>
      </div>
      <p className="mb-10 text-slate-700">{props.description}</p>
      <div className="text-slate-800 font-alegreya">
        {props.tools.map((tool) => (
          <span className="px-3 py-2 rounded-md bg-[#f1f1f1] mr-1">{tool}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
