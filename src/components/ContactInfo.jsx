import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

export default function ContactInfo() {
  return (
    <div className="max-w-md text-white">
      {/* Email */}
      <div className="flex items-center space-x-3">
        <CgMail />
        <a href="mailto:shazzed7656@gmail.com">shazzed7656@gmail.com</a>
      </div>

      {/* WhatsApp / Phone */}
      <div className="flex items-center space-x-3">
        <FaWhatsapp />
        <a href="https://wa.me/8801616227656">+8801616227656</a>
      </div>

      {/* Location */}
      <div className="flex items-center space-x-3">
        <IoLocationOutline />
        <span>Chittagong, Bangladesh</span>
      </div>
    </div>
  );
}
