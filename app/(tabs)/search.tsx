import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function Search() {
  const colorScheme = useColorScheme();
  const [documentKey, setDocumentKey] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [establishment, setEstablishment] = useState('');
  const [date, setDate] = useState('');
  const [series, setSeries] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [supplier, setSupplier] = useState('');

  const handleSearch = () => {
    console.log('Searching for documents...');
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.form}>
        <IconSymbol name="doc.text.magnifyingglass" size={45} color="#0a7ea4" style={styles.icon} />
        <ThemedText style={styles.title}>Procure seu documento aqui</ThemedText>
        <View style={styles.card}>
          <View style={styles.inputGroup}>
            <IconSymbol name="key" size={20} color="#999" />
            <TextInput
              style={styles.input}
              placeholder="Chave do Documento"
              value={documentKey}
              onChangeText={setDocumentKey}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <IconSymbol name="building" size={20} color="#999" />
            <TextInput
              style={styles.input}
              placeholder="Estabelecimento"
              value={establishment}
              onChangeText={setEstablishment}
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputGroup}>
            <IconSymbol name="calendar" size={20} color="#999" />
            <TextInput
              style={styles.input}
              placeholder="Data Recebimento"
              value={date}
              onChangeText={setDate}
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputGroup}>
            <IconSymbol name="barcode" size={20} color="#999" />
            <TextInput
              style={styles.input}
              placeholder="Série"
              value={series}
              onChangeText={setSeries}
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputGroup}>
            <IconSymbol name="document" size={20} color="#999" />
            <TextInput
              style={styles.input}
              placeholder="Tipo de Documento"
              value={documentType}
              onChangeText={setDocumentType}
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputGroup}>
            <IconSymbol name="document" size={20} color="#999" />
            <TextInput
              style={styles.input}
              placeholder="N.º Documento"
              value={documentNumber}
              onChangeText={setDocumentNumber}
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputGroup}>
            <IconSymbol name="person" size={20} color="#999" />
            <TextInput
              style={styles.input}
              placeholder="Fornecedor"
              value={supplier}
              onChangeText={setSupplier}
              placeholderTextColor="#999"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <ThemedText style={styles.buttonText}>Procurar</ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#0a7ea4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
