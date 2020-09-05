export { default as AnimatedFlatList } from './AnimatedFlatList';
export { default as SlideFromRightAnimatedItem } from './animatedItems/SlideFromRight';
export { default as SlideFromBottomAnimatedItem } from './animatedItems/SlideFromBottom';
export { default as FadeAnimatedItem } from './animatedItems/Fade';
export { default as RotateAnimatedItem } from './animatedItems/Rotate';
export { default as DiveAnimatedItem } from './animatedItems/Dive';
export let AnimationType;

(function (AnimationType) {
  AnimationType[AnimationType["SlideFromRight"] = 0] = "SlideFromRight";
  AnimationType[AnimationType["SlideFromBottom"] = 1] = "SlideFromBottom";
  AnimationType[AnimationType["Fade"] = 2] = "Fade";
  AnimationType[AnimationType["Rotate"] = 3] = "Rotate";
  AnimationType[AnimationType["Dive"] = 4] = "Dive";
})(AnimationType || (AnimationType = {}));
//# sourceMappingURL=index.js.map