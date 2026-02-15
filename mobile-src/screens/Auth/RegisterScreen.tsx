import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthService, ProgressService } from '../../services/firebase';
import { useStore } from '../../store/useStore';
import { theme } from '../../theme';
import { Input, Button, useToast, ProgressBar } from '../../components/ui';

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

  const setUser = useStore((state) => state.setUser);
  const setUserProgress = useStore((state) => state.setUserProgress);
  const { show } = useToast();

  const getPasswordStrength = (): number => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 6) strength += 25;
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    return strength;
  };

  const getPasswordStrengthColor = (): string[] => {
    const strength = getPasswordStrength();
    if (strength < 50) return ['#EF4444', '#DC2626'];
    if (strength < 75) return ['#F59E0B', '#EF4444'];
    return ['#10B981', '#06B6D4'];
  };

  const validateUsername = (text: string) => {
    setUsername(text);
    if (text && text.length < 3) {
      setUsernameError('Username must be at least 3 characters');
    } else if (text && !/^[a-zA-Z0-9_]+$/.test(text)) {
      setUsernameError('Only letters, numbers, and underscores allowed');
    } else {
      setUsernameError('');
    }
  };

  const validateEmail = (text: string) => {
    setEmail(text);
    if (text && !/\S+@\S+\.\S+/.test(text)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (text: string) => {
    setPassword(text);
    if (text && text.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }

    // Also validate confirm password when password changes
    if (confirmPassword && text !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else if (confirmPassword) {
      setConfirmPasswordError('');
    }
  };

  const validateConfirmPassword = (text: string) => {
    setConfirmPassword(text);
    if (text && text !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleRegister = async () => {
    // Clear errors
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Validate
    let hasError = false;

    if (!username) {
      setUsernameError('Username is required');
      hasError = true;
    } else if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters');
      hasError = true;
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      setUsernameError('Only letters, numbers, and underscores allowed');
      hasError = true;
    }

    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      hasError = true;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      hasError = true;
    }

    if (hasError) return;

    setIsLoading(true);
    try {
      const user = await AuthService.register({ email, password, username });
      setUser(user);

      // Load initial progress
      const progress = await ProgressService.getUserProgress(user.uid);
      if (progress) {
        setUserProgress(progress);
      }

      show({
        type: 'success',
        title: 'Welcome!',
        message: `Welcome to Shepherd, ${username}!`,
      });

      // Navigation will automatically redirect to Main stack
    } catch (error: any) {
      show({
        type: 'error',
        title: 'Registration Failed',
        message: error.message || 'An error occurred',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = !usernameError && !emailError && !passwordError && !confirmPasswordError &&
                       username && email && password && confirmPassword;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.logo}>🐑</Text>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>Join Shepherd and start your Bible learning journey</Text>
            </View>

            {/* Input Fields */}
            <View style={styles.form}>
              <Input
                label="Username"
                placeholder="Choose a username"
                value={username}
                onChangeText={validateUsername}
                leftIcon="user"
                autoCapitalize="none"
                error={usernameError}
                success={username.length >= 3 && !usernameError}
                showClearButton
              />

              <Input
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={validateEmail}
                leftIcon="mail"
                keyboardType="email-address"
                autoCapitalize="none"
                error={emailError}
                success={email.length > 0 && !emailError}
                showClearButton
              />

              <Input
                label="Password"
                placeholder="Create a password (min 6 characters)"
                value={password}
                onChangeText={validatePassword}
                leftIcon="lock"
                secureTextEntry
                error={passwordError}
                success={password.length >= 6 && !passwordError}
              />

              {/* Password Strength Indicator */}
              {password.length > 0 && (
                <View style={styles.passwordStrength}>
                  <ProgressBar
                    progress={getPasswordStrength()}
                    height={6}
                    gradient={getPasswordStrengthColor()}
                    animated
                  />
                  <Text style={styles.passwordStrengthText}>
                    {getPasswordStrength() < 50 ? 'Weak' : getPasswordStrength() < 75 ? 'Medium' : 'Strong'}
                  </Text>
                </View>
              )}

              <Input
                label="Confirm Password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChangeText={validateConfirmPassword}
                leftIcon="lock"
                secureTextEntry
                error={confirmPasswordError}
                success={confirmPassword.length > 0 && !confirmPasswordError}
              />

              {/* Register Button */}
              <Button
                variant="primary"
                size="lg"
                onPress={handleRegister}
                loading={isLoading}
                disabled={!isFormValid || isLoading}
                style={styles.registerButton}
              >
                Create Account
              </Button>

              {/* Login Link */}
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  disabled={isLoading}
                >
                  <Text style={styles.loginLink}>Log In</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Terms */}
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
    backgroundColor: theme.colors.surface,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing[6],
    paddingVertical: theme.spacing[12],
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing[12],
  },
  logo: {
    fontSize: 72,
    marginBottom: theme.spacing[4],
  },
  title: {
    fontSize: theme.typography.fontSize['4xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[2],
  },
  subtitle: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    paddingHorizontal: theme.spacing[8],
  },
  form: {
    width: '100%',
  },
  passwordStrength: {
    marginTop: -theme.spacing[3],
    marginBottom: theme.spacing[4],
  },
  passwordStrengthText: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.text.secondary,
    marginTop: theme.spacing[1],
    textAlign: 'right',
  },
  registerButton: {
    marginTop: theme.spacing[2],
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing[4],
  },
  loginText: {
    color: theme.colors.text.secondary,
    fontSize: theme.typography.fontSize.sm,
  },
  loginLink: {
    color: theme.colors.primary[500],
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semibold,
  },
  terms: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.text.tertiary,
    textAlign: 'center',
    marginTop: theme.spacing[6],
    paddingHorizontal: theme.spacing[8],
  },
});
