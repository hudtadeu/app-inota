import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function Menu() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">
        {colorScheme === 'light' ? 'Bem Vindo à versão light!' : 'Bem Vindo!'}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
