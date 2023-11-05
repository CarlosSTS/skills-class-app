import Reinput from 'reinput';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.backgroundColor};
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.title};
  margin: 32px 0 24px;
`;

export const Input = styled(Reinput).attrs(({theme}) => ({
  color: theme.input.color,
  errorColor: theme.input.errorColor,
  activeColor: theme.input.activeColor,
}))``;

export const Icon = styled(Feather)`
  color: ${({error, theme}) =>
    error ? theme.input.errorColor : theme.input.icon};
  padding-right: 16px;
`;

export const Version = styled.Text`
  position: absolute;
  bottom: 8px;
  font-size: 16px;
  color: ${({theme}) => theme.version};
  font-weight: bold;
`;
