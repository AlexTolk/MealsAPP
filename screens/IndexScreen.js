import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';


function IndexScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler(){
            navigation.navigate('Recipes');
        }
    
        return (
        <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}/>
        );
    }

    return(
        <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2} />
    );
}

export default IndexScreen;