# 🔒 Security Guidelines

## ⚠️ IMPORTANT: API Keys & Secrets

This project uses **environment variables** to protect sensitive information like Firebase API keys.

---

## 🚨 What NOT to Commit

**NEVER commit these files to git:**
- ✅ `.env` - Contains actual API keys
- ✅ `mobile-src/config/firebase-config.ts` - Uses API keys from .env
- ✅ `ios/GoogleService-Info.plist` - iOS Firebase config
- ✅ `android/google-services.json` - Android Firebase config

These are already in `.gitignore` and will be automatically excluded.

---

## ✅ What IS Safe to Commit

**These files are safe to commit:**
- ✅ `.env.template` - Template showing required variables (no actual keys)
- ✅ `mobile-src/config/firebase-config.template.ts` - Code template
- ✅ `.gitignore` - Git exclusion rules

---

## 🔧 Setup for New Developers

If you clone this repository, follow these steps:

### 1. Copy Environment Template
```bash
cp .env.template .env
```

### 2. Get Firebase Credentials
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project (shepherd-42536 or create new)
3. Go to **Project Settings** → **General**
4. Scroll to **Your apps** → **Web app**
5. Copy the config values

### 3. Update .env File
Open `.env` and replace all placeholder values:
```env
EXPO_PUBLIC_FIREBASE_API_KEY=your-actual-api-key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
# ... etc
```

### 4. Verify Setup
The app will throw an error on startup if environment variables are missing:
```
Error: Missing Firebase configuration keys: apiKey, projectId
Please ensure all required environment variables are set in .env file.
```

---

## 🔐 Environment Variables Explained

### Expo Public Variables
Variables prefixed with `EXPO_PUBLIC_` are:
- ✅ Accessible in the app code
- ✅ Required for client-side Firebase
- ⚠️ Still sensitive - don't commit!

### Security Note
While Firebase API keys are "safe" to expose in client apps (they're public anyway in production), we still follow best practices:
1. ✅ Keep them in .env for easy management
2. ✅ Prevent accidental exposure in git history
3. ✅ Allow different configs for dev/staging/prod
4. ✅ Make it easy to rotate keys if needed

**Real security comes from Firebase Security Rules**, not hiding API keys.

---

## 🛡️ Firebase Security Rules

Your Firebase security is protected by **Firestore Security Rules**, not by hiding API keys.

### Example Secure Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null && request.auth.uid == userId;
      allow update, delete: if request.auth != null && request.auth.uid == userId;
    }

    match /userProgress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## 📋 Security Checklist

Before committing code, verify:

- [ ] No `.env` file in git
- [ ] No hardcoded API keys in code
- [ ] No `firebase-config.ts` with actual keys
- [ ] `.gitignore` includes `.env` and config files
- [ ] Firebase Security Rules are properly configured
- [ ] Only template files (`.env.template`) are committed

---

## 🔄 If You Accidentally Committed Keys

If you accidentally committed API keys to git:

### 1. Rotate the Keys Immediately
1. Go to Firebase Console → Project Settings
2. Create a new Web App (or regenerate keys if possible)
3. Update `.env` with new keys
4. Delete the old Web App from Firebase

### 2. Remove from Git History
```bash
# Remove sensitive file from git history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch mobile-src/config/firebase-config.ts" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (⚠️ DANGEROUS - coordinate with team)
git push origin --force --all
```

### 3. Alternative: BFG Repo-Cleaner
```bash
# Faster method using BFG
brew install bfg
bfg --delete-files firebase-config.ts
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push origin --force --all
```

---

## 📚 Additional Resources

- [Firebase Security Best Practices](https://firebase.google.com/docs/rules/best-practices)
- [Expo Environment Variables](https://docs.expo.dev/guides/environment-variables/)
- [Git Secrets Prevention](https://git-secret.io/)

---

## ✅ Current Security Status

Your project is now configured with:
- ✅ Environment variables for API keys
- ✅ Proper .gitignore exclusions
- ✅ Template files for new developers
- ✅ Validation for missing config
- ✅ Documentation for best practices

**Your Firebase keys are now protected from git commits!** 🔒
