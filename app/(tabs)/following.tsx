import { useLocalSearchParams } from "expo-router";
import { View, Text, Alert } from "react-native";

const Following = () => {
    const {refresh} = useLocalSearchParams<{refresh: string}>();

    if(refresh && refresh === '1') {
        Alert.alert('Refreshed');
    }

    return (
        <View>
            <Text>Following</Text>
        </View>
    )
}

export default Following;