# Recicl@

Recicl@ é um aplicativo desenvolvido para promover a conscientização sobre reciclagem e facilitar o acesso a informações sobre pontos de coleta e rotas de coleta para recicladores. O aplicativo possui duas interfaces principais: uma para moradores do bairro e outra para coletores de reciclagem. Através do Recicl@, os moradores podem encontrar pontos de coleta nas proximidades, enquanto os coletores podem cadastrar e gerenciar suas rotas de coleta.

## Funcionalidades

### Para os moradores:
- **Buscar pontos de coleta**: Localize pontos de coleta de materiais recicláveis próximos à sua localização utilizando a API do Google Maps.
- **Informações sobre reciclagem**: Acesse informações sobre como reciclar, a importância da reciclagem, e o que pode ser reciclado.

### Para os coletores:
- **Cadastrar rotas de coleta**: Os coletores podem cadastrar suas rotas de coleta e compartilhar com os moradores.
- **Iniciar uma rota de coleta**: Ao iniciar uma rota, os pontos de coleta ficam visíveis para os moradores.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **React Navigation**: Biblioteca de navegação para aplicativos React Native.
- **Google Maps API**: Utilizada para localizar pontos de coleta próximos à localização do usuário.
- **Firebase**: Usado para armazenar informações de usuários, pontos de coleta, rotas e outros dados relevantes.
- **Kotlin (para Android)**: Utilizado no backend para recursos nativos do Android.

## Instalação

### Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado:
- **Node.js** (recomendado v14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Expo CLI** (opcional, se for usar o Expo)
- **Android Studio** (para desenvolvimento Android, caso não esteja usando o Expo)
