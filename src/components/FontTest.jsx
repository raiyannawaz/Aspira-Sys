import React from 'react';

const FontTest = () => {
  return (
    <div className="p-8 space-y-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-900">Font Test Page</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-bold mb-2">Delius Font (Titles)</h2>
          <p className="font-title text-2xl text-blue-600">This is Delius font for titles</p>
          <p className="font-delius text-lg text-gray-700">This is also Delius font</p>
        </div>
        
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-bold mb-2">Open Sans Font (Body Text)</h2>
          <p className="font-body text-lg text-gray-700">This is Open Sans font for body text and descriptions</p>
          <p className="font-opensans text-base text-gray-600">This is also Open Sans font</p>
        </div>
        
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-bold mb-2">Quicksand Font (Buttons)</h2>
          <button className="font-button bg-blue-600 text-white px-6 py-3 rounded-lg">This is Quicksand font for buttons</button>
          <p className="font-quicksand text-lg text-gray-700 mt-2">This is also Quicksand font</p>
        </div>
        
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-bold mb-2">CSS Classes from App.css</h2>
          <p className="delius-regular text-xl text-purple-600">This uses .delius-regular class</p>
          <p className="open-sans text-lg text-green-600">This uses .open-sans class</p>
          <p className="quicksand text-lg text-orange-600">This uses .quicksand class</p>
        </div>
      </div>
    </div>
  );
};

export default FontTest;