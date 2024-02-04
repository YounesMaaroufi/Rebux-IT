import { state } from "@/store";
import { useSnapshot } from "valtio";
import ColorComponent from "./ColorComponent";
import UploadInput from "./UploadInput";
import CardCanvas from "./canvas/CardCanvas";

/**
 * this component is for the customizing the 3d model and then download it or send it to the database
 */
const CustomizeMyCard = () => {
  const { colors } = useSnapshot(state);
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col lg:flex-row  gap-2">
        <div className="flex flex-row lg:flex-col justify-center flex-wrap gap-2 ">
          {colors.map((color, i) => (
            <ColorComponent color={color} key={i} />
          ))}
        </div>
        <div className="flex justify-center items-center flex-grow ">
          <CardCanvas ambientLight />
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <UploadInput id="logo" label="LOGO" />
          <UploadInput id="code" label="QR CODE" />
          <UploadInput id="theme" label="THEME" />
        </div>
      </div>
    </div>
  );
};

export default CustomizeMyCard;
