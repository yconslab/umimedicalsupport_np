import React from "react";

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
  LocationAccessInfo,
} from "./style";
const AuthorizationPage = () => {
  return (
    <ScreenWrapper>
      <ModalWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <TitleText>편리한 이용을 위해</TitleText>
            <TitleText>권한허용이 꼭 필요합니다.</TitleText>
          </TitleWrapper>
          <MidLine />
          <MarginBottomWrap>
            <NotificationAccessWrap>
              <NotificationAccessTitle>알림 허용</NotificationAccessTitle>
              <NotificationAccessInfo>
                우미가 보내는 알림을 확인하는데에 필요해요.
              </NotificationAccessInfo>
            </NotificationAccessWrap>
          </MarginBottomWrap>
          <MarginBottomWrap>
            <LocationAccessWrap>
              <LocationAccessTitle>위치정보 허용</LocationAccessTitle>
              <LocationAccessInfo>
                우미가 보내는 알림을 확인하는데에 필요해요.
              </LocationAccessInfo>
            </LocationAccessWrap>
          </MarginBottomWrap>
        </ContentWrapper>
      </ModalWrapper>
    </ScreenWrapper>
  );
};

// AuthorizationPage.navigationOptions = (navData) => {
//   return {
//     header: null,
//   };
// };

export default AuthorizationPage;
