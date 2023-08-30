// import { ImageBackground, StyleSheet, View, Linking } from 'react-native'
// import React, { useRef, useState } from 'react'
// import { RNCamera } from 'react-native-camera';
// import { colors } from '../../utils/config';
// import { heightPixel, widthPixel } from '../../utils/constants';
// import { routes } from '../../navigation/constant';
// import PrimaryHeader from '../../components/reusables/PrimaryHeader';

// const QRScan = ({ navigation }) => {
//     const [cameraScanResult, setCameraScanResult] = useState('');
//     let camera = useRef(null);

//     const onQRCodeRead = (event) => {
//      try {
//         const urlString = event.data;
//         const keywordRegExp = urlString.split('?');
//         let keywordValue = keywordRegExp ? keywordRegExp[1] : null;
//         keywordValue = keywordValue.replace('keyword=','')
//         const value = keywordValue.split('&')
//         let data = {
//             linkCode : value[0]
//         } 
//         navigation.navigate(routes.IdentityVerification, {
//             verificationData : data
//         })
//      } catch (error) {
        
//      }
//     };

//     return (
//         <View style={styles.main}>
//             <PrimaryHeader isGray centerTitle="QR Scanner" textColor={colors.white}/>
//             <View style={styles.container} >
//                 <ImageBackground source={require('../../assets/images/QRFrame.png')}
//                     style={styles.frame} >
//                     <View style={styles.cameraWrapperView} >
//                         <RNCamera
//                             ref={camera}
//                             ratio={"4:3"}
//                             captureAudio={false}
//                             style={{ flex: 1 }}
//                             type={RNCamera.Constants.Type.back}
//                             flashMode={RNCamera.Constants.FlashMode.off}
//                             androidCameraPermissionOptions={{
//                                 title: 'Permission to use camera',
//                                 message: 'We need your permission to use your camera',
//                                 buttonPositive: 'Ok',
//                                 buttonNegative: 'Cancel'
//                             }}
//                             onBarCodeRead={onQRCodeRead}
//                         >
//                         </RNCamera>
//                     </View>
//                 </ImageBackground>

//             </View>

//         </View>
//     )
// }

// export default QRScan
// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         backgroundColor: colors.black22
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     cameraWrapperView: {
//         width: '97%',
//         height: '97%',
//         overflow: 'hidden'
//     },
//     frame: {
//         width: heightPixel(243),
//         height: heightPixel(236),
//         overflow: 'hidden',
//         marginBottom: heightPixel(100),
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const qrScan = () => {
  return (
    <View>
      <Text>qrScan</Text>
    </View>
  )
}

export default qrScan

const styles = StyleSheet.create({})