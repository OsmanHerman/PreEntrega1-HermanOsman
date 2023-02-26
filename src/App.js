import NavBar from "./Components/NavBar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a nuestro E-commerce"} />
    </div>
  );
}

export default App;
