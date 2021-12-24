import React from 'react';
import {TouchableOpacity,Text} from 'react-native';

import styles from './styles';

const SkillCard = ({children = '', ...rest}) => {
  return (
    <TouchableOpacity {...rest}
      activeOpacity={0.7}
      style={styles.buttonSkill}>
      <Text style={styles.skill}>{children}</Text>
    </TouchableOpacity>
  );
};

export default SkillCard;
