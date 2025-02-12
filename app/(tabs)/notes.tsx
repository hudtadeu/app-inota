import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function Notes() {
  const colorScheme = useColorScheme();
  const [filter, setFilter] = useState('');
  const [selectedOption, setSelectedOption] = useState('Todos Xml');

  const options = ['Todos Xml', 'Nf-e', 'CT-e', 'NFs-e', 'NF3e', 'Diversos'];
  const documents = [
    { id: '1', title: 'Documento 1', description: 'Descrição do documento 1' },
    { id: '2', title: 'Documento 2', description: 'Descrição do documento 2' },
    { id: '3', title: 'Documento 3', description: 'Descrição do documento 3' },
    { id: '4', title: 'Documento 4', description: 'Descrição do documento 4' },
    { id: '5', title: 'Documento 5', description: 'Descrição do documento 5' },
    { id: '6', title: 'Documento 6', description: 'Descrição do documento 6' },
    { id: '7', title: 'Documento 7', description: 'Descrição do documento 7' },
    { id: '8', title: 'Documento 8', description: 'Descrição do documento 8' },
    { id: '9', title: 'Documento 9', description: 'Descrição do documento 9' },
    { id: '10', title: 'Documento 10', description: 'Descrição do documento 10' },
    { id: '11', title: 'Documento 11', description: 'Descrição do documento 11' },
  ];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.filterContainer}>
          <TextInput
            style={styles.input}
            placeholder="Chave do Documento"
            value={filter}
            onChangeText={setFilter}
            placeholderTextColor="#999"
          />
          <ThemedText style={styles.filterText}>Filtros</ThemedText>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                selectedOption === option && styles.selectedOption,
              ]}
              onPress={() => setSelectedOption(option)}
            >
              <ThemedText style={[
                styles.optionText,
                selectedOption === option && styles.selectedOptionText,
              ]}>
                {option}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={documents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <ThemedText style={styles.cardMenu}>...</ThemedText>
            <View style={styles.cardHeader}>
              <ThemedText style={styles.cardTitle}>{item.title}</ThemedText>
            </View>
            <ThemedText style={styles.cardDescription}>{item.description}</ThemedText>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingRight: 60, 
    height: 50, 
  },
  filterText: {
    position: 'absolute',
    right: 20,
    color: '#0a7ea4',
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  option: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  selectedOption: {
    backgroundColor: '#0a7ea4',
  },
  optionText: {
    color: '#0a7ea4',
    fontWeight: 'bold',
    fontSize: 15,
  },
  selectedOptionText: {
    color: '#fff',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative',
  },
  cardMenu: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});
