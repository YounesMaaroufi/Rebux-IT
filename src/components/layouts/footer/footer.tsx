import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-8 container mx-auto py-10 bg-slate-100">
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-2xl text-center font-bold">
          GET OUR LATEST NEWS AND FOLLOW US ON
        </h2>
        <div className="w-[264.5px] bg-black shadow-md h-0.5" />
      </div>
      <div className="flex justify-between mx-20">
        {/* TODO: social media icons and links */}
        <a href="https://instagram.com" target="_blank">
          <FaInstagram size={50} />
        </a>
        <a href="https://messanger.com" target="_blank">
          <FaFacebookMessenger size={50} />
        </a>
        <a href="http://web.whatsapp.com" target="_blank">
          <FaWhatsapp size={50} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
