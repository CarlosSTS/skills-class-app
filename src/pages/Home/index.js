import React, {Component} from 'react';
import {FlatList, Keyboard, Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {Header, Button, SkillCard} from '../../components';

import {Container, Input, Title} from './styles';

class Home extends Component {
  state = {
    newSkill: '',
    loading: false,
    skills: [],
  };

  handleNewAddSkill = () => {
    const {newSkill, skills} = this.state;
    if (newSkill === '') {
      Alert.alert('Erro ao adicionar uma skill', 'Você precisa adicionar algo');
      return;
    }
    if (skills.find(skill => skill === newSkill)) {
      Alert.alert(
        'Erro ao adicionar uma skill',
        'Você já adicionou essa skill',
      );
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
      <Container>
        <Header />

        <Input
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

        <Title> My Skills: {skills.length}</Title>
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
      </Container>
    );
  }
}

export default Home;
