import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";

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
        <a href="https://instagram.com" className="space-y-1" target="_blank">
          <FaInstagram size={50} />
          <FaInstagram className="opacity-20" size={50} />
        </a>
        <a href="https://messanger.com" className="space-y-1" target="_blank">
          <FaFacebookMessenger size={50} />
          <FaFacebookMessenger className="opacity-20" size={50} />
        </a>
        <a href="http://web.whatsapp.com" className="space-y-1" target="_blank">
          <FaWhatsapp className="shadow-2xl text-2xl" size={50} />
          <FaWhatsapp className="opacity-20" size={50} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
