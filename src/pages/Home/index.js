import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Header from '../../components/Header';
import Button from '../../components/Button';
import SkillCard from '../../components/SkillCard';

import styles from './styles';

class Home extends Component {
  state = {
    newSkill: '',
    loading: false,
    skills: [],
  };

  handleNewAddSkill = () => {
    const {newSkill, skills} = this.state;
    if (newSkill === '') {
      Alert.alert('Oops', 'Você precisa adicionar uma skill');
      return;
    }
    if (skills.find(skill => skill === newSkill)) {
      Alert.alert('Oops', 'Você já adicionou essa skill');
      return;
    }

    this.setState({
      skills: [...skills, newSkill],
      newSkill: '',
    });
    Keyboard.dismiss();
  };

  handleRemoveSkill = item => {
    const {skills} = this.state;

    Alert.alert(
      'Aviso',
      `Deseja deletar: ${item}`,
      [
        {
          text: 'Não 🙏🏻',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            this.setState({skills: skills.filter(skill => skill !== item)});
          },
        },
      ],
      {cancelable: false},
    );
  };

  async componentDidMount() {
    const {loading} = this.state;

    this.setState({loading: true});

    const skills = await AsyncStorage.getItem('skills');

    if (skills) {
      this.setState({skills: JSON.parse(skills)});
    }
    this.setState({loading: false});
  }

  componentDidUpdate(_, prevState) {
    const {skills} = this.state;

    if (prevState.skills !== skills) {
      AsyncStorage.setItem('skills', JSON.stringify(skills));
    }
  }

  render() {
    const {newSkill, skills, loading} = this.state;

    return (
      <View style={styles.container}>
        <Header />
        <TextInput
          style={styles.input}
          autoCapitalize="words"
          autoCorrect={false}
          placeholder="New Skill"
          placeholderTextColor="#666"
          value={newSkill}
          onChangeText={text => this.setState({newSkill: text})}
          returnKeyType="send"
          onSubmitEditing={this.handleNewAddSkill}
        />

        <Button icon="plus-circle" onPress={this.handleNewAddSkill}>
          ADD
        </Button>

        <Text style={[styles.title, {marginVertical: 50}]}>
          My Skills: {skills.length}
        </Text>

        {loading ? (
          <SkillCard>Loading...</SkillCard>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<SkillCard>No skill registered</SkillCard>}
            data={skills}
            keyExtractor={() => Math.random()}
            renderItem={({item}) => (
              <SkillCard onPress={() => this.handleRemoveSkill(item)}>
                {item}
              </SkillCard>
            )}
          />
        )}
      </View>
    );
  }
}

export default Home;
