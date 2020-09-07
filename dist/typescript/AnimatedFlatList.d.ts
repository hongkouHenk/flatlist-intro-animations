import React from 'react';
import { FlatList, NativeSyntheticEvent, NativeScrollEvent, StyleProp, ViewStyle, Insets, ViewToken } from 'react-native';
import { AnimationType } from '.';
interface Props {
    data: Array<any>;
    renderItem: (item: any) => JSX.Element;
    animationType: AnimationType;
    animationDuration?: number;
    focused?: boolean;
    contentContainerStyle?: StyleProp<ViewStyle>;
    scrollIndicatorInsets?: Insets;
    flatlistRef?: ((instance: FlatList<object> | null) => void) | React.RefObject<FlatList<object>>;
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
declare const AnimatedFlatList: React.FC<Props>;
export default AnimatedFlatList;
