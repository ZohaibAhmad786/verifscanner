// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { colors } from '../../utils/config'
// import MyFastImage from '../../components/reusables/MyFastImage'
// import { fontPixel, heightPixel } from '../../utils/constants'
// import PrimaryButton from '../../components/reusables/PrimaryButton'
// import { fontFamily } from '../../utils/fonts'
// import { CommonActions } from "@react-navigation/native";


// const FinishedScreen = ({navigation}) => {
//     return (
//         <View style={styles.main}>

//             <MyFastImage
//                 imgUri={require('../../assets/gifs/thumbsUp.gif')}
//                 size={heightPixel(213)}
//                 styles={styles.image}
//             />
//             <Text style={styles.title}>Thank you !</Text>

//             <Text style={styles.subTitle}>{`Your Verification data has been\nsuccessfully submitted`}</Text>

//             <PrimaryButton title={'Continue'} style={styles.btn} onPress={() => {
//                  navigation.dispatch(
//                     CommonActions.reset({
//                         index: 0,
//                         routes: [
//                             {
//                                 name: 'RootTab',
//                             },
//                         ],
//                     }),
//                 );
//             }}/>

//         </View>
//     )
// }

// export default FinishedScreen

// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         backgroundColor: colors.white,
//         alignItems: 'center',
//     },
//     btn : {
//         width:'80%',
//         marginTop: '20%'
//     },
//     title :{
//         fontFamily: fontFamily[500],
//         fontSize: fontPixel(22),
//         color: colors.title,
//         marginTop:30,
//         marginBottom:15
//     },
//     subTitle :{
//         fontFamily: fontFamily[400],
//         fontSize: fontPixel(13),
//         color: colors.textColor,
//         textAlign:'center'
//     },
//     image :{
//         marginTop: '60%'
//     }
// })

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FinishedScreen = () => {
  return (
    <View>
      <Text>FinishedScreen</Text>
    </View>
  )
}

export default FinishedScreen

const styles = StyleSheet.create({})