import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;

const DiveItem = ({
  renderItem,
  args,
  focused
}) => {
  const y = useRef(new Animated.Value(0)).current;
  const width = useRef(new Animated.Value(0)).current;
  const height = useRef(new Animated.Value(0)).current;
  const translateY = y.interpolate({
    inputRange: [0, 1],
    outputRange: [HEIGHT, 0]
  });
  const scaleX = width.interpolate({
    inputRange: [0, 0.67, 1],
    outputRange: [1, 0.5, 1]
  });
  const scaleY = height.interpolate({
    inputRange: [0, 0.67, 1],
    outputRange: [1, 0.5, 1]
  });
  const itemStyles = [{
    transform: [{
      translateY
    }, {
      scaleX
    }, {
      scaleY
    }]
  }];
  useEffect(() => {
    Animated.parallel([Animated.spring(y, {
      toValue: focused ? 1 : 0,
      delay: args.index * 50,
      useNativeDriver: true
    }), Animated.spring(width, {
      toValue: focused ? 1 : 0,
      delay: args.index * 50,
      useNativeDriver: true
    }), Animated.spring(height, {
      toValue: focused ? 1 : 0,
      delay: args.index * 50,
      useNativeDriver: true
    })]).start();
  });

  if (!focused) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Animated.View, {
    style: itemStyles
  }, renderItem(args));
};

export default DiveItem;
//# sourceMappingURL=Dive.js.map