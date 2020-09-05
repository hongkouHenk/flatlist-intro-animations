import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

const FadeItem = ({
  renderItem,
  args,
  animationDuration = 1000,
  focused
}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const itemStyles = [{
    opacity
  }];
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: focused ? 1 : 0,
      duration: animationDuration,
      delay: args.index * 50,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  });

  if (!focused) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Animated.View, {
    style: itemStyles
  }, renderItem(args));
};

export default FadeItem;
//# sourceMappingURL=Fade.js.map