import {darken} from 'polished';

const primaryColor = '#7159C1';

const dark = {
  backgroundColor: '#121015',
  title: '#FFF',
  version: '#FFF',
  statusBarColor: darken(0.4, primaryColor),
  button: {
    title: '#FFF',
    backgroundColor: '#7159C1',
    backgroundColorDisabled: '#737380',
    icon: '#FFF',
    loading: '#FFF',
  },
  input: {
    color: '#FFF',
    icon: '#FFF',
    activeColor: '#A370F7',
    errorColor: '#F53030',
  },
};

export default dark;
