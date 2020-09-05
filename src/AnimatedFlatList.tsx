import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import {
  SlideFromBottomAnimatedItem,
  SlideFromRightAnimatedItem,
  FadeAnimatedItem,
  AnimationType,
  RotateAnimatedItem,
  DiveAnimatedItem,
} from '.';

interface Props {
  data: Array<any>;
  renderItem: (item: any) => JSX.Element;
  animationType: AnimationType;
  animationDuration?: number;
  focused?: boolean;
}

const AnimatedFlatList: React.FC<Props> = ({
  data,
  renderItem,
  animationType,
  animationDuration,
  focused,
}) => {
  const handleRenderItem: any = (args: ListRenderItemInfo<any>) => {
    switch (animationType) {
      case AnimationType.SlideFromBottom:
        return (
          <SlideFromBottomAnimatedItem
            renderItem={renderItem}
            args={args}
            focused={focused}
          />
        );
      case AnimationType.SlideFromRight:
        return (
          <SlideFromRightAnimatedItem
            renderItem={renderItem}
            args={args}
            focused={focused}
          />
        );
      case AnimationType.Fade:
        return (
          <FadeAnimatedItem
            renderItem={renderItem}
            args={args}
            animationDuration={animationDuration}
            focused={focused}
          />
        );
      case AnimationType.Rotate:
        return (
          <RotateAnimatedItem
            renderItem={renderItem}
            args={args}
            animationDuration={animationDuration}
            focused={focused}
          />
        );
      case AnimationType.Dive:
        return (
          <DiveAnimatedItem
            renderItem={renderItem}
            args={args}
            focused={focused}
          />
        );
      default:
        return;
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={handleRenderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default AnimatedFlatList;
