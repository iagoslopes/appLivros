import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

function AddLivro({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [ano, setAno] = useState('');
  const [autorPrincipal, setAutorPrincipal] = useState('');
  const [editora, setEditora] = useState('');
  const [imagem, setImagem] = useState('');

  const addLivro = async () => {
    try {
      await axios.post('URL_DA_SUA_API/livros', { titulo, ano, autorPrincipal, editora, imagem });
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Titulo" value={titulo} onChangeText={setTitulo} />
      <TextInput placeholder="Ano" value={ano} onChangeText={setAno} />
      <TextInput placeholder="Autor" value={autorPrincipal} onChangeText={setAutorPrincipal} />
      <TextInput placeholder="Editora" value={editora} onChangeText={setEditora} />
      <TextInput placeholder="Imagem" value={imagem} onChangeText={setImagem} />
      <Button title="Adicionar" onPress={addLivro} />
    </View>
  );
  }

  export default AddLivro;