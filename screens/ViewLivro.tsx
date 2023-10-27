import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';

export default function ViewLivro({ route }) {
  const { id } = route.params;
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    fetchLivro();
  }, []);

  const fetchLivro = async () => {
    try {
      const response = await axios.get(`https://bibliotecaetecmaua.azurewebsites.net/api/LivrosSedeApi/${id}`);
      setLivro(response.data);
    } catch (error) {
      console.error("Erro ao buscar livro:", error);
    }
  };

  return (
    <View>
      {livro && (
        <>
          <Text>{livro.titulo}</Text>
          <Text>{livro.ano}</Text>          
          <Text>{livro.editora}</Text>
          <Text>{livro.autorPrincipal }</Text>
          <Image source={{ uri: livro.imagem}} style={{ width: 100, height: 100 }} />
        </>
      )}
    </View>
  );
}