import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';

const RotateItem = ({
  renderItem,
  args,
  animationDuration = 700,
  focused
}) => {
  const rotateX = useRef(new Animated.Value(0)).current;
  const translateX = rotateX.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '360deg']
  });
  const itemStyles = [{
    transform: [{
      rotateX: translateX
    }]
  }];
  useEffect(() => {
    Animated.timing(rotateX, {
      toValue: focused ? 1 : 0,
      duration: animationDuration,
      delay: args.index * 50,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }, [focused]);

  if (!focused) {
    return null;
  }

  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Animated.View, {
    style: itemStyles
  }, renderItem(args)));
};

export default RotateItem;
//# sourceMappingURL=Rotate.js.map