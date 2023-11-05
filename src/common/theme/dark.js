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
    background: '#1F1E25',
    placeholder: '#666',
  },
  header: {
    title: '#FFF',
    grettings: '#FFF',
    icon: '#FFF',
    avatar: '#121015',
  },
  SkillCard: {
    title: '#FFF',
    backgroundColor: '#1F1E25',
  },
};

export default dark;
