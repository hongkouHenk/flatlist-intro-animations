import React, { useRef, useEffect } from 'react';
import {
  Animated,
  ListRenderItem,
  ListRenderItemInfo,
  SectionListRenderItem,
  Easing,
} from 'react-native';

interface Props {
  renderItem: ListRenderItem<any> | SectionListRenderItem<object>;
  args: any;
  animationDuration?: number;
  focused?: boolean;
}

const FadeItem: React.FC<Props> = ({
  renderItem,
  args,
  animationDuration = 1000,
  focused,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  const itemStyles = [
    {
      opacity,
    },
  ];

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: focused ? 1 : 0,
      duration: animationDuration,
      delay: args.index * 50,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  });

  if (!focused) {
    return null;
  }

  return <Animated.View style={itemStyles}>{renderItem(args)}</Animated.View>;
};

export default FadeItem;
