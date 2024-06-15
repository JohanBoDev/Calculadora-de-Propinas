import logo from './logo.svg';
import './App.css';
import TipCalculator from './TipCalculator';

function App() {
  return (
    <>
    <TipCalculator />
    <footer className="text-center text-white mt-8">
      <p>
        Hecho con{' '}
        <span role="img" aria-label="corazón">
          ❤️
        </span>{' '}
        por{' '}
        <a
          href="https://github.com/johanBoDev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Johan Bohorquez
        </a>
      </p>  
    </footer>
     </>
  );
}

export default App;
