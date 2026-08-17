export type SignupStep = 1 | 2 | 3 | 4 | 5; // 5 is success/completed

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
  gender: string;
  customPronouns?: string;

  // Step 3: Location & Circles
  state: string;
  city: string;
  collegeOrWork: string;
  instagramHandle?: string;

  // Step 4: Vibe Preferences
  favoriteThemes: string[];
  bio: string;
  agreeTerms: boolean;
}

export interface StepValidationErrors {
  [key: string]: string | undefined;
}
