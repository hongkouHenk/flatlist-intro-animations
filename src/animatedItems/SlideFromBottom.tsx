import React, { useRef, useEffect } from 'react';
import {
  Animated,
  Dimensions,
  ListRenderItem,
  SectionListRenderItem,
  ListRenderItemInfo,
} from 'react-native';

interface Props {
  renderItem: ListRenderItem<any> | SectionListRenderItem<object>;
  args: any;
  focused?: boolean;
}

const HEIGHT = Dimensions.get('window').height;

const SlideFromBottomItem: React.FC<Props> = ({
  renderItem,
  args,
  focused,
}) => {
  const y = useRef(new Animated.Value(0)).current;

  const translateY = y.interpolate({
    inputRange: [0, 1],
    outputRange: [HEIGHT, 0],
  });

  const itemStyles = [
    {
      transform: [
        {
          translateY,
        },
      ],
    },
  ];

  useEffect(() => {
    Animated.spring(y, {
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

export default SlideFromBottomItem;
