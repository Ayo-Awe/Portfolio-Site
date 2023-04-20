import { ReactNode } from "react";
import { FaFilePdf } from "react-icons/fa";
import { Navbar } from "flowbite-react";

interface Props {
  logo: string;
  children: ReactNode;
}
const NavBar = ({ logo, children }: Props) => {
  return (
    <Navbar
      fluid={true}
      style={{ backgroundColor: "inherit", padding: 0 }}
      className="bg-inherit"
    >
      <Navbar.Brand href="https://www.aweayo.tech">
        <img className="h-16" src={logo} />
      </Navbar.Brand>
      <div className="flex md:order-2 items-center">
        <a
          href="https://drive.google.com/uc?export=download&id=1uPbcmhG5bTZoTLlXgdko2r37eh_rX0I2"
          download="Awe_resume"
          className="hover:text-gray-700"
        >
          <FaFilePdf className=" text-2xl mr-6 md:mr-0" />
        </a>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>{children}</Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
