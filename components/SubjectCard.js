import { useState } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Subject } from '../screens/Subject';

import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';
import { SubjectTitle, SubInfo } from './SubInfo';
import { SupInfo } from './SupInfo';

const SubjectCard = ({ data }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Subject');
  }

  return (
    <View>
      <TouchableHighlight
        style={{
          backgroundColor: COLORS.white,
          borderRadius: SIZES.font,
          marginHorizontal: SIZES.extraLarge,
        }}
        onPress={onPress}
        underlayColor='#F1F2F3'
      >
        <View style={{
          width: '100%',
          padding: SIZES.font,
        }}>
          <SupInfo 
            id={data.id}
            time={data.time}
          />
          <SubjectTitle
            title={data.name}
            subTitle={data.teacher}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          />
          <SubInfo
            homework={data.homework}
          />
        </View>
      </TouchableHighlight>
      <View style={{
        marginHorizontal: 32,
        marginVertical: SIZES.base,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Ionicons name='ios-hourglass-outline' size={SIZES.medium} color={COLORS.secondary} />
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.base,
          color: COLORS.secondary,
          marginLeft: SIZES.extraSmall-4,
        }}>
          {data.break} minútová prestávka
        </Text>
      </View>
    </View>
  )
}

export default SubjectCard