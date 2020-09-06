import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

import { AnimatedFlatList, AnimationType } from 'flatlist-intro-animations';

import MyCustomItem from './MyCustomItem';

import { DATA } from './dataHelper';

type RootStackParamList = {
  FromRight: undefined;
  FromBottom: undefined;
  Fade: undefined;
  Rotate: undefined;
  Dive: undefined;
};

interface ScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const FromRight: React.FC<ScreenProps> = ({ navigation }) => {
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    const focus = navigation.addListener('focus', () => {
      setFocused((prev) => !prev);
    });

    const blur = navigation.addListener('blur', () => {
      setFocused((prev) => !prev);
    });

    return () => {
      focus;
      blur;
    };
  }, []);

  return (
    <AnimatedFlatList
      data={DATA}
      renderItem={({ item }) => <MyCustomItem item={item} />}
      animationType={AnimationType.SlideFromRight}
      focused={focused}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const FromBottom: React.FC<ScreenProps> = ({ navigation }) => {
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    const focus = navigation.addListener('focus', () => {
      setFocused((prev) => !prev);
    });

    const blur = navigation.addListener('blur', () => {
      setFocused((prev) => !prev);
    });

    return () => {
      focus;
      blur;
    };
  }, []);

  return (
    <AnimatedFlatList
      data={DATA}
      renderItem={({ item }) => <MyCustomItem item={item} />}
      animationType={AnimationType.SlideFromBottom}
      focused={focused}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const Fade: React.FC<ScreenProps> = ({ navigation }) => {
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    const focus = navigation.addListener('focus', () => {
      setFocused((prev) => !prev);
    });

    const blur = navigation.addListener('blur', () => {
      setFocused((prev) => !prev);
    });

    return () => {
      focus;
      blur;
    };
  }, []);

  return (
    <AnimatedFlatList
      data={DATA}
      renderItem={({ item }) => <MyCustomItem item={item} />}
      animationType={AnimationType.Fade}
      animationDuration={1000}
      focused={focused}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const Rotate: React.FC<ScreenProps> = ({ navigation }) => {
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    const focus = navigation.addListener('focus', () => {
      setFocused((prev) => !prev);
    });

    const blur = navigation.addListener('blur', () => {
      setFocused((prev) => !prev);
    });

    return () => {
      focus;
      blur;
    };
  }, []);

  return (
    <AnimatedFlatList
      data={DATA}
      renderItem={({ item }) => <MyCustomItem item={item} />}
      animationType={AnimationType.Rotate}
      animationDuration={700}
      focused={focused}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const Dive: React.FC<ScreenProps> = ({ navigation }) => {
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    const focus = navigation.addListener('focus', () => {
      setFocused((prev) => !prev);
    });

    const blur = navigation.addListener('blur', () => {
      setFocused((prev) => !prev);
    });

    return () => {
      focus;
      blur;
    };
  }, []);

  return (
    <AnimatedFlatList
      data={DATA}
      renderItem={({ item }) => <MyCustomItem item={item} />}
      animationType={AnimationType.Dive}
      focused={focused}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="FromRight" component={FromRight} />
        <Tab.Screen name="FromBottom" component={FromBottom} />
        <Tab.Screen name="Fade" component={Fade} />
        <Tab.Screen name="Rotate" component={Rotate} />
        <Tab.Screen name="Dive" component={Dive} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
