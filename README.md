# StudyFlow

StudyFlow is a student project for organizing study tasks and keeping track of what is left to finish. It is built with React Native, Expo, TypeScript, and React Navigation.

## Features

- **Home:** See the number of unfinished tasks and a focus-session information card.
- **Tasks:** Add tasks and tap a task to mark it complete or incomplete.
- **Settings:** View sample study reminder, focus mode, and break-time information.

Tasks are stored in memory and reset when the app reloads. The focus-session and settings cards are currently display-only; timers, notifications, and editable settings are not implemented.

## Clone and run

Install Git and a Node.js LTS version compatible with the project's Expo SDK, including npm.

Clone the repository and enter its folder:

```bash
git clone https://github.com/espyder/GA-app1-studyflow.git
cd GA-app1-studyflow
```

Install the dependencies using the committed lockfile:

```bash
npm ci
```

Start the development server:

```bash
npm start
```

To run in a browser:

```bash
npm run web
```

Other available platform commands:

```bash
npm run android
npm run ios
```

Android requires a configured emulator or connected development device. The iOS simulator requires macOS and Xcode. To use Expo Go on a physical device, its supported Expo SDK must match this project's SDK; otherwise, use a compatible development build.

## Project structure

```text
App.tsx                  App entry, bottom tabs, and shared task state
screens/                 Home, Tasks, and Settings screens
components/InfoCard.tsx   Reusable information card
data/tasks.ts            Task type and initial sample tasks
assets/                  Images, app icons, and splash-screen assets
app.json                 Expo app configuration
package.json             Dependencies and development commands
```

## Development

Run the linter:

```bash
npm run lint
```

Commit source code, assets, configuration files, and `package-lock.json`. The `.gitignore` already excludes installed dependencies (`node_modules/`), local Expo state (`.expo/`), and build output (`dist/`). These are recreated locally as needed.
