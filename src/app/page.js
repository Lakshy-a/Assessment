'use  client'
import Image from "next/image";
import NavbarComponent from "@/components/Navbar";
import { MdAccessTime } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="sticky">
        <NavbarComponent />
      </div>
     
      <div className="flex bg-[#161D29] h-fit pt-12 px-32 scroll-none pb-8">
        <div className="w-3/5 h-fit px-6 ">
          <div className="text-2xl font-semibold text-white">Trainee Interview</div>
          <div className="bg-black w-[570px] h-[500px] mt-10 rounded-lg overflow-hidden">
             
          </div>
        </div>
        <div className="w-[570px] h-fit">
          <div className="flex justify-end gap-4">
            <div className="text-white flex border border-gray-400 rounded-md px-4 py-2 justify-center items-center gap-3">
              <span className="text-orange-600 text-lg">
                <FaUniversity />
              </span>{" "}
              <span className="text-sm">Zeko</span>
            </div>
            <div className="flex text-white border border-gray-400 rounded-md justify-center items-center gap-3 px-4 py-2">
              <span className="text-red-600 text-lg">
                <MdAccessTime />
              </span>
              <span className="text-sm">26 Minutes</span>
            </div>
          </div>
          <div className="text-white px-10 w-full text-justify mt-10 ">
            <h3 className="text-xl font-semibold">Instructions</h3>
            <div className="flex flex-col gap-3 mt-4 text-gray-100 text-base">
              <p>
                1. Ensure stable internet and choose a clean, quiet location.
              </p>
              <p>
                2. Permission for access of camera, microphone, entire screen
                sharing is required.
              </p>
              <p>3. Be in professional attire and avoid distractions.</p>
              <p>
                4. Give a detailed response, providing as much information as
                you can.
              </p>
              <p>
                5. Answer the question with examples and projects you've worked
                on.
              </p>
            </div>
            <div className="bg-[#263143] rounded-xl mt-6 px-6 py-2 ">
              <span className="text-[#6C60F4] hover:text-violet-700">
                <Link href={"#"}>Click here</Link>
              </span>{" "}
              to try a mock interview with Avya, our AI interviewer, and build
              your confidence before the main interview!
            </div>
            <button className=" mt-6 w-full bg-[#5143ea] py-2 rounded-lg hover:bg-[#3b2ce9]  ">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
