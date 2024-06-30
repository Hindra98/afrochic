
interface UpdateMyProfileResult {
  hasSucceeded: boolean;
  errorMessages: ErrorMessageItem[];
}

interface GetMyProfile {
  userName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  pictureUrl: string;
  phoneNumber: string;
  branchName: string;
  isUserNameDisplayable: boolean;
  canUserSetTwoFactorAuthentication: boolean;
  isWorkingAgencyDisplayable: boolean;
}
interface GetMyProfileResult {
  hasSucceeded: boolean;
  payload: GetMyProfile
  errorMessages: ErrorMessageItem[];
}
