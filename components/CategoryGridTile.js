import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGridTile({title, color, onPress}){

    return(
        <View style={[styles.mainContainer, {backgroundColor: color}]}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}
export default CategoryGridTile;


const styles = StyleSheet.create({
    mainContainer: {
        height: 160,
        width: 160,
        borderRadius: 25,
        margin: 15,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.7,
        elevation: 5,
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    }

});