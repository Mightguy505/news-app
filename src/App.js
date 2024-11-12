import React from 'react';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import NewsCard from './Components/NewsCard';
import './App.css';

function App() {

  const[category,setCategory] =useState("");

  const handleSetCategory = (newCategory) => {
    setCategory(newCategory);
    console.log("Category set to:", newCategory); // For debugging
  };
  return (
   <>
   <Navbar setCategory={handleSetCategory} />
   <Homepage category={category} />
   <NewsCard/>
   
   </>
  );
}

export default App;
