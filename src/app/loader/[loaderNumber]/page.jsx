"use client";

import { useParams, useRouter } from "next/navigation";

export default function Loader() {
  const router = useRouter();
  const { loaderNumber } = useParams();
  const number = Number(loaderNumber);
  const arrayOfQusetions = [
    {
      question: "What is your name?",
    },
    {
      question: "How are you?",
    },
    {
      question: "What is your age?",
    },
  ];
  return (
    <>
      <div className="w-screen h-screen bg-[#161D29] text-gray-300 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-1">
          <div className=" bg-[#161D29] flex items-center justify-center">
            <div className="flex flex-col gap-1">
              <div className="w-14 flex justify-end animate-bubble-sequence-1">
                <div className="px-2 py-1 bg-gray-200 w-fit rounded-xl flex gap-1 justify-evenly">
                  <div className="w-fit p-1 bg-[#161D29] rounded-full"></div>
                  <div className="w-fit p-1 bg-[#161D29] rounded-full"></div>
                  <div className="w-fit p-1 bg-[#161D29] rounded-full"></div>
                </div>
              </div>
              <div className="w-3 flex justify-end animate-bubble-sequence-2">
                <div className="p-[3px] bg-gray-200 rounded-full w-fit"></div>
              </div>

              <div className="p-[2px] w-fit bg-gray-200 rounded-full animate-bubble-sequence-3"></div>
            </div>
          </div>
        </div>
        <div className="text-lg mt-4">
          That s great! Just give me a moment to take notes
        </div>
        <button
          className="bg-white text-black px-4 py-2 rounded-lg"
          onClick={() => {
            if (number < arrayOfQusetions.length - 1)
              router.push(`/questionPage/${number + 1}`);
            else router.push("/testCompletion");
          }}
        >
          Next Page
        </button>
      </div>
    </>
  );
}
