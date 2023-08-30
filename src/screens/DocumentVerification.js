// import { StatusBar, StyleSheet, Text, View, ActivityIndicator, Platform, Pressable } from 'react-native'
// import React, { useRef, useEffect, useState } from 'react'
// import { colors } from '../../utils/config'
// import { fontPixel, heightPixel, widthPixel } from '../../utils/constants'
// import { fontFamily } from '../../utils/fonts'
// import AnySvg, { Capturebtn } from '../../assets/svgs'
// import { routes } from '../../navigation/constant'
// import { RNCamera } from 'react-native-camera';
// import PrimaryHeader from '../../components/reusables/PrimaryHeader'
// import services from '../../api/services'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthContext } from '../../contextApi'
// import { updateSnackBar } from '../../redux/reducers';
// import Store from '../../redux/Store';
// import { _openCamera } from '../../config/utils'
// import FastImage from 'react-native-fast-image'
// import { useSelector } from 'react-redux'
// import { IOSAndroid } from '../../utils/generalDesign'


// const DocumentVerification = (props) => {
//     let camera = useRef(null);
//     const [img, setImg] = useState("")
//     const docType = useSelector(state => state.users.docType)
//     console.log({ docType });
//     const { selectedVerification, errorList, seterrorList } = React.useContext(AuthContext)
//     console.log({ selectedVerification })
//     const [isLoading, setisLoading] = useState(false)
//     const [isFrontDone, setisFrontDone] = useState(false)
//     // const [isBackdone, setisBackdone] = useState(false)

//     const handleOpenCamera = () => _openCamera(uploadDocument, error => {
//         Store.dispatch(updateSnackBar({
//             message: error,
//             type: 'error',
//             duration: 3000
//         }))
//     })
//     useEffect(() => {
//         handleOpenCamera()
//     }, [])


//     const uploadDocument = async (data) => {
//         let type = isFrontDone ? 'back' : 'front'
//         console.log({ type })
//         try {
//             // if (type == 'back') setisBackdone(true)
//             setisLoading(true)
//             // const options = { quality: 0.4 };
//             // const data = await camera.current.takePictureAsync(options);

//             if (data) {
//                 const token = await AsyncStorage.getItem('@token');
//                 const url = `${services.baseUrl}${services.verification.updateDocuments}`;
//                 const form = new FormData()
//                 form.append('integrationId', selectedVerification?.integrationId)
//                 form.append('verificationId', selectedVerification?._id)
//                 let uri = data?.uri
//                 setImg(data.uri)
//                 const ext = uri.split('/');
//                 const fileName = ext[ext.length - 1];
//                 const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
//                 form.append("documentImage", { uri: uploadUri, mime: 'image/jpeg', type: 'image/jpeg', name: fileName })
//                 form.append('documentType', docType)
//                 // form.append('imageType', type)
//                 form.append('imageType', (docType === 'Passport' || docType === 'Proof Address') ? 'front' : type)
//                 form.append('customerSaidItsOk', false)//(docType === 'Passport' || docType === 'Proof Address')
//                 console.log({ url })
//                 console.log(' form: ', JSON.stringify(form))

//                 const response = await fetch(url, {
//                     method: 'PATCH',
//                     headers: {
//                         'accept': '*/*',
//                         'Content-Type': 'multipart/form-data',
//                         'Authorization': 'Bearer ' + token,
//                     },
//                     body: form
//                 });
//                 let resjson = await response.json()
//                 let res = resjson
//                 if (resjson?.errors?.length > 0) {
//                     Store.dispatch(updateSnackBar({
//                         message: resjson?.message || '',
//                         type: 'error',
//                         duration: 3000
//                     }))
//                     let errorObjectList = resjson?.errors?.map((x) => {
//                         return { title: x, isValid: false }
//                     })
//                     seterrorList(errorObjectList)
//                     setisLoading(false)
//                     props.navigation.navigate(routes.ValidationError, {
//                         image: data?.uri,
//                         message: resjson?.message
//                     })
//                 }
//                 if (response?.status == 200 || response?.status == 201) {

//                     //seterrorList([...errorList, { title: 'Clearly Visible', isValid: true }])
//                     // Store.dispatch(updateSnackBar({
//                     //     message: res?.message || '',
//                     //     type: 'success',
//                     //     duration: 3000
//                     // }))
//                     setImg("");
//                     setisLoading(false)
//                     setisFrontDone(true)
//                     if (isFrontDone && !(docType === 'Passport' || docType === 'Proof Address')) {
//                         return props.navigation.replace(routes.SelfieVerification)
//                     }
//                     else if (docType === 'Passport') {
//                         return props.navigation.replace(routes.SelfieVerification)
//                     }
//                     else if (docType === 'Proof Address') {
//                         return props.navigation.replace(routes.WaitingScreen)
//                     }

//                 } else {
//                     Store.dispatch(updateSnackBar({
//                         message: res?.message || '',
//                         type: 'error',
//                         duration: 3000
//                     }))
//                 }

//                 setisLoading(false)
//             }
//         } catch (error) {
//             console.log(error, "ERROR");
//             setisLoading(false)
//         }
//         setisLoading(false)

//     }

//     const getDocStyles = () => {
//         switch (docType) {
//             case 'Passport':
//                 return styles.license
//             case 'License':
//                 return styles.license
//             case 'Address Permit':
//                 return styles.license
//             case 'Proof Address':
//                 return styles.license
//             default:
//                 return styles.license
//         }
//     }
//     return (
//         <>
//             <StatusBar backgroundColor={colors.darkgrey} barStyle={'light-content'} />
//             <View style={styles.main}>
//                 <PrimaryHeader centerTitle={`${docType}` + " Verification"} isDark textColor={colors.white} />

//                 <View style={styles.cameraWrapperView} >
//                     <Text style={styles.title}>{isFrontDone ? "Take a photo of Back of your document" : "Take a photo of Front of your document"}</Text>
//                     {/* <RNCamera
//                         ref={camera}
//                         ratio={"4:3"}
//                         captureAudio={false}
//                         style={[styles.preview, getDocStyles()]}
//                         type={RNCamera.Constants.Type.back}
//                         flashMode={RNCamera.Constants.FlashMode.off}
//                         androidCameraPermissionOptions={{
//                             title: 'Permission to use camera',
//                             message: 'We need your permission to use your camera',
//                             buttonPositive: 'Ok',
//                             buttonNegative: 'Cancel'
//                         }}
//                     >

//                         <View style={styles.frame}>

//                         </View>

//                     </RNCamera> */}
//                     <View style={[styles.preview, getDocStyles()]}>
//                         <View style={styles.frame} >
//                             {
//                                 img ?
//                                     <FastImage
//                                         source={{ uri: img }}
//                                         resizeMode={FastImage.resizeMode.cover}
//                                         style={{ height: '100%', width: '100%' }}
//                                     />
//                                     :
//                                     <Text style={styles.imgNotFound} >Image not Selected</Text>
//                             }
//                         </View>
//                     </View>
//                     <View style={styles.btnContainer}>
//                         {
//                             isLoading ?
//                                 <ActivityIndicator size={'large'} color={'#FFFFFF'} />
//                                 :
//                                 <Pressable
//                                     onPress={() => {
//                                         if (isFrontDone) {
//                                             handleOpenCamera()
//                                             // uploadDocument('back')
//                                         } else {
//                                             handleOpenCamera()
//                                             // uploadDocument('front');
//                                         }
//                                     }}
//                                     style={{ padding: 11, backgroundColor: colors.purple,...IOSAndroid.elevation2, borderRadius: 10 }} >
//                                     <Text style={{ fontSize: fontPixel(12), color: colors.white, fontFamily: fontFamily[600] }} >Click to Open Camera</Text>
//                                 </Pressable>
//                         }
//                     </View>
//                 </View>
//             </View>
//         </>
//     )
// }

// export default DocumentVerification

// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         backgroundColor: colors.black22,
//     },
//     title: {
//         color: colors.title,
//         fontSize: fontPixel(15),
//         fontFamily: fontFamily[400],
//         lineHeight: fontPixel(30),
//         alignSelf: "center"
//     },
//     cameraWrapperView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     preview: {
//         justifyContent: 'center',
//         overflow: 'hidden',
//         marginBottom: widthPixel(150),
//         borderRadius: 10,
//     },
//     license: {
//         height: widthPixel(220),
//         width: widthPixel(354),
//     },
//     passport: {
//         height: widthPixel(500),
//         width: widthPixel(350),
//     },
//     btnContainer: {
//         width: '100%',
//         height: heightPixel(145),
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: colors.darkgrey,
//         borderTopLeftRadius: heightPixel(37),
//         borderTopRightRadius: heightPixel(37),
//         position: 'absolute',
//         bottom: 0
//     },
//     title: {
//         color: colors.white,
//         fontFamily: fontFamily[500],
//         fontSize: fontPixel(15),
//         position: 'absolute',
//         bottom: heightPixel(220)
//     },
//     imgNotFound: {
//         fontSize: fontPixel(18),
//         fontFamily: fontFamily[500],
//         color: colors.white,
//         flexGrow: 1,
//         textAlign: "center",
//         marginTop: "28%"
//     },
//     frame: {
//         borderWidth: 2,
//         borderColor: colors.textColor,
//         flex: 1,
//         borderRadius: 10,
//         overflow: 'hidden',
//         borderStyle: 'dashed'
//     }
// })

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DocumentVerification = () => {
  return (
    <View>
      <Text>DocumentVerification</Text>
    </View>
  )
}

export default DocumentVerification

const styles = StyleSheet.create({})