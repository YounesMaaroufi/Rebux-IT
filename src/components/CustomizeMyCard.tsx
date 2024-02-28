import UploadInput from "./UploadInput";
import CardCanvas from "./canvas/CardCanvas";

/**
 * this component is for the customizing the 3d model and then download it or send it to the database
 */
const CustomizeMyCard = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center gap-y-8">
        {/* @ts-ignore */}
        <CardCanvas customized scale={2} />
        <div className="flex flex-row flex-wrap items-center gap-8 justify-center">
          <UploadInput id="logo" label="LOGO" />
          <UploadInput id="qrCode" label="QR CODE" />
          <UploadInput id="texture" label="THEME" />
        </div>
      </div>
    </div>
  );
};

export default CustomizeMyCard;
