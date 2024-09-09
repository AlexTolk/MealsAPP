import { View,  StyleSheet, FlatList } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverViewScreen({ route, navigation }) {
    const ID = route.params.categoryId;

    const displayedItems = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(ID) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id ===ID).title;
        navigation.setOptions({
            title: categoryTitle,
        }); 
    }, [ID, navigation])


    
    function renderMealItem(itemData){
        const item = itemData.item

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            isGlutenFree: item.isGlutenFree,
            isVegan: item.isVegan,
            isVegetarian: item.isVegetarian,
            isLactoseFree: item.isLactoseFree,
        }
        return <MealItem {...mealItemProps} />
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