// src/components/Loading.jsx
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-white flex justify-center items-center z-[9999]">
      <div className="animate-pulse flex flex-col items-center gap-5 w-[1200px] px-4">
        
        {/* SPINNER FIRST - IN CENTER */}
        <div className="flex-col gap-4 w-full flex items-center justify-center mb-6">
          <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
          </div>
        </div>

        {/* Logo area */}
        <div className="w-40 h-10 bg-slate-400 rounded-full mb-2"></div>

        {/* Content bars */}
        <div className="h-[50px] bg-slate-400 w-full rounded-full"></div>
        <div className="h-[50px] bg-slate-400 w-5/6 rounded-full"></div>
        <div className="h-[50px] bg-slate-400 w-full rounded-full"></div>
        <div className="h-[50px] bg-slate-400 w-4/6 rounded-full"></div>
        <div className="w-100 h-10 bg-slate-400 rounded-full mb-2"></div>
        <div className="h-[50px] bg-slate-400 w-4/6 rounded-full"></div>
        <div className="h-[50px] bg-slate-400 w-full rounded-full"></div>
      </div>
    </div>
  );
}