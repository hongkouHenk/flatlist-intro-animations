import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

type dishType = {
  id: string;
  title: string;
  image: string;
  imageType: string;
  type: string;
};

export interface Props {
  item: dishType;
}

const MyCustomItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.cover} />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <View style={styles.footerView}>
        <Text style={styles.footerLabel}>{item.type.toUpperCase()}</Text>
      </View>
    </View>
  );
};

export default MyCustomItem;
