import Header from './components/Header/Header.js';
import NossaAbordagem from './components/NossaAbordagem/NossaAbordagem.js';
import SobreNos from './components/SobreNos/SobreNos.js';
import Valores from './components/Valores/Valores.js';
import Footer from './components/Footer/Footer.js'


function App() {
  return (
    <div className="App">
      <Header />
      <SobreNos />
      <Valores/>
      <NossaAbordagem/>
      <Footer />
    </div>
  );
}

export default App;

