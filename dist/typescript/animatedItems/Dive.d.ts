import React from 'react';
import { ListRenderItem, ListRenderItemInfo } from 'react-native';
interface Props {
    renderItem: ListRenderItem<any>;
    args: ListRenderItemInfo<any>;
    focused?: boolean;
}
declare const DiveItem: React.FC<Props>;
export default DiveItem;
