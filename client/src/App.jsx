import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";

function App() {
  return (
    <div className="bg-[#111722] h-screen py-6 relative sm:px-16 px-12 text-white flex flex-col justify-between align-middle">
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>
      <div className="uppercase font-bold text-2xl text-center mb-3">
        Omnsic.io
      </div>
      <div className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center">
        <ChatBody />
      </div>
      <div className="w-full max-4-xl min-w-[20rem] py-8 px-4 self-center">
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
