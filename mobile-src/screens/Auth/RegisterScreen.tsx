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

export default function RegisterScreen({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const setUser = useStore((state) => state.setUser);
  const setUserProgress = useStore((state) => state.setUserProgress);
  const { show } = useToast();

  const handleUsernameChange = useCallback((text: string) => {
    setUsername(text);
    if (usernameError) setUsernameError('');
  }, [usernameError]);

  const handleEmailChange = useCallback((text: string) => {
    setEmail(text);
    if (emailError) setEmailError('');
  }, [emailError]);

  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text);
    if (passwordError) setPasswordError('');
    if (confirmPasswordError) setConfirmPasswordError('');
  }, [passwordError, confirmPasswordError]);

  const handleConfirmPasswordChange = useCallback((text: string) => {
    setConfirmPassword(text);
    if (confirmPasswordError) setConfirmPasswordError('');
  }, [confirmPasswordError]);

  const getPasswordStrength = (pw: string): number => {
    if (!pw) return 0;
    let strength = 0;
    if (pw.length >= 6) strength += 25;
    if (pw.length >= 8) strength += 25;
    if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) strength += 25;
    if (/[0-9]/.test(pw)) strength += 25;
    return strength;
  };

  const handleRegister = useCallback(async () => {
    let valid = true;
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!username.trim()) {
      setUsernameError('Username is required');
      valid = false;
    } else if (username.trim().length < 3) {
      setUsernameError('Username must be at least 3 characters');
      valid = false;
    } else if (!/^[a-zA-Z0-9_]+$/.test(username.trim())) {
      setUsernameError('Only letters, numbers, and underscores');
      valid = false;
    }

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
    } else if (password.length < 6) {
      setPasswordError('Must be at least 6 characters');
      valid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    }

    if (!valid) return;

    setIsLoading(true);
    try {
      const user = await AuthService.register({ email: email.trim(), password, username: username.trim() });
      setUser(user);

      const progress = await ProgressService.getUserProgress(user.uid);
      if (progress) {
        setUserProgress(progress);
      }

      show({
        type: 'success',
        title: 'Welcome!',
        message: `Welcome to Shepherd, ${username.trim()}!`,
      });
    } catch (error: any) {
      show({
        type: 'error',
        title: 'Registration Failed',
        message: error.message || 'An error occurred',
      });
    } finally {
      setIsLoading(false);
    }
  }, [username, email, password, confirmPassword, setUser, setUserProgress, show]);

  const strength = getPasswordStrength(password);
  const strengthColor = strength < 50 ? '#EF4444' : strength < 75 ? '#F59E0B' : '#10B981';
  const strengthLabel = strength < 50 ? 'Weak' : strength < 75 ? 'Medium' : 'Strong';

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

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join Shepherd and start learning</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Username */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <View style={[styles.inputContainer, usernameError ? styles.inputContainerError : null]}>
                <Feather name="user" size={18} color={usernameError ? '#EF4444' : '#9CA3AF'} style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  placeholder="Choose a username"
                  placeholderTextColor="#9CA3AF"
                  value={username}
                  onChangeText={handleUsernameChange}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  onSubmitEditing={() => emailRef.current?.focus()}
                  editable={!isLoading}
                  textContentType="username"
                />
              </View>
              {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={[styles.inputContainer, emailError ? styles.inputContainerError : null]}>
                <Feather name="mail" size={18} color={emailError ? '#EF4444' : '#9CA3AF'} style={styles.inputIcon} />
                <TextInput
                  ref={emailRef}
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
                  placeholder="Create a password (min 6 characters)"
                  placeholderTextColor="#9CA3AF"
                  value={password}
                  onChangeText={handlePasswordChange}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                  editable={!isLoading}
                  textContentType="newPassword"
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

            {/* Password strength */}
            {password.length > 0 && (
              <View style={styles.strengthContainer}>
                <View style={styles.strengthBarBg}>
                  <View style={[styles.strengthBarFill, { width: `${strength}%` as any, backgroundColor: strengthColor }]} />
                </View>
                <Text style={[styles.strengthLabel, { color: strengthColor }]}>{strengthLabel}</Text>
              </View>
            )}

            {/* Confirm Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm Password</Text>
              <View style={[styles.inputContainer, confirmPasswordError ? styles.inputContainerError : null]}>
                <Feather name="lock" size={18} color={confirmPasswordError ? '#EF4444' : '#9CA3AF'} style={styles.inputIcon} />
                <TextInput
                  ref={confirmPasswordRef}
                  style={styles.textInput}
                  placeholder="Re-enter your password"
                  placeholderTextColor="#9CA3AF"
                  value={confirmPassword}
                  onChangeText={handleConfirmPasswordChange}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="done"
                  onSubmitEditing={handleRegister}
                  editable={!isLoading}
                  textContentType="newPassword"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(v => !v)}
                  style={styles.eyeButton}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                  <Feather name={showConfirmPassword ? 'eye-off' : 'eye'} size={18} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
              {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
            </View>

            <TouchableOpacity
              style={[styles.registerButton, isLoading && styles.buttonDisabled]}
              onPress={handleRegister}
              disabled={isLoading}
              activeOpacity={0.85}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFFFFF" size="small" />
              ) : (
                <Text style={styles.registerButtonText}>Create Account</Text>
              )}
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Already have an account?</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate('Login')}
              disabled={isLoading}
              activeOpacity={0.85}
            >
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            <Text style={styles.terms}>
              By creating an account, you agree to our Terms of Service and Privacy Policy
            </Text>
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
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
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
  strengthContainer: {
    marginTop: -8,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  strengthBarBg: {
    flex: 1,
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    overflow: 'hidden',
  },
  strengthBarFill: {
    height: 4,
    borderRadius: 2,
  },
  strengthLabel: {
    fontSize: 11,
    fontWeight: '600',
    minWidth: 44,
    textAlign: 'right',
  },
  registerButton: {
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
    marginTop: 4,
  },
  buttonDisabled: {
    opacity: 0.65,
  },
  registerButtonText: {
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
  loginButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
  },
  loginButtonText: {
    color: '#374151',
    fontSize: 15,
    fontWeight: '600',
  },
  terms: {
    fontSize: 11,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 16,
  },
});
