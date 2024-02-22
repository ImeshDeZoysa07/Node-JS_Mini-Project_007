// App.tsx

import React from 'react';

const App: React.FC = () => {
  const handleSearch = (query: string) => {
    // Make a request to Node.js server to fetch the image
    fetch(`http://localhost:3000/image?name=${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Image not found');
        }
        return response.blob();
      })
      .then(blob => {
        // Display the image
        const imageUrl = URL.createObjectURL(blob);
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        document.body.appendChild(imageElement);
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <h1>Image Search</h1>
    </div>
  );
};

export default App;
