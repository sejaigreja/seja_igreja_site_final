import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Versiculo from './components/Versiculo';
import WordOfPastor from './components/WordOfPastor';
import About from './components/About';
import Events from './components/Events';
import Cells from './components/Cells';
import Contribute from './components/Contribute';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <Banner />
      <main className="px-4 py-8 space-y-10 max-w-4xl mx-auto">
        <WordOfPastor />
        <About />
        <Versiculo />
        <Events />
        <Cells />
        <Contribute />
      </main>
      <Footer />
    </div>
  );
}

export default App;