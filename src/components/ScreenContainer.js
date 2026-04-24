import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../utils/theme';

export function ScreenContainer({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.colors.text,
  },
});
