import React from 'react';
import { ListRenderItem, ListRenderItemInfo } from 'react-native';
interface Props {
    renderItem: ListRenderItem<any>;
    args: ListRenderItemInfo<any>;
    animationDuration?: number;
    focused?: boolean;
}
declare const FadeItem: React.FC<Props>;
export default FadeItem;
