import { useState, useRef } from 'react';
import logo from './images/logo.svg';
import './App.css';
import heroImg from './/images/kcc-opener.svg';
import CatCard from ".//Components/CatCard"
import DrinkCard from './/Components/DrinkCard';
import prev from './images/prev.svg';
import next from './images/next.svg';
import {useLoaderData} from "react-router-dom";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carousel = useRef(null);
  const data = useLoaderData();
  return (
    <>
      <div className="hero">
        <img src={heroImg} loading="lazy" />
        <div className="welcome">
          <h1>Sip purr-fect brews & cuddle adorable cats</h1>
          <p className='description-p'>Coffee, fluffy friends, and sweet boba await. Relax, sip, and enjoy your day with us!</p>
          <div className="welcome-buttons">
            <a href="/cats" className="welcome-cats">See our cats</a> 
            <a href="/reserve" className="welcome-reserve">Make a reservation</a>
          </div>
        </div>
      </div>
      <div className="cats-section">
        <h2>Our Cats</h2>
        <p className="description">Get to know your next fuzzy study buddy. Click a cat to learn more and create a reservation with them.</p>
        <div className='carousel'>
          <img src={prev} className="arrow" onClick={() => {
              if (carousel.current) {
                const currentPosition = carousel.current.scrollLeft
                carousel.current.scrollLeft = currentPosition - 315
              }
            }}/>
          <div> 
            { data?.cats.data.length ? (<div className="cat-cards" ref={carousel} onScroll={() => {
               if (carousel.current) {
                const currentPosition = carousel.current.scrollLeft
                setScrollPosition(currentPosition)
              }
            }}>
              {data.cats.data.map((item) => (
                <CatCard cat={item} key={item.id} />
              ))}
            </div>) : (<p>Loading...</p>) }
          </div>
          <img src={next} className="arrow" onClick={() => {
            if (carousel.current) {
              const currentPosition = carousel.current.scrollLeft
              carousel.current.scrollLeft = currentPosition + 315
            } 
            }}/>
        </div>
        <a href="/cats" className="see-cats">See all cats</a>
      </div>
      <div className="drinks-section">
        <h2>Drink Menu</h2>
        <p className="description">Whisker up some joy with our purr-sonally crafted drinks, brewed to paw-fection.</p>
        <div>
          {data?.drinks.data.length ? (<div className="drink-cards">
            {data.drinks.data.map((item) => (
              <DrinkCard drink={item} key={item.id}/>
            ))}
            </div>) : (<p>Loading...</p>)}
          
        </div>
        <a href="/drinks" className="see-drinks">See all drinks</a>
      </div>
      <div className="rooms-section" loading="lazy">
        <div className="rooms-info">
          <h2 className="rooms-headline">Choose from 5 gorgeous rooms</h2>
          <a href="/rooms" className="see-rooms">See all rooms</a>
        </div>
      </div>
    </>
  );
}

export default App;
