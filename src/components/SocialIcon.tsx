import { ReactNode } from "react";
import { IconType } from "react-icons";
interface Props {
  Icon: IconType;
  link: string;
}
const SocialIcon = ({ Icon, link }: Props) => {
  return (
    <a href={link}>
      <Icon className="text-xl" />
    </a>
  );
};

export default SocialIcon;
