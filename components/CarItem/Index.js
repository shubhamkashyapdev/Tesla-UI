import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';

// styles //
import styles from './style';

const CarItem = ({ model, tagline, taglineCta, bgImg }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={bgImg} style={styles.image} />
      <View style={styles.contentBox}>
        <Text style={styles.title}>{model}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subTitleCta}>{taglineCta}</Text>{' '}
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <StyledButton
          type='primary'
          title='custom order'
          onPress={() => console.warn('custom order was pressed!!')}
        />
        <StyledButton
          type='secondary'
          title='existing inventory'
          onPress={() =>
            console.warn('existing inventory button was pressed!!')
          }
        />
      </View>
    </View>
  );
};

export default CarItem;
