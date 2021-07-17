import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';

// assets //
import CarListData from '../CarListData';

// styles //
import styles from './styles';

// components //
import CarItem from '../CarItem/Index';

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CarListData}
        renderItem={({ item, index }) => (
          <CarItem
            key={index}
            tagline={item.tagline}
            taglineCta={item.taglineCta}
            model={item.name}
            bgImg={item.image}
          />
        )}
        snapToAlignment='start'
        decelerationRate='fast'
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarList;
