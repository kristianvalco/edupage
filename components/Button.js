import { TouchableOpacity, View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({ iconName, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 32,
        height: 32,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...props,
      }}
      onPress={handlePress}
    >
      <Ionicons name={iconName} size={18} />
    </TouchableOpacity>
  )
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
    style={{
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge,
      minWidth: minWidth,
      padding: SIZES.small,
      ...props,
    }}
    onPress={handlePress}
  >
    <Text style={{
      fontFamily: FONTS.semiBold,
      fontSize: fontSize,
      color: COLORS.white,
      textAlign: 'center',
    }}>
      Place a bid
    </Text>
  </TouchableOpacity>
  )
}