import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';

import {
  AddPhotoIcon,
  Avatar,
  CameraIcon,
  ContainerHeader,
  Grettings,
  Title,
} from './styles';

class Header extends Component {
  state = {
    gretting: '',
    loading: false,
    image: '',
    user: '',
  };

  handleClearPhoto = async () => {
    try {
      await AsyncStorage.removeItem('image');
      this.setState({image: ''});
    } catch (error) {
    } finally {
    }
  };

  handleAddImageAvatar = async data => {
    if (data.didCancel) {
      return;
    }
    if (data.error) {
      Alert.alert('Aviso', 'Erro ao enviar imagem');
      return;
    }
    const {uri} = data.assets[0];

    if (!uri) {
      Alert.alert('Aviso', 'Imagem não encontrada');
      return;
    }
    await AsyncStorage.setItem('image', uri);
    this.setState({image: uri});
  };

  handleSelectImage = async () => {
    const {image} = this.state;

    if (image) {
      Alert.alert(
        'Seleção de imagem',
        'O que você gostaria de fazer ?',
        [
          {
            text: 'Alterar imagem de perfil',
            style: 'default',
            onPress: () =>
              launchImageLibrary(
                {mediaType: 'photo', selectionLimit: 1, quality: 1},
                this.handleAddImageAvatar,
              ),
          },
          {
            text: 'Remover foto',
            style: 'default',
            onPress: this.handleClearPhoto,
          },
          {
            text: 'Cancelar',
            style: 'cancel',
            onPress: () => {},
          },
        ],
        {cancelable: true},
      );
      return;
    }
    await launchImageLibrary(
      {mediaType: 'photo', selectionLimit: 1, quality: 1},
      this.handleAddImageAvatar,
    );
  };

  async componentDidMount() {
    const {gretting, user, image, loading} = this.state;
    this.setState({loading: true});

    const userName = await AsyncStorage.getItem('user');
    const userImage = await AsyncStorage.getItem('image');

    this.setState({
      user: userName || '',
      image: userImage || '',
      loading: false,
    });

    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      this.setState({gretting: 'Good morning.'});
    } else if (currentHour >= 12 && currentHour < 18) {
      this.setState({gretting: 'Good afternoon.'});
    } else {
      this.setState({gretting: 'Good night.'});
    }
  }

  render() {
    const {user, image, loading, gretting} = this.state;
    return (
      <ContainerHeader>
        <View>
          <Title>Welcome,{user}</Title>
          <Grettings>
            {gretting || 'Não foi possivel definir a hora atual'}
          </Grettings>
        </View>
        <TouchableWithoutFeedback onPress={this.handleSelectImage}>
          {image ? (
            <>
              <Avatar source={{uri: image}} />
              <AddPhotoIcon onPress={this.handleSelectImage} />
            </>
          ) : (
            <CameraIcon />
          )}
        </TouchableWithoutFeedback>
      </ContainerHeader>
    );
  }
}

export default Header;
