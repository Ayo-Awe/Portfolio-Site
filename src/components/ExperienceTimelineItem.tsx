import {
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
} from "@mui/lab";

interface Props {
  jobTitle: string;
  startDate: string;
  endDate?: string;
  companyName: string;
  description: string;
  variant?: "blue" | "gray";
}

const ExperienceTimelineItem = (props: Props) => {
  const dotColor =
    props.variant === "blue" ? "rgb(118 169 250)" : "rgb(148 163 184)";
  return (
    <TimelineItem>
      <TimelineSeparator>
        <div className=" rounded-full p-2 border-slate-400 border-dashed border-2 mb-1 flex items-center justify-center">
          <TimelineDot
            sx={{
              backgroundColor: dotColor,
              width: "1.2rem",
              height: "1.2rem",
              paddingY: "0",
              marginY: "0",
            }}
          />
        </div>
        <div className=" border-l-2 border-dashed border-slate-400 mb-1 flex-grow min-h-[6rem]"></div>
      </TimelineSeparator>
      <TimelineContent>
        <h2 className="text-xl font-semibold text-slate-600 mb-2">
          {props.jobTitle}
        </h2>
        <p className="text-sm "> {props.description}</p>
        <h3 className="text-base font-semibold text-slate-600 mt-4">
          {props.companyName}
        </h3>
        <p className="text-sm mb-4">
          {props.startDate} - {props?.endDate || "Present"}
        </p>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperienceTimelineItem;
