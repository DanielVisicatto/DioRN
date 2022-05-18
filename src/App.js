import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGitHub = '#010409';
const imageProfileGitHub =
  'https://avatars.githubusercontent.com/u/95378940?v=4';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const urlToGitHub = 'https://github.com/DanielVisicatto/';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToGitHub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL(urlToGitHub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Foto de perfil de Daniel"
          style={style.avatar}
          source={{uri: imageProfileGitHub}}
        />
        <Text
          accessibilityLabel="Nome: Daniel Visicatto"
          style={[style.defaultText, style.name]}>
          Daniel Visicatto
        </Text>
        <Text
          accessibilityLabel="Nickname: DanielVisicatto"
          style={[style.defaultText, style.nickname]}>
          DanielVisicatto
        </Text>
        <Text
          accessibilityLabel=" Descrição: Hello world, my name is Daniel. I am from Brazil. I like movies, games
          and music. Now i want to be a dev. Let's go to learn! would you can
          help me?"
          style={[style.defaultText, style.description]}>
          Hello world, my name is Daniel. I am from Brazil. I like movies, games
          and music. Now i want to be a dev. Let's go to learn! would you can
          help me?
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1, // expandir para tela toda.
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGitHub,
  },
  name: {
    marginTop: 18,
    fontSize: 24,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGitHub,
  },
  description: {
    marginTop: 14,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 18,
    marginTop: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
