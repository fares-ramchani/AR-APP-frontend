import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { StyleProp, ViewStyle } from 'react-native';

// Ensure all icon libraries are grouped under Icons
export const Icons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
};

// Correct IconProps and Icon Component
export interface IconProps {
  type: Function; // Could also be typeof React.Component
  name: string;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const Icon = ({ type, name, color, size = 24, style }: IconProps) => {
  if (!type || !name) return null; // Prevent rendering issues
  const Tag = type;
  return <Tag name={name} size={size} color={color} style={style} />;
};

export default Icon;