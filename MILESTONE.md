# Frontend Engineering Assessment: Signup Wizard Replication

## 1. Overview

This assessment evaluates your ability to build high-fidelity, functional, and user-centric web interfaces. You are required to replicate the Signup Wizard from an existing application in a responsive website. Your primary objective is to ensure visual parity while implementing robust technical logic for state management and validation.

> **Note:** This is a **front-end only** exercise.

---

## 2. Reference Materials

- **Sample Application:** [https://play.google.com/store/apps/details?id=com.pro.nubpack](https://play.google.com/store/apps/details?id=com.pro.nubpack)
- **Task:** Create a web-application that has the same landing page mechanism, a similar terms and conditions page, and the same 4-step signup form present on the application referenced above. Use of AI tools is encouraged.
- **Assets & Typography:** For background and logos, you may use any commercially available assets on the internet, and **Poppins** for typography.
- **Assessment Criteria:** Replicate the app’s signup form in the web-app, ensuring that all functional and UI details are carried over accurately. This includes:
  - Form validation & error handling
  - Alerts & global notifications (Toasts/Banners)
  - Input behavior & constraints
  - Loading states & submission simulation
  - Success and failure scenarios
  - Step navigation (going forward and backward in the wizard)
  - Overall user experience
  - Identifying and improving details, interactions, usability issues, or edge cases (e.g., improved OTP UI/UX, age validation prompt for `< 18`) while preserving overall consistency with the app.

---

## 3. Technical Requirements

### A. Core Functionality

- **Progressive Disclosure:** Implement the wizard as a multi-step process.
- **Wizard Logic:** Subsequent steps should collect additional profile details (e.g., Name, Age, Pronouns) only after initial email verification or login.
- **Visual Fidelity:** The website replication must match the app's design in terms of typography, spacing, color palettes, micro-interactions, and component behavior.

### B. Form Validation & Logic

- **Real-time Validation:** Validate email formats and required fields as the user types (`on-blur` or `on-change`).
- **Error Handling:** Display clear, contextual error messages beneath fields and utilize global error alerts (Toasts or Banners) for failed submissions.
- **Input Constraints:** Implement character limits, numeric-only inputs for years/phones, and prevent whitespace-only submissions.
- **Loading States:** Show a spinner on buttons during "submission" simulation to prevent duplicate entries.
- **Cross-Field Logic:** Ensure dependencies (e.g., selecting a state filters available cities/colleges) are handled smoothly.

### C. Advanced User Experience (UX)

- **Responsive Design:** The form and layout must be fully responsive and aesthetically pleasing on mobile, tablet, and desktop viewports.
- **Success Feedback:** Provide a clear success state or redirect once the profile is "completed."

---

## 4. Milestones Breakdown

### Milestone 1 — Project Foundation & Theme Setup

- [x] Next.js 16 + React 19 + Tailwind CSS v4 setup
- [x] Poppins typography and theme variables integration
- [x] Prettier, ESLint, and Husky configuration
- [ ] Base design tokens, colors, UI component primitives (buttons, inputs, select, dialogs)

### Milestone 2 — Landing Page & Terms & Conditions

- [ ] Landing page mechanism matching the reference app
- [ ] Terms & Conditions modal / page navigation
- [ ] Entry point triggers for the multi-step signup wizard

### Milestone 3 — 4-Step Signup Wizard & State Management

- [ ] **Step 1:** Authentication / Email verification with polished OTP screen
- [ ] **Step 2:** Personal Details (Name, Age with `>= 18` validation, Pronouns)
- [ ] **Step 3:** Profile & Demographic / Dependent dropdowns (State, City, College, etc.)
- [ ] **Step 4:** Preferences / Final review & submission
- [ ] Smooth step transitions with backward/forward navigation & state persistence

### Milestone 4 — Comprehensive Form Validation & Edge Cases

- [ ] Real-time field validation with inline error messaging
- [ ] Numeric-only, character limit, and whitespace constraints
- [ ] Async submission simulations with loading spinners and duplicate submission prevention
- [ ] Global error and success notifications (Toast/Alerts)
- [ ] Edge cases handling (underage prompt, invalid OTP, network failure simulation)

### Milestone 5 — Responsive Polish, Recording & Submission

- [ ] Mobile, tablet, and desktop viewport optimizations
- [ ] Micro-interactions, animations, and dark/light theme polish
- [ ] 5-minute screen recording walkthrough covering features, validation, and error states
- [ ] Final verification against submission requirements

---

## 5. Submission Instructions

- **Screen Recording:** Submit a public access link to a screen recording of your local project (maximum 5 minutes) covering the form flow, errors, validation, and edge cases.
- **AI Chat Link:** Share the link to the AI chat used during the replication process.
- **Submission Form:** [https://forms.gle/UFK1tUAzVBfStptf9](https://forms.gle/UFK1tUAzVBfStptf9)

> **Confidentiality & Ownership:**  
> Your work is yours. We won’t ask you to share or submit your source code as part of this task. We want to respect your time, effort, and intellectual property. If we move forward with your candidacy, we may request the relevant code at that stage for a deeper technical discussion and evaluation, with appropriate confidentiality.
>
> _— Vanshika, Technical Hiring Team_
