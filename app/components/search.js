import * as React from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder='Search'
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.search}
    />
  );
};

const styles = StyleSheet.create({
  search: {
    borderWidth: 2,
    borderColor: "#352F39",
    borderRadius: 16,
    borderBottomWidth: 4,
    shadowOpacity: 0,
  },
});

export default SearchBar;
