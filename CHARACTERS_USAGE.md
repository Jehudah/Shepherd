# Biblical Characters - Usage Guide

## 📸 Character Images

Individual JPEG files are available in `/mobile-src/assets/characters/`

## 🎨 Available Characters

### Available Character Files
- `jesus` - Jesus (Jesus.png)
- `sheep` - Wooly the sheep (Wooly.png) - Our mascot! 🐑
- `david` - King David (King David.png)
- `john` - John (John.png)
- `peter` - Peter (Peter.png)
- `paul` - Paul (Paul.png)
- `moses` - Moses (Moses.png)
- `elijah` - Elijah (Elijah.png)
- `mary-magdalene` - Mary Magdalene (Mary Magdalene.png)
- `king-solomon` - King Solomon (King Solomon.png)
- `king-hezekiah` - King Hezekiah (King Hezekiah.png)
- `james` - James (James.png)
- `isaiah` - Isaiah (Isaiah.png)
- `matthew` - Matthew (Matthew.png)
- `luke` - Luke (Luke.png)
- `king-saul` - King Saul (King Saul.png)

### Missing (fallback to Wooly)
- `thomas` - Thomas

## 💻 Gebruik in Code

### 1. Individueel Character Tonen

```typescript
import Character from './components/Character';

// Basis gebruik
<Character name="sheep" size={80} />

// Met custom styling
<Character
  name="jesus"
  size={100}
  style={{ marginBottom: 20 }}
/>
```

### 2. CharacterGuide Component (voor hints/tips)

```typescript
import CharacterGuide from './components/CharacterGuide';

<CharacterGuide
  character="sheep"
  message="Welkom bij je eerste les! Laten we beginnen met de basis."
  mood="encouraging"
/>

// Verschillende moods
<CharacterGuide
  character="david"
  message="Geweldig gedaan! Je hebt alle vragen correct!"
  mood="celebrating"
/>
```

**Mood opties:**
- `encouraging` - Blauw gradient (motiverend)
- `celebrating` - Geel gradient (vieren)
- `teaching` - Paars gradient (lesgeven)
- `questioning` - Groen gradient (vragen stellen)

### 3. Wooly Component (Updated!)

```typescript
import Wooly from './components/Wooly';

// Gebruikt nu het echte schaap character!
<Wooly
  message="Hoi! Ik ben Wooly, je gids door de Bijbel!"
  mood="happy"
  size="medium"
/>
```

**Moods:** `happy`, `excited`, `thinking`, `celebrating`, `encouraging`
**Sizes:** `small`, `medium`, `large`

### 4. WoolyTip (Compacte tip)

```typescript
import { WoolyTip } from './components/Wooly';

<WoolyTip message="Vergeet niet dagelijks je streak vol te houden!" />
```

## 🎯 Voorbeelden per Screen Type

### Learn Screens
```typescript
// Intro to een nieuw onderwerp
<CharacterGuide
  character="moses"
  message="Leer over de Exodus en hoe God zijn volk bevrijdde!"
  mood="teaching"
/>
```

### Challenge/Quiz Screens
```typescript
// Bij een goed antwoord
<CharacterGuide
  character="sheep"
  message="Goed gedaan! Dat is het juiste antwoord!"
  mood="celebrating"
/>
```

### Study Articles
```typescript
// Bij een artikel over David
<Character name="david" size={120} style={styles.headerImage} />
<Text>Leer over de herder die koning werd...</Text>
```

### Profile/Achievement
```typescript
// Bij een behaalde mijlpaal
<CharacterGuide
  character="paul"
  message="Geweldig! Je hebt 10 lessen voltooid!"
  mood="celebrating"
/>
```

## 🎨 Character Sizes

**Aanbevolen groottes:**
- Avatar/Icon: `40-50px`
- Wooly guides: `60-80px`
- Screen headers: `100-120px`
- Feature highlights: `80-100px`

## 📝 Best Practices

1. **Context matchen** - Gebruik characters die relevant zijn voor de content
   - Mozes bij Exodus lessen
   - David bij koninkrijks verhalen
   - Wooly voor algemene guidance

2. **Consistent gebruik** - Wooly is de primaire mascot/guide
3. **Mood passend** - Match mood met de context (celebrating na succes, encouraging bij moeilijke content)
4. **Performance** - Characters worden als sprite sheet geladen (efficient!)

## 🚀 Volgende Stappen

**Waar characters toe te voegen:**
- ✅ Wooly component (DONE!)
- [ ] LearnScreen - Wooly welkom bericht
- [ ] LessonPlayerScreen - Character hints tussen vragen
- [ ] ProfileScreen - Achievement celebrations met characters
- [ ] Specific lesson screens - Relevant biblical characters per onderwerp
- [ ] Empty states - Wooly bij "geen data" states

**Ideas:**
- Character-based achievements (unlock characters als je hun lessen voltooit)
- Character picker voor profile avatar
- Animated character reactions op correct/incorrect antwoorden
