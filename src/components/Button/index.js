import React from 'react';

import {Container, ButtonText, Icon, Loading} from './styles';

const Button = ({icon = '', loading, children = '', ...rest}) => {
  return (
    <Container {...rest} disabled={loading} activeOpacity={0.7}>
      <>
        {loading ? <Loading /> : icon && <Icon name={icon} size={20} />}
        <ButtonText>{children}</ButtonText>
      </>
    </Container>
  );
};

export default Button;
