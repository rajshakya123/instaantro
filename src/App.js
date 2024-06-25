import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MobileHome } from './MobileHome';
import Home from './Home'
import './App.css';

function App() {
  //swap to number without using third variable
  // let x = 10;
  // let y = 11;
  // y = y + x;
  // x = y - x;
  // y = y - x
  // console.log(x, y, 'raj is good boy');

  //sort array without sort function
  // let a = [1, 2, 50, 3, 4, 6, 7, 8];
  // let sortedArray=a?.reduce((a,b)=>a>b?a:b);
  // let sortedArray;
  // for (let i = 0; i < a?.length - 1; i++) {
  //   if (!(a[i] < a[i + 1])) {
  //     sortedArray = a[i];
  //     a[i] = a[i + 1];
  //     a[i + 1] = sortedArray;
  //   }
  // }
  // console.log(sortedArray, 'sorthbhj')

  //Generate between 1 to 50 prime number array
  // function isPrime(n) {
  //   if (n == 0 || n == 1)
  //     return false;
  //   for (let i = 2; i <= n / 2; i++) {
  //     if (n % i == 0)
  //       return false;
  //     else
  //       return true;
  //   }
  // }
  // for (let i = 1; i <= 50; i++) {
  //   if (isPrime(i)) {
  //     console.log(i, 'primrarray')
  //   }
  // }

  //Reverse string without using reserve method

  let name = 'abcd'
  let reverseName = '';
  for (let  i = 0; i < name.length; i++) {
    reverseName[i] = name[name.length - i - 1]
  }
  console.log(reverseName,'name')

  console.log(name?.length, 'name')
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mobileHome" element={<MobileHome />} />
      </Routes>
    </Router>
  );
}

export default App;
