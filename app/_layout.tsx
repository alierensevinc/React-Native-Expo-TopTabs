import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import {Image} from "react-native";

const LEFT_IMG_SOURCE = "https://pbs.twimg.com/profile_images/1711724429972004864/hoB9EZs3_400x400.jpg";
const CENTER_IMG_SOURCE = "https://about.twitter.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png";

const Layout = () => {
    return (
        <Stack screenOptions={{headerShadowVisible: false}}>
            <Stack.Screen 
                name="(tabs)" 
                options={{
                    headerLeft: () => (
                        <Image
                            source={{uri: LEFT_IMG_SOURCE}}
                            style={{width: 30, height: 30, borderRadius: 20}}
                        />
                    ),
                    headerTitle: () => (
                        <Image
                            source={{uri: CENTER_IMG_SOURCE}}
                            style={{width: 24, height: 24, resizeMode: 'contain'}}
                        />
                    ),
                    headerRight: () => <Ionicons name="settings-outline" size={24} color="black" />
                }}
            />
            <Stack.Screen name="details" options={{headerTitle: 'Details', headerBackTitle: 'Back'}}/>
        </Stack>
    )
}

export default Layout;