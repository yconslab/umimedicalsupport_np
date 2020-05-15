// import React from "react";

// import {
//   ScreenWrapper,
//   ModalWrapper,
//   ContentWrapper,
//   TitleWrapper,
//   TitleText,
//   MidLine,
//   MarginBottomWrap,
//   NotificationAccessWrap,
//   NotificationAccessTitle,
//   NotificationAccessInfo,
//   LocationAccessWrap,
//   LocationAccessTitle,
//   LocationAccessInfo,
// } from "./style";
// const AuthorizationPage = () => {
//   return (
//     <ScreenWrapper>
//       <ModalWrapper>
//         <ContentWrapper>
//           <TitleWrapper>
//             <TitleText>편리한 이용을 위해</TitleText>
//             <TitleText>권한허용이 꼭 필요합니다.</TitleText>
//           </TitleWrapper>
//           <MidLine />
//           <MarginBottomWrap>
//             <NotificationAccessWrap>
//               <NotificationAccessTitle>알림 허용</NotificationAccessTitle>
//               <NotificationAccessInfo>
//                 우미가 보내는 알림을 확인하는데에 필요해요.
//               </NotificationAccessInfo>
//             </NotificationAccessWrap>
//           </MarginBottomWrap>
//           <MarginBottomWrap>
//             <LocationAccessWrap>
//               <LocationAccessTitle>위치정보 허용</LocationAccessTitle>
//               <LocationAccessInfo>
//                 우미가 보내는 알림을 확인하는데에 필요해요.
//               </LocationAccessInfo>
//             </LocationAccessWrap>
//           </MarginBottomWrap>
//         </ContentWrapper>
//       </ModalWrapper>
//     </ScreenWrapper>
//   );
// };

// // AuthorizationPage.navigationOptions = (navData) => {
// //   return {
// //     header: null,
// //   };
// // };

// export default AuthorizationPage;


import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {NormalButton} from '../../commons';

const AuthorizationPage = props => {
  return (
    <View style={styles.backgroundContent}>
      <View style={styles.modalBox}>
        <View style={styles.contentWrapper}>
          <View style={styles.firstBox}>
            <Text style={styles.firstText}>편리한 이용을 위해 </Text>
            <Text style={styles.firstText}>권한허용이 꼭 필요합니다.</Text>
          </View>

          <View style={styles.midLine} />

          <View style={styles.secondContent}>
            <View style={styles.notificationBox}>
              <Text style={styles.notificationtext}>알림 허용</Text>
            </View>

            <Text style={styles.normalText}>
              우미가 보내는 알림을 확인하는데에 필요해요.
            </Text>
          </View>

          <View style={styles.thirdContent}>
            <View style={styles.locationBox}>
              <Text style={styles.locationText}>위치정보 허용</Text>
            </View>

            <Text style={styles.normalText}>
              우미가 보내는 알림을 확인하는데에 필요해요.
            </Text>
          </View>
        </View>

        <NormalButton
          style={styles.btn}
          buttontext="네, 동의해요"
          textStyle={{fontSize: 17, lineHeight: 20}}
          click={() => {
            props.navigation.navigate('LoginHome');
          }}
        />
      </View>
    </View>
  );
};

AuthorizationPage.navigationOptions = navData => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  backgroundContent: {
    flex: 1,
    backgroundColor: '#00000062',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBox: {
    marginHorizontal: '7.5%',
    width: '85%',
    backgroundColor: '#FFFFFF',
    height: Platform.OS === 'ios' ? '50%' : '70%',
    borderRadius: 8,
  },
  contentWrapper: {
    marginTop: '15%',
    marginHorizontal: '5%',
  },
  firstBox: {
    marginBottom: '5%',
  },
  firstText: {
    fontSize: 24,
    lineHeight: 29,
  },
  midLine: {
    width: '100%',
    backgroundColor: '#000000',
    height: 1,
    marginBottom: '5%',
    opacity: 0.2,
  },
  secondContent: {
    marginBottom: '10%',
  },
  notificationBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 3,
  },
  notificationtext: {
    fontSize: 17,
    lineHeight: 20,
    color: '#1A88FF',
  },
  normalText: {
    fontSize: 14,
    lineHeight: 17,
    color: '#000000',
  },
  thirdContent: {
    marginBottom: '5%',
  },
  locationBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 3,
  },
  locationText: {
    fontSize: 17,
    lineHeight: 20,
    color: '#1A88FF',
  },
  btn: {
    width: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: Platform.OS === 'ios' ? 50 : 50,
    position: 'absolute',
    bottom: 0,
  },
  modalWrapper: {
    flex: 1 / 2,
    margin: 20,
    backgroundColor: 'yellow',
    width: '100%',
  },
  modal: {
    margin: 10,
    backgroundColor: 'red',
    flex: 1,
  },
  contentWrapper: {
    flex: 4,

    marginHorizontal: 20,
    marginVertical: 40,
  },
  btnWrapper: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 24,
    lineHeight: 29,
    color: '#393939',
  },
});

export default AuthorizationPage;
