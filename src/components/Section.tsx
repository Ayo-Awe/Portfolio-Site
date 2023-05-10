import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
  variant?: "white" | "gray";
  padding?: "large" | "normal";
  title?: string;
}
const Section = ({ children, id, variant, padding, title }: Props) => {
  const py = padding === "large" ? " py-16" : " py-4";
  return (
    <section
      id={id}
      className={variant === "white" ? "bg-white" : "bg-[#fcfcfc]"}
    >
      <div className={`max-w-[970px] m-auto px-6 sm:px-16 lg:px-6` + py}>
        {title && (
          <h2 className="text-center md:text-left mb-16 text-4xl  col-span-2 text-slate-800 font-['montserrat'] font-semibold tracking-wider">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
