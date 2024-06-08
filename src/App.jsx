import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  const cards = [
    { id: 1, title: 'Card 1', content: 'This is the first card.', animation: 'fade-up' },
    { id: 2, title: 'Card 2', content: 'This is the second card.', animation: 'fade-left' },
    { id: 3, title: 'Card 3', content: 'This is the third card.', animation: 'fade-right' },
    { id: 4, title: 'Card 4', content: 'This is the fourth card.', animation: 'zoom-in' },
  ];

  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-5">
        <h1 className="text-3xl">Scroll Animation Example</h1>
      </header>
      <section className="flex flex-wrap justify-center p-5">
        {cards.map((card) => (
          <div key={card.id} data-aos={card.animation} className=" rounded-lg shadow-lg m-4 p-6 w-64 transform transition duration-300 hover:scale-105">
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="text-gray-700">{card.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
