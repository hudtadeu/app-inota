import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { IconSymbol } from '@/components/ui/IconSymbol';

const generateRandomNumber = (length) => {
  let number = '';
  for (let i = 0; i < length; i++) {
    number += Math.floor(Math.random() * 10).toString();
  }
  return number;
};

const suppliers = ['Fornecedor A', 'Fornecedor B', 'Fornecedor C', 'Fornecedor D', 'Fornecedor E'];

export default function Notes() {
  const colorScheme = useColorScheme();
  const [filter, setFilter] = useState('');
  const [selectedOption, setSelectedOption] = useState('Todos');

  const options = ['Todos', 'Nf-e', 'CT-e', 'NFs-e', 'NF3e', 'Diversos'];
  const documents = Array.from({ length: 11 }, (_, index) => ({
    id: (index + 1).toString(),
    title: generateRandomNumber(7),
    description: `${generateRandomNumber(4)} - ${suppliers[index % suppliers.length]}`,
    type: options[(index % (options.length - 1)) + 1], // Assign types to documents
  }));

  const filteredDocuments = selectedOption === 'Todos'
    ? documents
    : documents.filter(doc => doc.type === selectedOption);

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
        data={filteredDocuments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <IconSymbol name="doc.text" size={25} color="#0a7ea4" style={styles.cardIcon} />
            <ThemedText style={styles.cardMenu}>...</ThemedText>
            <View style={styles.cardContent}>
              <ThemedText style={styles.cardTitle}>{item.title}</ThemedText>
              <ThemedText style={styles.cardDescription}>{item.description}</ThemedText>
              <ThemedText style={styles.cardType}>{item.type}</ThemedText>
            </View>
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
    borderRadius: 10,
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
    flexDirection: 'row',
    alignItems: 'center',
    height: 90, // Ensure all cards have the same height
  },
  cardIcon: {
    marginRight: 10,
  },
  cardMenu: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContent: {
    flex: 1,
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
  cardType: {
    fontSize: 12,
    color: '#999',
  },
});
