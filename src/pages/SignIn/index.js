import React, {useCallback, useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {version} from '../../../package.json';
import {Button} from '../../components';

import {Container, Icon, Input, Title, Version} from './styles';

const SignIn = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newUser, setNewUser] = useState('');

  const handleSetUser = useCallback(async () => {
    const userName = await AsyncStorage.getItem('user');

    setNewUser(userName || '');
  }, []);

  useEffect(() => {
    handleSetUser();
  }, [handleSetUser]);

  const handleSign = useCallback(async () => {
    try {
      if (!newUser) {
        setError('Nome não pode ser nulo');
        return;
      }

      if (newUser.length < 3) {
        setError('Nome com no mínimo 3 digitos');
        return;
      }

      setLoading(true);
      await AsyncStorage.setItem('user', newUser);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro no acesso', 'Ocorreu um erro ao acessar');
    } finally {
      setLoading(false);
    }
  }, [navigation, newUser]);

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <Container>
            <View>
              <Title>Faça seu acesso</Title>
            </View>
            <Input
              maxLength={9}
              value={newUser}
              onChangeText={setNewUser}
              onSubmitEditing={handleSign}
              label="Adicione seu nome"
              icon={<Icon error={error} name="user" size={20} />}
              error={error}
              returnKeyType="send"
            />
            <Button loading={loading} icon="log-in" onPress={handleSign}>
              {loading ? 'Acessando...' : 'Acessar'}
            </Button>
            <Version>{version}</Version>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
