import Reactotron, {
  openInEditor,
  networking,
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    tron: any;
  }
}

export default Reactotron.configure()
.useReactNative()
.use(reactotronRedux())
.use(openInEditor())
.use(networking())
.connect();

console.tron = Reactotron;
