import React from 'react';
import { Button as NativeButton, StyleSheet, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao Recicl@!</Text>
        <Text style={styles.subtitle}>O App que recicla nosso bairro!</Text>
        <View style={styles.buttons}>
          <NativeButton style={styles.buttonMorador} title="Sou Morador" color="#1ec42e" onPress={() => navigation.navigate('Resident')} />
          <NativeButton style={styles.buttonColetador} title="Sou Coletador" color="#2b4090" onPress={() => navigation.navigate('Collector')}/>
          {/* <Button style={styles.buttonColetador} buttonColor="#00ff00" textColor="#ff0000" mode="contained" onPress={() => navigation.navigate('Collector')}>
            Sou Coletador
          </Button> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#98d071', width: '100%', height: '100%'},
  container: { justifyContent: 'space-between', alignItems: 'center', height: '800px', marginVertical: 'auto' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20, color: '#666666' },
  subtitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 20, color: '#666666' },
  buttonMorador: { color: '#A8E6CF'},
  buttonColetador: { color: '#80E0A7'},
  buttons: { display: 'flex', flex: 0, gap: 16, borderRadius: '4px', justifyContent: 'space-between', flexDirection: 'row'},
});

export default HomeScreen;
