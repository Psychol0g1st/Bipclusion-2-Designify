export interface UserInterface {
  uid: string;
  email: string;
  username: string;
  settings: {
    fontType: string;
    fontSize: string;
    highContrast: boolean;
    darkMode: boolean;
  };
  progress: any;
}
