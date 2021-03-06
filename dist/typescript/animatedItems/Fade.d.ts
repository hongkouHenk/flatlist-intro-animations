import React from 'react';
import { ListRenderItem, SectionListRenderItem } from 'react-native';
interface Props {
    renderItem: ListRenderItem<any> | SectionListRenderItem<object>;
    args: any;
    animationDuration?: number;
    focused?: boolean;
}
declare const FadeItem: React.FC<Props>;
export default FadeItem;
