import { Navbar } from "flowbite-react";
interface Props {
  children: string;
  active?: boolean;
}
const NavLink = ({ children, active }: Props) => {
  return (
    <Navbar.Link className="font-['roboto'] font-medium text-lg ">
      {children}
    </Navbar.Link>
  );
};

export default NavLink;
