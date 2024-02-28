import { reader } from "@/helpers";
import { FC, useEffect, useState } from "react";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { state } from "@/store";

interface UploadInputProps {
  id: string;
  label: string;
}
/**
 * this component is dynamic, it can be used to upload decals to the 3d model
 * to the global store
 */
const UploadInput: FC<UploadInputProps> = ({ id, label }) => {
  const [file, setFile] = useState<File>();

  useEffect(() => {
    readFile();
  }, [file]);

  const readFile = () => {
    if (file) {
      reader(file).then((result) => {
        // @ts-ignore
        state[id] = result;
      });
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e?.target.files) return;

    setFile(e?.target?.files[0]);
  };
  return (
    <Label
      htmlFor={id}
      className="font-semibold flex flex-col items-center gap-2"
    >
      {label}
      <Input
        id={id}
        accept="image/*"
        type="file"
        onChange={handleChange}
        className="hidden"
      />
      <div
        className={buttonVariants({
          className:
            "font-bold text-md text-[#C4C4C4] bg-gradient-to-r from-white/25 from-0% via-50% via-black to-black to-100% rounded-full px-10 py-4 w-full cursor-pointer",
          variant: "default",
          size: "custom",
        })}
      >
        UPLOAD {label}
      </div>
    </Label>
  );
};

export default UploadInput;
