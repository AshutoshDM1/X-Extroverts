export type SignupStep = 1 | 2 | 3 | 4 | 5 | 6; // 6 is success/completed

export interface SignupFormData {
  // Step 1: Auth & Verification
  email: string;
  otp: string;
  isEmailVerified: boolean;

  // Step 2: Personal Info
  fullName: string;
  username: string;
  birthDate: string; // YYYY-MM-DD
  age: number | null;

  // Step 3: Pronouns (Multi-select up to 3)
  pronouns: string[];
  customPronouns?: string;

  // Step 4: Location
  state: string;
  city: string;

  // Step 5: Invite Code & Final Consent
  inviteCode?: string;
  agreeTerms: boolean;
}

export const ALL_PRONOUNS = [
  'he',
  'him',
  'his',
  'she',
  'her',
  'hers',
  'they',
  'them',
  'theirs',
  'ze',
  'zir',
  'zirs',
  've',
  'ver',
  'vis',
] as const;

export type PronounOption = (typeof ALL_PRONOUNS)[number];

export interface StepValidationErrors {
  [key: string]: string | undefined;
}
