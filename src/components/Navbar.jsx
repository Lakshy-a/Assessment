'use client';

import React, { useState } from "react";
import Image from "next/image";
import removeBackground from "../../public/removeBackground.png";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const NavbarComponent = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };

  const closeModal = () => {
    setLogin(false);
  };

  return (
    <div className="w-full h-16 bg-[#F1F5F9] flex justify-between px-8 items-center">
      <div>
        <Image 
          src={removeBackground} 
          alt="companyLogo"
          width={118}
        />
      </div>
      <button
        className="border border-[#5143ea] px-4 py-2 rounded-xl text-[#5143ea] font-semibold text-sm hover:bg-[#5143ea] hover:text-white"
        onClick={handleLogin}
      >
        Login / SignUp
      </button>

      {/* Modal */}
      {login && (
        <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      )}
    </div>
  );
};

export default NavbarComponent;
