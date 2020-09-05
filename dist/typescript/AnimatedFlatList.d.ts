import React from 'react';
import { AnimationType } from '.';
interface Props {
    data: Array<any>;
    renderItem: (item: any) => JSX.Element;
    animationType: AnimationType;
    animationDuration?: number;
    focused?: boolean;
}
declare const AnimatedFlatList: React.FC<Props>;
export default AnimatedFlatList;
