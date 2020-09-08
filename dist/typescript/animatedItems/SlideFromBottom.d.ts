import React from 'react';
import { ListRenderItem, SectionListRenderItem } from 'react-native';
interface Props {
    renderItem: ListRenderItem<any> | SectionListRenderItem<object>;
    args: any;
    focused?: boolean;
}
declare const SlideFromBottomItem: React.FC<Props>;
export default SlideFromBottomItem;
