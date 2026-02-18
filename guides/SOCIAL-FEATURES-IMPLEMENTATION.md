# 🤝 Social Features Implementation Guide

**Shepherd Bible Learning App** - Community Features

---

## 📋 Overview

This document covers all the social/community features implemented and planned for the Shepherd Bible Learning app. These features enable users to connect, compete, and encourage each other in their faith journey.

---

## ✅ Completed Features

### 1. Friends System

**Status**: ✅ Fully Implemented

**Files Created**:
- `mobile-src/services/friendsService.ts` - All friend-related Firebase operations
- `mobile-src/screens/Community/FriendsScreen.tsx` - Main friends interface
- `mobile-src/screens/Community/FriendProfileScreen.tsx` - Detailed friend view

**Features**:
- ✅ Search users by username
- ✅ Send friend requests
- ✅ Accept/reject friend requests
- ✅ View pending requests (received and sent)
- ✅ Cancel sent requests
- ✅ Friends list with stats (Level, XP, Streak, Completed)
- ✅ Remove friends
- ✅ View friend profiles
- ✅ Compare progress with friends

**User Flow**:
```
Community Tab
  → Friends
    → [My Friends Tab] - View all friends with stats
    → [Requests Tab] - Accept/reject incoming, cancel sent
    → [Find Friends Tab] - Search by username and send requests
      → Tap friend → Friend Profile (detailed stats, achievements, comparison)
```

**Firebase Collections Used**:
- `users` - User profiles with usernames
- `userProgress` - User stats (XP, level, streak, completed lessons)
- `friendRequests` - Pending, accepted, rejected requests
- `friends` - Confirmed friendships (user1Id, user2Id pairs)

**Key Functions** (`friendsService.ts`):
```typescript
searchUsers(query, currentUserId) // Find users by username
sendFriendRequest(fromId, fromName, toId, toName)
getPendingRequests(userId) // Received requests
getSentRequests(userId) // Sent requests
acceptFriendRequest(requestId, request)
rejectFriendRequest(requestId)
cancelFriendRequest(requestId)
getFriends(userId) // Get all friends with full profiles
removeFriend(userId, friendId)
getUserProfile(userId) // Get user + progress data
areFriends(user1, user2) // Check friendship status
hasPendingRequest(from, to) // Check if request exists
```

**Screenshots Locations**:
- Friends tab with 3 sections
- Search interface
- Friend profile with comparison bars
- Friend requests with accept/reject buttons

---

### 2. Leaderboards

**Status**: ✅ Fully Implemented

**Files Created**:
- `mobile-src/screens/Community/LeaderboardScreen.tsx` - Global and friends rankings

**Features**:
- ✅ Friends leaderboard (you + all friends, ranked by XP)
- ✅ Global leaderboard (top 100 users)
- ✅ Medal icons for top 3 (gold, silver, bronze)
- ✅ Current user highlighted
- ✅ Tap any user to view their profile
- ✅ Real-time ranking updates
- ✅ Pull to refresh

**User Flow**:
```
Community Tab
  → Leaderboard
    → [Friends Tab] - See how you rank among friends
    → [Global Tab] - See top 100 users worldwide
      → Tap any user → Friend Profile
```

**Ranking Logic**:
- Sorted by `totalXP` (descending)
- Rank 1 = Gold medal 🥇
- Rank 2 = Silver medal 🥈
- Rank 3 = Bronze medal 🥉
- Rank 4+ = Number badge

**Firebase Queries**:
```typescript
// Friends Leaderboard
getFriends(userId) + current user → sort by XP

// Global Leaderboard
query(userProgress, orderBy('totalXP', 'desc'), limit(100))
```

**Visual Features**:
- Current user card has blue border
- Medal icons for top 3
- Shows XP and Level for each entry
- Smooth scrolling
- Pull-to-refresh

---

### 3. Updated Community Hub

**Status**: ✅ Updated

**File Modified**:
- `mobile-src/screens/Community/CommunityScreen.tsx`

**Changes**:
- Added Wooly welcome message
- Two active feature cards (Friends, Leaderboard) with navigation
- Coming Soon section for future features
- Your Stats preview card

**Navigation**:
```
Community Tab
  ├─→ Friends (working)
  ├─→ Leaderboard (working)
  └─→ Coming Soon:
       - Study Groups
       - Prayer Requests
       - Discussion Forums
       - Share Progress
```

---

## 🔧 Technical Implementation

### Firebase Security Rules (Already Added)

From `FIREBASE-SETUP-COMPLETE.md`, these rules are already configured:

**Friend Requests Collection**:
```javascript
match /friendRequests/{requestId} {
  // Can read if you're sender or receiver
  allow read: if isSignedIn() && (
    resource.data.fromUserId == request.auth.uid ||
    resource.data.toUserId == request.auth.uid
  );

  // Can create if you're the sender
  allow create: if isSignedIn() && request.resource.data.fromUserId == request.auth.uid;

  // Can update if you're the receiver (accept/reject)
  allow update: if isSignedIn() && resource.data.toUserId == request.auth.uid;

  // Can delete if you're the sender (cancel)
  allow delete: if isSignedIn() && resource.data.fromUserId == request.auth.uid;
}
```

**Friends Collection**:
```javascript
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
```

**Users and UserProgress**:
```javascript
match /users/{userId} {
  // Anyone can read user profiles (for friends, leaderboards)
  allow read: if isSignedIn();
  allow create, update: if isSignedIn() && isOwner(userId);
  allow delete: if false;
}

match /userProgress/{userId} {
  // Anyone can read progress (for friends, leaderboards)
  allow read: if isSignedIn();
  allow create, update: if isSignedIn() && isOwner(userId);
  allow delete: if false;
}
```

### Database Indexes

**For Leaderboards** (add in Firebase Console → Firestore → Indexes):

**Index 1**: User Leaderboard
- Collection: `userProgress`
- Fields:
  - `totalXP` → Descending
  - `__name__` → Descending
- Query scope: Collection

**Index 2**: Friend Requests by Date
- Collection: `friendRequests`
- Fields:
  - `toUserId` → Ascending
  - `status` → Ascending
  - `createdAt` → Descending
- Query scope: Collection

### Navigation Routes

Updated in `mobile-src/types/index.ts`:

```typescript
export type RootStackParamList = {
  // ... existing routes
  Friends: undefined;
  FriendProfile: { friendId: string };
  Leaderboard: undefined;
};
```

---

## 📱 How to Use (User Guide)

### Adding Friends

1. **Go to Community tab** → Tap "Friends"
2. **Search for users**:
   - Tap "Find Friends" tab
   - Enter username in search bar
   - Tap "Search"
3. **Send request**:
   - Tap "Add" button next to user
   - Request sent!
4. **They receive notification** in Requests tab

### Managing Friend Requests

1. **Go to Friends** → "Requests" tab
2. **Pending Requests section**:
   - See who wants to be friends
   - Tap ✓ to accept
   - Tap ✗ to reject
3. **Sent Requests section**:
   - See requests you sent
   - Tap "Cancel" to withdraw

### Viewing Friends

1. **Go to Friends** → "My Friends" tab
2. **See all friends** with their stats:
   - Level
   - Total XP
   - Current Streak
3. **Tap any friend** to view full profile:
   - Complete stats
   - Achievements unlocked
   - Side-by-side comparison with you
4. **Long-press** to remove friend

### Checking Leaderboards

1. **Go to Community tab** → Tap "Leaderboard"
2. **Friends Tab**:
   - See your rank among friends
   - Gold/Silver/Bronze for top 3
   - Your entry highlighted in blue
3. **Global Tab**:
   - See top 100 users worldwide
   - Find where you rank
4. **Tap any user** to view their profile

---

## 🚧 Features Still To Implement

### 1. Study Groups

**Status**: ⏳ Pending

**Planned Features**:
- Create study groups
- Join existing groups
- Group chat/messaging
- Study together sessions
- Group progress tracking
- Invite friends to groups

**Firebase Collections Needed** (security rules already added):
- `studyGroups` - Group info (name, ownerId, memberCount)
- `studyGroups/{groupId}/members` - Member list
- `studyGroups/{groupId}/messages` - Group chat

**User Flow**:
```
Community Tab
  → Study Groups
    → [My Groups] - Groups you're in
    → [Browse Groups] - Find public groups
    → [Create Group] - Make your own
      → Group Chat - Message members
      → Members List - See who's in group
      → Group Progress - See group stats
```

---

### 2. Prayer Requests

**Status**: ⏳ Pending

**Planned Features**:
- Create prayer requests
- Browse community prayers
- "I'm praying" responses
- Mark prayers as answered
- Prayer categories
- Private vs public prayers

**Firebase Collections Needed** (security rules already added):
- `prayerRequests` - Prayer posts (userId, title, description, isActive)
- `prayerRequests/{requestId}/responses` - "I'm praying" responses

**User Flow**:
```
Community Tab
  → Prayer Requests
    → [All Prayers] - Browse community prayers
    → [My Prayers] - Your prayer requests
    → [Praying For] - Prayers you're praying for
      → Tap prayer → View details
        → "I'm Praying" button
        → View who's praying
        → Mark as answered (if your prayer)
```

---

### 3. Discussion Forums

**Status**: ⏳ Pending

**Planned Features**:
- Topic categories (Study Questions, Testimonies, General)
- Create discussion topics
- Reply to discussions
- Like/upvote posts
- Sort by recent/popular
- Search discussions

**Firebase Collections Needed** (security rules already added):
- `forumTopics` - Discussion threads (userId, categoryId, title, lastActivityAt)
- `forumTopics/{topicId}/replies` - Replies to topics

**User Flow**:
```
Community Tab
  → Discussion Forums
    → [Categories]
      - Study Questions
      - Testimonies
      - Prayer Requests
      - General Discussion
    → [Recent Topics] - Latest discussions
    → [Popular Topics] - Most replies
      → Tap topic → View discussion
        → Read replies
        → Add your reply
        → Like helpful replies
```

---

## 🎨 UI/UX Patterns

### Consistent Design

All community features follow these patterns:

**Colors**:
- Friends: Blue (`#3B82F6`)
- Leaderboard: Gold (`#F59E0B`)
- Study Groups: Pink (`#EC4899`)
- Prayer Requests: Purple (`#6366F1`)
- Forums: Red (`#EF4444`)

**Card Style**:
- White background
- 16px border radius
- Shadow elevation 2
- 16px padding
- Icons in colored circles

**Empty States**:
- Large icon (48px, gray)
- Bold title
- Helpful description
- Action button (if applicable)

**Wooly Integration**:
- Appears on main screens
- Encouraging messages
- Appropriate mood for context

---

## 🧪 Testing Checklist

### Friends System
- [ ] Search for users by username
- [ ] Send friend request
- [ ] Receive friend request
- [ ] Accept friend request
- [ ] Reject friend request
- [ ] Cancel sent request
- [ ] View friends list
- [ ] View friend profile
- [ ] Compare progress with friend
- [ ] Remove friend
- [ ] Friend removed from both sides

### Leaderboards
- [ ] View friends leaderboard
- [ ] See correct ranking
- [ ] Current user highlighted
- [ ] View global leaderboard
- [ ] Top 3 have medals
- [ ] Tap user to view profile
- [ ] Pull to refresh updates
- [ ] Ranking changes when XP changes

### Navigation
- [ ] Community → Friends works
- [ ] Community → Leaderboard works
- [ ] Friends → Friend Profile works
- [ ] Leaderboard → Friend Profile works
- [ ] Back navigation works correctly

### Data Sync
- [ ] Friend requests sync across devices
- [ ] Friends list syncs across devices
- [ ] Leaderboard updates in real-time
- [ ] Profile changes reflect immediately

---

## 🐛 Troubleshooting

### Common Issues

**"Can't search for users"**
- Check Firebase security rules are published
- Verify `users` collection has read permission for signed-in users
- Check user is logged in

**"Friend requests not appearing"**
- Check Firestore indexes are built (can take 5-10 minutes)
- Verify security rules for `friendRequests` collection
- Check both users are signed in

**"Leaderboard empty"**
- Check `userProgress` collection has data
- Verify index on `totalXP` field exists
- Check security rules allow read for signed-in users

**"Profile not loading"**
- Check user exists in both `users` and `userProgress`
- Verify Firebase connection
- Check console for errors

### Firebase Console Checks

1. **Collections exist**:
   - `users`
   - `userProgress`
   - `friendRequests`
   - `friends`

2. **Indexes built** (Firestore → Indexes):
   - `userProgress` by `totalXP` descending
   - `friendRequests` by `toUserId`, `status`, `createdAt`

3. **Security rules published** (Firestore → Rules):
   - Friends read/write rules
   - Friend requests rules
   - Users/progress read rules

---

## 📊 Analytics to Track

Once features are live, track:

**Engagement**:
- Friend request sent count
- Friend request acceptance rate
- Average friends per user
- Leaderboard views per user
- Profile views

**Retention**:
- Users with 1+ friends
- Users with 5+ friends
- Daily leaderboard checkers
- Friend comparison views

**Social Graph**:
- Total friendships
- Most-connected users
- Friend discovery method (search vs invite)

---

## 🚀 Next Steps

### Immediate (Now)
1. ✅ **Test Friends System** - Add friends, send requests
2. ✅ **Test Leaderboard** - Check rankings, view profiles
3. ✅ **Verify Firebase** - Check data is saving correctly

### Short Term (Next Sprint)
1. **Implement Study Groups**
   - Create group screens
   - Add group chat functionality
   - Build group browsing
2. **Add Prayer Requests**
   - Create prayer request screens
   - Add response system
   - Implement categories

### Medium Term (Following Sprint)
1. **Build Discussion Forums**
   - Create forum screens
   - Add topic categories
   - Implement replies system
2. **Add Notifications**
   - Friend request notifications
   - Prayer update notifications
   - Group message notifications

### Long Term (Future)
1. **Advanced Features**:
   - Video study sessions
   - Voice notes in groups
   - Photo sharing in prayers
   - Push notifications
2. **Moderation Tools**:
   - Report inappropriate content
   - Block users
   - Admin dashboard

---

## 📄 Related Documentation

- [FIREBASE-SETUP-COMPLETE.md](./FIREBASE-SETUP-COMPLETE.md) - Backend setup with all security rules
- [DEPLOYMENT-COMPLETE.md](./DEPLOYMENT-COMPLETE.md) - Full deployment guide
- [COMPLETE-FEATURES-SUMMARY.md](./COMPLETE-FEATURES-SUMMARY.md) - All app features overview
- [START-HERE.md](./START-HERE.md) - Project overview

---

## 🎉 Summary

**What's Working Now**:
- ✅ Complete Friends system (search, add, manage, view profiles)
- ✅ Friends and Global leaderboards
- ✅ Progress comparison
- ✅ Real-time data sync
- ✅ Firebase backend fully configured

**What's Next**:
- Study Groups
- Prayer Requests
- Discussion Forums

**Impact**:
Users can now connect with friends, compete on leaderboards, and see each other's progress - making Bible learning a social, encouraging experience!

---

**Implementation Date**: January 2026
**Status**: Friends & Leaderboards Complete ✅
**Next Features**: Study Groups, Prayer Requests, Forums

🐑 **"As iron sharpens iron, so one person sharpens another." - Proverbs 27:17**
