import './App.css';
import Navbar from './components/Navbar/Navbar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }

  return (
    <div className="App"> 
      <Navbar />
      <ItemListContainer greeting='Bienvenido a compra online'/>
      <Counter stock={10} onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;
