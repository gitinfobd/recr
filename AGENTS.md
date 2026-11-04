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

# 🔐 Superadmin Management & Dynamic Content Architecture
- **Admin Portal**: Accessible via `/admin` with protected routes.
- **Superadmin Credentials**:
  - Email: `super@recr.edu.bd`
  - Password: `trynot9999*`
- **Dynamic Content Engine**: Notices, Teachers/Management, and Admission applications are managed via a reactive, persistent state (`DataContext` with client-side synchronization and server fallbacks). Every single section is editable, addable, and deletable by the admin.
- **High-Contrast Accessibility**: Ensure strict WCAG AAA contrast across all themes — never allow white-on-white text or invisible contact numbers.
- **Real Institutional Assets**: Always prioritize real Rangpur Engineering College photos, banners, and leadership details over generic stock images.

# 🧠 Autonomous 280+ Agency Agents Coordination (Zero Manual Overhead)
- The entire 280+ Agency Agents repository is permanently installed locally at `C:\Users\missi\.gemini\agency-agents` and `C:\Users\missi\.claude\agents`.
- The AI autonomously detects the task domain and assumes the specialist persona:
  - **AppSec / Cybersecurity Specialist**: Incident triage, SEO spam doorway analysis, malware eradication, server hardening.
  - **Frontend Developer / UI Designer**: Soft Neumorphism (Soft UI) aesthetic, WCAG AA contrast, 60fps micro-interactions, responsive mobile layout.
  - **Technical SEO Specialist**: Canonical tags, XML sitemap, clean robots.txt, Google Search Console indexing recovery, JSON-LD Schema.
  - **QA Engineer**: Build verification, error handling, Cross-browser compatibility.

# 🚀 Mandatory Autonomous GitHub & Vercel Push on Every Update
- On EVERY completed task, bug fix, feature addition, or code change:
  1. Verify the project builds cleanly without errors (`npm run build` or `npx next build --webpack`).
  2. Stage all modifications and new untracked files (`git add .`).
  3. Commit with a clear, descriptive commit message explaining the updates.
  4. Push to remote repository (`git push origin main` and `git push origin main:master`), triggering Vercel production deployment to `recrtest.vercel.app`.
- NEVER ask the user if you should push. Deploy automatically as part of completing the task.
