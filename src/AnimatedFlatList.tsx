import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

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
  flatlistRef?:
    | ((instance: FlatList<object> | null) => void)
    | React.RefObject<FlatList<object>>;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  refreshing?: boolean;
  onRefresh?: () => void;
  keyExtractor?: (item: object, index: number) => string;
}

const AnimatedFlatList: React.FC<Props> = ({
  data,
  renderItem,
  animationType,
  animationDuration,
  focused,
  flatlistRef,
  onScroll,
  refreshing,
  onRefresh,
  keyExtractor,
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
      ref={flatlistRef}
      data={data}
      renderItem={handleRenderItem}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onScroll={onScroll}
      keyExtractor={keyExtractor}
    />
  );
};

export default AnimatedFlatList;
