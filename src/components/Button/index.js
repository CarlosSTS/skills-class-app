import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

const Button = ({icon = '', loading, children = '', ...rest}) => {
  return (
    <TouchableOpacity
      {...rest}
      disabled={loading}
      activeOpacity={0.7}
      style={[styles.button, {backgroundColor: loading ? '#1F1E25' : '#A370F7'}]}>
      <>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          icon && <Feather name={icon} size={20} color="#FFF" />
        )}
        <Text style={styles.buttonText}>{children}</Text>
      </>
    </TouchableOpacity>
  );
};

export default Button;
