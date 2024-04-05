import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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
    <View style={styles.container}>
      {livro && (
        <View style={styles.content}>
          <View style={styles.gradient}></View>
        
          <View style={styles.imageContainer}>
            <Image source={{ uri: `https://bibliotecaetecmaua.azurewebsites.net/Content/Images/${livro.imagem}` }} style={styles.image} />
            <Text style={styles.title}>{livro.titulo}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Ano</Text>
            <Text style={styles.info}>{livro.ano}</Text>

            <Text style={styles.label}>Editora</Text>
            <Text style={styles.info}>{livro.editora}</Text>

            <Text style={styles.label}>Autor Principal</Text>
            <Text style={styles.info}>{livro.autorPrincipal}</Text>

            <Text style={styles.label}>Autores</Text>
            <Text style={styles.info}>{livro.autores}</Text>

            <Text style={styles.label}>Edição</Text>
            <Text style={styles.info}>{livro.edicao}</Text>

            <Text style={styles.label}>Idioma</Text>
            <Text style={styles.info}>{livro.idioma}</Text>

            <Text style={styles.label}>ISBN/ISSN</Text>
            <Text style={styles.info}>{livro.isbnIssn}</Text>

            <Text style={styles.label}>Material</Text>
            <Text style={styles.info}>{livro.material}</Text>

            <Text style={styles.label}>Obra</Text>
            <Text style={styles.info}>{livro.obra}</Text>    
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Background branco para preencher a tela
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  imageContainer: {
    alignItems: 'center', // Centraliza a imagem e o título
    marginTop: 25,
    marginBottom: 20, // Espaçamento abaixo da imagem e do título
  },
  image: {
    width: 175, 
    height: 225,
    resizeMode: 'contain',
  },
  gradient: {
    position: 'absolute',
    height: 200,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(circle, rgba(128, 128, 128, 1) 0%, rgba(32, 32, 32, 1) 70%)', // Cor de fundo do gradiente
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Título em preto
    marginBottom: 10,
    textAlign: 'center',
  },
  infoContainer: {
    alignItems: 'flex-start', // Alinha os outros campos à esquerda
    marginLeft: 20, // Adiciona espaçamento à esquerda para os campos
    marginRight: 20, // Alinha os outros campos à esquerda
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  info: {
    fontSize: 15,
    color: 'black', // Textos em preto
    marginBottom: 7,
    textAlign: 'justify',
  },
});
