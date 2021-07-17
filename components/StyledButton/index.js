import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';

// styles //
import styles from './style';

const StyledButton = ({ type, title = 'Custom Button', onPress }) => {
  const bgColor = type === 'primary' ? '#171820cc' : '#ffffffa6';
  const color = type === 'primary' ? '#ffffff' : '#171a20';
  return (
    <View style={styles.container}>
      <Pressable
        style={{ ...styles.btn, backgroundColor: bgColor }}
        onPress={onPress}
      >
        <Text
          style={{
            ...styles.title,
            color: color,
          }}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
