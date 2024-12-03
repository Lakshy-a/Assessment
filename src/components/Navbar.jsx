"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import removeBackground from "../../public/removeBackground.png";
import google from "../../public/google.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const NavbarComponent = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };

  const closeModal = () => {
    setLogin(false);
  };

  useEffect(() => {
    if (login) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [login]);

  return (
    <>
      <div className="w-full h-16 bg-[#F1F5F9] flex justify-between px-8 items-center">
        <div>
          <Image src={removeBackground} alt="companyLogo" width={118} />
        </div>
        <button
          className="border border-[#5143ea] px-4 py-2 rounded-xl text-[#5143ea] font-semibold text-sm hover:bg-[#5143ea] hover:text-white"
          onClick={handleLogin}
        >
          Login / SignUp
        </button>
      </div>

      {/* Modal */}
      <div>
        {login && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-[350px] pb-8 relative">
              <div
                className="absolute top-4 text-sm  right-4 cursor-pointer text-gray-600"
                onClick={closeModal}
              >
                X
              </div>
              <CardHeader className="flex flex-col gap-4 mt-4">
                <CardTitle className="text-center font-semibold">
                  Are you ready to start working towards your career goals!
                </CardTitle>
                <div className="flex items-center bg-blue-500 px-2 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
                  <div>
                    <Image src={google} alt="google" width={80} />
                  </div>
                  <div className="text-start pl-8 text-white font-bold w-full text-sm">
                    Login with Google
                  </div>
                </div>
                <div className="">
                  <hr />
                  <div className="w-full text-xs text-center text-gray-400">
                    OR
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4 mt-">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name" className="font-semibold">
                        Email
                      </Label>
                      <Input
                        id="name"
                        placeholder="eg: abkiran@gmail.com"
                        className="border border-gray-400 font-medium text-gray-400"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <button className="bg-[#6C60F4] text-white font-semibold py-2 rounded-lg hover:bg-[#3b2ce9]">
                        Continue
                      </button>
                    </div>
                  </div>
                </form>
              </CardContent>
              <div className="w-full px-8 text-center flex text-xs">
                <p>
                  By going forward, you're agreeing to MyWays Terms of{" "}
                  <span className="text-blue-500">
                    Use and Privacy Policies
                  </span>
                </p>
              </div>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarComponent;
