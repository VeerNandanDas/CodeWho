import React, { useState } from "react";
import { Paperclip, Sparkles } from "lucide-react"; // Icons from lucide-react

const ChatPromptBar = () => {
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    if (input.trim()) {
      console.log("Prompt submitted:", input);

      try {
        const response = await fetch(`http://localhost:3000/ai/get-result?prompt=${encodeURIComponent(input)}`);

        const data = await response.json();
        console.log("AI Response:", data);
      } catch (error) {
        console.error("Error fetching result:", error);
      }

      setInput("");
    }
  };

  return (
    <div className="w-full my-20 z-20 my-auto max-w-3xl mx-auto px-4 py-3 bg-zinc-900 rounded-xl border border-zinc-700 flex items-center gap-3 ">
      <input
        type="text"
        placeholder="How can Bolt help you today?"
        className="flex-grow bg-transparent text-white placeholder-zinc-400 outline-none text-base"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button className="text-zinc-500 hover:text-white">
        <Paperclip size={18} />
      </button>
      <button className="text-zinc-500 hover:text-white">
        <Sparkles size={18} />
      </button>
    </div>
  );
};

export default ChatPromptBar;
