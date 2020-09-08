import React, { useEffect, useRef } from 'react';
import {
  View,
  Animated,
  ListRenderItem,
  SectionListRenderItem,
  Easing,
  ListRenderItemInfo,
} from 'react-native';

interface Props {
  renderItem: ListRenderItem<any> | SectionListRenderItem<object>;
  args: any;
  animationDuration?: number;
  focused?: boolean;
}

const RotateItem: React.FC<Props> = ({
  renderItem,
  args,
  animationDuration = 700,
  focused,
}) => {
  const rotateX = useRef(new Animated.Value(0)).current;

  const translateX = rotateX.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '360deg'],
  });

  const itemStyles = [
    {
      transform: [
        {
          rotateX: translateX,
        },
      ],
    },
  ];

  useEffect(() => {
    Animated.timing(rotateX, {
      toValue: focused ? 1 : 0,
      duration: animationDuration,
      delay: args.index * 50,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  if (!focused) {
    return null;
  }

  return (
    <View>
      <Animated.View style={itemStyles}>{renderItem(args)}</Animated.View>
    </View>
  );
};

export default RotateItem;
