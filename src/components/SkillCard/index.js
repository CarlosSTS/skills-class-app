import React from 'react';

import {ButtonSkill, Title} from './styles';

const SkillCard = ({children = '', ...rest}) => {
  return (
    <ButtonSkill {...rest} activeOpacity={0.7}>
      <Title>{children}</Title>
    </ButtonSkill>
  );
};

export default SkillCard;
