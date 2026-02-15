# 🐑 Shepherd App - Improvements Guide

This document outlines the improvements to implement for better user experience and updated dependencies.

---

## ✅ Completed Improvements

### 1. Timeline Questions - Chronological Focus ✅
**File**: `src/data/timelineQuestions.ts`

**Changes Made**:
- Completely rewrote all 60 timeline questions
- Added chronological ordering focus
- Questions now emphasize:
  - "Put these events in order..."
  - "What happened BEFORE/AFTER..."
  - "Which came FIRST..."
  - Generational sequences
  - Event timelines

**Examples**:
```typescript
// Order-based question
{
  type: 'order',
  question: 'Order the events leading to the flood:',
  options: ['Humanity became increasingly wicked', 'God decided to destroy the earth', ...],
  correctAnswer: ['Humanity became increasingly wicked', 'God decided to destroy the earth', ...]
}

// Chronological comparison
{
  type: 'multiple-choice',
  question: 'What happened FIRST in the Garden of Eden?',
  options: ['God placed Adam in the garden', 'Eve was created', ...],
  correctAnswer: 'God placed Adam in the garden'
}
```

**Note**: The `order` question type requires drag-and-drop UI implementation (see section below).

---

## 🚧 To Implement

### 2. Lesson Unlocking System (Sequential Progression)

**Goal**: Users must complete lessons in order. Next lesson unlocks only after completing the previous one.

#### Implementation Plan

**Step 1**: Update Lesson Display Components

Add lock/unlock logic to all lesson list screens:
- `NamesLessons.tsx`
- `ThemesLessons.tsx`
- `TimelineScreen.tsx`
- `MemorizeVersesScreen.tsx`
- `ParablesScreen.tsx`

**Code Pattern**:
```typescript
const isLessonLocked = (lessonIndex: number) => {
  if (lessonIndex === 0) return false; // First lesson always unlocked

  const previousLesson = lessons[lessonIndex - 1];
  const previousLessonId = `${category}-${subcategory}-${previousLesson.id}`;
  return !userProgress.completedLessons.includes(previousLessonId);
};
```

**Visual Changes**:
```typescript
// In render
{lessons.map((lesson, index) => {
  const isLocked = isLessonLocked(index);
  const completed = isLessonCompleted(lesson.id);

  return (
    <TouchableOpacity
      key={lesson.id}
      style={[
        styles.lessonCard,
        isLocked && styles.lessonCardLocked
      ]}
      onPress={() => isLocked ? null : handleLessonPress(lesson)}
      disabled={isLocked}
    >
      {/* Lesson content */}
      {isLocked && (
        <View style={styles.lockOverlay}>
          <Icon name="lock" size={24} color="#9CA3AF" />
          <Text style={styles.lockText}>
            Complete "{lessons[index - 1].title}" to unlock
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
})}
```

**Styles to Add**:
```typescript
lessonCardLocked: {
  opacity: 0.5,
},
lockOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  borderRadius: 16,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 16,
},
lockText: {
  fontSize: 12,
  color: '#FFFFFF',
  marginTop: 8,
  textAlign: 'center',
},
```

**Step 2**: Add Wooly's Encouragement

```typescript
{isLocked && (
  <WoolyTip
    message="Complete the previous lesson first! You're doing great - one step at a time!"
    style={{ marginTop: 16 }}
  />
)}
```

---

### 3. Order Question Type Support

**Goal**: Enable drag-and-drop ordering questions for timeline lessons.

#### Requirements
- React Native drag-and-drop library
- Order validation logic
- Visual feedback

#### Recommended Library
```bash
npm install react-native-draggable-flatlist
```

#### Implementation

**Update Question Type**:
```typescript
// types/index.ts
export type QuestionType =
  | 'multiple-choice'
  | 'true-false'
  | 'fill-blank'
  | 'matching'
  | 'order';  // ✅ Already in types
```

**Add Order Question Component**:
```typescript
// components/OrderQuestion.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

interface OrderQuestionProps {
  options: string[];
  onAnswer: (orderedItems: string[]) => void;
}

export default function OrderQuestion({ options, onAnswer }: OrderQuestionProps) {
  const [items, setItems] = useState(
    options.map((item, index) => ({ key: `${index}`, label: item }))
  );

  const handleDragEnd = ({ data }) => {
    setItems(data);
    onAnswer(data.map(item => item.label));
  };

  return (
    <DraggableFlatList
      data={items}
      onDragEnd={handleDragEnd}
      keyExtractor={(item) => item.key}
      renderItem={({ item, drag, isActive }) => (
        <TouchableOpacity
          onLongPress={drag}
          style={[styles.orderItem, isActive && styles.orderItemActive]}
        >
          <Icon name="menu" size={20} color="#6B7280" />
          <Text style={styles.orderText}>{item.label}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
```

**Update LessonPlayer**:
```typescript
if (currentQuestion.type === 'order') {
  return (
    <OrderQuestion
      options={currentQuestion.options}
      onAnswer={(ordered) => setSelectedAnswer(ordered.join('|||'))}
    />
  );
}
```

**Validation**:
```typescript
const handleSubmit = () => {
  let correct = false;

  if (currentQuestion.type === 'order') {
    const userOrder = selectedAnswer.split('|||');
    const correctOrder = Array.isArray(currentQuestion.correctAnswer)
      ? currentQuestion.correctAnswer
      : [currentQuestion.correctAnswer];
    correct = JSON.stringify(userOrder) === JSON.stringify(correctOrder);
  } else {
    correct = selectedAnswer === currentQuestion.correctAnswer;
  }

  setIsCorrect(correct);
  setIsAnswered(true);
  // ...
};
```

---

### 4. Question Uniqueness Review

**Current Issue**: Some questions may be too similar across lessons.

#### Review Process

**Step 1**: Audit Questions by Category
- Names: 240 questions (check for duplicates)
- Themes: 300 questions (ensure different angles)
- Timeline: 60 questions ✅ (just updated - all unique)
- Verses: 60 questions
- Parables: 60 questions

**Step 2**: Uniqueness Criteria
Each question should have ONE of these unique aspects:
- Different subject matter
- Different Bible passage
- Different concept or lesson
- Different difficulty level
- Different question format

**Example of TOO SIMILAR** (avoid this):
```
❌ Question 1: "What did Moses see in the burning bush?"
❌ Question 2: "What appeared to Moses in the bush?"
```

**Example of UNIQUE** (do this):
```
✅ Question 1: "What did Moses see in the burning bush?"
✅ Question 2: "What excuse did Moses give for not speaking to Pharaoh?"
✅ Question 3: "Who was Moses' brother and spokesman?"
```

**Step 3**: Update Similar Questions
For each duplicate found:
1. Keep the best-worded version
2. Replace the duplicate with a new concept
3. Ensure new question tests different knowledge

---

### 5. React 19 Upgrade

**Goal**: Update all dependencies to React 19 and latest versions.

#### Package Updates

**Web App** (`package.json`):
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.1.1",
    "zustand": "^5.0.2",
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.469.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.5",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.2"
  }
}
```

**React Native App** (`mobile-src/package.json` - create new):
```json
{
  "name": "ShepherdApp",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-native": "^0.76.5",
    "@react-navigation/native": "^7.0.11",
    "@react-navigation/native-stack": "^7.1.8",
    "@react-navigation/bottom-tabs": "^7.1.8",
    "react-native-vector-icons": "^10.2.0",
    "@react-native-firebase/app": "^21.8.0",
    "@react-native-firebase/auth": "^21.8.0",
    "@react-native-firebase/firestore": "^21.8.0",
    "@react-native-async-storage/async-storage": "^2.1.0",
    "zustand": "^5.0.2"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-native": "^0.76.0",
    "typescript": "^5.7.2"
  }
}
```

#### Upgrade Steps

**Step 1**: Update Dependencies
```bash
# Web app
cd shphrd
npm install react@19 react-dom@19
npm install react-router-dom@latest
npm install zustand@latest framer-motion@latest
npm install -D @types/react@19 @types/react-dom@19
npm install -D vite@latest @vitejs/plugin-react@latest
npm install -D typescript@latest tailwindcss@latest

# React Native app
cd ShepherdApp
npm install react@19
npm install react-native@latest
npm install @react-navigation/native@latest
npm install @react-navigation/native-stack@latest
npm install @react-navigation/bottom-tabs@latest
```

**Step 2**: Handle Breaking Changes

**React 19 Changes**:
1. **Automatic batching** - Already handled, no changes needed
2. **Strict Mode improvements** - No changes needed
3. **New hooks** - Optional to adopt

**React Router 7 Changes**:
```typescript
// OLD (React Router 6)
import { useNavigate } from 'react-router-dom';

// NEW (React Router 7) - Same API, just updated internals
// No code changes needed!
```

**Step 3**: Test Everything
```bash
# Web app
npm run dev

# React Native
npm run ios
npm run android
```

**Step 4**: Fix Any Type Errors
React 19 has stricter TypeScript types. Common fixes:
```typescript
// If you see FC errors
import { FC, ReactNode } from 'react';

// Change this:
const Component: FC<Props> = ({ children }) => { ... }

// To this:
const Component = ({ children }: Props): ReactNode => { ... }
```

---

## 📋 Implementation Checklist

### Immediate (High Priority)
- [ ] Implement lesson unlocking in all lesson screens
- [ ] Add locked lesson UI with lock icon
- [ ] Add Wooly tips for locked lessons
- [ ] Update React to version 19
- [ ] Update React Native to latest
- [ ] Update all other dependencies

### Short Term (Medium Priority)
- [ ] Install react-native-draggable-flatlist
- [ ] Create OrderQuestion component
- [ ] Update LessonPlayer to handle order questions
- [ ] Test order questions in timeline lessons

### Long Term (Low Priority)
- [ ] Audit all 780+ questions for uniqueness
- [ ] Replace any duplicate/similar questions
- [ ] Add more variety in question formats
- [ ] Consider adding image-based questions

---

## 🎯 Expected Outcomes

### After Lesson Unlocking
- ✅ Better learning progression
- ✅ Users feel sense of achievement
- ✅ Prevents overwhelming users
- ✅ Encourages completion

### After Order Questions
- ✅ More engaging timeline learning
- ✅ Better understanding of sequences
- ✅ Interactive drag-and-drop UI
- ✅ Unique question type

### After React 19 Upgrade
- ✅ Latest features and optimizations
- ✅ Better performance
- ✅ Security updates
- ✅ Future-proofed codebase

### After Question Uniqueness Review
- ✅ No repeated questions
- ✅ Better test coverage
- ✅ More comprehensive learning
- ✅ Higher quality content

---

## 📝 Code Snippets for Quick Implementation

### Lesson Unlocking (Copy-Paste Ready)

```typescript
// Add to any lesson list screen (NamesLessons, ThemesLessons, etc.)

const isLessonLocked = (lessonIndex: number): boolean => {
  if (lessonIndex === 0) return false; // First lesson always unlocked

  const previousLesson = lessons[lessonIndex - 1];
  const previousLessonId = `${category}-${subcategory}-${previousLesson.id}`;
  return !userProgress.completedLessons.includes(previousLessonId);
};

// In your render:
{lessons.map((lesson, index) => {
  const isLocked = isLessonLocked(index);
  const completed = isLessonCompleted(lesson.id);

  return (
    <TouchableOpacity
      key={lesson.id}
      style={[styles.lessonCard, isLocked && { opacity: 0.5 }]}
      onPress={() => !isLocked && handleLessonPress(lesson)}
      disabled={isLocked}
    >
      <View style={styles.lessonHeader}>
        <View style={styles.lessonNumber}>
          {isLocked ? (
            <Icon name="lock" size={24} color="#9CA3AF" />
          ) : completed ? (
            <Icon name="check-circle" size={28} color="#10B981" />
          ) : (
            <Text style={styles.lessonNumberText}>{index + 1}</Text>
          )}
        </View>
        {/* Rest of lesson content */}
      </View>

      {isLocked && (
        <View style={styles.lockMessage}>
          <Text style={styles.lockText}>
            Complete "{lessons[index - 1].title}" first
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
})}
```

### React 19 Quick Upgrade

```bash
#!/bin/bash
# Save as upgrade-react-19.sh

echo "🐑 Upgrading Shepherd to React 19..."

# Web app
cd shphrd
npm install react@19 react-dom@19 -D @types/react@19 @types/react-dom@19
npm install react-router-dom@latest zustand@latest framer-motion@latest
npm install -D vite@latest @vitejs/plugin-react@latest typescript@latest

echo "✅ Web app upgraded!"

# React Native app (if initialized)
if [ -d "ShepherdApp" ]; then
  cd ShepherdApp
  npm install react@19
  npm install react-native@latest
  npm install @react-navigation/native@latest @react-navigation/native-stack@latest
  echo "✅ React Native app upgraded!"
fi

echo "🎉 All upgrades complete! Run 'npm run dev' to test."
```

---

## 🆘 Troubleshooting

### Lesson Unlocking Not Working
**Check**:
1. Is `completedLessons` array populated in useStore?
2. Are lesson IDs matching the format `category-subcategory-lessonId`?
3. Is `isLessonLocked` function called correctly?

### Order Questions Not Rendering
**Check**:
1. Is `react-native-draggable-flatlist` installed?
2. Is `OrderQuestion` component imported?
3. Does question have `type: 'order'`?

### React 19 Type Errors
**Fix**:
```typescript
// Update tsconfig.json
{
  "compilerOptions": {
    "lib": ["ES2023", "DOM"],
    "jsx": "react-jsx", // Use new JSX transform
    "strict": true
  }
}
```

---

## 📞 Need Help?

If you encounter issues:
1. Check this guide first
2. Review error messages carefully
3. Check console for detailed logs
4. Verify all dependencies installed correctly

**Common Commands**:
```bash
# Clear cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# React Native specific
cd ios && pod install && cd ..
npx react-native start --reset-cache
```

---

**Last Updated**: January 2026
**Status**: Ready for Implementation
**Priority**: Medium-High

🐑 **Let's make Shepherd even better!**
