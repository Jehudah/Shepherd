# 🍎 Complete iOS App Store Submission Guide

**For First-Time App Developers** - Submit Shepherd to the Apple App Store

---

## 📋 What You'll Do

1. **Apple Developer Account** - Sign up ($99/year)
2. **App Store Connect Setup** - Create your app listing
3. **App Information** - Fill in all required details
4. **Screenshots & Media** - Create beautiful app previews
5. **Upload Build** - Submit your IPA file
6. **Review Submission** - Send to Apple for approval
7. **Launch** - Release your app to the world!

**Time needed**: 3-4 hours for first submission
**Cost**: $99/year for Apple Developer Program
**Prerequisites**:
- Firebase setup complete
- Expo production build created (see EXPO-DEPLOYMENT-GUIDE.md)

---

## Part 1: Apple Developer Account

### Step 1: Sign Up for Apple Developer Program

1. Go to: https://developer.apple.com/programs/
2. Click **"Enroll"**
3. Sign in with your Apple ID (or create one)
4. Choose **"Individual"** or **"Organization"**
   - **Individual**: Personal developer (faster approval, 1-2 days)
   - **Organization**: Company/nonprofit (requires business verification, 1-2 weeks)

### Step 2: Pay Annual Fee

1. Cost: **$99 USD** (renews annually)
2. Payment methods: Credit card, debit card
3. Complete payment

### Step 3: Review Agreement

1. Read Apple Developer Program License Agreement
2. Accept terms
3. Click **"Purchase"**

### Step 4: Wait for Approval

- **Individual**: Usually approved within 24-48 hours
- **Organization**: May take 1-2 weeks for verification
- Check email for approval notification

---

## Part 2: App Store Connect Setup

### Step 1: Access App Store Connect

1. Go to: https://appstoreconnect.apple.com
2. Sign in with your Apple ID (same as developer account)
3. Wait for page to load

### Step 2: Create New App

1. Click **"My Apps"** in top menu
2. Click **"+"** button (top left)
3. Select **"New App"**

### Step 3: Fill in Platform & Basic Info

**Platforms**: Check **iOS**

**Name**: `Shepherd Bible Learning`
- This is the name that appears in the App Store
- 30 characters maximum
- Must be unique across the entire App Store

**Primary Language**: `English (U.S.)`

**Bundle ID**: Select your bundle ID from dropdown
- Should be: `com.yourcompany.shepherd`
- This was set in Firebase and Expo setup
- If you don't see it, you may need to create it in Apple Developer portal first

**SKU**: `shepherd-bible-app-001`
- Your internal reference code
- Can be anything unique to you
- Not shown to users

**User Access**:
- **Full Access** (recommended for first app)

Click **"Create"**

---

## Part 3: App Information

You'll now see your app's page with several tabs. Let's fill them out.

### Step 1: General Information (App Information Tab)

Click **"App Information"** in left sidebar.

**App Name**: `Shepherd Bible Learning` (already filled)

**Subtitle** (optional, recommended):
```
Learn the Bible with Wooly the Sheep
```
- 30 characters max
- Appears under app name in search

**Category**:
- **Primary Category**: Education
- **Secondary Category**: Reference

**Content Rights**:
- Select: "No, it does not contain, show, or access third-party content"

**Age Rating**: Click **"Edit"**
- Answer all questions (likely all "None")
- This will determine 4+, 9+, 12+, or 17+ rating
- Biblical app should get **4+** rating

**Copyright**: `2026 Your Name` (replace with your actual name or company)

**App Review Information**:
- **Contact**: Your email and phone
- **Demo Account**: Create a test user in your app
  - Username: `appreviewer`
  - Password: `TestShepherd2026!`
  - Email: Your email
- **Notes**:
```
This is a Bible learning app with gamification. The demo account is pre-configured with some progress so you can test all features.

Main features to test:
1. Login with demo account
2. Complete a lesson in the Learn tab
3. View progress in Profile tab
4. Browse Study articles

Firebase backend is fully configured. All features should work immediately.
```

**Version Information**:
- **Copyright**: `2026 Your Name`

Click **"Save"** at top right

### Step 2: Pricing and Availability

Click **"Pricing and Availability"** in left sidebar.

**Price Schedule**:
- Select **"Free"** (for your first app, recommended)
- Or set a price if you want to charge

**Availability**:
- **All Countries and Regions** (recommended)
- Or select specific countries

**Distribution Method**:
- **Public** - Anyone can find and download
- Or **Private** - Only accessible via link

Click **"Save"**

---

## Part 4: Prepare for Submission

### Step 1: Create App Screenshots

You need screenshots for different iPhone sizes.

**Required Sizes**:
1. **6.7" Display** (iPhone 14 Pro Max, 15 Pro Max) - 1290 x 2796 pixels
2. **6.5" Display** (iPhone 11 Pro Max, XS Max) - 1242 x 2688 pixels

**Recommended Screenshots** (5-10 images):
1. **Welcome/Login Screen** - First impression
2. **Learn Tab** - Category grid with Wooly
3. **Lesson in Progress** - Active quiz question
4. **Results Screen** - XP earned, celebration
5. **Profile Screen** - Stats and achievements
6. **Study Article** - Beautiful reading experience
7. **Themes Selection** - Colorful theme cards
8. **Names Categories** - Browse biblical figures

**How to Take Screenshots**:

**Option 1: iOS Simulator** (Mac only)
```bash
# Run iOS Simulator
npx expo run:ios

# Take screenshot
Cmd + S (saves to Desktop)

# Or use Device menu > Screenshot
```

**Option 2: Real Device**
1. Open app on iPhone
2. Press Side Button + Volume Up (simultaneously)
3. Screenshot saves to Photos
4. AirDrop or email to computer

**Option 3: Design Tools**
- Use Figma, Sketch, or Photoshop
- Create mockups with device frames
- Export at required sizes

**Screenshot Tips**:
- Use actual app content (not placeholders)
- Show Wooly in several screenshots
- Highlight unique features
- Add text overlays if helpful (optional)
- Use bright, engaging screens
- Avoid empty states

### Step 2: Create App Icon

**Requirements**:
- 1024 x 1024 pixels
- PNG format (no transparency)
- sRGB color space
- No rounded corners (Apple adds them)

**See APP-ICON-GUIDE.md** for complete icon creation guide.

Quick options:
- Use AI generator (DALL-E, Midjourney)
- Hire designer on Fiverr ($25-100)
- Use Canva templates

**Must include**:
- Shepherd theme (cartoony shepherd)
- Wooly the sheep
- Warm, inviting colors
- Professional quality

### Step 3: Write App Description

**App Preview** (170 characters):
```
Learn the Bible in a fun, engaging way! Join Wooly the Sheep on your journey through Scripture with quizzes, challenges, and in-depth studies. Track your progress!
```

**Description** (Full, 4000 characters max):
```
🐑 Welcome to Shepherd Bible Learning!

Join Wooly the Sheep, your friendly guide, on an exciting journey through the Bible! Whether you're new to Scripture or deepening your faith, Shepherd makes Bible learning fun, engaging, and rewarding.

✨ FEATURES

📖 SIX LEARNING PATHS
• Names & People - Meet the prophets, kings, disciples, and heroes of faith
• Biblical Themes - Explore love, faith, hope, peace, and wisdom
• Timeline - Discover events in chronological order
• Memorize Verses - Master key scriptures
• Parables & Stories - Understand Jesus' teachings
• Bible Books - Study from Genesis to Revelation

🎯 ENGAGING QUIZZES
• 780+ questions across all categories
• Multiple choice and true/false formats
• Immediate feedback on answers
• Learn at your own pace
• Sequential lesson progression

📚 IN-DEPTH STUDY ARTICLES
• Deep dives into biblical characters
• Theological concept explanations
• Key takeaways for practical application
• Scripture references throughout

🎮 GAMIFICATION
• Earn XP points for completing lessons
• Level up as you learn
• Daily streak tracking
• Weekly and monthly challenges
• Achievement system

📊 TRACK YOUR PROGRESS
• View your learning statistics
• Monitor XP and level
• See completed lessons
• Category-by-category progress
• Cloud sync across devices

☁️ CLOUD SYNC
• Create your free account
• Progress saved to the cloud
• Access from multiple devices
• Never lose your learning journey

🐑 MEET WOOLY
Your friendly sheep guide appears throughout the app with encouraging messages, helpful tips, and yes - adorable sheep puns! Wooly makes Bible learning approachable and fun.

🎯 PERFECT FOR
• New believers exploring Scripture
• Long-time Christians deepening knowledge
• Parents teaching children about the Bible
• Study groups and Bible classes
• Anyone wanting to learn God's Word in a fun way

💡 WHY SHEPHERD?
Unlike traditional Bible apps, Shepherd combines education with engagement. Learn through interactive quizzes, track your progress, and celebrate your achievements - all while exploring the richness of Scripture.

🆓 FREE TO USE
Shepherd is completely free with no in-app purchases. Our mission is to make Bible learning accessible to everyone.

---

Download Shepherd today and start your Bible learning adventure with Wooly! 🐑✨

"Your word is a lamp to my feet and a light to my path." - Psalm 119:105
```

**Keywords** (100 characters max, comma-separated):
```
Bible,study,quiz,learn,Scripture,Christian,faith,verse,memorize,God,Jesus,education
```

**Support URL**: Your website or email (e.g., `mailto:your-email@example.com`)

**Marketing URL** (optional): Your app's website (if you have one)

**Privacy Policy URL**: **REQUIRED** - See "Privacy Policy" section below

---

## Part 5: Create Privacy Policy

### Why You Need One

Apple requires a privacy policy URL for all apps. Here's what to include:

**Option 1: Use Privacy Policy Generator** (Easiest)

1. Go to: https://www.freeprivacypolicy.com/free-privacy-policy-generator/
2. Select "App"
3. Enter:
   - App name: Shepherd Bible Learning
   - Website: Your email or basic website
4. Select what data you collect:
   - Email addresses (for authentication)
   - Usernames (for profiles)
   - Progress data (XP, completed lessons)
5. Generate and download

**Option 2: Host on GitHub Pages** (Free hosting)

1. Create new GitHub repository: `shepherd-privacy-policy`
2. Create `index.html` with your privacy policy
3. Enable GitHub Pages in repository settings
4. Use URL: `https://your-github-username.github.io/shepherd-privacy-policy`

**Option 3: Simple Privacy Policy Template**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Shepherd Bible Learning - Privacy Policy</title>
</head>
<body>
    <h1>Privacy Policy for Shepherd Bible Learning</h1>
    <p><strong>Last updated: January 13, 2026</strong></p>

    <h2>Information We Collect</h2>
    <p>Shepherd Bible Learning collects the following information:</p>
    <ul>
        <li><strong>Account Information:</strong> Email address and username for authentication</li>
        <li><strong>Progress Data:</strong> Your learning progress, XP points, completed lessons, and streaks</li>
        <li><strong>Optional Profile Picture:</strong> If you choose to upload one</li>
    </ul>

    <h2>How We Use Your Information</h2>
    <ul>
        <li>To provide and maintain the app's functionality</li>
        <li>To sync your progress across devices</li>
        <li>To authenticate your account</li>
        <li>To improve the app experience</li>
    </ul>

    <h2>Data Storage</h2>
    <p>Your data is securely stored using Firebase, Google's cloud infrastructure. We use industry-standard security measures to protect your information.</p>

    <h2>Data Sharing</h2>
    <p>We do not sell, trade, or share your personal information with third parties. Your data is private and belongs to you.</p>

    <h2>Your Rights</h2>
    <p>You have the right to:</p>
    <ul>
        <li>Access your personal data</li>
        <li>Delete your account and all associated data</li>
        <li>Export your data</li>
    </ul>

    <h2>Children's Privacy</h2>
    <p>Our app is suitable for all ages (4+). We do not knowingly collect information from children under 13 without parental consent.</p>

    <h2>Contact Us</h2>
    <p>If you have questions about this Privacy Policy, contact us at: your-email@example.com</p>

    <h2>Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. We will notify users of any changes by updating the "Last updated" date.</p>
</body>
</html>
```

Save this and host it somewhere publicly accessible. Then use that URL in App Store Connect.

---

## Part 6: Upload Build via EAS

### Step 1: Submit Build with EAS

The easiest way is to use EAS submit command:

```bash
eas submit --platform ios
```

**What happens**:
1. EAS finds your latest iOS production build
2. Asks for App Store Connect credentials
3. Uploads IPA file automatically
4. Registers build with your app

### Step 2: Alternative - Manual Upload with Transporter

**If EAS submit doesn't work**:

1. Download **Transporter** app (Mac only):
   - Open Mac App Store
   - Search for "Transporter"
   - Install (free app from Apple)

2. Get your IPA file:
   - Download from EAS build page
   - Or run: `eas build --profile production --platform ios`

3. Open Transporter:
   - Sign in with Apple ID
   - Click "+" to add build
   - Select your IPA file
   - Click "Deliver"

4. Wait for upload (5-20 minutes depending on file size)

### Step 3: Verify Build Appeared

1. Go to App Store Connect
2. Click your app
3. Click **"TestFlight"** tab (top menu)
4. Wait 5-10 minutes for processing
5. Build should appear in "iOS Builds" section

---

## Part 7: Complete Version Information

### Step 1: Add Version for Submission

1. In App Store Connect, click your app
2. Click **"App Store"** tab (left sidebar)
3. Find the version section (e.g., "1.0")
4. Click **"+ Version or Platform"** if needed
5. Enter version: `1.0`

### Step 2: Select Build

1. In the "Build" section, click **"Select a build before you submit your app"**
2. Select the build you just uploaded
3. Click **"Done"**

### Step 3: Add Screenshots

1. Scroll to **"App Preview and Screenshots"** section
2. Click **"6.7" Display"** (iPhone 14 Pro Max)
3. Drag and drop your screenshots (1290 x 2796 pixels)
4. Reorder if needed (first screenshot is most important!)
5. Repeat for **"6.5" Display"** if you have different screenshots

### Step 4: Fill in "What's New in This Version"

```
• Welcome to Shepherd Bible Learning! 🐑
• Learn the Bible with 780+ engaging questions
• Meet Wooly the Sheep, your friendly guide
• Track your progress with XP and levels
• Six unique learning paths to explore
• In-depth study articles
• Daily challenges and streaks
• Cloud sync across devices
• Completely free, no in-app purchases
```

### Step 5: Promotional Text (Optional)

```
Start your Bible learning journey today! Join thousands of users discovering Scripture in a fun, engaging way with Wooly the Sheep as your guide.
```

---

## Part 8: App Review Information

### Step 1: Provide Contact Info

**Contact Information**:
- **First Name**: Your first name
- **Last Name**: Your last name
- **Phone Number**: Your phone with country code
- **Email**: Your email address

**This is for Apple reviewers only** - not shown publicly.

### Step 2: Demo Account Credentials

**IMPORTANT**: Create a test account in your app first!

**Sign-in Required**: Yes

**Demo Account**:
- **Username**: `appreviewer`
- **Password**: `TestShepherd2026!`

**Instructions**:
1. Go to your app
2. Register new account with above credentials
3. Complete 2-3 lessons so reviewers can see progress
4. Verify login works

### Step 3: Notes for Reviewer

```
Thank you for reviewing Shepherd Bible Learning!

DEMO ACCOUNT:
Username: appreviewer
Password: TestShepherd2026!

This account has completed a few lessons so you can see the progress tracking and gamification features.

TESTING GUIDE:
1. Login with demo account
2. Go to Learn tab → Choose any category
3. Complete a lesson (5-10 questions)
4. See XP earned and results screen
5. View updated progress in Profile tab
6. Browse Study tab for in-depth articles

FEATURES TO NOTE:
• All content is original and biblically accurate
• Questions come from Scripture
• No user-generated content (all content is pre-loaded)
• No social features yet (coming in future update)
• Firebase backend for cloud sync
• Works offline and syncs when online

PERMISSIONS:
• Photo Library: Optional, only if user wants to upload profile picture
• No location, microphone, or camera access

Contact me anytime at: your-email@example.com

Thank you! 🐑
```

---

## Part 9: Submit for Review

### Step 1: Review Everything

Go through the entire submission checklist:

- [ ] App Information filled out
- [ ] Pricing set to Free
- [ ] Screenshots uploaded (both sizes)
- [ ] App Icon uploaded (1024x1024)
- [ ] Description written
- [ ] Keywords added
- [ ] Privacy Policy URL added
- [ ] Build selected
- [ ] Demo account created and tested
- [ ] Notes for reviewer written
- [ ] Contact information added
- [ ] "What's New" text written

### Step 2: Add to Submit for Review

1. Scroll to top of page
2. Click **"Add for Review"**
3. Review the checklist
4. If anything is missing, it will show in red

### Step 3: Submit to App Store

1. Click **"Submit to App Store"**
2. Review the confirmation
3. Click **"Submit"**

🎉 **Your app is now in review!**

---

## Part 10: App Review Process

### What Happens Next

**Status Timeline**:

1. **Waiting for Review** (24-48 hours)
   - Your app is in the queue
   - Apple assigns a reviewer

2. **In Review** (1-3 days)
   - Apple tests your app
   - Checks all features
   - Verifies policies compliance
   - Tests demo account

3. **Pending Developer Release** (approved!)
   - App approved by Apple
   - You can release whenever you want
   - Or choose "Automatic Release"

4. **Ready for Sale** (live!)
   - App is on the App Store
   - Anyone can find and download it

### Check Review Status

1. Go to App Store Connect
2. Click your app
3. Look at status banner at top
4. Check email for updates from Apple

### If Rejected

Don't worry! Rejections are common for first apps.

**Common Rejection Reasons**:
- Demo account doesn't work
- Screenshots don't match app
- Privacy policy issues
- App crashes
- Content issues

**What to Do**:
1. Read rejection email carefully
2. Fix the issues mentioned
3. Reply in Resolution Center
4. Resubmit for review

---

## Part 11: After Approval

### Step 1: Release Your App

Once approved:

**Option A: Manual Release**
1. Click **"Release This Version"**
2. App goes live in ~15-30 minutes

**Option B: Automatic Release**
- App releases automatically when approved
- Set this in Version Info before submission

### Step 2: Share Your App

**App Store Link**:
```
https://apps.apple.com/app/idYOUR_APP_ID
```

Find your app ID in App Store Connect under App Information.

**Share on**:
- Social media
- Your website
- Email signature
- Church bulletin
- Bible study groups

### Step 3: Monitor Reviews

1. Check App Store Connect regularly
2. Read user reviews
3. Respond to feedback
4. Note any bugs or feature requests

### Step 4: Plan Updates

Based on feedback:
- Fix bugs quickly
- Add requested features
- Improve performance
- Update content

---

## Updating Your App

### When to Release an Update

- Bug fixes (release ASAP)
- New features (every 1-3 months)
- Content updates (as needed)
- iOS compatibility (when new iOS releases)

### How to Submit an Update

1. Fix bugs or add features in your code
2. Update version in `app.json`:
   ```json
   "version": "1.0.1",
   "ios": {
     "buildNumber": "2"
   }
   ```
3. Create new production build:
   ```bash
   eas build --profile production --platform ios
   ```
4. Submit to App Store Connect:
   ```bash
   eas submit --platform ios
   ```
5. In App Store Connect:
   - Create new version (e.g., 1.0.1)
   - Select new build
   - Update "What's New" text
   - Submit for review

**Review time for updates**: Usually faster (1-2 days)

---

## Troubleshooting

### Build Not Showing in App Store Connect

**Fix**:
1. Wait 10-15 minutes after upload
2. Check TestFlight tab (not App Store tab)
3. Verify build completed processing
4. Refresh page

### Demo Account Rejected

**Error**: "Cannot sign in with provided credentials"
**Fix**:
1. Create account in production app (not development)
2. Test login yourself before submitting
3. Use simple password (no special characters that might be mistyped)
4. Include username AND password clearly in notes

### App Crashes on Review

**Fix**:
1. Test on real iOS device (not just simulator)
2. Check for network issues (Firebase connection)
3. Verify Firebase config files are included
4. Test with demo account specifically

### Screenshots Rejected

**Error**: "Screenshots don't match app"
**Fix**:
- Take screenshots from actual app (not mockups)
- Use real content (not lorem ipsum)
- Ensure all features shown in screenshots exist

### Privacy Policy Issues

**Error**: "Privacy policy URL inaccessible"
**Fix**:
- Verify URL loads in browser
- Use HTTPS (not HTTP)
- Make sure page is publicly accessible
- No login required to view policy

---

## Costs Summary

**Apple Developer Program**: $99/year (required)
**Expo/EAS**: Free tier usually sufficient (30 builds/month)
**Firebase**: Free tier (Spark plan) good for starting out
**Design Assets**:
- Free (DIY with Canva)
- Or $25-100 (hire designer on Fiverr)

**Total to Launch**: $99 + optional design costs

**Ongoing Costs**: $99/year for Apple Developer renewal

---

## Timeline Summary

**From Start to App Store**:

| Phase | Duration |
|-------|----------|
| Apple Developer signup | 1-2 days (individual) |
| App Store Connect setup | 1-2 hours |
| Screenshots & assets | 2-4 hours |
| Privacy policy creation | 30 minutes |
| Build upload | 30 minutes |
| Submission completion | 1 hour |
| App Review | 1-7 days |
| **Total** | **~2-3 days to 2 weeks** |

**Most time**: Waiting for Apple approval (1-7 days)

---

## Next Steps

1. **Sign up for Apple Developer** ($99/year)
2. **Create App Store Connect listing**
3. **Take screenshots** of your app
4. **Write privacy policy** and host it
5. **Upload build** via EAS or Transporter
6. **Submit for review**
7. **Launch your app!** 🎉

Then:
- Follow **ANDROID-PLAYSTORE-GUIDE.md** to launch on Android
- Implement social features (friends, study groups, prayer requests)
- Gather user feedback
- Plan updates

---

## 📚 Additional Resources

**Official Apple Guides**:
- App Store Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- App Store Connect Help: https://help.apple.com/app-store-connect/
- Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/

**Community Help**:
- Apple Developer Forums: https://developer.apple.com/forums/
- Stack Overflow: Tag `ios` or `app-store-connect`
- YouTube: "How to submit app to App Store" tutorials

---

## 🎉 Congratulations!

You're now ready to submit Shepherd Bible Learning to the iOS App Store!

**What you've accomplished**:
- ✅ Apple Developer account
- ✅ App Store Connect setup
- ✅ Beautiful app listing
- ✅ Privacy policy created
- ✅ Build uploaded
- ✅ Submitted for review
- ✅ Ready to launch!

**Soon**: Your Bible learning app will be in the hands of users worldwide! 🐑📱✨

---

**Guide Created**: January 2026
**For**: First-Time App Developers
**App**: Shepherd Bible Learning
**Status**: Ready to Launch

🐑 **Go change the world with God's Word!**
