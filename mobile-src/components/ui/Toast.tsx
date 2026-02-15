import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../theme';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastConfig {
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface Toast extends ToastConfig {
  id: string;
}

interface ToastContextType {
  show: (config: ToastConfig) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const show = useCallback((config: ToastConfig) => {
    const id = Date.now().toString();
    const toast: Toast = {
      ...config,
      id,
      duration: config.duration ?? 3000,
    };

    setToasts((prev) => [...prev, toast]);

    // Auto-dismiss
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, toast.duration);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <SafeAreaView style={styles.container} pointerEvents="box-none">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onDismiss={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
          />
        ))}
      </SafeAreaView>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: () => void }) {
  const translateY = useRef(new Animated.Value(-100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Slide in from top with bounce
    Animated.parallel([
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        speed: 12,
        bounciness: 8,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: theme.animations.duration.normal,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        if (gesture.dy < 0) {
          translateY.setValue(gesture.dy);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy < -50) {
          // Swipe up to dismiss
          Animated.parallel([
            Animated.timing(translateY, {
              toValue: -100,
              duration: theme.animations.duration.fast,
              useNativeDriver: true,
            }),
            Animated.timing(opacity, {
              toValue: 0,
              duration: theme.animations.duration.fast,
              useNativeDriver: true,
            }),
          ]).start(() => onDismiss());
        } else {
          // Snap back
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
            speed: 12,
          }).start();
        }
      },
    })
  ).current;

  const getToastStyle = () => {
    switch (toast.type) {
      case 'success':
        return {
          backgroundColor: theme.colors.success[500],
          iconName: 'check-circle' as const,
        };
      case 'error':
        return {
          backgroundColor: theme.colors.error[500],
          iconName: 'x-circle' as const,
        };
      case 'warning':
        return {
          backgroundColor: theme.colors.warning[500],
          iconName: 'alert-triangle' as const,
        };
      case 'info':
        return {
          backgroundColor: theme.colors.primary[500],
          iconName: 'info' as const,
        };
    }
  };

  const toastStyle = getToastStyle();

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.toast,
        {
          backgroundColor: toastStyle.backgroundColor,
          transform: [{ translateY }],
          opacity,
        },
      ]}
    >
      <Feather name={toastStyle.iconName} size={24} color="#FFFFFF" />
      <View style={styles.toastContent}>
        <Text style={styles.toastTitle}>{toast.title}</Text>
        {toast.message && <Text style={styles.toastMessage}>{toast.message}</Text>}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 9999,
  },
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: theme.spacing[4],
    marginTop: theme.spacing[2],
    padding: theme.spacing[4],
    borderRadius: theme.radius.md,
    ...theme.shadows.lg,
    maxWidth: 400,
  },
  toastContent: {
    flex: 1,
    marginLeft: theme.spacing[3],
  },
  toastTitle: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.semibold,
    color: '#FFFFFF',
  },
  toastMessage: {
    fontSize: theme.typography.fontSize.sm,
    color: '#FFFFFF',
    marginTop: 2,
    opacity: 0.9,
  },
});
