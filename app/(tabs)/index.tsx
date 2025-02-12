import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const userName = 'Usuário'; 
  const companyName = 'Empresa XYZ';

  return (
    <ThemedView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.greetingContainer}>
            <IconSymbol name="note.text" size={24} color="#0a7ea4" />
            <ThemedText style={styles.greeting}>Olá, {userName}</ThemedText>
          </View>
          <IconSymbol name="person.circle" size={28} color="#0a7ea4" />
        </View>

        <View style={styles.subHeader}>
          <View style={styles.companyContainer}>
            <ThemedText style={styles.companyLabel}>Empresa:</ThemedText>
            <ThemedText style={styles.companyName}>{companyName}</ThemedText>
          </View>
          <IconSymbol name="calendar" size={28} color="#0a7ea4" />
        </View>
      </View>

      {/* Área dos Cards */}
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <IconSymbol name="doc.text" size={24} color="#28a745" />
            <ThemedText style={styles.cardText}>1</ThemedText>
            <ThemedText style={styles.cardTitle}>Xml's Atualizados</ThemedText>
          </View>
          <View style={styles.card}>
            <IconSymbol name="percent" size={24} color="#ffc107" />
            <ThemedText style={styles.cardText}>1</ThemedText>
            <ThemedText style={styles.cardTitle}>% de xml's integrados via loader</ThemedText>
          </View>
        </View>

        <View style={styles.cardRow}>
          <View style={styles.card}>
            <IconSymbol name="exclamationmark.circle" size={24} color="#dc3545" />
            <ThemedText style={styles.cardText}>1834</ThemedText>
            <ThemedText style={styles.cardTitle}>Xml's atrasados não disponíveis</ThemedText>
          </View>
          <View style={styles.card}>
            <IconSymbol name="arrow.down.circle" size={24} color="#28a745" />
            <ThemedText style={styles.cardText}>Execução</ThemedText>
            <ThemedText style={styles.cardTitle}>Download Sefaz Data/Hora:</ThemedText>
          </View>
        </View>

        <View style={styles.cardRow}>
          <View style={styles.card}>
            <IconSymbol name="checkmark.seal" size={24} color="#28a745" />
            <ThemedText style={styles.cardText}>Ativo</ThemedText>
            <ThemedText style={styles.cardTitle}>Validade Certificado Expira em:</ThemedText>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  headerContainer: {
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  companyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyLabel: {
    fontSize: 18,
    color: '#0a7ea4',
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 18,
    color: '#000',
    marginLeft: 5,
  },
  cardsContainer: {
    marginTop: 100, // Para evitar sobreposição com o cabeçalho
    alignItems: 'center',
    paddingBottom: 20,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    width: '48%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'column',
  },
  cardText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardTitle: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    color: '#333',
  },
});

