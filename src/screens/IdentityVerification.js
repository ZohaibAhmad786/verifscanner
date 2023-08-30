// import AsyncStorage from '@react-native-async-storage/async-storage'
// import React, { useEffect, useState } from 'react'
// import { ScrollView, StyleSheet, Text, View } from 'react-native'
// import services from '../../api/services'
// import { IDDoc, Litroom, PhotoId } from '../../assets/svgs'
// import BaseProfileView from '../../components/ProfileComponents/BaseProfileView'
// import DetailItem from '../../components/ScanComponents/DetailItem'
// import MyFastImage from '../../components/reusables/MyFastImage'
// import PrimaryButton from '../../components/reusables/PrimaryButton'
// import PrimaryHeader from '../../components/reusables/PrimaryHeader'
// import {
//     useAdminVerificationPagination,
// } from '../../config/hooks'
// import { AuthContext } from '../../contextApi'
// import { routes } from '../../navigation/constant'
// import Store from '../../redux/Store'
// import { fetchNotStartedVerfs } from '../../redux/adminHomeReducer'
// import { updateSnackBar } from '../../redux/reducers'
// import { colors } from '../../utils/config'
// import { fontPixel, heightPixel } from '../../utils/constants'
// import { fontFamily } from '../../utils/fonts'

// const data = [
//     {
//         id: 1,
//         text: `Please Prepare a valid government-issued identity document`,
//         svg: IDDoc
//     },
//     {
//         id: 2,
//         text: `Be prepared to take a selfie and photo of your id`,
//         svg: PhotoId
//     },
//     {
//         id: 3,
//         text: `Make sure you are in well-lit room`,
//         svg: Litroom
//     },
// ]

// const IdentityVerification = (props) => {
//     const verificationData = props?.route?.params?.verificationData
//     // console.log({ verificationData: verificationData.linkCode })
//     const { selectedVerification, setselectedVerification, errorList, seterrorList } = React.useContext(AuthContext)
//     const [isLoading, setisLoading] = useState(false)

//     const pagination = useAdminVerificationPagination()

//     const linkCode = async (callback) => {
//         if (verificationData?.linkCode) {
//             try {
//                 const token = await AsyncStorage.getItem('@token');
//                 const url = `${services.baseUrl}${services.verification.linkCode}/${verificationData.linkCode}`;
//                 const response = await fetch(url, {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': 'Bearer ' + token
//                     },
//                 });
//                 if (response?.status == 200) {
//                     const res = await response.json()
//                     setselectedVerification(res.data)
//                     setTimeout(() => {
//                         callback()
//                     }, 500);
//                 }
//             } catch (error) {

//             }
//         }
//     }

//     useEffect(() => {
//         linkCode(() => { })
//     }, [verificationData?.linkCode])

//     const startSessin = async () => {
//         console.log({ selectedVerification })
//         if (selectedVerification?._id) {
//             seterrorList([])
//             try {
//                 setisLoading(true)
//                 const token = await AsyncStorage.getItem('@token');
//                 const url = `${services.baseUrl}${services.verification.start}/${selectedVerification?._id}`;
//                 const response = await fetch(url, {
//                     method: 'PATCH',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': 'Bearer ' + token
//                     },
//                 });
//                 console.log({ response })
//                 if (response?.status == 200) {
//                     Store.dispatch(fetchNotStartedVerfs({ limit: 5, offset: 0, status: 'Not Started' })).unwrap()
//                     const res = await response.json()
//                     // Store.dispatch(fetchVerificationUsersData(status ? { limit: pagination.limit, offset, status } : { limit: pagination.limit, offset })).unwrap();
//                     setisLoading(false)
//                     props.navigation.replace(routes.DocumentType)
//                 } else {
//                     const res = await response.json()
//                     setisLoading(false)
//                     Store.dispatch(updateSnackBar({
//                         message: res?.message || '',
//                         type: 'error',
//                         duration: 3000
//                     }))

//                     setisLoading(false)
//                 }
//             } catch (error) {
//                 setisLoading(true)
//             }
//         } else {
//             linkCode(() => { })
//         }
//     }

//     return (
//         <View style={styles.main}>
//             <PrimaryHeader centerTitle={"Identity Verification"} />
//             <BaseProfileView >
//                 <ScrollView showsVerticalScrollIndicator={false}
//                     contentContainerStyle={{ padding: 10, }}
//                 >
//                     <MyFastImage
//                         imgUri={require('../../assets/gifs/ScanMobile.gif')}
//                         size={165}
//                         styles={styles.gif}
//                     />
//                     <View style={styles.head}>
//                         <Text style={styles.title}>Let’s get you verified</Text>
//                         <Text style={styles.subTitle}>Before you start:</Text>
//                         {
//                             data.map((item, index) => (
//                                 <DetailItem key={index} item={item} />
//                             ))
//                         }

//                         <PrimaryButton title={'Start Session'} style={{ width: '100%' }}
//                             onPress={() => startSessin()}
//                             loading={isLoading}
//                         />

//                     </View>
//                 </ScrollView>

//             </BaseProfileView>
//         </View>
//     )
// }

// export default IdentityVerification

// const styles = StyleSheet.create({
//     head: {
//         width: '85%',
//         alignSelf: 'center',
//         marginTop: 20
//     },
//     main: {
//         flex: 1,
//         backgroundColor: colors.greyBackGround,
//     },
//     gif: {
//         alignSelf: 'center',
//         marginVertical: heightPixel(24)
//     },
//     title: {
//         color: colors.title,
//         fontSize: fontPixel(17),
//         fontFamily: fontFamily[500]
//     },
//     subTitle: {
//         color: colors.lightGray,
//         fontSize: fontPixel(14),
//         fontFamily: fontFamily[400],
//         paddingBottom: heightPixel(15)
//     }
// })

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IdentityVerification = () => {
  return (
    <View>
      <Text>IdentityVerification</Text>
    </View>
  )
}

export default IdentityVerification

const styles = StyleSheet.create({})