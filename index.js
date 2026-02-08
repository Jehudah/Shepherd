/**
 * Entry point for React Native app
 * This file is required by Expo to find the main App component
 */

import { registerRootComponent } from 'expo';
import App from './mobile-src/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
