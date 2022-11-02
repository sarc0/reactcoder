import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Productos from "./containers/Productos";
const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer title="¡Bienvenidos a AnimeLand!" />
      <Productos />
    </>
  );
};
export default App;
