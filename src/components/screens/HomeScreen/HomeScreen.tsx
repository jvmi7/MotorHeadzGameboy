import { useRecoilState } from 'recoil';
import { sound } from '../../../state';
import './HomeScreen.scss';

function HomeScreen() {
  const [soundState, setSoundState] = useRecoilState(sound);

  console.log(soundState);

  return <div>HomeScreen</div>;
}

export default HomeScreen;
