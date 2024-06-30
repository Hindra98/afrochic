
interface WhoIAmResult {
    
    userId: string;
    fullName: string;
    userName: string;
    contactMedia: string;
}


interface UserProfileCommand {
    key: string;
    firstName: string;
    middleName: string;
    lastName: string;
    idCardNumber: string;
    choosenNotificationChannel: string;
    isUserConsentEmailNotification: boolean;
    isUserConsentSmsNotification: boolean;
  }
  interface UserProfileResult {
    payload: UserProfileSuccessPayload;
    hasSucceeded: boolean;
    errorMessages: ErrorMessageItem[];
  }
  interface UserProfileSuccessPayload {
    message: string;
  }
  interface SetUserProfileAction {
    type: any;
  }
  