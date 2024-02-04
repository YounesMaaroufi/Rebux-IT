import { cn } from "@/lib/utils";
import { FC } from "react";

interface DescriptionProps {
  description: string;
  className: string;
}

const Description: FC<DescriptionProps> = ({ description, className }) => {
  return (
    <p
      className={cn(
        "text-center text-xl md:w-1/2 w-10/12 uppercase",
        className
      )}
    >
      {description}
    </p>
  );
};

export default Description;
