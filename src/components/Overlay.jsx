import React from 'react';

export function Overlay() {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-12 text-white">
            {/* Header */}
            <header className="flex justify-between items-start pointer-events-auto">
                <div className="text-xl font-bold tracking-tighter">OFF+BRAND.</div>
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <a href="#" className="hover:opacity-70 transition-opacity">MANIFESTO ↗</a>
                    <a href="#" className="hover:opacity-70 transition-opacity">WEBFLOW ENTERPRISE ↗</a>
                    <a href="#" className="border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">CONTACT →</a>
                </nav>
            </header>

            {/* Main Copy - Positioned to interact with the sphere visually */}
            <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl text-center pointer-events-none mix-blend-difference">
                <h1 className="text-[5vw] leading-[0.9] font-medium tracking-tight">
                    <div className="flex justify-center gap-[1.2vw]">
                        <span className="font-heading">A</span>
                        <span className="font-serif italic">DIFFERENT</span>
                    </div>
                    <div className="my-[1.2vw]"></div>
                    <div className="flex justify-center gap-[1.2vw] ml-[8vw]">
                        <span className="font-heading">CREATIVE</span>
                    </div>
                    <div className="flex justify-center gap-[1.2vw] -ml-[2vw]">
                        <span className="font-serif italic">APPROACH</span>
                    </div>
                </h1>
            </main>

            {/* Footer */}
            <footer className="flex justify-between items-end pointer-events-auto">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-mono uppercase">Scroll ↓</span>
                </div>
            </footer>
        </div>
    );
}
