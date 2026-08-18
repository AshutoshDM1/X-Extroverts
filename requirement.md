# Frontend Engineering Assessment: Signup Wizard Replication

## 1. Overview

This assessment evaluates your ability to build high-fidelity, functional, and user-centric web interfaces. You are required to replicate the Signup Wizard from an existing application in a responsive website. Your primary objective is to ensure visual parity while implementing robust technical logic for state management and validation.

---

## 2. Reference Materials

- **Sample Application**: [Extroverts on Google Play Store](https://play.google.com/store/apps/details?id=com.pro.nubpack)
- **Task**: Create a web application that includes:
  1. The same landing page mechanism.
  2. A similar terms and conditions page / community code agreement.
  3. The same multi-step signup form featured in the mobile app.
- **Assets & Styling**:
  - Backgrounds & Logos: Commercially available assets on the internet or local assets.
  - Fonts: **Poppins** (or clean Google Fonts modern sans-serif).
- **Scope**:
  - **Front-end only exercise.**
  - Replicate the app's signup form with visual and functional accuracy.
  - Identify and proactively improve usability issues, interactions, and edge cases (e.g., enhanced OTP screen presentation, explicit prompts/validation for age < 18, clear error feedback), while keeping the overall design language and experience consistent with the app.

---

## 3. Technical Requirements

### A. Core Functionality

- **Progressive Disclosure**: Implement the wizard as a multi-step, sequential process.
- **Wizard Logic**: Collect profile details (Username, Name, Age, Pronouns, Preferences/Invites) in logical sequence after initial email/OTP verification.
- **Visual Fidelity**: Pixel-accurate and visually indistinguishable replication in terms of typography, spacing, dark theme palettes (`#000000` base with `#9B62FF` purple highlights), and component behavior.
- **Backward & Forward Navigation**: Seamless back-and-forth movement across steps with preserved form state.

### B. Form Validation & Logic

- **Real-time Validation**: Validate email formats, required fields, and constraints as the user types (on-blur or on-change).
- **Error Handling**:
  - Contextual error messages displayed beneath individual fields.
  - Global error alerts (e.g., Toasts or Banners) for failed submissions or invalid state transitions.
- **Input Constraints**:
  - Character limits (min/max length).
  - Numeric-only inputs for age/numbers.
  - Prevention of whitespace-only submissions.
  - Case-normalization (e.g., lowercase usernames, trimmed inputs).
- **Loading States**:
  - Realistic spinner/loader on buttons during simulated submission to prevent duplicate submissions.
- **Cross-Field & Conditional Logic**:
  - Ensure multi-select restrictions (e.g., maximum 3 pronouns).
  - Proper handling of optional fields (e.g., invite code with token rewards).

### C. Advanced User Experience (UX)

- **Responsive Design**: Flawless display and interaction on mobile, tablet, and desktop viewports.
- **Success Feedback**: Clear celebration / completion screen or redirect once the profile is finalized (e.g., displaying Honorary Vibe Tokens earned).

---

## 4. Assessment Criteria & Edge Cases to Address

| Area                    | Requirement / Polish Item                                                                          |
| :---------------------- | :------------------------------------------------------------------------------------------------- |
| **Visual Parity**       | Dark aesthetic, bold typography, glowing purple accents, signature rounded pills and sheet modals. |
| **State Preservation**  | Step data is retained when navigating backward and forward.                                        |
| **Underage Edge Case**  | Explicit validation and prompt if user enters age `< 18` (e.g., party eligibility requirement).    |
| **Email / OTP Flow**    | Clean, intuitive OTP input with resend timer and error handling.                                   |
| **Pronoun Selection**   | Modal drawer allowing up to 3 selections with unselect and feedback prompt.                        |
| **Submission UX**       | Disabled/loading submit button state to prevent duplicate clicks.                                  |
| **Success Celebration** | Animated celebratory state highlighting earned Vibe Tokens (+30 HVTs).                             |

---

## 5. Submission Instructions

- **Deliverable**: Screen recording of local project (≤ 5 minutes) demonstrating:
  - Full happy path flow from landing page through multi-step signup.
  - Form validation, error messages, edge cases (e.g., invalid age, invalid email).
  - Backward/forward state retention and loading/success states.
  - (Optional) Link to AI chat utilized during development.
- **Submission Link**: [Assessment Submission Form](https://forms.gle/UFK1tUAzVBfStptf9)
- **Confidentiality Note**: Source code does not need to be submitted publicly at this stage to respect your IP. Relevant code may be requested for deeper discussion during technical rounds.

---

> **Contact**: Vanshika — Technical Hiring Team
