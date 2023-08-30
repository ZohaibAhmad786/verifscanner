// import { ActivityIndicator, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useRef, useState, useEffect } from 'react'
// import { colors } from '../../utils/config'
// import { fontPixel, heightPixel, widthPixel } from '../../utils/constants'
// import { fontFamily } from '../../utils/fonts'
// import AnySvg, { Capturebtn } from '../../assets/svgs'
// import { routes } from '../../navigation/constant'
// import { RNCamera } from 'react-native-camera';
// import MyFastImage from '../../components/reusables/MyFastImage'
// import PrimaryHeader from '../../components/reusables/PrimaryHeader'
// import services from '../../api/services'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthContext } from '../../contextApi'
// import { updateSnackBar } from '../../redux/reducers';
// import Store from '../../redux/Store';
// import AnyIcon, { Icons } from '../../components/reusables/AnyIcon'

// const SelfieVerification = ({ navigation }) => {
//     const [cameraScanResult, setCameraScanResult] = useState('');
//     const [isFaceLoaded, setisFaceLoaded] = useState(false)
//     let camera = useRef(null);
//     const { selectedVerification } = React.useContext(AuthContext)
//     const [isLoading, setisLoading] = useState(false)
//     const [cameraType, setcameraType] = useState('back')

//     /**
//     * Capture Picture Click Function
//     */
//     const capturePicture = async () => {
//         // navigation.navigate(routes.WaitingScreen)

//         try {
//             const options = { quality: 0.5 };
//             const data = await camera.current.takePictureAsync(options);
//             setCameraScanResult(data.uri);
//             const token = await AsyncStorage.getItem('@token');
//             const url = `${services.baseUrl}${services.verification.updateSelfie}`;
//             const form = new FormData()
//             form.append('integrationId', selectedVerification?.integrationId)
//             form.append('verificationId', selectedVerification?._id)
//             let uri = data?.uri
//             const ext = uri.split('/');
//             const fileName = ext[ext.length - 1];
//             const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
//             form.append("userImage", { uri: uploadUri, mime: 'image/jpeg', type: 'image/jpeg', name: fileName })


//             const response = await fetch(url, {
//                 method: 'PATCH',
//                 headers: {
//                     'accept': '*/*',
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': 'Bearer ' + token,
//                 },
//                 body: form
//             });
//             let resjson = await response.json()
//             let res = resjson
//             console.log('==========selfie response===========');
//             console.log(res);
//             console.log('====================================');
//             if (response?.status == 200 || response?.status == 201) {

//                 setisLoading(false)
//                 navigation.replace(routes.WaitingScreen)
//             } else {
//                 Store.dispatch(updateSnackBar({
//                     message: res?.message || '',
//                     type: 'error',
//                     duration: 3000
//                 }))
//             }
//             setisLoading(false)
//         } catch (error) {
//             console.log(error, "ERROR");
//             setisLoading(false)
//         }
//     };

//     useEffect(() => {
//         const subscribe = navigation.addListener('focus', () => {
//             setisFaceLoaded(false)
//             setTimeout(() => {
//                 setisFaceLoaded(true)
//             }, 2000);
//         })
//         return subscribe
//     }, [navigation])



//     return (
//         <>
//             <StatusBar backgroundColor={colors.darkgrey} barStyle={'light-content'} />
//             <View style={styles.main}>
//                 <PrimaryHeader title={"Passport Verification"} isDark={true} />
//                 <View style={styles.container} >


//                     <ImageBackground source={require('../../assets/images/SelfieFrame.png')}
//                         style={styles.frame} resizeMode='contain'>

//                         {
//                             isFaceLoaded ?
//                                 cameraScanResult ?
//                                     <MyFastImage
//                                         imgUri={{ uri: cameraScanResult }}
//                                         styles={{ width: '97%', height: '97%', borderRadius: 1000 }}
//                                     />
//                                     :

//                                     <View style={styles.cameraWrapperView}>
//                                         <RNCamera
//                                             ref={camera}
//                                             mirrorImage={true}
//                                             fixOrientation={true}
//                                             ratio={"4:3"}
//                                             captureAudio={false}
//                                             style={{ flex: 1 }}
//                                             type={RNCamera.Constants.Type[cameraType]}
//                                             flashMode={RNCamera.Constants.FlashMode.off}
//                                             androidCameraPermissionOptions={{
//                                                 title: 'Permission to use camera',
//                                                 message: 'We need your permission to use your camera',
//                                                 buttonPositive: 'Ok',
//                                                 buttonNegative: 'Cancel'
//                                             }}
//                                         ></RNCamera>
//                                     </View>
//                                 :
//                                 <MyFastImage
//                                     imgUri={require('../../assets/gifs/face.gif')}
//                                     styles={{ width: '97%', height: '97%', borderRadius: 1000 }}
//                                 />
//                         }

//                     </ImageBackground>
//                     <View style={styles.titleContainer}>
//                         <AnyIcon
//                             onPress={() => setcameraType((pre) => pre == 'back' ? 'front' : 'back')}
//                             type={Icons.MaterialIcons}
//                             name={'flip-camera-ios'}
//                             size={40}
//                             color={colors.white}
//                             style={{ left: 7 }}
//                         />
//                         <AnyIcon
//                             onPress={() => setCameraScanResult("")}
//                             type={Icons.MaterialCommunityIcons}
//                             name={'camera-retake'}
//                             size={40}
//                             color={colors.white}
//                             style={{ left: 7 }}
//                         />
//                     </View>
//                     {/* <TouchableOpacity onPress={() => setCameraScanResult("")}>
//                         <Text style={styles.title} >{cameraScanResult ? " Retake Selfie" : "Take a Selfie"}</Text>
//                     </TouchableOpacity> */}


//                     <View style={styles.btnContainer}>

//                         {
//                             isLoading ?
//                                 <ActivityIndicator size={'large'} color={colors.white} />
//                                 :
//                                 <AnySvg
//                                     name={Capturebtn}
//                                     width={heightPixel(68)}
//                                     height={heightPixel(68)}
//                                     disabled={false}
//                                     onPress={() => capturePicture()}
//                                 />
//                         }
//                     </View>
//                 </View>
//             </View>
//         </>
//     )
// }

// export default SelfieVerification

// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         backgroundColor: colors.black22,
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     cameraWrapperView: {
//         width: heightPixel(278),
//         height: heightPixel(278),
//         borderRadius: 1000,
//         overflow: 'hidden'
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
//     },
//     frame: {
//         width: heightPixel(278),
//         height: heightPixel(278),
//         overflow: 'hidden',
//         marginBottom: heightPixel(200),
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     titleContainer: {
//         position: 'absolute',
//         bottom: heightPixel(170),
//         flexDirection: "row",
//         justifyContent: "space-between",
//         width: "40%",
//         alignItems: "center"
//     }
// })

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SelfieVerification = () => {
  return (
    <View>
      <Text>SelfieVerification</Text>
    </View>
  )
}

export default SelfieVerification

const styles = StyleSheet.create({})