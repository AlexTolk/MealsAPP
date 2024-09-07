import { View,  StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverViewScreen({ route }) {
    const ID = route.params.categoryId;

    const displayedItems = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(ID) >= 0;
    });
    
    function renderMealItem(itemData){
        return <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        isGlutenFree={itemData.item.isGlutenFree}
        isVegan={itemData.item.isVegan}
        isVegetarian={itemData.item.isVegetarian}
        isLactoseFree={itemData.item.isLactoseFree}
        />
    }
    
    return(
        <View style={styles.container}>
            <FlatList data={displayedItems} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
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