import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer title="¡Bienvenidos a Petshop!"></ItemListContainer>
    </>
  );
};
export default App;
