import React from 'react';
import {
  SectionList,
  SectionListRenderItem,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleProp,
  ViewStyle,
  Insets,
  ViewToken,
  SectionListData,
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
  sections: ReadonlyArray<SectionListData<object>>;
  renderItem: SectionListRenderItem<object>;
  renderSectionHeader?: (info: {
    section: SectionListData<any>;
  }) => React.ReactElement;
  animationType: AnimationType;
  animationDuration?: number;
  focused?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  scrollIndicatorInsets?: Insets;
  sectionlistRef?:
    | ((instance: SectionList<object> | null) => void)
    | React.RefObject<SectionList<object>>;
  ListEmptyComponent?: React.ComponentType<any> | React.ReactElement;
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement;
  ListFooterComponent?: React.ComponentType<any> | React.ReactElement;
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

const AnimatedSectionList: React.FC<Props> = ({
  sections,
  renderItem,
  renderSectionHeader,
  animationType,
  animationDuration,
  focused = true,
  sectionlistRef,
  contentContainerStyle,
  scrollIndicatorInsets,
  ListEmptyComponent,
  ListHeaderComponent,
  ListFooterComponent,
  onScroll,
  onViewableItemsChanged,
  viewabilityConfig,
  refreshing,
  onRefresh,
  keyExtractor,
}) => {
  const handleRenderItem: any = (args: any) => {
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
      case AnimationType.None:
        return renderItem(args);
      default:
        return;
    }
  };

  return (
    <SectionList
      ref={sectionlistRef}
      contentContainerStyle={contentContainerStyle}
      scrollIndicatorInsets={scrollIndicatorInsets}
      sections={sections}
      renderItem={handleRenderItem}
      renderSectionHeader={renderSectionHeader}
      refreshing={refreshing}
      onRefresh={onRefresh}
      ListEmptyComponent={ListEmptyComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      onScroll={onScroll}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      keyExtractor={keyExtractor}
    />
  );
};

export default AnimatedSectionList;
