import './App.css'
import ClassBasedComponent from './components/class-based-component.jsx'
import FunctionalComponents from './components/functional-based-component.jsx'
import ProductList from './components/products/index.jsx'
const DummyProducts = ["Product 1", "Product 2", "Product 3"]
function App() {

  return (
    <div>
      <h1>React concepts</h1>
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalComponents /> */}
      <ProductList DummyProducts={DummyProducts} name="Chris" city="Ife" />
    </div>
  )
}

export default App
