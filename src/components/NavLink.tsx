import { Navbar } from "flowbite-react";
import { Link } from "react-scroll";
interface Props {
  children: string;
  to: string;
}
const NavLink = ({ children, to }: Props) => {
  return (
    <Navbar.Link className="font-['roboto'] font-medium text-lg hover:cursor-pointer">
      <Link
        activeClass="active"
        to={to}
        // spy={true}
        hashSpy={true}
        smooth={true}
        duration={500}
      >
        {children}
      </Link>
    </Navbar.Link>
  );
};

export default NavLink;
