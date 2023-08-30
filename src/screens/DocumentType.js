// import { ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { colors } from '../../utils/config'
// import { fontPixel, heightPixel } from '../../utils/constants'
// import { fontFamily } from '../../utils/fonts'
// import AnySvg, { Passport, DrivingLicense, ProofOfAddress, ResidencePermist } from '../../assets/svgs'
// import { routes } from '../../navigation/constant'
// import PrimaryHeader from '../../components/reusables/PrimaryHeader'
// import BaseProfileView from '../../components/ProfileComponents/BaseProfileView'
// import Store from '../../redux/Store'
// import { setDocType } from '../../redux/reducers'

// const data = [
//     {
//         id: 1,
//         svg: Passport,
//         name: "Passport"
//     },
//     {
//         id: 2,
//         svg: DrivingLicense,
//         name: "License"
//     },
//     {
//         id: 3,
//         svg: ResidencePermist,
//         name: "Address Permit"
//     },
//     {
//         id: 4,
//         svg: ProofOfAddress,
//         name: "Proof Address"
//     },
// ]

// const DocumentType = ({ navigation }) => {
//     return (
//         <View style={styles.main}>
//             <PrimaryHeader centerTitle={"Choose a document type"} />
//             <BaseProfileView>
//                 <ScrollView showsVerticalScrollIndicator={false}
//                     contentContainerStyle={{ padding: 10 }}
//                 >
//                     <Text style={styles.title}>{'Choose the document to be verified from options below:'}</Text>

//                     {
//                         data?.map((item, index) => (
//                             <AnySvg
//                                 key={index}
//                                 name={item.svg}
//                                 width={'130%'}
//                                 height={72}
//                                 Containerstyle={{ marginVertical: 15 }}
//                                 disabled={false}
//                                 onPress={() => {
//                                     Store.dispatch(setDocType(item.name))
//                                     navigation.navigate(routes.DocumentVerification)
//                                 }}
//                             />
//                         ))
//                     }

//                     <Text style={styles.subTitle}>{`Your session audio and video may be recorded. Read more from Identity Gram’s  Privacy Policy`}</Text>
//                 </ScrollView>

//             </BaseProfileView>
//         </View>
//     )
// }

// export default DocumentType

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
//         paddingTop: heightPixel(25),
//         paddingBottom: heightPixel(100),
//         paddingHorizontal: '8%'
//     },
//     title: {
//         color: colors.title,
//         fontSize: fontPixel(15),
//         fontFamily: fontFamily[400],
//         lineHeight: fontPixel(30),
//         paddingBottom: heightPixel(7),
//         width: "90%",
//         alignSelf: "center",
//         marginTop: heightPixel(20)
//     },
//     subTitle: {
//         color: colors.lightGray,
//         fontSize: fontPixel(13),
//         fontFamily: fontFamily[400],
//         paddingTop: heightPixel(10),
//         paddingBottom: heightPixel(15),
//         lineHeight: fontPixel(28),
//         width: "90%",
//         alignSelf: "center"
//     }
// })
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DocumentType = () => {
  return (
    <View>
      <Text>DocumentType</Text>
    </View>
  )
}

export default DocumentType

const styles = StyleSheet.create({})