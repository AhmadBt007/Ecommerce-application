import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

// ✅ Props type define
type SearchBarProps = {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  onSubmit?: () => void; 
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search',
  onChangeText,
  value,
  onSubmit, 
}) => {
  const { isDark } = useTheme();

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={[
          styles.search,
          {
            backgroundColor: isDark ? '#34303f' : '#f4f4f4',
            color: isDark ? '#fff' : '#000',
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={isDark ? '#ccc' : '#555'}
        onChangeText={onChangeText}
        value={value}
        onSubmitEditing={onSubmit} 
        returnKeyType="search"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: { padding: 10, width: '100%' },
  search: { borderRadius: 16, paddingLeft: 20, height: 50 },
});
