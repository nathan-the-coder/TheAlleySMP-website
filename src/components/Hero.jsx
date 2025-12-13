 import logoText from "/hero-text.png";
 import { useState, useEffect } from "react";
const JAVA_IP = "thealleysmp.com";
const BEDROCK = "thealleysmp.com:19132";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [online, setOnline] = useState(0);
  const [max, setMax] = useState(50);

useEffect(() => {
   // 1. **Updated Endpoint URL**
   // Use the mcapi.us status endpoint with the server address.
   fetch('https://api.mcsrvstat.us/2/thealleysmp.com')
     .then(res => res.json())
     .then(data => {
       console.log(data);
       // 2. **Updated Data Access**
       // MCAPI.us uses 'players.now' for online and 'players.max' for max players.
       // It also checks for the 'online' property to ensure the server is reachable.
       if (data.online) {
         setOnline(data.players?.online || 0);
         setMax(data.players?.max || 50);
       } else {
         // Handle case where server is reported offline by the API
         setOnline(0);
         setMax(50); // Keep default max or set to a known value
       }
     })
     .catch(() => {
       // Keep defaults if the fetch itself fails (e.g., network error)
     });
 }, []);

  const copy = (text) => navigator.clipboard.writeText(text);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
      
      {/* HERO CONTENT */}
      <div className="text-center z-10 max-w-4xl mx-auto">
                <div className="flex justify-center mb-6"> 
                    <img 
                        className="w-auto h-50 sm:h-32 md:h-40 max-h-48" 
                        src={logoText} 
                        alt="The Alley SMP Logo" 
                    />
                </div>
                <h1 className="font-bold text-pink-300 text-6xl md:text-7xl lg:text-8xl tracking-wider uppercase drop-shadow-lg sr-only">
                    THE ALLEY SMP
                </h1>
                <p className="font-semibold text-xl text-white/90">
                    A semi vanilla+ survival rpg shaped by lore. Face chaos, forge your path, and reclaim TheAlley.
                </p>
            </div>
      

      {/* JOIN NOW BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          my-5
          px-8 py-3 rounded-xl
          bg-pink-400 text-purple-900
          font-bold text-xl uppercase
          hover:bg-pink-500 transition
          shadow-2xl cursor-pointer
        "
      >
        JOIN NOW!
      </button>

      {/* MODAL */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed inset-0 z-50
            bg-black/60 backdrop-blur-sm
            flex items-center justify-center
            px-4
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              w-full max-w-md
              rounded-2xl
              bg-purple-900/80 backdrop-blur-xl
              shadow-2xl
              p-6 md:p-8
              animate-[fadeUp_0.25s_ease-out]
            "
          >
            {/* HEADER */}
            <div className="text-center mb-6">
              <p className="text-pink-300 text-4xl font-extrabold">
                {online}
                <span className="text-white/70 text-xl">/{max}</span>
              </p>
              <p className="uppercase text-white/60 text-sm tracking-widest">
                Online
              </p>
            </div>

            {/* JAVA IP */}
            <div className="mb-4">
              <p className="text-white/60 text-xs uppercase mb-1">Java IP</p>
              <div className="flex items-center justify-between bg-purple-950/80 border border-purple-700 rounded-lg px-4 py-3">
                <code className="text-pink-300 font-mono">{JAVA_IP}</code>
                <button
                  onClick={() => copy(JAVA_IP)}
                  className="text-white/70 hover:text-pink-300 transition"
                >
                  ⧉
                </button>
              </div>
            </div>

            {/* BEDROCK IP */}
            <div className="mb-6">
              <p className="text-white/60 text-xs uppercase mb-1">
                Bedrock / PE IP & Port
              </p>
              <div className="flex items-center justify-between bg-purple-950/80 border border-purple-700 rounded-lg px-4 py-3">
                <code className="font-mono">{BEDROCK}</code>
                <button
                  onClick={() => copy(BEDROCK)}
                  className="text-white/70 hover:text-pink-300 transition"
                >
                  ⧉
                </button>
              </div>
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="
                w-full py-3 rounded-xl
                bg-pink-400 text-purple-900
                font-bold text-lg uppercase
                hover:bg-pink-500 transition
                cursor-pointer
              "
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
