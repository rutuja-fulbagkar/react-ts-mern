import { User } from '../auth/types/auth';

export const loginApi = async (email: string, password: string): Promise<User> => {
  // Mocking API
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        id: '1',
        name: 'Rutuja',
        email,
        token: 'mocked-token-123',
      });
    }, 1000)
  );
};
