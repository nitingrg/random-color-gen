import React from 'react';

const RandomColorGenerator = () => {
  const [color, setColor] = React.useState("#000000");

  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setColor("#" + randomColor);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div 
        className="w-64 h-64 mb-4" 
        style={{ backgroundColor: color }}
      ></div>
      <p className="text-xl mb-4">{color}</p>
      <button 
        onClick={generateRandomColor}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate New Color
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <RandomColorGenerator />
    </div>
  );
}

export default App;