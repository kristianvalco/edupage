import { View, Text, Image } from 'react-native'
import React from 'react'

import { SIZES, FONTS, COLORS } from '../constants'

export const SubjectTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text style={{ fontFamily: FONTS.bold, fontSize: titleSize, color: COLORS.primary }}>{title}</Text>
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: subTitleSize, color: COLORS.primary, marginTop: 4 }}>{subTitle}</Text>
    </View>
  )
}

export const SubInfo = ({ homework }) => {
  return (
    <View style={{
      width: '100%',
      marginTop: SIZES.font,
    }}>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.secondary,
      }}>
        žiadna domáca úloha
      </Text>
    </View>
  )
}