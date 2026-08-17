import SignUpPage from '@/modules/SignUp/SignUp';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | Extroverts - Strangers. Hangouts. Memories.',
  description:
    'Join Extroverts to find themed hangouts, party circles, and make unforgettable memories in your city.',
};

export default function Page() {
  return <SignUpPage />;
}
