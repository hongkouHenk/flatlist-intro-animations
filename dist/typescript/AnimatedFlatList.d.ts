import React from 'react';
import { FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { AnimationType } from '.';
interface Props {
    data: Array<any>;
    renderItem: (item: any) => JSX.Element;
    animationType: AnimationType;
    animationDuration?: number;
    focused?: boolean;
    flatlistRef?: ((instance: FlatList<object> | null) => void) | React.RefObject<FlatList<object>>;
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    refreshing?: boolean;
    onRefresh?: () => void;
    keyExtractor?: (item: object, index: number) => string;
}
declare const AnimatedFlatList: React.FC<Props>;
export default AnimatedFlatList;
