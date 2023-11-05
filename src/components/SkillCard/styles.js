import styled from 'styled-components/native';

export const Title = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.SkillCard.title};
  font-size: 22px;
`;

export const ButtonSkill = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({theme}) => theme.SkillCard.backgroundColor};
  padding: 15px;
  border-radius: 50px;
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
