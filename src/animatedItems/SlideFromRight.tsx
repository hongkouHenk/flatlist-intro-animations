import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  ListRenderItem,
  SectionListRenderItem,
  SectionListRenderItemInfo,
  ListRenderItemInfo,
} from 'react-native';

interface Props {
  renderItem: ListRenderItem<any> | SectionListRenderItem<object>;
  args: any;
  focused?: boolean;
}

const WIDTH = Dimensions.get('window').width;

const SlideFromRightItem: React.FC<Props> = ({ renderItem, args, focused }) => {
  const x = useRef(new Animated.Value(0)).current;

  const translateX = x.interpolate({
    inputRange: [0, 1],
    outputRange: [WIDTH, 0],
  });

  const itemStyles = [
    {
      transform: [
        {
          translateX,
        },
      ],
    },
  ];

  useEffect(() => {
    Animated.spring(x, {
      toValue: focused ? 1 : 0,
      delay: args.index * 50,
      useNativeDriver: true,
    }).start();
  });

  if (!focused) {
    return null;
  }

  return <Animated.View style={itemStyles}>{renderItem(args)}</Animated.View>;
};

export default SlideFromRightItem;
