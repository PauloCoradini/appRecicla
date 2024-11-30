import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ResidentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área do Morador</Text>
      <View style={styles.buttons}>
        <Button title="Buscar Pontos de Coleta" style={styles.pontosColeta} color="#1ec42e" onPress={() => navigation.navigate('CollectorPoints')} />
        <Button title="Informações sobre Reciclagem" style={styles.infos} color="#2b4090" onPress={() => navigation.navigate('RecyclingInfo')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#cce8a2' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20, position: 'absolute', top: 16 },
  buttons: { display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: 10},
  pontosColeta: { marginBottom: 16 },
});
