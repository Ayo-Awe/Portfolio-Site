import { IconType } from "react-icons";

interface Props {
  title: string;
  Icon: IconType;
  skills: string[];
}
const SkillCard = ({ title, Icon, skills }: Props) => {
  return (
    <div className="border rounded-md p-4 max-w-[26rem] flex items-center mb-4">
      <Icon className="text-[1.7rem] text-slate-600 flex-[1]" />
      <div className="flex-[2]">
        <h2 className="text-slate-800 font-semibold font-['montserrat'] text-base capitalize tracking-tight">
          {title}
        </h2>
        <p className="text-sm capitalize">{skills.join(" . ")}</p>
      </div>
    </div>
  );
};

export default SkillCard;
