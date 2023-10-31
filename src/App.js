import Imageconsole from './parts/Imageconsole';
import SecondaryProducts from './parts/SecondaryProducts';
import Footer from './parts/Footer';
import Header from './parts/Header';
import MainProducts from './parts/MainProducts';

function App() {
  console.log(window.scrollY)
  console.log(window.innerHeight)

  return (
    <div className='frontend'>
      <Header />
      <MainProducts />
      <Imageconsole />
      <SecondaryProducts />
      <Footer />
    </div>
  );
}

export default App;
