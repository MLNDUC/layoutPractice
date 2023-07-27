import './App.css'
import Article from './components/article/Article'
import Aside from './components/aside/aside'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {

  return (
    <div className="app">
      <Header />
      <div className="mainContainer">
        <Aside />
        <Article />
      </div>
      <Footer />
    </div>
  )
}

export default App
