import { View, Text, Image } from 'react-native'
import React from 'react'

import { SIZES, FONTS, COLORS } from '../constants'

export const Time = ({ id, time }) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <View style={{
        backgroundColor: 'rgba(227, 29, 29, 0.24)',
        width: 24,
        height: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
      }}>
        <Text style={{
          fontSize: SIZES.small,
          fontFamily: FONTS.bold,
          color: COLORS.highlight,
        }}>
          {id}
        </Text>
      </View>
      <Text style={{
        marginLeft: SIZES.extraSmall,
        fontSize: SIZES.small,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary,
      }}>
        {time}
      </Text>
    </View>
  )
}

export const Classroom = ({ classroom }) => {
  return (
    <Text style={{
      fontFamily: FONTS.regular,
      fontSize: SIZES.small,
      color: COLORS.secondary,
    }}>
      Učebňa 1
    </Text>
  )
}

export const SupInfo = ({ id, time }) => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: SIZES.base,
    }}>
      <Time id={id} time={time} />
      <Classroom />
    </View>
  )
}