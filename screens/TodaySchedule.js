import { View, SafeAreaView, FlatList, Text } from 'react-native';
import moment from 'moment';

import { COLORS, FONTS, SIZES, SubjectData } from '../constants';
import { SubjectCard, FocusedStatusBar } from '../components';

const TodaySchedule = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar 
        backgroundColor={COLORS.white}
        barStyle="dark-content"
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
          }}>
            <Text style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
              paddingTop: SIZES.extraSmall,
              paddingBottom: SIZES.extraLarge,
            }}>
              { moment().format('dddd DD.MM.YYYY') }
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default TodaySchedule