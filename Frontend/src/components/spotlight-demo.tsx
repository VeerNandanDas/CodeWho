import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import ChatPromptBar from "./PromptBar";
import { useState } from "react";

export default function SpotlightPreview() {

  const [response, setResponse] = useState("");

  const handleSubmit = async (input: string) => {
    setResponse("");
  if (input.trim()) {
    const prompt = "Keep the response around 250 words Ui friendly easy to read format and long. don't use any markdown. You can use code but with code block formating but use code block formating with backslash n to show new line. \n " + input;

    console.log("Prompt submitted:", input);
    try {
      const response = await fetch(`http://localhost:3000/ai/get-result?prompt=${encodeURIComponent(prompt)}`);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setResponse(data.text) 
      
    } catch (error) {
      console.error("Error fetching result:", error);
      alert("Error fetching result. Please try again.");
    }
  }
};
  return (
    <div className="relative  flex h-screen w-screen overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
      
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
      
      

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl ">
          CodeWho? <br /> 
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          AI-powered web app that builds web apps for you. No BS, no burnout. Just drop your idea, tweak the vibe, and boom.
        </p>
        <ChatPromptBar submit={handleSubmit} />
        {response && (
          <div className="mt-4 text-center text-base font-normal text-neutral-300">
            <p className="text-white">AI Response:</p>
            <p className="text-green-400">{response}</p>
           
            </div>
        )}
      </div>
    </div>
  );
}