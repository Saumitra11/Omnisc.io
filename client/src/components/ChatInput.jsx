import React, { useState, useRef } from "react";

const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef(null);
  const maxRows = 5; // Set the maximum number of rows for the textarea

  const handleChange = (e) => {
    setValue(e.target.value);
    updateTextAreaHeight();
  };

  const handleSubmit = () => {
    if (value.trim() === "") return;
    sendMessage({
      sender: "user",
      message: value,
    });
    setValue("");
    updateTextAreaHeight();
  };

  const updateTextAreaHeight = () => {
    const textArea = textAreaRef.current;
    textArea.style.height = "auto"; // Reset the height to calculate the actual scroll height
    textArea.style.height = `${textArea.scrollHeight}px`; // Set the height to the scroll height
  };

  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg p-4 overflow-auto relative">
      {loading ? (
        <img src="./loader.gif" className="w-8 m-auto" />
      ) : (
        <>
          <textarea
            ref={textAreaRef}
            onKeyDown={(e) => {
              if (e.keyCode === 13 && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            rows={1}
            style={{
              resize: "none",
              overflowY:
                value.split("\n").length > maxRows ? "scroll" : "hidden",
              maxHeight: `${maxRows * 18}px`, // Adjust this value based on your font-size and line-height
            }}
            className="border-0 resize-none bg-transparent outline-none w-11/12"
            value={value}
            type="text"
            onChange={handleChange}
          />
          <img
            onClick={handleSubmit}
            src="./send2.png"
            alt="send"
            className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125"
            width={20}
          />
        </>
      )}
    </div>
  );
};

export default ChatInput;