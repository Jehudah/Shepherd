import { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { AuthService, ProgressService } from '../../services/firebase';
import { useStore } from '../../store/useStore';
import { useToast } from '../../components/ui';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const jesusImage = require('../../assets/characters/Jesus.png') as number;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const woolyImage = require('../../assets/characters/Wooly.png') as number;

interface Props {
  navigation: any;
}

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const passwordRef = useRef<TextInput>(null);

  const setUser = useStore((state) => state.setUser);
  const setUserProgress = useStore((state) => state.setUserProgress);
  const { show } = useToast();

  const handleEmailChange = useCallback((text: string) => {
    setEmail(text);
    if (emailError) setEmailError('');
  }, [emailError]);

  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text);
    if (passwordError) setPasswordError('');
  }, [passwordError]);

  const handleLogin = useCallback(async () => {
    let valid = true;
    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    }
    if (!valid) return;

    setIsLoading(true);
    try {
      const user = await AuthService.login(email.trim(), password);
      setUser(user);

      const progress = await ProgressService.getUserProgress(user.uid);
      if (progress) {
        setUserProgress(progress);
      }
    } catch (error: any) {
      show({
        type: 'error',
        title: 'Login Failed',
        message: error.message || 'Invalid email or password',
      });
    } finally {
      setIsLoading(false);
    }
  }, [email, password, setUser, setUserProgress, show]);

  const handleForgotPassword = useCallback(async () => {
    if (!email.trim()) {
      show({ type: 'warning', title: 'Email Required', message: 'Please enter your email address first' });
      return;
    }
    try {
      await AuthService.resetPassword(email.trim());
      show({ type: 'success', title: 'Email Sent', message: 'Check your inbox for password reset instructions' });
    } catch (error: any) {
      show({ type: 'error', title: 'Error', message: error.message });
    }
  }, [email, show]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Characters */}
          <View style={styles.characters}>
            <Image source={jesusImage} style={styles.jesusImage} resizeMode="contain" />
            <Image source={woolyImage} style={styles.woolyImage} resizeMode="contain" />
          </View>

          {/* Title */}
          <View style={styles.header}>
            <Text style={styles.title}>Shepherd</Text>
            <Text style={styles.subtitle}>Learn the Bible step by step</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={[styles.inputContainer, emailError ? styles.inputContainerError : null]}>
                <Feather name="mail" size={18} color={emailError ? '#EF4444' : '#9CA3AF'} style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your email"
                  placeholderTextColor="#9CA3AF"
                  value={email}
                  onChangeText={handleEmailChange}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="email"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current?.focus()}
                  editable={!isLoading}
                  textContentType="emailAddress"
                />
              </View>
              {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={[styles.inputContainer, passwordError ? styles.inputContainerError : null]}>
                <Feather name="lock" size={18} color={passwordError ? '#EF4444' : '#9CA3AF'} style={styles.inputIcon} />
                <TextInput
                  ref={passwordRef}
                  style={styles.textInput}
                  placeholder="Enter your password"
                  placeholderTextColor="#9CA3AF"
                  value={password}
                  onChangeText={handlePasswordChange}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="password"
                  returnKeyType="done"
                  onSubmitEditing={handleLogin}
                  editable={!isLoading}
                  textContentType="password"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(v => !v)}
                  style={styles.eyeButton}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                  <Feather name={showPassword ? 'eye-off' : 'eye'} size={18} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
              {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </View>

            <TouchableOpacity onPress={handleForgotPassword} disabled={isLoading} style={styles.forgotContainer}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
              onPress={handleLogin}
              disabled={isLoading}
              activeOpacity={0.85}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFFFFF" size="small" />
              ) : (
                <Text style={styles.loginButtonText}>Log In</Text>
              )}
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>New here?</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate('Register')}
              disabled={isLoading}
              activeOpacity={0.85}
            >
              <Text style={styles.registerButtonText}>Create an Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  characters: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 24,
    marginBottom: 8,
  },
  jesusImage: {
    width: 110,
    height: 160,
    zIndex: 2,
    elevation: 2,
  },
  woolyImage: {
    width: 90,
    height: 130,
    marginLeft: -16,
    zIndex: 1,
    elevation: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1F2937',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    marginTop: 4,
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    paddingHorizontal: 12,
    height: 50,
  },
  inputContainerError: {
    borderColor: '#EF4444',
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: '#1F2937',
    paddingVertical: 0,
  },
  eyeButton: {
    padding: 4,
    marginLeft: 8,
  },
  errorText: {
    fontSize: 12,
    color: '#EF4444',
    marginTop: 4,
    marginLeft: 2,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginTop: -4,
  },
  forgotPassword: {
    color: '#3B82F6',
    fontSize: 14,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  loginButtonDisabled: {
    opacity: 0.65,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    fontSize: 13,
    color: '#9CA3AF',
    marginHorizontal: 12,
  },
  registerButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
  },
  registerButtonText: {
    color: '#374151',
    fontSize: 15,
    fontWeight: '600',
  },
});
