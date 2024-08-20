import './App.css'
import { Header } from './Components/Header.jsx';
import { Footer } from './Components/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main-content">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
