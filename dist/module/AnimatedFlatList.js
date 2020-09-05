import React from 'react';
import { FlatList } from 'react-native';
import { SlideFromBottomAnimatedItem, SlideFromRightAnimatedItem, FadeAnimatedItem, AnimationType, RotateAnimatedItem, DiveAnimatedItem } from '.';

const AnimatedFlatList = ({
  data,
  renderItem,
  animationType,
  animationDuration,
  focused
}) => {
  const handleRenderItem = args => {
    switch (animationType) {
      case AnimationType.SlideFromBottom:
        return /*#__PURE__*/React.createElement(SlideFromBottomAnimatedItem, {
          renderItem: renderItem,
          args: args,
          focused: focused
        });

      case AnimationType.SlideFromRight:
        return /*#__PURE__*/React.createElement(SlideFromRightAnimatedItem, {
          renderItem: renderItem,
          args: args,
          focused: focused
        });

      case AnimationType.Fade:
        return /*#__PURE__*/React.createElement(FadeAnimatedItem, {
          renderItem: renderItem,
          args: args,
          animationDuration: animationDuration,
          focused: focused
        });

      case AnimationType.Rotate:
        return /*#__PURE__*/React.createElement(RotateAnimatedItem, {
          renderItem: renderItem,
          args: args,
          animationDuration: animationDuration,
          focused: focused
        });

      case AnimationType.Dive:
        return /*#__PURE__*/React.createElement(DiveAnimatedItem, {
          renderItem: renderItem,
          args: args,
          focused: focused
        });

      default:
        return;
    }
  };

  return /*#__PURE__*/React.createElement(FlatList, {
    data: data,
    renderItem: handleRenderItem,
    keyExtractor: (item, index) => index.toString()
  });
};

export default AnimatedFlatList;
//# sourceMappingURL=AnimatedFlatList.js.map