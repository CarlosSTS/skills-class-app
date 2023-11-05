import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({
    name: 'skillsclass',
  })
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear();
}
