import logo from './images/logo.svg';
import './App.css';
import heroImg from './/images/kcc-hero-img.svg';
import CatCard from ".//Components/CatCard"
import DrinkCard from './/Components/DrinkCard';
import InfoPage from './/Components/InfoPage';

function App() {
  return (
    <>
      <div className="hero">
        <img src={heroImg} />
        <div className="welcome">
          <h1>Sip purr-fect brews & cuddle adorable cats</h1>
          <p>Coffee, fluffy friends, and sweet boba await. Relax, sip, and enjoy your day with us!</p>
          <div className="welcome-buttons">
            <a href="/cats" className="welcome-cats">See our cats</a>
            <a href="/reserve" className="welcome-reserve">Make a reservation</a>
          </div>
        </div>
      </div>
      <div>
        <h2>Our Cats</h2>
        <p>Get to know your next fuzzy study buddy. Click a cat to learn more and create a reservation with them.</p>
        <div> 
          <CatCard />
        </div>
      </div>
      <div>
        <h2>Drink Menu</h2>
        <p>Lorem Ipsum</p>
        <div>
          <DrinkCard />
        </div>
      </div>
      <div>
        {/* TODO: rooms */}
      </div>
      <div>
        <InfoPage />
      </div>
    </>
  );
}

export default App;
