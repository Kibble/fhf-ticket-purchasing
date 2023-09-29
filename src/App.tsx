import './App.css';
import { Configuration } from "@react-md/layout";
import Checkout from './pages/Checkout';
import Tickets from './pages/Tickets';

function App() {
  return (
    <Configuration>
      <div className="App content">
        <Tickets />
      </div>
    </Configuration>
  );
}

export default App;
