import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

const ChatBody = ({ chat }) => {
  const aiStyle =
    "bg-gradient-to-r from-purple-300 to-blue-200 bg-opacity-90 backdrop-blur-lg dropshadow-md text-black mr-auto";
  const parent = useRef(null);
  const bottomRef = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat]);
  return (
    <div className="flex flex-col gap-4" ref={parent}>
      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`border-[#999999] break-words border-2 rounded-xl self-end p-3 max-w-[80%] ${
              message.sender === "ai" && aiStyle
            }`}
          >
            <pre className="whitespace-pre-wrap code-text">
              {message.message}
            </pre>
          </div>
        );
      })}
      <div ref={bottomRef} className="h-3"></div>

      {/* <div
        className={`border-[#999999] break-words border-2 rounded-xl self-start p-3 max-w-[80%] ${aiStyle} `}
      >
        <pre className="whitespace-pre-wrap code-text">Wait and Watch</pre>
      </div> */}
    </div>
  );
};

export default ChatBody;
