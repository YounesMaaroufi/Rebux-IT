import { cn } from "@/lib/utils";
import { FC } from "react";

interface HeadingProps {
  label: string;
  className?: string;
  fill?: boolean;
}

const Heading: FC<HeadingProps> = ({ label, className, fill }) => {
  return (
    <div
      className={cn(
        "bg-white mx-auto flex justify-center flex-col items-center py-2 gap-y-1 ",
        className,
        fill && "w-full"
      )}
    >
      <h1 className="text-center text-xl text-shadow-lg">{label}</h1>
      <div className="w-[264.5px] bg-black shadow-md h-0.5" />
      <div className="w-[170px] bg-black shadow-md h-0.5" />
      <div className="w-[80px] bg-black shadow-md h-0.5" />
    </div>
  );
};

export default Heading;
