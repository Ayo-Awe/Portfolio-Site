import { Icon } from "@iconify-icon/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const TopButton = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 100) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isAtTop ? null : (
        <Link
          activeClass="active"
          to="home"
          hashSpy={true}
          smooth={true}
          duration={500}
          className="z-10 fixed right-6 bottom-5 hover:text-[2.5rem] transition-all  rounded-lg py-2 px-1 text-slate-800 text-4xl cursor-pointer scroll"
        >
          <Icon icon="tabler:hand-finger" />
        </Link>
      )}
    </>
  );
};

export default TopButton;
