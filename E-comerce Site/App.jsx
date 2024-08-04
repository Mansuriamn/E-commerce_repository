import './App.css';
import Header from './Header';
import Slid from './Slid';
import Card from './Card';
import Foot from './Foot';
import Personelcard from './Personelcard';
import { useState, useEffect } from 'react';

export default function App() {
  const [clickedChar, setClickedChar] = useState('');
  const [data, setData] = useState([]);
  const [personel, setpersonel] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      let url = 'https://dummyjson.com/products/search?q=men';

      if (clickedChar) {
         url = `https://dummyjson.com/products/search?q=${clickedChar}`;
      }
      const res = await fetch(url);
      const result = await res.json();
      setData(result.products || []);
    };

    fetchData();
  }, [clickedChar]);

  useEffect(() => {
    if (!clickedChar) {
      const fetchRandomData = async () => {
        const res = await fetch('https://dummyjson.com/products/random');
        const result = await res.json();
        setData(result.products || []);
      };

      fetchRandomData();
    }
  }, [clickedChar]);

  console.log(personel);

  return (
    <>
      {!personel && <Header setClickedChar={setClickedChar} />}
      {!personel && clickedChar === '' && (
        <>
          <Slid />
          <div style={{ display: "flex", flexWrap: 'wrap', marginLeft: '70px' }}>
            <Card data={data} setpersonel={setpersonel} />
            <Foot />
          </div>
        </>
      )}
      {!personel && clickedChar !== '' && (
        <div style={{ display: "flex", flexWrap: 'wrap', marginLeft: '70px' }}>
          <Card data={data} setpersonel={setpersonel} />
        </div>
      )}
      {personel && (
        <>
          <Personelcard data={personel} />
          <Foot />
        </>
      )}
    </>
  );
}
