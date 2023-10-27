import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native'


import Home from "./screens/Home";
import AddLivro from "./screens/AddLivro";
import ViewLivro from "./screens/ViewLivro";

const Stack = createStackNavigator();

function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={Home} />
                <Stack.Screen name="AddLivroScreen" component={AddLivro} />
                <Stack.Screen name="ViewLivroScreen" component={ViewLivro} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AppNavigator;