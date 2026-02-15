# Firestore Rules Deployment

## Om de nieuwe Firestore rules te deployen:

1. **Via Firebase Console (Aanbevolen)**:
   - Ga naar https://console.firebase.google.com
   - Selecteer je project
   - Ga naar Firestore Database → Rules
   - Kopieer de inhoud van `firestore.rules`
   - Plak in de editor
   - Klik "Publish"

2. **Via Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase deploy --only firestore:rules
   ```

## Wat is toegevoegd:
- ✅ Delete permissies voor prayer requests (eigen requests)
- ✅ Delete permissies voor forum topics & replies (eigen posts)
- ✅ Delete permissies voor study groups (alleen owner)
- ✅ Messages subcollection permissions toegevoegd

Na deployment zou delete functionaliteit moeten werken!
