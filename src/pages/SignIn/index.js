import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Feather from 'react-native-vector-icons/Feather';

import Reinput from 'reinput';

import Button from '../../components/Button';
import {version} from '../../../package.json';

import styles from './styles';

class SignIn extends Component {
  state = {
    newUser: '',
    error: '',
    loading: false,
  };

  async componentDidMount() {
    const {newUser} = this.state;

    const userName = await AsyncStorage.getItem('user');

    this.setState({
      newUser: userName || '',
    });
  }

  handleSign = async () => {
    const {newUser, loading} = this.state;
    const {navigation} = this.props;

    if (newUser === '') {
      this.setState({error: 'Nome não pode ser nulo'});
      return;
    }

    if (newUser.length < 3) {
      this.setState({error: 'Nome com no mínimo 3 digitos'});
      return;
    }

    this.setState({loading: true});
    await AsyncStorage.setItem('user', newUser);
    this.setState({loading: false});
    navigation.navigate('Home');
  };

  render() {
    const {error, newUser, loading} = this.state;
    return (
      <>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{flex: 1}}>
            <View style={styles.container}>
              <View>
                <Text style={styles.title}>Faça seu acesso</Text>
              </View>
              <Reinput
                maxLength={9}
                value={newUser}
                onChangeText={text => this.setState({newUser: text})}
                onSubmitEditing={this.handleSign}
                label="Adicione seu nome"
                icon={
                  <Feather
                    name="user"
                    size={20}
                    color={error ? '#F53030' : '#FFF'}
                  />
                }
                error={error}
                activeColor="#A370F7"
                color="#FFF"
                returnKeyType="send"
                errorColor="#F53030"
              />
              <Button loading={loading} icon="log-in" onPress={this.handleSign}>
                {loading ? 'Acessando...' : 'Acessar'}
              </Button>
              <Text style={styles.version}>{version}</Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </>
    );
  }
}

export default SignIn;
