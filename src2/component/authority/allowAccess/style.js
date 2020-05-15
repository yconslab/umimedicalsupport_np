import styled from "styled-components/native";
export const ScreenWrapper = styled.View`
    flex: 1,
    backgroundColor: #00000062,
    alignItems: center,
    justifyContent: center,
`;

export const ModalWrapper = styled.View`
marginHorizontal:20,
backgroundColor: #FFFFFF,
height: Platform.OS === ios ? 50% : 70%,
borderRadius: 8,
`;

export const ContentWrapper = styled.View`
marginTop: 15%,
marginHorizontal: 5%,

`;
export const TitleWrapper = styled.View`
  marginbottom: 5%;
`;

export const TitleText = styled.Text`
fontSize: 24,
lineHeight: 29,
`;

export const MidLine = styled.View`
width: 100%,
backgroundColor: #000000,
height: 1,
marginBottom: 5%,
opacity: 0.2,

`;

export const MarginBottomWrap = styled.View`
  marginbottom: 5%;
`;
export const NotificationAccessWrap = styled.View`
flexDirection: row,
justifyContent: flex-start,
marginBottom: 3,

`;

export const NotificationAccessTitle = styled.Text`
fontSize: 17,
lineHeight: 20,
color: #1A88FF,

`;

export const NotificationAccessInfo = styled.Text`
fontSize: 14,
lineHeight: 17,
color: #000000,
`;

export const LocationAccessWrap = styled.View`
flexDirection: 'row',
justifyContent: 'flex-start',
marginBottom: 3,
`;
export const LocationAccessTitle = styled.Text`
fontSize: 17,
lineHeight: 20,
color: '#1A88FF',
`;

export const LocationAccessInfo = styled.Text`
fontSize: 14,
lineHeight: 17,
color: '#000000',
`;
