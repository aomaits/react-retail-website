import './App.css';
import Product from "./components/Product";
import products from "./data/products.json"

function App() {
  return (
    <div className="bg-blue-400" >
      <div>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div> 
  );
}

export default App;
