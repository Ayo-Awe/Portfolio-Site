import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const ProjectTray = ({ children }: Props) => {
  return <div className="">{children}</div>;
};

export default ProjectTray;
