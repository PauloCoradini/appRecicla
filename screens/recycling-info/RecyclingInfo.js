import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const RecyclingInfoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tudo sobre Reciclagem</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>O que é Reciclagem?</Text>
        <Text style={styles.text}>
          A reciclagem é o processo de transformar materiais usados em novos produtos, reduzindo o desperdício de recursos naturais e diminuindo a quantidade de resíduos no meio ambiente. Esse processo envolve a coleta, separação e reprocessamento de materiais para criar novos produtos.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Benefícios da Reciclagem</Text>
        <Text style={styles.text}>
          Reciclar é fundamental para proteger o meio ambiente e melhorar a qualidade de vida. Alguns dos principais benefícios incluem:
        </Text>
        <Text style={styles.text}>
          - Redução do desperdício de recursos naturais e diminuição da necessidade de extração de novos materiais.
        </Text>
        <Text style={styles.text}>
          - Diminuição da quantidade de resíduos em aterros sanitários, contribuindo para a redução da poluição do solo e da água.
        </Text>
        <Text style={styles.text}>
          - Conservação de energia, já que a reciclagem de materiais como papel, vidro e alumínio requer menos energia do que a produção de novos materiais.
        </Text>
        <Text style={styles.text}>
          - Geração de novos empregos, tanto na coleta e separação de materiais quanto no desenvolvimento de novos produtos reciclados.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Materiais Recicláveis Comuns</Text>
        <Text style={styles.text}>
          Diversos materiais podem ser reciclados, e aqui estão alguns dos mais comuns:
        </Text>
        <Text style={styles.text}>
          - **Papel:** Jornal, revistas, caixas de papelão, embalagens de papel. Evite reciclar papéis sujos ou com resíduos de comida.
        </Text>
        <Text style={styles.text}>
          - **Plástico:** Garrafas, sacolas, embalagens de alimentos, copos plásticos. Certifique-se de separar plásticos com diferentes tipos de resinas (por exemplo, PET e PVC).
        </Text>
        <Text style={styles.text}>
          - **Vidro:** Garrafas, potes e frascos. O vidro pode ser reciclado infinitamente sem perder qualidade.
        </Text>
        <Text style={styles.text}>
          - **Alumínio:** Latas de refrigerante, cerveja, alimentos e outros itens de alumínio. O alumínio é um dos materiais mais recicláveis, pois pode ser reciclado quase infinitamente.
        </Text>
        <Text style={styles.text}>
          - **Eletroeletrônicos:** Celulares, computadores, baterias e outros dispositivos eletrônicos que contêm metais valiosos, plásticos e vidro.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dicas de Como Reciclar Corretamente</Text>
        <Text style={styles.text}>
          Para garantir que os materiais sejam reciclados corretamente e efetivamente, siga essas dicas:
        </Text>
        <Text style={styles.text}>
          - Separe os materiais recicláveis corretamente. Não misture materiais sujos com recicláveis limpos.
        </Text>
        <Text style={styles.text}>
          - Lave os recipientes de plástico, vidro ou metal antes de descartá-los, pois resíduos de alimentos podem contaminar o processo de reciclagem.
        </Text>
        <Text style={styles.text}>
          - Verifique os símbolos de reciclagem nos produtos e siga as instruções locais de reciclagem para saber quais materiais são aceitos em sua área.
        </Text>
        <Text style={styles.text}>
          - Não recicle materiais compostos, como papel alumínio ou embalagens de papel revestidas com plástico.
        </Text>
        <Text style={styles.text}>
          - Evite jogar pilhas, baterias e eletrônicos diretamente no lixo. Procure pontos de coleta especializados.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Curiosidades sobre Reciclagem</Text>
        <Text style={styles.text}>
          - Sabia que a reciclagem de uma lata de alumínio pode economizar até 95% da energia necessária para produzir uma nova?
        </Text>
        <Text style={styles.text}>
          - O papel reciclado pode ser usado até 7 vezes antes de perder a qualidade.
        </Text>
        <Text style={styles.text}>
          - O Brasil é um dos maiores recicladores de papel do mundo, reciclando cerca de 58% do papel consumido no país.
        </Text>
        <Text style={styles.text}>
          - Reciclar um único vidro pode economizar energia suficiente para acender uma lâmpada por 4 horas.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#cce8a2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1932c8',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555555',
  },
});

export default RecyclingInfoScreen;
