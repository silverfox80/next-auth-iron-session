import 'iron-session';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: string;
      email: string;
      name: string;
      // Add other user properties as needed
    };
  }
}
