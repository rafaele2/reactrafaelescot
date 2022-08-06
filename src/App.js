import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }

  return (
    <div className="App"> 
      <Navbar/>
      <ItemListContainer greeting='Bienvenido a compra online'/>
      <ItemDetailContainer />
      <Counter stock={10} onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;
