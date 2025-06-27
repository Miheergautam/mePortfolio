import { useState } from "react";
import TypingText from "../TypingText";

export default function UpdatingMeQuiz({ onComplete }) {
  const questions = [
    "👾 What's your name?",
    "🕸️ Which social platform do you use the most?",
    "🚀 Would you like to receive my updates? (yes/no)",
  ];

  const [answers, setAnswers] = useState([]);
  const [currentQ, setCurrentQ] = useState(-1); // intro step
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const nextAnswers = [...answers, input.trim()];
    setAnswers(nextAnswers);
    setInput("");
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setCurrentQ(currentQ + 1);
      onComplete(nextAnswers);
    }
  };

  const handleStartEnter = (e) => {
    if (e.key === "Enter") {
      setCurrentQ(0);
    }
  };

  return (
    <div
      className="bg-neutral-950 border border-cust-red rounded-xl p-4 md:p-6 text-left font-mono text-cust-red shadow-2xl relative overflow-hidden"
      tabIndex={0}
      onKeyDown={currentQ === -1 ? handleStartEnter : undefined}
    >
      {/* intro */}
      {currentQ === -1 && (
        <div className="whitespace-pre-wrap">
          <TypingText
            text={`👾 Welcome to the hidden *UpdatingMe* quiz!
You’ve stumbled on a secret corner of my portfolio — lucky you. 🌟
Answer a few quick questions so I can keep you in the loop with my coolest updates.`}
            speed={30}
          />
          <div className="mt-4 text-cust-red font-semibold">
            &gt; Press Enter to continue
          </div>
        </div>
      )}

      {/* quiz questions */}
      {currentQ >= 0 && currentQ < questions.length && (
        <>
          <div className="mb-4">
            <span className="block text-cust-red font-semibold mb-2">
              {questions[currentQ]}
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 mt-2"
          >
            <span className="text-cust-red">&gt; </span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-b border-cust-red text-cust-red focus:outline-none px-2 flex-1"
              autoFocus
            />
          </form>
        </>
      )}

      {/* thanks */}
      {currentQ === questions.length && (
        <div className="mt-4 text-cust-red whitespace-pre-wrap">
          <TypingText
            text={`✅ Thank you, ${answers[0]}!
You prefer ${answers[1]}, and ${
              answers[2].toLowerCase() === "yes"
                ? "I will keep you posted with updates!"
                : "no updates will be sent."
            }
Feel free to connect with me below.`}
            speed={40}
          />
          <div className="flex gap-4 mt-4 text-neutral-300">
            <a
              href="https://www.linkedin.com/in/miheer-gautam/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cust-red transition text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
