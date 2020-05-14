import React from "react";
import { Platform, View, Text } from "react-native";
// import {NormalButton} from '../../commons';
import {
  ScreenWrapper,
  ModalWrapper,
  ContentWrapper,
  TitleWrapper,
  TitleText,
  MidLine,
  MarginBottomWrap,
  NotificationAccessWrap,
  NotificationAccessTitle,
  NotificationAccessInfo,
  LocationAccessWrap,
  LocationAccessTitle,
  LocationAccessInfo
} from "./style";
const AuthorizationPage = props => {
  return (
    <View>
      <Text>apple</Text>
    </View>
    // <ScreenWrapper>
    //   <ModalWrapper>
    //     <ContentWrapper>
    //       <TitleWrapper>
    //         <TitleText>편리한 이용을 위해</TitleText>
    //         <TitleText>권한허용이 꼭 필요합니다.</TitleText>
    //       </TitleWrapper>
    //       <MidLine />
    //       <MarginBottomWrap>
    //         <NotificationAccessWrap>
    //           <NotificationAccessTitle>알림 허용</NotificationAccessTitle>
    //           <NotificationAccessInfo>
    //             {" "}
    //             우미가 보내는 알림을 확인하는데에 필요해요.
    //           </NotificationAccessInfo>
    //         </NotificationAccessWrap>
    //       </MarginBottomWrap>
    //       <MarginBottomWrap>
    //         <LocationAccessWrap>
    //           <LocationAccessTitle>위치정보 허용</LocationAccessTitle>
    //           <LocationAccessInfo>
    //             우미가 보내는 알림을 확인하는데에 필요해요.
    //           </LocationAccessInfo>
    //         </LocationAccessWrap>
    //       </MarginBottomWrap>
    //     </ContentWrapper>
    //     {/* <NormalButton
    //       style={{
    //         width: '100%',
    //         borderBottomLeftRadius: 8,
    //         borderBottomRightRadius: 8,
    //         height: Platform.OS === 'ios' ? 50 : 50,
    //         position: 'absolute',
    //         bottom: 0,
    //       }}
    //       buttontext="네, 동의해요"
    //       textStyle={{fontSize: 17, lineHeight: 20}}
    //       click={() => {
    //         props.navigation.navigate('LoginHome');
    //       }}
    //     /> */}
    //   </ModalWrapper>
    // </ScreenWrapper>
  );
};

AuthorizationPage.navigationOptions = navData => {
  return {
    header: null
  };
};

export default AuthorizationPage;
