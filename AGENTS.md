<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 🚨 CRITICAL DATABASE & DATA PROTECTION RULE (ABSOLUTE RESTRICTION)
- NEVER, under any circumstance, delete, wipe, drop, clear, or bulk-remove any database, collection, document, table, user profile, or student/institutional data.
- NEVER run scripts, batch deletes, SQL drop commands, or write code that purges live database records without:
  1. Giving a LARGE, PROMINENT WARNING to the user in Bengali explaining exactly what is at risk.
  2. Clearly listing all potential losses (users, student records, academic results, irreversible damage).
  3. Obtaining explicit, clear, manual written permission from the user specifically authorizing the deletion.
- Even with Turbo Mode or auto-proceed active, DATA DELETION / DATABASE PURGING IS STRICTLY FORBIDDEN without prior explicit user confirmation. Protecting institutional data is the #1 highest priority at all times.

# ⚡ Ponytail Senior Developer Rules (YAGNI & Anti-Bloat)
- The best code is the code you never wrote. Before generating code, stop at the first rung of the Decision Ladder:
  1. **Does this need to exist?** (YAGNI) -> If speculative, skip it.
  2. **Already in this codebase?** -> Search first. Reuse existing helpers, components, and hooks.
  3. **Stdlib does it?** -> Use standard language/runtime built-ins.
  4. **Native platform feature?** -> Prefer native HTML5/CSS/browser APIs over heavy external packages.
  5. **Installed dependency?** -> Use existing packages in package.json.
  6. **Can it be one line?** -> Keep it one line.
  7. **Only then:** -> Write the minimum code that cleanly works.
- **Lazy, not negligent:** Never compromise institutional data protection, input validation, authentication boundaries, cybersecurity, or accessibility.
- **Root cause over symptoms:** Fix issues at their shared origin, not by patching symptoms across multiple callers.
- **Deletion over addition:** Remove dead code, avoid speculative boilerplate.

# 🛡️ Alibaba OpenCodeReview (OCR) & Security Standards
- Always enforce Alibaba code review standards: zero `var`, strict equality `===`, defensive null checking, zero unsanitized `innerHTML` or script injection vulnerabilities, and verified error boundaries.
- Run or verify with `scripts/ocr-check.js` on code changes.
- Ensure strict sanitization against XSS, SQLi, and SEO spam doorway injections.

# 🔥 Firebase Cloud Architecture & Authentication
- **Project Configuration**:
  - Project ID: `recr-bd`
  - Auth Domain: `recr-bd.firebaseapp.com`
  - Storage Bucket: `recr-bd.firebasestorage.app`
- **Authentication Providers**:
  - Email & Password Login
  - Google Sign-In (OAuth Popup & Redirect)
  - Password Reset / Forgot Password flow
  - Show / Hide password visibility toggle
- **Superadmin Credentials**:
  - Authorized Admin: `acbd89507@gmail.com`
  - Password: `ACBD507*`
  - Auto-fill demo buttons are strictly prohibited in production UI.

# 🌐 Clean Institutional Presentation & 100% Responsiveness
- **Public Domain Cleanliness**: Remove all security alarms, vulnerability badges, and hack alert banners from the public facing home, navbar, and footer. Maintain prestigious educational college atmosphere.
- **Accurate Institutional Location**: The location MUST always be spelled as **দখিগঞ্জ** (e.g. "জি. এল. রায় রোড, দখিগঞ্জ, মাহিগঞ্জ, রংপুর-৫৪০৩"). Never use ধোখীগঞ্জ or ধোকীগঞ্জ.
- **Hero Section Dual Architecture (Image 1 Standard)**:
  - Left: Auto-swiping / interactive carousel of real college memory photos, campus events, and students.
  - Right: Principal quote & welcome speech card with oval framed photo of Col. (Retd.) M. A. Baten and direct View More link.
- **Top Notice Marquee**: Continuous smooth right-to-left scrolling ticker on top for urgent notices and admission announcements.
- **Full-Site Dynamic CMS (Admin Panel)**: Every single section, card, title, image, notice, teacher, leadership member, marquee text, and social link MUST be editable, addable, and deletable from `/admin`.
- **Zero-Zoom Mobile Responsiveness**: UI must display cleanly at 100% viewport scale on any mobile device (320px - 1440px+) without horizontal scrolling or requiring 67% zoom out.

# 🚀 Mandatory Autonomous GitHub & Vercel Push on Every Update
- On EVERY completed task, bug fix, feature addition, or code change:
  1. Verify the project builds cleanly without errors (`npm run build` or `npx next build --webpack`).
  2. Stage all modifications and new untracked files (`git add .`).
  3. Commit with a clear, descriptive commit message explaining the updates.
  4. Push to remote repository (`git push origin main` and `git push origin main:master`), triggering Vercel production deployment.
- ALWAYS place the commit hash on the very first line of the response.
