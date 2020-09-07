import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleProp,
  ViewStyle,
  Insets,
  ViewToken,
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
  contentContainerStyle?: StyleProp<ViewStyle>;
  scrollIndicatorInsets?: Insets;
  flatlistRef?:
    | ((instance: FlatList<object> | null) => void)
    | React.RefObject<FlatList<object>>;
  ListEmptyComponent?: React.ComponentType<any> | React.ReactElement;
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement;
  ListFooterComponent?: React.ComponentType<any> | React.ReactElement;
  numColumns?: number;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onViewableItemsChanged?: (info: {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }) => void;
  viewabilityConfig?: any;
  refreshing?: boolean;
  onRefresh?: () => void;
  keyExtractor?: (item: object, index: number) => string;
}

const AnimatedFlatList: React.FC<Props> = ({
  data,
  renderItem,
  animationType,
  animationDuration,
  focused = true,
  flatlistRef,
  contentContainerStyle,
  scrollIndicatorInsets,
  ListEmptyComponent,
  ListHeaderComponent,
  ListFooterComponent,
  numColumns,
  onScroll,
  onViewableItemsChanged,
  viewabilityConfig,
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
      contentContainerStyle={contentContainerStyle}
      scrollIndicatorInsets={scrollIndicatorInsets}
      data={data}
      renderItem={handleRenderItem}
      refreshing={refreshing}
      onRefresh={onRefresh}
      ListEmptyComponent={ListEmptyComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      numColumns={numColumns}
      onScroll={onScroll}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      keyExtractor={keyExtractor}
    />
  );
};

export default AnimatedFlatList;
