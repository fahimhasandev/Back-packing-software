import React from 'react';
import Backgtounding from './Backgtounding';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import ItemList from './ItemList';

const App = () => {
  return (
    <>
      <Backgtounding />
      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
};

export default App;
