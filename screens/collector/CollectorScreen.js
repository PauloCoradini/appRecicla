import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CollectorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área do Coletador</Text>
      <View style={styles.buttons}>
        <Button title="Cadastrar Rota de Coleta" style={styles.cadastrarRota} color="#1ec42e" onPress={() => navigation.navigate('CollectorPoints')} />
        <Button title="Iniciar Rota de Coleta" style={styles.infos} color="#2b4090" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#626ac1' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20, position: 'absolute', top: 16 },
  buttons: { display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: 10},
  cadastrarRota: { marginBottom: 16 },
});
