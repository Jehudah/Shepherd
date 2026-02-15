import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthService, ProgressService } from '../../services/firebase';
import { useStore } from '../../store/useStore';
import { theme } from '../../theme';
import { Input, Button, useToast } from '../../components/ui';

interface Props {
  navigation: any;
}

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const setUser = useStore((state) => state.setUser);
  const setUserProgress = useStore((state) => state.setUserProgress);
  const { show } = useToast();

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
  };

  const handleLogin = async () => {
    // Clear previous errors
    setEmailError('');
    setPasswordError('');

    // Validate
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    try {
      const user = await AuthService.login(email, password);
      setUser(user);

      // Load user progress
      const progress = await ProgressService.getUserProgress(user.uid);
      if (progress) {
        setUserProgress(progress);
      }

      show({
        type: 'success',
        title: 'Welcome back!',
        message: 'Successfully logged in',
      });

      // Navigation will automatically redirect to Main stack
    } catch (error: any) {
      show({
        type: 'error',
        title: 'Login Failed',
        message: error.message || 'Invalid email or password',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      show({
        type: 'warning',
        title: 'Email Required',
        message: 'Please enter your email address',
      });
      return;
    }

    try {
      await AuthService.resetPassword(email);
      show({
        type: 'success',
        title: 'Email Sent',
        message: 'Check your inbox for password reset instructions',
      });
    } catch (error: any) {
      show({
        type: 'error',
        title: 'Error',
        message: error.message,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          {/* Logo/Header */}
          <View style={styles.header}>
            <Text style={styles.logo}>🐑</Text>
            <Text style={styles.title}>Shepherd</Text>
            <Text style={styles.subtitle}>Bible Learning App</Text>
          </View>

          {/* Input Fields */}
          <View style={styles.form}>
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
              placeholder="Enter your password"
              value={password}
              onChangeText={validatePassword}
              leftIcon="lock"
              secureTextEntry
              error={passwordError}
              success={password.length > 0 && !passwordError}
            />

            <TouchableOpacity onPress={handleForgotPassword} disabled={isLoading}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <Button
              variant="primary"
              size="lg"
              onPress={handleLogin}
              loading={isLoading}
              disabled={isLoading || !!emailError || !!passwordError}
              style={styles.loginButton}
            >
              Log In
            </Button>

            {/* Register Link */}
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                disabled={isLoading}
              >
                <Text style={styles.registerLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing[6],
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
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text.secondary,
  },
  form: {
    width: '100%',
  },
  forgotPassword: {
    color: theme.colors.primary[500],
    textAlign: 'right',
    marginBottom: theme.spacing[6],
    fontSize: theme.typography.fontSize.sm,
    marginTop: -theme.spacing[2],
  },
  loginButton: {
    marginTop: theme.spacing[2],
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing[4],
  },
  registerText: {
    color: theme.colors.text.secondary,
    fontSize: theme.typography.fontSize.sm,
  },
  registerLink: {
    color: theme.colors.primary[500],
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semibold,
  },
});
