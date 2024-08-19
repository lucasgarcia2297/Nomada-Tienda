import './App.css'
import { Header } from './Components/Header.jsx';
import { Footer } from './Components/Footer.jsx';
import { Home } from './pages/Home.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main-content">
        <Home/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
