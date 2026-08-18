---
trigger: always_on
---

# Tailwind CSS Rules

Always use **Tailwind CSS v4 syntax and conventions**.

Do not use outdated Tailwind v3 utilities when an equivalent Tailwind v4 utility exists.

## Core Rule

When writing or modifying Tailwind classes:

- Prefer Tailwind v4 utilities.
- Prefer the shortest canonical utility when Tailwind v4 provides one.
- Do not use arbitrary values when a standard Tailwind utility exists.
- Do not introduce deprecated, legacy, or v3-style syntax.
- When unsure, verify that the utility follows Tailwind CSS v4 conventions before using it.

## Required v4 Syntax

Use these patterns:

| ❌ Avoid            | ✅ Use            |
| ------------------- | ----------------- |
| `bg-gradient-to-br` | `bg-linear-to-br` |
| `bg-gradient-to-r`  | `bg-linear-to-r`  |
| `bg-gradient-to-b`  | `bg-linear-to-b`  |
| `stroke-[2]`        | `stroke-2`        |
| `stroke-[1]`        | `stroke-1`        |
| `stroke-[3]`        | `stroke-3`        |
| `outline-[2px]`     | `outline-2`       |
| `border-[1px]`      | `border`          |
| `rounded-[8px]`     | `rounded-lg`      |
| `p-[16px]`          | `p-4`             |
| `px-[16px]`         | `px-4`            |
| `py-[8px]`          | `py-2`            |
| `gap-[16px]`        | `gap-4`           |
| `w-[100%]`          | `w-full`          |
| `h-[100%]`          | `h-full`          |
| `font-[700]`        | `font-bold`       |
| `text-[14px]`       | `text-sm`         |
| `leading-[1.5]`     | `leading-normal`  |

## Arbitrary Values

Arbitrary values are allowed **only when there is no suitable Tailwind utility**.

Good:

```tsx
<div className="w-[37px] bg-[#121212]">
```
