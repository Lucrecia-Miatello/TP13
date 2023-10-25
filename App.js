import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [outputText, setOutputText] = useState('');

  const reverseTextPortion = () => {
    if (startIndex < 0 || startIndex >= text.length || endIndex <= startIndex || endIndex > text.length) {
      alert('Índices no válidos');
      return;
    }

    const portionToReverse = text.slice(startIndex, endIndex);
    const reversedPortion = portionToReverse.split('').reverse().join('');
    const output = text.slice(0, startIndex) + reversedPortion + text.slice(endIndex);
    setOutputText(output);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Texto"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        placeholder="Inicio"
        keyboardType="numeric"
        backgroundColor="lightyellow"
        value={startIndex.toString()}
        onChangeText={(text) => setStartIndex(parseInt(text))}
      />
      <TextInput
        placeholder="Final"
        keyboardType="numeric"
        backgroundColor="lightyellow"
        value={endIndex.toString()}
        onChangeText={(text) => setEndIndex(parseInt(text))}
      />
      <View style={styles.customButtonContainer}>
        <Button
          title="Invertir Porción"
          onPress={reverseTextPortion}
          color="purple"
          backgroundColor="pink" 
        />
      </View>
      <Text>Texto de Salida:</Text>
      <Text>{outputText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5C1E9',
  },
  customButtonContainer: {
    width: '50%', // Ancho personalizado para el contenedor del botón
  },
});
