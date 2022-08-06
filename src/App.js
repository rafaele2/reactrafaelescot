import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }

  return (
    <div className="App"> 
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<ItemListContainer greeting='Listado Productos'/>  } />
          <Route path='detail/:productId' element={  <ItemDetailContainer greeting='listado filtrado' />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        </Routes>
        <Counter stock={10} onAdd={handleOnAdd}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
