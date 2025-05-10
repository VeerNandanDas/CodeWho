import React, { useState } from "react";
import { Paperclip, Sparkles } from "lucide-react";

interface ChatPromptBarProps {
  submit: (input: string) => void;
}

const ChatPromptBar: React.FC<ChatPromptBarProps> = ({ submit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      submit(input);         // send input to parent
      setInput("");          // clear input after submit
    }
  };

  return (
    <div className="w-full my-20 z-20 my-auto max-w-3xl mx-auto px-4 py-3 bg-zinc-900 rounded-xl border border-zinc-700 flex items-center gap-3">
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
      <button className="text-zinc-500 hover:text-white" onClick={handleSubmit}>
        <Sparkles size={18} />
      </button>
    </div>
  );
};

export default ChatPromptBar;
