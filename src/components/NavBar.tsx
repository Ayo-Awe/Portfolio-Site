import { ReactNode } from "react";
import { FaFilePdf } from "react-icons/fa";
import { Navbar } from "flowbite-react";
import Headroom from "react-headroom";

interface Props {
  logo: string;
  children: ReactNode;
}
const NavBar = ({ logo, children }: Props) => {
  return (
    <Headroom>
      <Navbar
        fluid={true}
        style={{ backgroundColor: "inherit", padding: 0 }}
        className="bg-inherit max-w-[922px] m-auto"
      >
        <Navbar.Brand href="https://www.aweayo.tech">
          <img className="h-16" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>{children}</Navbar.Collapse>
      </Navbar>
    </Headroom>
  );
};

export default NavBar;
