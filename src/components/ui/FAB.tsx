import React, { useEffect, useState } from "react";

const FAB: React.FC = () => {
    const [showUp, setShowUp] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowUp(window.scrollY > 200);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const openChat = () => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else window.open("/chat", "_blank");
    };

    return (
        <div className="fixed right-4 bottom-4 flex flex-col gap-2 items-center z-50" aria-hidden={false}>
            <button
                className={`w-11 h-11 rounded-full flex items-center justify-center bg-[#8b9d75] text-white shadow-lg transition-transform duration-150 transform ${showUp ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                onClick={scrollTop}
                aria-label="Scroll to top"
                title="Scroll to top"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 5l-7 7h4v7h6v-7h4l-7-7z" fill="currentColor" />
                </svg>
            </button>

            <button
                className="w-11 h-11 rounded-full flex items-center justify-center bg-[#8b9d75] text-white shadow-lg transition-transform duration-150 transform hover:-translate-y-1 hover:bg-[#76885f]"
                onClick={openChat}
                aria-label="Open chat"
                title="Chat"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M21 6.5A2.5 2.5 0 0018.5 4h-13A2.5 2.5 0 003 6.5v7A2.5 2.5 0 005.5 16H6v3l3-3h9.5A2.5 2.5 0 0021 13.5v-7z" fill="currentColor" />
                </svg>
            </button>
        </div>
    );
};

export default FAB;
