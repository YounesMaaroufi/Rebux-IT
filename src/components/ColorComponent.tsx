import { cn } from "@/lib/utils";
import { state } from "@/store";
import { FC } from "react";
import { useSnapshot } from "valtio";

interface colorComponentProps {
  color: string;
}

/**
 * this component meant to manipulate the component's color
 * @param color
 */
const ColorComponent: FC<colorComponentProps> = ({ color }) => {
  const snap = useSnapshot(state);
  return (
    <div
      onClick={() => {
        console.log(snap);
        state.color = color;
      }}
      className="flex items-center font-semibold gap-2 justify-start cursor-pointer"
    >
      <span
        className={cn("border-2 border-black w-8 h-8 rounded-full")}
        style={{
          background: color,
        }}
      />
      <p>{color}</p>
    </div>
  );
};

export default ColorComponent;
