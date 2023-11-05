import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ContainerHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddPhotoIcon = styled(MaterialIcons).attrs({
  name: 'add-a-photo',
  size: 24,
})`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${({theme}) => theme.header.icon};
`;

export const CameraIcon = styled(MaterialCommunityIcons).attrs({
  name: 'camera-plus',
  size: 60,
})`
  margin-bottom: 8px;
  color: ${({theme}) => theme.header.icon};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.header.title};
`;

export const Grettings = styled.Text`
  color: ${({theme}) => theme.header.grettings};
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${({theme}) => theme.header.avatar};
`;
