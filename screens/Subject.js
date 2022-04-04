import { View, SafeAreaView, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { FocusedStatusBar } from '../components';

const Subject = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
      />
      <View style={{ flex: 1 }}>
        <View style={{ 
          zIndex: 0,
          paddingHorizontal: SIZES.extraLarge,
        }}>
          <View style={{
            paddingVertical: SIZES.extraLarge,
          }}>
            <Text style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
              fontFamily: FONTS.semiBold,
            }}>
              Matematika
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
              
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Subject