import logo from './logo.svg';
import './App.css';
import StripePayement from '../src/components/stripe'

function App() {
  return (
    <div className="App">
      <StripePayement>
      </StripePayement>
    </div>
  );
}

export default App;
