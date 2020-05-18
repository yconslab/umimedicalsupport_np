import Notification from '../models/Notification';
import CompletedService from '../models/CompletedService';
import Hospital from '../models/Hospital';


export const NOTIFICATIONS=[
     new Notification('n1','서비스가 시작되었습니다.','2020년 1월 10일(월) 오후 2시'),
     new Notification('n2','서비스가 시작되었습니다.','2020년 1월 10일(월) 오후 2시'),
     new Notification('n3','서비스가 시작되었습니다.','2020년 1월 10일(월) 오후 2시'),
     new Notification('n4','서비스가 시작되었습니다.','2020년 1월 10일(월) 오후 2시'),
  
];


export const COMPLETEDSERVICES=[
     new CompletedService('c1','서비스가 시작되었습니다.','2020년 1월 10일(월) 오후 2시','서비스완료'),
     new CompletedService('c2','서비스가 시작되었습니다.','2020년 1월 10일(월) 오후 2시','서비스완료'),
     new CompletedService('c3','서비스가 시작되었습니다.','2020년 1월 10일(월) 오후 2시','서비스완료'),
    
  
];


export const HOSPITAL_LISTS=[
     new Hospital('h1','연세 세브란스'),
     new Hospital('h2','연세 암병원'),
     new Hospital('h3','재활병원'),
     new Hospital('h4','연세 세브란스'),
     new Hospital('h5','연세 암병원'),
     new Hospital('h6','재활병원'),
  
];

