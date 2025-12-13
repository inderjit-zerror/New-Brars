import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#231F20] text-white px-6 py-16 Font3">
      {/* Top Brand Section */}
      <div className="text-center mb-14">
        <img src={`/svg/logo.svg`} className="w-[180px] mx-auto" alt="logo" />
        <h2 className="text-[#d6b37c] text-4xl mt-[20px] md:text-7xl font-extrabold tracking-wide Font3">
          #VEGETARIANDONEBETTER
        </h2>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 min-w-[140px]">
          <a href="#" className="font-semibold ">HOME</a>
          <a href="#" className="font-semibold ">PRODUCTS</a>
          <a href="#" className="font-semibold ">WHERE TO BUY</a>
          <a href="#" className="font-semibold ">RECIPES</a>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 min-w-[180px]">
          <a href="#" className="font-semibold ">ABOUT US</a>
          <a href="#" className="font-semibold ">NEWS</a>
          <a href="#" className="font-semibold ">CONTACT US</a>
          <a href="#" className="font-semibold ">TERMS OF USE</a>
          <a href="#" className="font-semibold ">PRIVACY POLICY</a>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col gap-6 min-w-[320px] max-w-md">
          <h3 className="font-bold text-lg">SUBSCRIBE</h3>
          <p className="text-sm text-gray-300">
            Sign up for the latest updates and exclusive offers from Brar’s.
          </p>

          <input
            type="text"
            placeholder="Full Name*"
            className="bg-transparent border-b border-gray-400 py-2 outline-none placeholder-gray-400"
          />

          <div className="flex items-center border-b border-gray-400">
            <input
              type="email"
              placeholder="Email Address*"
              className="bg-transparent flex-1 py-2 outline-none placeholder-gray-400"
            />
            <button className="text-white text-xl px-2 ">
              →
            </button>
          </div>

          <label className="flex gap-2 text-xs text-gray-300 leading-snug">
            <input type="checkbox" className="mt-1" />
            <span>
              Yes, I would like to receive updates, promotions, and offers from
              Brar’s Retail & Restaurants. I understand I can unsubscribe at
              any time.
            </span>
          </label>

          {/* Social Icons */}
          <div className="flex gap-5 mt-2">
            <a
              href="#"
              aria-label="Instagram"
              className=" hover:scale-110 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className=" hover:scale-110 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="hover:scale-110 transition"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-6 min-w-[260px]">
          <div>
            <h3 className="font-bold mb-2">CONTACT US</h3>
            <p>+1.905.502.7277</p>
            <p>info@oicfoods.com</p>
            <p>sales@oicfoods.com</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">HEAD OFFICE</h3>
            <p>Ontario Impex of Canada</p>
            <p>190 Statesman Drive</p>
            <p>Mississauga, Ontario L5S 1X7</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
