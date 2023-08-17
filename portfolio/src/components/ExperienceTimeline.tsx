import { Timeline, timelineItemClasses } from "@mui/lab";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ExperienceTimeline = ({ children }: Props) => {
  return (
    <>
      <div className="hidden md:inline ">
        <Timeline
          position="alternate"
          sx={{ maxWidth: "800px", margin: "auto" }}
        >
          {children}
        </Timeline>
      </div>
      <div className="md:hidden inline">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {children}
        </Timeline>
      </div>
    </>
  );
};

export default ExperienceTimeline;
