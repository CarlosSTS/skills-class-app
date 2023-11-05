import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.backgroundColor};
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.title};
  font-size: 24px;
  margin: 50px 0;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 46px;
  background-color: ${({theme}) => theme.input.background};
  color: ${({theme}) => theme.input.color};
  font-size: 18px;
  padding: ${Platform.OS === 'ios' ? 15 : 10}px;
  margin: 30px 0;
  border-radius: 8px;
`;
