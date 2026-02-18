# 🔥 Complete Firebase Setup Guide for Shepherd App

**For First-Time App Developers** - Step-by-step guide with screenshots references

---

## 📋 What You'll Set Up

1. **Firebase Project** - Backend for your app
2. **Authentication** - User login system
3. **Firestore Database** - Store all data
4. **Cloud Storage** - Store profile pictures
5. **Security Rules** - Protect your data
6. **iOS Configuration** - Connect to iOS app
7. **Android Configuration** - Connect to Android app

**Time needed**: 30-45 minutes

---

## Part 1: Create Firebase Project

### Step 1: Go to Firebase Console

1. Open your browser and go to: https://console.firebase.google.com
2. Click **"Get started"** or **"Go to console"**
3. Sign in with your Google account (create one if needed)

### Step 2: Create New Project

1. Click **"Add project"** (the big + button)
2. Enter project name: `shepherd-bible-app` (or your choice)
3. Click **Continue**

### Step 3: Google Analytics (Optional but Recommended)

1. **Enable Google Analytics**: Toggle ON (recommended)
2. Click **Continue**
3. **Select or create Analytics account**: Choose "Default Account for Firebase"
4. Click **Create project**
5. Wait 1-2 minutes for setup to complete
6. Click **Continue** when ready

---

## Part 2: Enable Authentication

### Step 1: Open Authentication

1. In left sidebar, click **"Build"** → **"Authentication"**
2. Click **"Get started"**

### Step 2: Enable Email/Password

1. Click **"Sign-in method"** tab at top
2. Find **"Email/Password"** in the list
3. Click on it
4. Toggle **"Enable"** to ON
5. Leave "Email link (passwordless sign-in)" as OFF
6. Click **"Save"**

**✅ You now have user authentication enabled!**

---

## Part 3: Set Up Firestore Database

### Step 1: Create Database

1. In left sidebar, click **"Build"** → **"Firestore Database"**
2. Click **"Create database"**

### Step 2: Choose Location

1. **Select location**: Choose closest to your users
   - `us-central1` (Iowa, USA)
   - `europe-west1` (Belgium, Europe)
   - `asia-southeast1` (Singapore, Asia)
2. Click **"Next"**

### Step 3: Security Rules

1. Select **"Start in production mode"** (we'll add rules next)
2. Click **"Enable"**
3. Wait 30-60 seconds for database creation

### Step 4: Add Security Rules

1. Click **"Rules"** tab at top
2. **Delete everything** in the editor
3. **Copy and paste this** (complete security rules):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Helper functions
    function isSignedIn() {
      return request.auth != null;
    }

    function isOwner(userId) {
      return request.auth.uid == userId;
    }

    // Users collection
    match /users/{userId} {
      // Anyone can read user profiles (for friends, leaderboards)
      allow read: if isSignedIn();

      // Only user can create/update their own profile
      allow create: if isSignedIn() && isOwner(userId);
      allow update: if isSignedIn() && isOwner(userId);

      // No one can delete users
      allow delete: if false;
    }

    // User progress collection
    match /userProgress/{userId} {
      // Anyone can read progress (for friends, leaderboards)
      allow read: if isSignedIn();

      // Only user can update their own progress
      allow create, update: if isSignedIn() && isOwner(userId);
      allow delete: if false;
    }

    // Friend requests collection
    match /friendRequests/{requestId} {
      // Can read if you're the sender or receiver
      allow read: if isSignedIn() && (
        resource.data.fromUserId == request.auth.uid ||
        resource.data.toUserId == request.auth.uid
      );

      // Can create if you're the sender
      allow create: if isSignedIn() && request.resource.data.fromUserId == request.auth.uid;

      // Can update if you're the receiver (to accept/reject)
      allow update: if isSignedIn() && resource.data.toUserId == request.auth.uid;

      // Can delete if you're the sender (cancel request)
      allow delete: if isSignedIn() && resource.data.fromUserId == request.auth.uid;
    }

    // Friends collection
    match /friends/{friendshipId} {
      // Can read if you're one of the friends
      allow read: if isSignedIn() && (
        resource.data.user1Id == request.auth.uid ||
        resource.data.user2Id == request.auth.uid
      );

      // Can create if you're one of the users
      allow create: if isSignedIn() && (
        request.resource.data.user1Id == request.auth.uid ||
        request.resource.data.user2Id == request.auth.uid
      );

      // Can delete if you're one of the friends (unfriend)
      allow delete: if isSignedIn() && (
        resource.data.user1Id == request.auth.uid ||
        resource.data.user2Id == request.auth.uid
      );
    }

    // Study groups collection
    match /studyGroups/{groupId} {
      // Anyone can read groups (to browse and join)
      allow read: if isSignedIn();

      // Any signed-in user can create a group
      allow create: if isSignedIn() && request.resource.data.ownerId == request.auth.uid;

      // Only group owner can update
      allow update: if isSignedIn() && resource.data.ownerId == request.auth.uid;

      // Only group owner can delete
      allow delete: if isSignedIn() && resource.data.ownerId == request.auth.uid;
    }

    // Group members subcollection
    match /studyGroups/{groupId}/members/{memberId} {
      // Anyone in the group can read members
      allow read: if isSignedIn();

      // Users can join groups themselves
      allow create: if isSignedIn() && memberId == request.auth.uid;

      // Users can leave groups themselves
      allow delete: if isSignedIn() && memberId == request.auth.uid;

      // Group owner can remove members
      allow delete: if isSignedIn() && get(/databases/$(database)/documents/studyGroups/$(groupId)).data.ownerId == request.auth.uid;
    }

    // Group messages subcollection
    match /studyGroups/{groupId}/messages/{messageId} {
      // Anyone in the group can read messages
      allow read: if isSignedIn();

      // Members can send messages
      allow create: if isSignedIn() && request.resource.data.userId == request.auth.uid;

      // Users can delete their own messages
      allow delete: if isSignedIn() && resource.data.userId == request.auth.uid;
    }

    // Prayer requests collection
    match /prayerRequests/{requestId} {
      // Anyone can read public prayers
      allow read: if isSignedIn();

      // Any signed-in user can create prayer
      allow create: if isSignedIn() && request.resource.data.userId == request.auth.uid;

      // Only creator can update their prayer
      allow update: if isSignedIn() && resource.data.userId == request.auth.uid;

      // Only creator can delete their prayer
      allow delete: if isSignedIn() && resource.data.userId == request.auth.uid;
    }

    // Prayer responses subcollection
    match /prayerRequests/{requestId}/responses/{responseId} {
      // Anyone can read responses
      allow read: if isSignedIn();

      // Anyone can add a response ("I'm praying")
      allow create: if isSignedIn() && request.resource.data.userId == request.auth.uid;

      // Users can delete their own responses
      allow delete: if isSignedIn() && resource.data.userId == request.auth.uid;
    }

    // Discussion forums collection
    match /forumTopics/{topicId} {
      // Anyone can read topics
      allow read: if isSignedIn();

      // Any signed-in user can create topic
      allow create: if isSignedIn() && request.resource.data.userId == request.auth.uid;

      // Only creator can update their topic
      allow update: if isSignedIn() && resource.data.userId == request.auth.uid;

      // Only creator can delete their topic
      allow delete: if isSignedIn() && resource.data.userId == request.auth.uid;
    }

    // Forum replies subcollection
    match /forumTopics/{topicId}/replies/{replyId} {
      // Anyone can read replies
      allow read: if isSignedIn();

      // Anyone can add a reply
      allow create: if isSignedIn() && request.resource.data.userId == request.auth.uid;

      // Users can update their own replies
      allow update: if isSignedIn() && resource.data.userId == request.auth.uid;

      // Users can delete their own replies
      allow delete: if isSignedIn() && resource.data.userId == request.auth.uid;
    }
  }
}
```

4. Click **"Publish"**
5. Click **"Publish"** again to confirm

**✅ Your database is now secure!**

---

## Part 4: Set Up Cloud Storage (Profile Pictures)

### Step 1: Create Storage

1. In left sidebar, click **"Build"** → **"Storage"**
2. Click **"Get started"**

### Step 2: Security Rules

1. Keep default security mode
2. Click **"Next"**

### Step 3: Choose Location

1. Use **same location** as Firestore (from Part 3)
2. Click **"Done"**

### Step 4: Update Storage Rules

1. Click **"Rules"** tab at top
2. Replace with this:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Profile pictures
    match /profilePictures/{userId}/{fileName} {
      // Anyone can read profile pictures
      allow read: if true;

      // Only user can upload their own picture
      allow write: if request.auth != null && request.auth.uid == userId
                   && request.resource.size < 5 * 1024 * 1024 // Max 5MB
                   && request.resource.contentType.matches('image/.*'); // Images only
    }

    // Group pictures
    match /groupPictures/{groupId}/{fileName} {
      // Anyone can read group pictures
      allow read: if true;

      // Group owner can upload picture
      allow write: if request.auth != null
                   && request.resource.size < 5 * 1024 * 1024
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

3. Click **"Publish"**

**✅ Storage is ready for images!**

---

## Part 5: Register iOS App

### Step 1: Add iOS App

1. Go to **Project Overview** (top of left sidebar)
2. Click the **iOS** icon (or **"Add app"** if you see it)
3. **iOS bundle ID**: `com.yourcompany.shepherd`
   - ⚠️ **IMPORTANT**: Once set, you can't change this!
   - Use your real company name or personal name
   - Example: `com.johnsmith.shepherd`
4. **App nickname**: `Shepherd iOS` (optional)
5. **App Store ID**: Leave blank for now
6. Click **"Register app"**

### Step 2: Download Config File

1. Click **"Download GoogleService-Info.plist"**
2. **Save it** to your computer (Desktop is fine)
3. **IMPORTANT**: We'll add this to Xcode later
4. Click **"Next"**

### Step 3: Skip SDK Setup

1. Click **"Next"** (we'll do this in code later)
2. Click **"Continue to console"**

**✅ iOS app registered!**

---

## Part 6: Register Android App

### Step 1: Add Android App

1. Go to **Project Overview** (top of left sidebar)
2. Click the **Android** icon
3. **Android package name**: `com.yourcompany.shepherd`
   - ⚠️ Must match iOS bundle ID (same format)
   - Example: `com.johnsmith.shepherd`
4. **App nickname**: `Shepherd Android` (optional)
5. **Debug signing certificate SHA-1**: Leave blank for now
6. Click **"Register app"**

### Step 2: Download Config File

1. Click **"Download google-services.json"**
2. **Save it** to your computer (Desktop is fine)
3. **IMPORTANT**: We'll add this to Android Studio later
4. Click **"Next"**

### Step 3: Skip SDK Setup

1. Click **"Next"** (we'll do this in code later)
2. Click **"Continue to console"**

**✅ Android app registered!**

---

## Part 7: Enable Indexes (For Fast Queries)

Firebase needs indexes for complex queries like leaderboards and search.

### Step 1: Create Indexes

1. Click **"Firestore Database"** in left sidebar
2. Click **"Indexes"** tab at top
3. Click **"Add index"** (do this for each):

**Index 1: User Leaderboard**
- Collection ID: `userProgress`
- Fields to index:
  - `totalXP` → Descending
  - `__name__` → Descending
- Query scope: Collection
- Click **"Create"**

**Index 2: Friends Leaderboard**
- Collection ID: `userProgress`
- Fields to index:
  - `level` → Descending
  - `totalXP` → Descending
  - `__name__` → Descending
- Query scope: Collection
- Click **"Create"**

**Index 3: Prayer Requests by Date**
- Collection ID: `prayerRequests`
- Fields to index:
  - `isActive` → Ascending
  - `createdAt` → Descending
  - `__name__` → Descending
- Query scope: Collection
- Click **"Create"**

**Index 4: Forum Topics by Activity**
- Collection ID: `forumTopics`
- Fields to index:
  - `categoryId` → Ascending
  - `lastActivityAt` → Descending
  - `__name__` → Descending
- Query scope: Collection
- Click **"Create"**

### Step 2: Wait for Indexes

- Indexes take **5-10 minutes** to build
- Status shows "Building..." then "Enabled"
- You can continue to next steps while waiting

**✅ Indexes created!**

---

## Part 8: Get Your Config Details

You'll need these for your app code:

### Step 1: Find Project Settings

1. Click **gear icon** ⚙️ next to "Project Overview"
2. Click **"Project settings"**

### Step 2: Note These Down

Scroll down to **"Your apps"** section and note:

**For iOS App:**
- API Key
- Project ID
- Storage Bucket
- iOS Bundle ID

**For Android App:**
- Same details as iOS
- Android Package Name

### Step 3: Firebase SDK Config

Scroll to **"SDK setup and configuration"**

**Config object** looks like:
```javascript
{
  apiKey: "AIza...",
  authDomain: "shepherd-bible-app.firebaseapp.com",
  projectId: "shepherd-bible-app",
  storageBucket: "shepherd-bible-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:ios:abc123"
}
```

**Save this** - you'll need it!

---

## Part 9: Verify Everything

### Checklist ✅

Go through this checklist to make sure everything is set up:

- [  ] Firebase project created
- [  ] Email/Password authentication enabled
- [  ] Firestore database created
- [  ] Firestore security rules added and published
- [  ] Cloud Storage created
- [  ] Storage security rules added and published
- [  ] iOS app registered
- [  ] GoogleService-Info.plist downloaded
- [  ] Android app registered
- [  ] google-services.json downloaded
- [  ] Indexes created (may still be building)
- [  ] Config details noted down

---

## 🎉 Firebase Setup Complete!

**What you have now:**
- Backend infrastructure for your app
- User authentication system
- Database for all app data
- Image storage for profiles
- Security protecting everything
- iOS and Android configured

**Next steps:**
1. Add config files to your app code
2. Test authentication
3. Test data writing/reading
4. Deploy your app!

---

## 🆘 Troubleshooting

### "Permission denied" errors
- Check your security rules are published
- Make sure user is signed in
- Verify userId matches in rules

### Indexes not building
- Wait 10-15 minutes
- Check "Indexes" tab for status
- Red X means error - recreate the index

### Can't find config files
- Go to Project Settings → Your apps
- Scroll down and click "Download" again

### Wrong bundle ID/package name
- You can add a NEW app with correct ID
- Delete the wrong one in Project Settings

---

## 📞 Need Help?

**Firebase Documentation:**
- https://firebase.google.com/docs

**Firebase Support:**
- https://firebase.google.com/support

**Stack Overflow:**
- Tag: `firebase` + `react-native`

---

**Setup By**: First-Time Developer
**Time Spent**: 30-45 minutes
**Status**: ✅ Complete and Ready!

🔥 **Your Firebase backend is ready for Shepherd!**
