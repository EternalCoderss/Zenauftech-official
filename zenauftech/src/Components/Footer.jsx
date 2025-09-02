import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-blue-950 px-5 py-10 flex flex-col justify-around md:flex-row flex-wrap gap-4">
          <div className="text-white flex-1 px-4">
            <h4 className="mb-4 font-medium underline-hover text-2xl">About Us</h4>
            <div></div>
            <span>
              At Zenauf Tech, we specialize in elevating brands through
              cutting-edge digital marketing solutions. Our services include
              SEO, social media management, PPC advertising, and content
              creation all designed to drive growth and maximize your online
              presence.
            </span>
            <div className="">
              <ul className="py-5 flex items-center gap-8 text-xl">
                <li>
                  <a href="#">
                    <FaFacebook className="hover:text-[#1877F2]" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsInstagram className="hover:text-[#E4405F]" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <CiLinkedin className="text-2xl hover:text-[#1877F2]" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaXTwitter className="hover:text-black" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-white pl-4">
              <h4 className="mb-4 text-xl font-medium underline-hover">Quick Links</h4>
              <ul className="">
                <li className="flex items-center gap-2">
                  <IoIosArrowForward />
                  <a href="/" className=" hover:text-orange-300">
                    Home
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IoIosArrowForward />
                  <a href="/about" className=" hover:text-orange-300">
                    About
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IoIosArrowForward />
                  <a href="/services" className=" hover:text-orange-300">
                    Services
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IoIosArrowForward />
                  <a href="/case-studies" className=" hover:text-orange-300">
                    Case Studies
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IoIosArrowForward />
                  <a href="/contact" className=" hover:text-orange-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h4 className="mb-4 text-xl font-medium underline-hover">Who We Serve</h4>

              <ul>
                <li className="flex items-center gap-2">
                  <IoIosArrowForward />
                  <a href="/startups" className=" hover:text-orange-300">
                    Startups
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IoIosArrowForward />
                  <a href="/scaleups" className=" hover:text-orange-300">
                    Scaleups
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IoIosArrowForward />
                  <a href="/enterprises" className=" hover:text-orange-300">
                    Enterprises
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IoIosArrowForward />
                  <a
                    href="/industrial-training"
                    className=" hover:text-orange-300"
                  >
                    Industrial Training
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white px-4">
            <h4 className="mb-4 text-xl font-medium underline-hover">Services</h4>
            <ul className="text-white space-y-2">
              <li className="flex items-center gap-2">
                <IoIosArrowForward />
                <a href="/digital-marketing" className="hover:text-orange-300">
                  Digital Marketing
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IoIosArrowForward />
                <a
                  href="/social-media-marketing"
                  className="hover:text-orange-300"
                >
                  Social Media Marketing
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IoIosArrowForward />
                <a href="/public-relations" className="hover:text-orange-300">
                  Public Relations
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IoIosArrowForward />
                <a href="/pay-per-click" className="hover:text-orange-300">
                  Pay Per Click Advertising
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IoIosArrowForward />
                <a href="/seo" className="hover:text-orange-300">
                  Search Engine Optimization
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IoIosArrowForward />
                <a
                  href="/reputation-management"
                  className="hover:text-orange-300"
                >
                  Online Reputation Management
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IoIosArrowForward />
                <a href="/web-design" className="hover:text-orange-300">
                  Website Design & Development
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IoIosArrowForward />
                <a href="/project-management" className="hover:text-orange-300">
                  Project Management & Development
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white flex-1 px-4">
            <h4 className="mb-4 text-xl font-medium underline-hover">Office Address</h4>
            <ul className="text-white space-y-4">
              <li className="flex items-start gap-2">
                <IoLocation className="text-xl mt-1 text-primary" />
                <span>
                  4th floor, D258, GR Tower Industrial Area, Sector 75, S.A.S
                  Nagar,
                  <br />
                  Punjab 160055
                </span>
              </li>
              <li className="flex items-start gap-2">
                <IoLocation className="text-xl mt-1 text-primary" />
                <span>
                  SHRIRAM CHIRPING WOODS, Haralur Main Rd, Eastwood Twp,
                  Bengaluru,
                  <br />
                  Karnataka 560102
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#021c48] text-white py-4 text-center">
          <span>© Copyright Zenauf Tech 2025</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
