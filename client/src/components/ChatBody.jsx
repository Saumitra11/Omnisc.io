import React from "react";

const ChatBody = () => {
  const aiStyle =
    "bg-gradient-to-r from-purple-300 to-blue-200 bg-opacity-90 backdrop-blur-lg dropshadow-md text-black";
  return (
    <div className="flex flex-col gap-4">
      <div className="border-[#999999] break-words border-2 rounded-xl self-end p-3 max-w-[80%]">
        <pre className="whitespace-pre-wrap code-text">
          Hi Omnisc, are you better than ChatGPT?
        </pre>
      </div>
      <div
        className={`border-[#999999] break-words border-2 rounded-xl self-start p-3 max-w-[80%] ${aiStyle} `}
      >
        <pre className="whitespace-pre-wrap code-text">Wait and Watch</pre>
      </div>
    </div>
  );
};

export default ChatBody;
