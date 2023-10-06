import { View, Text, FlatList, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const dados = [
    {
        'id':1,
        'titulo':'A volta dos que nao foram',
        'autor':'John Nobody',
        'editora':'Fechou'
    },
    {
        'id':2,
        'titulo':'Fogo na caixa dagua',
        'autor':'Joe Nobody',
        'editora':'Fechou'
    }
]


export default function Home(){
    return(
        <FlatList
         data={dados}
         renderItem={({item})=>
         <Card style={estilo.cardEstilo}>
            <Card.Title title={item.titulo}/>
            <Card.Cover resizeMode="center" source={{ uri: 'https://ayine.com.br/wp-content/uploads/2022/03/Miolo-diagonal-O-livro-dos-amigos-site.png' }}></Card.Cover>

            <Card.Content>
                <Text>{item.autor}</Text>
                <Text>{item.editora}</Text>
            </Card.Content>
            
            
         </Card>
            
         }

         keyExtractor={(item)=>item.id.toString()}
         
         >

        </FlatList>
    );
}


const estilo = StyleSheet.create(
{
    cardEstilo: {
        margin:5,
    }
}
);