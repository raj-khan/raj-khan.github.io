# Quick Start Guide

## 🚀 Get Running in 3 Steps

### 1. Install Dependencies

```bash
# Make sure you have pnpm installed
npm install -g pnpm

# Install all packages
pnpm install
```

### 2. Run Tests (TDD Verification)

```bash
# Verify everything works
pnpm test
```

Expected output:
```
✓ src/lib/scoreCalculator.test.ts (7 tests)
✓ src/store/testStore.test.ts (8 tests)

Test Files  2 passed (2)
Tests  15 passed (15)
```

### 3. Start Development

```bash
# Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📂 What's Inside

```
personality-app-web/
├── apps/frontend/          ← Your Next.js app
│   ├── src/
│   │   ├── app/           ← Pages (/, /test, /result)
│   │   ├── lib/           ← Score calculator
│   │   ├── store/         ← Zustand state
│   │   └── components/    ← React components (coming soon)
│   └── vitest.config.ts   ← Test configuration
│
├── packages/
│   ├── types/             ← TypeScript types (shared)
│   └── test-data/         ← Questions & personalities (JSON)
│
└── README.md              ← Full documentation
```

---

## 🧪 TDD Workflow

This project uses **Test-Driven Development**. Here's the workflow:

1. **Red**: Write a failing test
2. **Green**: Make it pass with minimal code
3. **Refactor**: Clean up while keeping tests green

Example:

```bash
# Start test watch mode
pnpm test:watch

# Edit a test file: apps/frontend/src/lib/scoreCalculator.test.ts
# Watch it fail ❌

# Edit implementation: apps/frontend/src/lib/scoreCalculator.ts
# Watch it pass ✅
```

---

## 🎯 Next Steps

### Add a New Component (with TDD)

```bash
# 1. Create test first
apps/frontend/src/components/QuestionCard/QuestionCard.test.tsx

# 2. Write failing tests

# 3. Create component
apps/frontend/src/components/QuestionCard/QuestionCard.tsx

# 4. Make tests pass

# 5. Add to page
apps/frontend/src/app/test/page.tsx
```

### Current Status

- ✅ Monorepo setup with Turborepo
- ✅ TypeScript configuration
- ✅ Test suite with Vitest
- ✅ Score calculation logic (tested)
- ✅ State management with Zustand (tested)
- ✅ Homepage with unique design
- ✅ All 16 personality types data
- ✅ 24 test questions

### To Do

- [ ] Test page UI with question cards
- [ ] Progress bar component
- [ ] Result page with personality details
- [ ] Photocard generator
- [ ] Share functionality
- [ ] Backend integration (later)

---

## 🆘 Troubleshooting

### Tests failing?

```bash
# Clear cache and reinstall
rm -rf node_modules
pnpm install
pnpm test
```

### Type errors?

```bash
# Check all types
pnpm type-check
```

### Port 3000 in use?

```bash
# Use a different port
PORT=3001 pnpm dev
```

---

## 📚 Key Files to Know

| File | Purpose |
|------|---------|
| `packages/types/src/index.ts` | All TypeScript interfaces |
| `packages/test-data/src/data/questions.ts` | 24 test questions |
| `packages/test-data/src/data/personalities.ts` | 16 personality types |
| `apps/frontend/src/lib/scoreCalculator.ts` | Core logic |
| `apps/frontend/src/store/testStore.ts` | State management |
| `apps/frontend/src/app/page.tsx` | Homepage |

---

## 🎨 Design System

### Colors

- **Analysts**: `#88619A` (Purple) - INTJ, INTP, ENTJ, ENTP
- **Diplomats**: `#33A474` (Green) - INFJ, INFP, ENFJ, ENFP
- **Sentinels**: `#4298B4` (Blue) - ISTJ, ISFJ, ESTJ, ESFJ
- **Explorers**: `#E4AE3A` (Yellow) - ISTP, ISFP, ESTP, ESFP

### Tailwind Classes

```tsx
// Role colors
className="bg-analyst"     // Purple
className="bg-diplomat"    // Green
className="bg-sentinel"    // Blue
className="bg-explorer"    // Yellow

// Pre-built components
className="btn-primary"
className="btn-secondary"
className="card"
```

---

## 💡 Pro Tips

1. **Keep tests running**: Use `pnpm test:watch` while developing
2. **TypeScript is your friend**: Don't ignore type errors
3. **Small commits**: Commit after each green test
4. **Use the types**: Import from `@personality-app/types`
5. **Mock API ready**: Easy to swap JSON for real API later

---

**Happy Coding! 🚀**
