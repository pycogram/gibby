import logo from './logo.svg';
import './App.css';
import { Page } from './Page';

const objIcon = {
  tg: require('./icon/tg.png'),
  x: require('./icon/twitter.png'),
  ray: require('./icon/ray.png'),
  dext: require('./icon/dext.png'),
  dexs: require('./icon/dexs.png')
}
const objImg = {
  logo1: require('./pic/logo1.png'),
  logo2: require('./pic/photo_2024-07-09_02-09-49.jpg'),
  logo3: require('./pic/photo_2024-07-09_02-09-40.jpg')
}
const objGif = {
  gif1: require('./pic/photo_2024-07-09_02-10-12.jpg'),
  gif2: require('./pic/photo_2024-07-09_02-10-09.jpg'),
  gif3: require('./pic/photo_2024-07-09_02-10-00.jpg'),
  gif4: require('./pic/photo_2024-07-09_02-09-52.jpg'),
  gif5: require('./pic/photo_2024-07-09_02-09-24.jpg'),
  gif6: require('./pic/photo_2024-07-09_02-08-58.jpg'),
  gif7: require('./pic/photo_2024-07-09_02-08-45.jpg')
}

const testImg = require('./icon/dexs.png');

function App() {
  return (
    <div className="App" >
      < Page objIconPro = {objIcon} objImgPro = {objImg} objGifPro = {objGif} />
    </div>
  );
}

export default App;
