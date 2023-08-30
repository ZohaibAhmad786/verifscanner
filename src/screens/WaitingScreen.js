// import { ScrollView, StyleSheet, Text, StatusBar, Alert } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { colors } from '../../utils/config'
// import { fontPixel, heightPixel } from '../../utils/constants'
// import { fontFamily } from '../../utils/fonts'
// import { routes } from '../../navigation/constant'
// import MyFastImage from '../../components/reusables/MyFastImage'
// import ProcessingItem from '../../components/ScanComponents/ProcessingItem'
// import PrimaryHeader from '../../components/reusables/PrimaryHeader'
// import BaseProfileView from '../../components/ProfileComponents/BaseProfileView'
// import BaseScreen from '../../components/reusables/BaseScreen'

// const data = [
//     {
//         id: 1,
//         title: 'Photos processed',
//         isProcessed: false,
//     },
//     {
//         id: 2,
//         title: 'Image quality Checked',
//         isProcessed: false,
//     },
//     {
//         id: 3,
//         title: 'Documents inspected',
//         isProcessed: false,
//     },
//     {
//         id: 4,
//         title: 'Finalizing the decision',
//         isProcessed: false,
//     },
// ]

// const WaitingScreen = ({ navigation }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [displayedItems, setDisplayedItems] = useState(data);


//     useEffect(() => {
//         const interval = setInterval(() => {
//           if (currentIndex === data.length) {
//             clearInterval(interval);
//             navigation.replace(routes.FinishedScreen)
//           } else {
//             setDisplayedItems((prevItems) => {
//               const updatedItems = [...prevItems];
//               updatedItems[currentIndex] = { ...data[currentIndex], isProcessed: true };
//               setCurrentIndex((prevIndex) => prevIndex + 1);
//               return updatedItems;
//             });
//           }
//         }, 1000);
    
//         return () => clearInterval(interval);
//       }, [currentIndex]);
    


//     return (
//         <>
//             <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
//             <BaseScreen isbackgroundColor={false}>
//                 <PrimaryHeader centerTitle={"Please Wait"} backButtonEnable={false} />
//                 <BaseProfileView >
//                     <ScrollView showsVerticalScrollIndicator={false}
//                         contentContainerStyle={{ padding: 10 }}
//                     >


//                         <MyFastImage
//                             imgUri={require('../../assets/gifs/waiting.gif')}
//                             size={250}
//                             styles={styles.gif}
//                         />

//                         <Text style={styles.title}>Please Wait...</Text>

//                         {
//                             displayedItems.map((item, index) => (
//                                 <ProcessingItem item={item} key={index} />
//                             ))
//                         }

//                     </ScrollView>

//                 </BaseProfileView>
//             </BaseScreen>
//         </>
//     )
// }

// export default WaitingScreen

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
//         paddingVertical: heightPixel(15),
//         paddingBottom: heightPixel(100),
//         paddingHorizontal: '8%',
//     },
//     gif: {
//         alignSelf: 'center',
//     },
//     title: {
//         fontFamily: fontFamily[400],
//         fontSize: fontPixel(15),
//         color: colors.purpleText,
//         alignSelf: 'center',
//         marginBottom: 12,
//         marginTop: -20
//     }
// })

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WaitingScreen = () => {
  return (
    <View>
      <Text>WaitingScreen</Text>
    </View>
  )
}

export default WaitingScreen

const styles = StyleSheet.create({})