import React from 'react';
import { useState, useEffect } from 'react';

const Home = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Ghania Maham")
    }, [])

    function updateCount(){
        setCount (count + 1)
    }
  return (
    <>
      <h2>Home Page</h2>
      <p>Button Clicked {count} times</p>
      <button onClick={updateCount}>Click me!</button>
      </>
  );
};

export default Home;
