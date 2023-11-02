import { ReactNode } from "react";
import { FaFilePdf } from "react-icons/fa";
import { Navbar } from "flowbite-react";
import Headroom from "react-headroom";
import Image, { StaticImageData } from "next/image";

interface Props {
  logo: string | StaticImageData;
  children: ReactNode;
}
const NavBar = ({ logo, children }: Props) => {
  return (
    <Headroom>
      <Navbar
        fluid={true}
        style={{ backgroundColor: "inherit", padding: "5px 0" }}
        className="bg-inherit max-w-[922px] m-auto"
      >
        <Navbar.Brand href="https://www.aweayo.tech">
          <Image alt="logo" className="h-10 w-10 hover:shadow-xl" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>{children}</Navbar.Collapse>
      </Navbar>
    </Headroom>
  );
};

export default NavBar;
