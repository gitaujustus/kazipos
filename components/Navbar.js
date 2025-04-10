"use client";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineHome } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { Logo } from "@/icons";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const MotionLink = motion(Link);

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    {
      href: "/",
      label: <HiOutlineHome className="w-6 h-6 2xl:w-10 2xl:h-10 " />,
      isIcon: true,
    },
    // { href: '/', label: <HiOutlineHome size={20} />, isIcon: true },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const authItems = [
    {
      href: "/sign_in",
      label: "Login",
      className: "border border-white px-4 py-1 rounded-full text-center",
    },
    {
      href: "/sign_up",
      label: "Get Started",
      className:
        "bg-red_republic text-white px-4 py-1 rounded-full text-center",
    },
  ];

  return (
    <div className="flex items-center justify-between  text-red_republic w-full xl:h-[76px] px-4 py-2 2xl:py-4 2xl:px-10   mx-auto relative z-20 font-inter border-b border-gray-300">
      {/* Logo */}
      <div className="flex items-center justify-between gap-1 md:gap-2 2xl:gap-4">
        {/* <Logo width={20} height={20} className="text-red_shimmer" /> */}

        {/* Logo component to be commented and replaced with the one below it, The Image Component */}
        <Logo className="text-red_shimmer" />

       
        <span className="lg:text-small xl:text-[20px] 2xl:text-[3rem]">Kazipos</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}

      <div className="hidden md:flex items-center justify-center gap-3 lg:gap-6 2xl:gap-8">
        {menuItems.map((item) => (
          <MotionLink
            key={item.href}
            href={item.href}
            className="relative flex items-center justify-center text-[16px]"
          >
            {pathname === item.href && (
              <motion.div
                layoutId="nav-highlight"
                className="absolute inset-0 bg-baragon_brown rounded-full  "
                style={{ zIndex: -1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            )}
            <span
              className={`relative z-10 px-2 lg:px-4 py-2 text-nowrap 2xl:text-[1.8rem] ${
                pathname === item.href ? "text-white" : ""
              }`}
            >
              {item.label}
            </span>
          </MotionLink>
        ))}
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center justify-between gap-4 xl:gap-[30px]">
        <MotionLink
          href="/sign_in"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="border border-red_republic text-red_republic py-1 2xl:py-2  rounded-full text-tiny xl:text-[16px] 2xl:text-[1.8rem] w-32 xl:w-[182px]  2xl:w-38 xl:h-[40px] text-center flex items-center justify-center"
        >
          Login
        </MotionLink>
        <MotionLink
          href="/sign_up"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="bg-red_republic text-white py-1 2xl:py-2  rounded-full text-nowrap text-tiny xl:text-[16px] w-32 2xl:text-[1.8rem]   xl:w-[182px] 2xl:w-48 xl:h-[40px] text-center flex items-center justify-center"
        > 
          Get Started
        </MotionLink>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            ref={menuRef}
            className="absolute top-full left-0 right-0 border-t md:border-t-0  bg-white  px-2 py-6 md:p-4 flex flex-col gap-4 md:hidden shadow-lg md:border-b border-gray-300"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    pathname === item.href ? "active" : ""
                  } flex px-3 items-center gap-2`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.isIcon ? (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                    >
                      {item.label}
                    </motion.div>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </Link>
              ))}
            </div>
            <hr className="border-white/20" />
            <div className="flex flex-col gap-3 mb-4">
              {authItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={item.className}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                      delay: (menuItems.length + index) * 0.1,
                    }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
