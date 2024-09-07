import { View, Text, Pressable, Image, StyleSheet } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';


export default function MealItem({ title, imageUrl, duration, complexity, affordability, isGlutenFree, isVegan, isVegetarian, isLactoseFree }) {
    function iconChecker(item) {
        if (item) {
            return <Entypo name="check" size={18} color="black" />;
        } else {
            return <Entypo name="cross" size={18} color="black" />;
        }
    }
    function affordabilityChecker(item) {
        if (item === 'luxurious'){
            return '$$$';
        }
        if (item === 'pricey'){
            return '$$';
        }else {
            return '$';
        }
    }
    
    return (
    <View style={styles.mealItemContainer}>
        <Pressable>
            <View>
                <Image source={{uri: imageUrl}} style={styles.image} />
                <Text style={styles.title} >{title}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.characteristic}><Text style={styles.infoBold} >Duration: </Text>{duration} minutes</Text>
                <Text style={styles.characteristic}><Text style={styles.infoBold} >Complexity: </Text>{complexity}</Text>
                <Text style={styles.characteristic}><Text style={styles.infoBold} >Affordability: </Text>{affordabilityChecker(affordability)}</Text>
                <Text style={styles.characteristic}><Text style={styles.infoBold} >Vegan: </Text>{iconChecker(isVegan)}</Text>
                <Text style={styles.characteristic}><Text style={styles.infoBold} >Vegetarian: </Text>{iconChecker(isVegetarian)}</Text>
                <Text style={styles.characteristic}><Text style={styles.infoBold} >Gluten free: </Text>{iconChecker(isGlutenFree)}</Text>
                <Text style={styles.characteristic}><Text style={styles.infoBold} >Lactose free: </Text>{iconChecker(isLactoseFree)}</Text>
            </View>
        </Pressable>
    </View>
    );
}

const styles = StyleSheet.create({
    mealItemContainer: {
        flex: 1,
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'pacifico',
        textAlign: 'center',
    },
    info: {
        fontFamily: 'comicneue',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    characteristic: {
        marginHorizontal: 5,
    },
    infoBold: {
        fontWeight: 'bold'
    }
})