import { View, SafeAreaView, FlatList, Text } from 'react-native';

import moment from 'moment';

import { COLORS, FONTS, SIZES, SubjectData } from '../constants';
import { SubjectCard, FocusedStatusBar } from '../components';
import { CircleButton } from '../components/Button';

const TodaySchedule = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar 
        backgroundColor={COLORS.white}
      />
      <FlatList
        data={SubjectData}
        renderItem={({ item }) => <SubjectCard data={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: SIZES.extraSmall,
            paddingBottom: SIZES.extraLarge,
          }}>
            <CircleButton
              iconName={'ios-arrow-back'}
              handlePress={() => {}}
            />
            <Text style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
              marginHorizontal: SIZES.font,
            }}>
              { moment().format('dddd DD.MM.YYYY') }
            </Text>
            <CircleButton
              iconName={'ios-arrow-forward'}
              handlePress={() => {}}
            />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default TodaySchedule