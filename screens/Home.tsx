import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import  axios  from "axios";
import { useEffect, useState } from "react";







export default function Home({navigation}){
    const [dados,setDados] = useState([]);

    async function getData() 
    {
        try{
            var Response = await axios.get("https://bibliotecaetecmaua.azurewebsites.net/api/LivrosSedeApi");
            setDados(Response.data);
        }
        catch(erro)
        {
            console.log("Falha ao carregar livros: "+erro);
        }
    }

    useEffect(
        ()=>{
            getData();
        },
        []
    );
    
    


    return(
        <View>
        <Button children={"Adicionar"} onPress={()=>{navigation.navigate('AddLivroScreen')}}></Button>
        <FlatList
         data={dados}
         renderItem={({item})=>
         <Card style={estilo.cardEstilo}>
            <Card.Title title={item.titulo}/>
            <Card.Cover resizeMode="center" source={{ uri: `https://bibliotecaetecmaua.azurewebsites.net/Content/Images/${item.imagem}` }}></Card.Cover>

            <Card.Content>
                <Text>{item.autorPrincipal}</Text>
                <Text>{item.editora}</Text>
                <Button children={"Visualizar"} onPress={()=>{navigation.navigate('ViewLivroScreen',{id: item.id})}}></Button>
            </Card.Content>     
            
            
         </Card>
            
         }

         keyExtractor={(item)=>item.id.toString()}
         
         >

        </FlatList>
        
        </View>

    );
}


const estilo = StyleSheet.create(
{
    cardEstilo: {
        margin:5,
    }
}
);