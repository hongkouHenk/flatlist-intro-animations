import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;

const SlideFromBottomItem = ({
  renderItem,
  args,
  focused
}) => {
  const y = useRef(new Animated.Value(0)).current;
  const translateY = y.interpolate({
    inputRange: [0, 1],
    outputRange: [HEIGHT, 0]
  });
  const itemStyles = [{
    transform: [{
      translateY
    }]
  }];
  useEffect(() => {
    Animated.spring(y, {
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

export default SlideFromBottomItem;
//# sourceMappingURL=SlideFromBottom.js.map