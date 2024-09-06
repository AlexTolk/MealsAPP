import { View, Text,  StyleSheet } from 'react-native-web';
import { MEALS } from '../data/dummy-data';

function MealsOverViewScreen() {
    return(
        <View style={styles.container}>
            <Text>All meals in this category</Text>
        </View>
    );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})