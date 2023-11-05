import {Platform} from 'react-native';
import {darken} from 'polished';

const primaryColor = '#7159C1';

const light = {
  backgroundColor: Platform.OS === 'ios' ? '#EFEFF4' : '#F5F5F9',
  title: '#000',
  version: '#000',
  statusBarColor: darken(0.5, primaryColor),
  button: {
    title: '#000',
    backgroundColor: '#7159C1',
    backgroundColorDisabled: '#737380',
    icon: '#000',
    loading: '#000',
  },
  input: {
    color: '#000',
    icon: '#000',
    activeColor: '#A370F7',
    errorColor: '#F53030',
  },
};

export default light;
