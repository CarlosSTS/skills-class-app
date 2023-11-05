import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: ${({disabled, theme}) =>
    !disabled
      ? theme.button.backgroundColor
      : theme.button.backgroundColorDisabled};
  margin-top: 8px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.button.icon};
  padding-right: 16px;
`;

export const Loading = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.button.loading,
  size: 'small',
}))`
  padding-right: 16px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.button.title};
  font-size: 18px;
`;
