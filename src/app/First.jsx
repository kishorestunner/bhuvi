import React from 'react';

export default function First() {
  return (
    <div className="p-5 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-[375px] min-w-[320px] h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] border-4 border-white rounded-lg overflow-hidden">
        {/* Content goes here */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 p-4 box-border">
          <div className="text-center">
            <h1 className="text-xl font-bold">Your Content Here</h1>
            <p className="mt-2">This is where you put your content that fits in the phone screen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
