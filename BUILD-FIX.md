# iOS Build Fix voor gRPC Error

## Probleem
```
module map file '/Users/expo/workingdir/build/ios/Pods/Headers/Private/grpc/gRPC-Core.modulemap' not found
```

## Oplossing

### 1. eas.json aangepast
- iOS cache uitgeschakeld
- CocoaPods versie gefixeerd op 1.17.0

### 2. Build opnieuw proberen met cleared cache

```bash
# Optie 1: Clear cache en rebuild
eas build --platform ios --clear-cache

# Optie 2: Als dat niet werkt, probeer production build
eas build --platform ios --profile production --clear-cache

# Optie 3: Voor simulator (sneller testen)
eas build --platform ios --profile simulator --clear-cache
```

### 3. Lokaal testen (optioneel)

```bash
# Clean pods lokaal
cd ios
rm -rf Pods Podfile.lock
pod cache clean --all
pod install
cd ..

# Probeer lokale build
npm run ios
```

### 4. Als het probleem aanhoudt

Voeg toe aan `eas.json` onder production > ios:

```json
"prebuildCommand": "cd ios && rm -rf Pods Podfile.lock && pod cache clean --all"
```

## Wat is veranderd

**eas.json:**
```json
"production": {
  "autoIncrement": true,
  "ios": {
    "cache": {
      "disabled": true  // Cache uitgeschakeld
    },
    "cocoapods": "1.17.0"  // Vaste CocoaPods versie
  }
}
```

**Waarom dit werkt:**
- EAS build cache kan corrupt raken met gRPC modules
- Door cache uit te schakelen wordt alles opnieuw gebouwd
- Vaste CocoaPods versie voorkomt incompatibiliteiten

## Next Steps

1. Run: `eas build --platform ios --clear-cache`
2. Wacht tot build compleet is
3. Als succesvol, enable cache weer in volgende builds
