#!/bin/bash

echo "🐑 Setting up Shepherd iOS App with React Native..."
echo ""

# Check prerequisites
echo "Checking prerequisites..."

if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    exit 1
fi

if ! command -v watchman &> /dev/null; then
    echo "⚠️  Watchman not found. Installing..."
    brew install watchman
fi

if ! command -v pod &> /dev/null; then
    echo "⚠️  CocoaPods not found. Installing..."
    sudo gem install cocoapods
fi

echo "✅ Prerequisites checked"
echo ""

# Initialize React Native project
echo "📱 Initializing React Native project..."
npx react-native@latest init ShepherdApp --template react-native-template-typescript --skip-install

cd ShepherdApp

echo ""
echo "📦 Installing dependencies..."

# Install core dependencies
npm install \
  @react-navigation/native \
  @react-navigation/bottom-tabs \
  @react-navigation/native-stack \
  react-native-screens \
  react-native-safe-area-context \
  @react-native-async-storage/async-storage \
  zustand \
  react-native-vector-icons

# Install Firebase
npm install \
  firebase \
  @react-native-firebase/app \
  @react-native-firebase/auth \
  @react-native-firebase/firestore

echo ""
echo "🍎 Installing iOS pods..."
cd ios
pod install
cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Set up Firebase project at https://console.firebase.google.com/"
echo "2. Download GoogleService-Info.plist and place in ShepherdApp/ios/ShepherdApp/"
echo "3. Copy the source files from the migration"
echo "4. Run: npm run ios"
echo ""
echo "🐑 Happy coding!"
