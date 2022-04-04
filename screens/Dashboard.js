import { View, SafeAreaView, Text } from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';
import { FocusedStatusBar } from '../components';

const Dashboard = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <View style={{ 
          zIndex: 0,
          paddingHorizontal: SIZES.extraLarge,
        }}>
          <View style={{
            display: 'flex',
            justifyContent: 'flex-end',
            height: 220,
            paddingBottom: SIZES.extraLarge,
          }}>
            <Text style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
              fontFamily: FONTS.light,
            }}>
              Ahoj,
            </Text>
            <Text style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
              fontFamily: FONTS.semiBold,
            }}>
              Kristián Valčo
            </Text>
          </View>
        </View>

        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>
          <View style={{ 
            height: 240, 
            backgroundColor: COLORS.primary,
          }} />
          <View style={{ 
            flex: 1, 
            backgroundColor: COLORS.white,
            borderRadius: SIZES.extraLarge,
            marginTop: -SIZES.extraLarge,
          }}>
            <View style={{
              paddingHorizontal: SIZES.extraLarge,
              paddingVertical: SIZES.font,
            }}>
              <Text style={{
                fontSize: SIZES.extraLarge,
                fontFamily: FONTS.bold,
                paddingTop: SIZES.extraSmall,
              }}>
                Dnešný rozvrh
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard