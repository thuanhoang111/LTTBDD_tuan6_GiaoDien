import { FlatList, Text } from 'react-native';
import dataList from './data/data';
import Product from '../component/Product';

function ListProduct() {
    return <FlatList data={dataList} renderItem={Product} keyExtractor={(item) => item.id}></FlatList>;
}

export default ListProduct;
