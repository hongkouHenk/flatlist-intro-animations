import React from 'react';
import { ListRenderItem, ListRenderItemInfo } from 'react-native';
interface Props {
    renderItem: ListRenderItem<any>;
    args: ListRenderItemInfo<any>;
    focused?: boolean;
}
declare const SlideFromBottomItem: React.FC<Props>;
export default SlideFromBottomItem;
