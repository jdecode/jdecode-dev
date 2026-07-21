# User Preferences & AI Guardrails

## 🛑 Critical UI/UX Design Constraints
This document exists as a permanent memory of a failure where the AI attempted to create a custom HTML/CSS glassmorphic UI from scratch without a visual feedback loop, resulting in an unreadable, poorly contrasted, and unpolished layout.

To maintain trust and deliver mature, sensible code, future AI instances must strictly adhere to the following rules:

1. **Do Not Code UI "Blind":** 
   Never assume custom, from-scratch CSS (e.g., complex glassmorphism, floating orbs, absolute positioning) will look good without visual verification. What looks correct in code often fails in rendering.
   
2. **Use Proven, Dense Frameworks:** 
   When asked to create a visual artifact, data representation, or UI, rely on dense, proven component frameworks (like Tailwind CSS, React components, Shadcn) rather than writing abstract custom HTML/CSS. The user expects the maturity and data-density comparable to Claude's outputs, not sparse or airy experiments.

3. **Data Density over Empty Space:** 
   Avoid massive blank spaces. Do not inappropriately use `100vh` heights or massive padding that forces the user to scroll through voids. Prioritize information density and readability.

4. **Visual QA is Mandatory:** 
   If you generate a final visual component (like an HTML page) that the user requested to see, you MUST write a script to take a screenshot (e.g., via Puppeteer) and analyze the output (checking for poor contrast, overflow, overlapping elements) *before* claiming the task is complete. Do not present broken or "stupid" UIs to the user.
