import './App.css'
import { Header } from './Components/Header.jsx';
import { Footer } from './Components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main-content">
        <h1>
          Bienvenido a Nómada
        </h1>
      </main>
      <Footer/>
    </div>
  )
}

export default App
