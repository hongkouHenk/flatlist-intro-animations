# React Native FlatList Intro Animations

A custom FlatList component that offers 5 types of item intro animations

![preview](https://github.com/hongkouHenk/flatlist-intro-animations/blob/master/preview.gif)

## Features

- FlatList intro animations.
- Render your own custom item components.
- Compatible with Expo.
- Written in TypeScript.

## Installation

```bash
yarn add flatlist-intro-animations

# or

npm install flatlist-intro-animations
```

## Usage

```python
import React, { useState, useEffect} from 'react';

import { AnimatedFlatList, AnimationType } from 'flatlist-intro-animations';

import MyCustomItem from './MyCustomItem';

import DATA from './yourDataSource';

const Fade: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <AnimatedFlatList
      data={DATA}
      renderItem={({ item }) => <MyCustomItem item={item} />}
      animationType={AnimationType.Fade}
      animationDuration={1000}
      focused={focused}
    />
  );
};

export default Home;
```

## Props

#### `data`

Insert a plain data array.

> `required:` YES | `type:` array

#### `renderItem`

Takes an item from data and renders it into the list. Provides all typical FlatList metadata, such as `item`, `index`, and `separators`.

> `required:` YES | `type:` function

#### `animationType`

The component currently offers 5 types of intro animations to choose from;

- AnimationType.SlideFromRight (spring)
- AnimationType.SlideFromBottom (spring)
- AnimationType.Fade (timing)
- AnimationType.Rotate (timing)
- AnimationType.Dive (spring)
- AnimationType.None (no animation)

> `required:` YES | `type:` enum

#### `animationDuration`

Only applicable to `timing` animation types. Sets the duration of the animation for each item.

> `required:` NO | `type:` number

#### `focused`

Can be applied to reset the animation value to original state. Useful for rendering FlatList inside TabBar screens. (See example.)

> `required:` NO | `type:` boolean | `default:` true

#### `flatlistRef`

Gives access to FlatList methods.

> `required:` NO | `type:` -

#### `FlatList props`

The component currently supports the following FlatList props:

- data
- renderItem
- animationType
- animationDuration
- focused
- contentContainerStyle
- scrollIndicatorInsets
- flatlistRef
- ListEmptyComponent
- ListHeaderComponent
- ListFooterComponent
- numColumns
- onScroll
- onViewableItemsChanged
- viewabilityConfig
- refreshing
- onRefresh
- keyExtractor

I'll update soon with more.

> `required:` NO | `type:` -

## License

[MIT](https://choosealicense.com/licenses/mit/)
