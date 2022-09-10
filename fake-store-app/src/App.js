import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Categories from "./components/categories/Categories";
function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%" }}>
          <Categories />
        </div>
        <div style={{ width: "100%" }}>
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
