import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const SearchComp = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <Searchbar
            style={styles.Searchbar}
            placeholder="Search for a seller..."
            onChangeText={setSearchQuery}
            value={searchQuery}
        />
    );
};

const styles = StyleSheet.create({
    Searchbar: {
        width: '85%',
        marginBottom: 10,
    }
})

export default SearchComp;
