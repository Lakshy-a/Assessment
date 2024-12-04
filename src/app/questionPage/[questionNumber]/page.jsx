"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function question() {
  const router = useRouter();
  const { questionNumber } = useParams();
  const number = Number(questionNumber);
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
  const [allVoices, setAllVoices] = useState([]);
  const [currentVoice, setCurrentVoice] = useState();

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const getAllVoicesFromApi = async () => {
        const voices = await window.speechSynthesis.getVoices();
        setAllVoices(voices);
        // console.log("All Voices", voices);

        if (voices.length > 0) {
          setCurrentVoice(voices[10]);
        }
      };

      getAllVoicesFromApi();
      if (speechSynthesis.onvoiceschanged !== undefined)
        speechSynthesis.onvoiceschanged = getAllVoicesFromApi;

      console.log(allVoices)
    }
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-[#161D29] flex justify-center items-center text-white text-xl">
        {arrayOfQusetions[number]?.question}
        {/* {currentVoice.map((voice, index) => (
          <div>{voice}</div>
        ))} */}
        {/* <button
          className="bg-white text-black px-4 py-2 rounded-lg"
          onClick={() => {
            router.push(`/loader/${number}`);
          }}
        >
          Next Page
        </button> */}
      </div>
    </>
  );
}
