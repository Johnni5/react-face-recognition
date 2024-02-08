import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="App">
      <ParticlesBg
        type="cobweb"
        color="#ff0000"
        num={200}
        bg={true}
        // "color"
        // "ball"
        // "lines"
        // "thick"
        // "circle"
        // "cobweb"
        // "polygon"
        // "square"
        // "tadpole"
        // "fountain"
        // "random"
        // "custom"
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* {<FaceRecognition />} */}
    </div>
  );
}

export default App;
