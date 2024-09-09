import { View, Text, StyleSheet } from "react-native";

export default function Meal({ route}) {

    const ID = route.params.mealID;
    return(
        <View>
            <Text style={styles.text} >
                I am the meal {ID}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 36,
        textAlign: 'center'
    }
})