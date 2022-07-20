
import './App.css';
import { HeaderContainer } from './components/HeaderContainer/HeaderContainer';
import { DataContainer } from './components/DataContainer/DataContainer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <DataContainer />
    </div>
  );
}

export default App;
