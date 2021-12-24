import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  grettings: {
    color: '#FFF',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#121015',
  },
  containerHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

export default styles;
