// import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native'
// import React from 'react'
// import { colors } from '../../utils/config'
// import { dummyUserImage, fontPixel, heightPixel, widthPixel } from '../../utils/constants'
// import { fontFamily } from '../../utils/fonts'
// import { routes } from '../../navigation/constant'
// import MyFastImage from '../../components/reusables/MyFastImage'
// import ValidationStatusItem from '../../components/ScanComponents/ValidationStatusItem'
// import PrimaryButton from '../../components/reusables/PrimaryButton'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import PrimaryHeader from '../../components/reusables/PrimaryHeader'
// import { AuthContext } from '../../contextApi'

// const data = [
//     {
//         id: 1,
//         title: 'Not visible',
//         isValid: false,
//         image: dummyUserImage
//     },
//     {
//         id: 2,
//         title: 'Out of frame',
//         isValid: false,
//         image: dummyUserImage
//     },
//     {
//         id: 3,
//         title: 'Clearly Visible',
//         isValid: true,
//         image: dummyUserImage
//     },
// ]

// const ValidationError = (props) => {
//     const { selectedVerification,errorList, seterrorList } = React.useContext(AuthContext)
//     const image = props?.route?.params?.image
//     const message = props?.route?.params?.message

//     return (
//         <View style={styles.main}>
//             <PrimaryHeader backButtonEnable={false} centerTitle={'Unclear Text'} />
//             <View style={styles.main}>
//                 <ScrollView showsVerticalScrollIndicator={false}
//                     contentContainerStyle={{ padding: 20 }}
//                 >
//                     <View style={styles.card}>

//                         {
//                             message &&
//                             <View style={styles.error}>
//                                 <AntDesign
//                                     name={'exclamationcircle'} size={heightPixel(16)} color={colors.white} style={{ paddingHorizontal: 7 }} />
//                                 <Text style={styles.title}>{message}</Text>
//                             </View>
//                         }

//                         <ImageBackground source={require('../../assets/images/IdFrame.png')}
//                             style={styles.frame} resizeMode='contain'>
//                             <MyFastImage
//                                 imgUri={{ uri: image }}
//                                 styles={styles.image}
//                             />

//                         </ImageBackground>
//                         {
//                             errorList.map((item, index) => (
//                                 <ValidationStatusItem item={item} key={index} image={image}/>
//                             ))
//                         }

//                         <PrimaryButton title={'Try Again'} style={{ width: widthPixel(315) }}
//                             onPress={() => props?.navigation.goBack()}
//                         />
//                         <View style={{
//                             justifyContent: "center", marginTop: 30
//                         }} />
//                     </View>
//                 </ScrollView>

//             </View>
//         </View>
//     )
// }

// export default ValidationError

// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         backgroundColor: colors.greyBackGround,
//     },
//     card: {
//         backgroundColor: colors.white,
//         width: '100%',
//         minHeight: 100,
//         borderRadius: 15,
//         elevation: 1.5,
//         paddingVertical: heightPixel(25),
//         paddingHorizontal: '8%',
//     },
//     frame: {
//         width: widthPixel(315),
//         height: heightPixel(200),
//         alignSelf: 'center',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: heightPixel(10)
//     },
//     image: {
//         width: widthPixel(290),
//         height: heightPixel(185),
//         borderRadius: 7
//     },
//     error: {
//         width: widthPixel(310),
//         alignSelf: 'center',
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: heightPixel(50),
//         paddingHorizontal: '3%',
//         borderRadius: 4,
//         backgroundColor: colors.decline,
//         elevation: 1.5,
//         paddingVertical: heightPixel(10)
//     },
//     title: {
//         fontFamily: fontFamily[400],
//         fontSize: fontPixel(13),
//         color: colors.white,
//         flex: 1
//     }
// })

import { View, Text } from 'react-native'
import React from 'react'

const ValidationError = () => {
  return (
    <View>
      <Text>ValidationError</Text>
    </View>
  )
}

export default ValidationError