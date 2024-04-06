"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Link as SrollLink } from "react-scroll";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

const Header = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(active);

  return (
    <header
      className={`${active ? "bg-black-heavy py-4" : "bg-none py-8"} 
        fixed top-0 left-0 right-0 z-50 
    w-full transition-all duration-200`}
    >
      <div className="container mx-auto">
        {/* 로고, 네비게이션바 */}
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link href="/">
            <Image src="/logo.png" width={250} height={30} alt="logo" />
          </Link>
          {/* 네비게이션바 */}
          <Nav />
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
