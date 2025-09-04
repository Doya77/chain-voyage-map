# Development Setup Requirements

## Prerequisites

### Required Software
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

### VSCode Extensions (Recommended)
- **ES7+ React/Redux/React-Native snippets** - Essential for React development
- **TypeScript Importer** - Auto import for TypeScript
- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
- **Auto Rename Tag** - Sync HTML/JSX tag renaming
- **Bracket Pair Colorizer** - Visual bracket matching
- **GitLens** - Enhanced Git capabilities
- **Prettier - Code formatter** - Code formatting
- **ESLint** - Code linting

## Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Dependencies

This is a **React/TypeScript** project (not Python), so dependencies are managed via `package.json`, not `requirements.txt`.

### Core Technologies
- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library

### Key Libraries
- **@tanstack/react-query** - Data fetching
- **react-router-dom** - Routing
- **mapbox-gl** - Interactive maps
- **recharts** - Data visualization
- **lucide-react** - Icons

## VSCode Settings

Create `.vscode/settings.json` in your project root:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## Environment Setup

No environment variables required for basic setup. The app runs on `http://localhost:8080` by default.

## Troubleshooting

- If you get dependency errors, run `npm install` again
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
- For TypeScript errors, restart the TypeScript server in VSCode: Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"