import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;

const SlideFromRightItem = ({
  renderItem,
  args,
  focused
}) => {
  const x = useRef(new Animated.Value(0)).current;
  const translateX = x.interpolate({
    inputRange: [0, 1],
    outputRange: [WIDTH, 0]
  });
  const itemStyles = [{
    transform: [{
      translateX
    }]
  }];
  useEffect(() => {
    Animated.spring(x, {
      toValue: focused ? 1 : 0,
      delay: args.index * 50,
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

export default SlideFromRightItem;
//# sourceMappingURL=SlideFromRight.js.map