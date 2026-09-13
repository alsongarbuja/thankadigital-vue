declare module "#auth-utils" {
  interface User {
    id: string;
    name: string;
    email: string;
    teamId: string;
    avatarUrl: string;
  }
}

export {};
