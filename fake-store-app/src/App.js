import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
