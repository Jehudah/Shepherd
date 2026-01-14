# 🐑 Shepherd App - Icon & Branding Guide

## Overview

Your Shepherd Bible Learning app features a shepherd theme with Wooly the sheep as the friendly guide. This document provides guidance on creating your app icon and maintaining consistent branding.

---

## Main Logo Concept

### Primary Icon: Cartoon Shepherd
**Design Description:**
- A friendly, approachable cartoon shepherd character
- Simple, clean design that works at small sizes
- Warm, inviting color palette
- Holds a staff or crook (traditional shepherd symbol)
- Could be depicted with sheep in the background

### Color Palette

**Primary Colors:**
- **Shepherd Blue**: `#3B82F6` - Main brand color, trustworthy and calm
- **Warm Brown**: `#92400E` - Earth tones, grounding
- **Sheep White**: `#FFFFFF` - Purity and simplicity
- **Grass Green**: `#10B981` - Life and growth

**Accent Colors:**
- **Sunset Orange**: `#F59E0B` - Warmth and guidance
- **Sky Blue**: `#06B6D4` - Hope and heaven
- **Purple**: `#8B5CF6` - Royalty (Jesus as King)
- **Red**: `#EF4444` - Love and sacrifice

---

## Wooly the Sheep Character

### Character Design
**Name**: Wooly
**Role**: Friendly guide and encourager throughout the app

**Personality Traits:**
- Encouraging and supportive
- Wise but not condescending
- Makes puns (especially sheep/wool related)
- Celebrates user victories
- Provides helpful tips

**Visual Design:**
- Simple, cute cartoon sheep
- Big friendly eyes
- Fluffy wool texture
- Warm smile
- Small size (fits in message bubbles)

**Moods** (as used in app):
- `happy` 🐑 - General friendly demeanor
- `excited` 🐑✨ - Celebrating achievements
- `thinking` 🐑💭 - Explaining concepts
- `celebrating` 🐑🎉 - Victories and milestones
- `encouraging` 🐑💪 - Motivating the user

---

## App Icon Design

### iOS App Icon Specifications

**Sizes Needed:**
- 1024×1024px - App Store
- 180×180px - iPhone app (@3x)
- 120×120px - iPhone app (@2x)
- 167×167px - iPad Pro app (@2x)
- 152×152px - iPad app (@2x)
- 76×76px - iPad app (@1x)
- 60×60px - iPhone notification (@3x)
- 40×40px - iPhone notification (@2x)
- 58×58px - iPhone Settings (@2x)
- 87×87px - iPhone Settings (@3x)

### Design Options

#### Option 1: Shepherd with Staff
```
Background: Gradient from sky blue (#06B6D4) to grass green (#10B981)
Foreground: Cartoon shepherd holding staff
- Simple silhouette or detailed character
- Warm earth tones for clothing
- Staff in shepherd blue (#3B82F6)
- Minimal details for scalability
```

#### Option 2: Shepherd + Sheep
```
Background: Warm sunset gradient (#F59E0B to #EF4444)
Foreground: Shepherd with Wooly the sheep
- Shepherd in background/side
- Wooly prominent in foreground
- Creates connection to in-app guide
- Friendly and approachable
```

#### Option 3: Staff & Sheep (Symbolic)
```
Background: Solid shepherd blue (#3B82F6)
Foreground: White shepherd's staff + Wooly
- Minimalist design
- Staff forms protective arc
- Wooly sitting beneath
- Clean, modern look
```

#### Option 4: Open Bible with Shepherd (Recommended)
```
Background: Gradient (shepherd blue to purple)
Foreground: Open Bible with shepherd silhouette
- Bible open in center
- Shepherd silhouette behind/within
- Wooly peeking from corner
- Directly communicates Bible learning
```

---

## Design Principles

### Must-Haves:
1. **Instantly Recognizable** - Clear at thumbnail size
2. **Unique** - Stands out among other Bible apps
3. **On-Brand** - Reflects shepherd theme
4. **Friendly** - Inviting and approachable
5. **Professional** - Quality that inspires trust

### Avoid:
- Too much detail (won't scale well)
- Generic religious symbols only
- Dark or intimidating imagery
- Cluttered compositions
- Hard-to-read text

---

## Creating the Icon

### Tools You Can Use

**Free Options:**
- **Canva** (canva.com) - Templates and easy design
- **Figma** (figma.com) - Professional design tool
- **GIMP** (gimp.org) - Free Photoshop alternative

**Paid Options:**
- **Adobe Illustrator** - Vector graphics (scalable)
- **Affinity Designer** - One-time purchase alternative
- **Procreate** (iPad) - Digital illustration

**AI Generation:**
- **DALL-E** (OpenAI) - "Cartoon shepherd with staff, app icon, simple design"
- **Midjourney** - "Friendly cartoon shepherd app logo, blue and green, minimalist"
- **Stable Diffusion** - Open source image generation

### Generation Prompts

**For AI Image Generators:**

```
Prompt 1 (Detailed):
"iOS app icon, cartoon shepherd with wooden staff, friendly smiling face,
wearing brown robe, blue and green gradient background, cute white sheep nearby,
simple clean design, professional, warm colors, minimalist style,
suitable for Bible learning app"

Prompt 2 (Minimalist):
"App icon logo, simple cartoon shepherd silhouette with staff, white sheep,
gradient blue background, clean modern design, friendly approachable style"

Prompt 3 (With Wooly):
"App icon, friendly cartoon shepherd character with brown robe and wooden staff,
cute fluffy white sheep mascot named Wooly with big eyes, blue sky background,
warm inviting colors, simple clean design for mobile app"
```

### Hire a Designer

**Budget Options:**
- **Fiverr** ($25-100) - Quick turnaround, variety of styles
- **99designs** ($299-599) - Contest with multiple options
- **Upwork** ($200-500) - Hire individual designer

**What to Provide:**
- This branding guide
- App screenshots
- Description of Wooly character
- Color palette
- Reference icons you like

---

## Icon Generation Workflow

### Step 1: Create Master Design
1. Design at 1024×1024px (App Store size)
2. Use vector format if possible (scales perfectly)
3. Keep design centered with safe margins
4. Test at small sizes (120px, 60px)

### Step 2: Generate All Sizes
**Automated Tools:**
- [AppIcon.co](https://appicon.co) - Upload 1024px, download all sizes
- [MakeAppIcon](https://makeappicon.com) - Generate icon sets
- Xcode Assets Catalog - Manual but integrated

### Step 3: Add to Project
```bash
# In Xcode
1. Open ios/ShepherdApp.xcworkspace
2. Navigate to Images.xcassets
3. Click AppIcon
4. Drag and drop each size to correct slot
5. Build and test
```

---

## Splash Screen

### Design
- Same branding as app icon
- Can be slightly more detailed
- Shows while app loads
- Dimensions: 1125×2436px (iPhone X/11/12/13)

### Content Ideas:
- Large shepherd silhouette with "Shepherd" text
- Wooly with loading message
- Open Bible with light rays
- Simple logo on colored background

---

## In-App Branding

### Wooly Integration (Already Implemented)

**Component Location**: `mobile-src/components/Wooly.tsx`

**Usage:**
```tsx
import Wooly, { WoolyTip } from '../../components/Wooly';

// Full message bubble
<Wooly
  message="Welcome to your learning journey!"
  mood="excited"
  size="medium"
/>

// Quick tip
<WoolyTip message="Read the study article for deeper understanding!" />
```

### Brand Voice

**Wooly's Communication Style:**
- Encouraging, never condescending
- Uses gentle humor and puns
- Celebrates progress
- Provides helpful context
- Sheep/wool related wordplay:
  - "Baa-rilliant choice!"
  - "Wool-derful work!"
  - "You're on the right path, no need to feel sheepish!"
  - "Ewe can do it!"

---

## App Store Assets

### Screenshots Needed

**iPhone (Required):**
- 6.7" Display (1290 x 2796) - iPhone 14 Pro Max
- 5.5" Display (1242 x 2208) - iPhone 8 Plus

**iPad (Optional but recommended):**
- 12.9" Display (2048 x 2732) - iPad Pro

### Screenshot Ideas

1. **Learn Screen** - Show category grid with Wooly
2. **Lesson Player** - Active question with progress bar
3. **Results Screen** - XP earned, celebration
4. **Profile Screen** - Stats and achievements
5. **Study Article** - Beautiful reading experience

### App Preview Video (Optional)
- 15-30 seconds
- Show key features
- Include Wooly interactions
- Upbeat background music
- Text overlays explaining features

---

## Brand Guidelines Summary

### DO:
✅ Use warm, inviting colors
✅ Include shepherd or Wooly in key visuals
✅ Maintain friendly, encouraging tone
✅ Keep designs simple and scalable
✅ Use sheep/wool humor appropriately
✅ Celebrate user achievements

### DON'T:
❌ Use dark or intimidating imagery
❌ Overload with religious symbols
❌ Make Wooly too childish (app is for all ages)
❌ Use complex gradients in small icons
❌ Forget to test at small sizes
❌ Be preachy or condescending in tone

---

## Quick Start Checklist

- [ ] Decide on icon design option (1-4 above)
- [ ] Create or commission 1024×1024px master icon
- [ ] Generate all required iOS sizes
- [ ] Add icons to Xcode project
- [ ] Create splash screen
- [ ] Test icon on actual device
- [ ] Take App Store screenshots
- [ ] Write app description
- [ ] Optional: Create preview video

---

## Resources

### Design Inspiration
- **Dribbble** (dribbble.com/tags/app-icon) - Icon designs
- **Behance** (behance.net) - Branding projects
- **App Store** - Browse top Bible/education apps

### Stock Assets
- **Flaticon** (flaticon.com) - Free shepherd/sheep icons
- **Noun Project** (thenounproject.com) - Simple symbols
- **Unsplash** (unsplash.com) - Free photos (backgrounds)

### Learning Resources
- **Apple Design Guidelines** - iOS icon specifications
- **YouTube** - "How to design app icons" tutorials
- **Skillshare** - Icon design courses

---

## Example Spec for Designer

**If hiring a designer, use this:**

```
Project: iOS App Icon Design
App Name: Shepherd Bible Learning

Theme: Christian Bible learning app with friendly shepherd character

Main Character: Cartoon shepherd (main logo)
Mascot: Wooly the sheep (cute, friendly guide)

Style:
- Warm and inviting
- Modern but timeless
- Clean and simple (must work at small sizes)
- Family-friendly
- Professional quality

Colors:
Primary: #3B82F6 (blue), #10B981 (green)
Accent: #F59E0B (orange), #8B5CF6 (purple)

Icon Size: 1024×1024px (will be scaled to all iOS sizes)

Design Options to Explore:
1. Shepherd with staff
2. Shepherd + sheep together
3. Open Bible with shepherd element
4. Minimalist staff + sheep symbol

Deliverables:
- 1024×1024px PNG (master)
- Vector file (AI or SVG)
- All iOS icon sizes
- Splash screen design (1125×2436px)
- Color variations (light/dark modes)

Timeline: [Your timeline]
Budget: [Your budget]
```

---

## Next Steps

1. **Choose your design approach** (DIY, AI, or hire)
2. **Create the master icon** (1024×1024px)
3. **Generate all sizes** using automated tool
4. **Add to Xcode project**
5. **Test on real device**
6. **Create App Store screenshots**
7. **Write compelling app description**

---

🐑 **Remember**: Your icon is often the first impression users have of your app. Make it count! The shepherd and Wooly theme makes your app unique and memorable in a crowded market.

**Questions?** Refer to Apple's [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons) for official specifications.

---

**Last Updated**: January 2026
**Status**: Ready for Design Phase
**Theme**: Shepherd & Wooly the Sheep

**Good luck with your app icon!** 🎨🐑
