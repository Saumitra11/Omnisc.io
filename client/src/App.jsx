import { useState } from "react";
import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";
import { useMutation } from "react-query";
import { fetchResponse } from "./api";

function App() {
  const [chat, setChat] = useState([]);
  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
    onSuccess: (data) =>
      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          message: data.message.replace(/^\n\n/, ""),
        },
      ]),
  });
  const sendMessage = async (message) => {
    await Promise.resolve(setChat((prev) => [...prev, message]));
    mutation.mutate();
  };
  return (
    <div className="bg-[#111722] h-screen py-6 relative sm:px-16 px-12 text-white flex flex-col justify-between align-middle">
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>
      <div className="uppercase font-bold text-2xl text-center mb-3">
        Omnisc.io
      </div>
      <div className="uppercase text-xl text-center mb-3">
        Answers to Everything
      </div>
      <div className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md">
        <ChatBody chat={chat} />
      </div>
      <div className="w-full max-4-xl min-w-[20rem] py-8 px-4 self-center scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md">
        <ChatInput sendMessage={sendMessage} loading={mutation.isLoading} />
      </div>
      <div className="fixed bottom-0 left-0 w-full py-4 px-8 text-center text-sm text-gray-400 bg-[#0D0E1A]">
        &copy; {new Date().getFullYear()} Saumitra Pathak. All rights reserved.
      </div>
    </div>
  );
}

export default App;
