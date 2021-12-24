import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

class Header extends Component {
  state = {
    gretting: '',
    loading: false,
    image: '',
    user: '',
  };

  handleAddImageAvatar = async data => {
    const {image} = this.state;

    if (data.didCancel) {
      Alert.alert('Aviso', 'Seleção de imagem cancelada');
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
      <View style={styles.containerHeader}>
        <View>
          <Text style={styles.title}>Welcome,{user}</Text>
          <Text style={styles.grettings}>
            {gretting || 'Não foi possivel definir a hora atual'}
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() =>
            launchImageLibrary(
              {mediaType: 'photo', selectionLimit: 1, quality: 1},
              this.handleAddImageAvatar,
            )
          }>
          {image ? (
            <>
              <Image style={styles.avatar} source={{uri: image}} />
              <MaterialIcons
                style={styles.addIcon}
                name="add-a-photo"
                color="#FFF"
                size={24}
              />
            </>
          ) : (
            <MaterialCommunityIcons
              name="camera-plus"
              size={60}
              color="#FFF"
              style={{marginBottom: 8}}
            />
          )}
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Header;
