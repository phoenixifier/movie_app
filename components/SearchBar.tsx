import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface SearchBarProps {
	placeholder: string;
	onPress?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onPress }) => {
	return (
		<View className="flex-row bg-dark-200 items-center rounded-full px-5 py-4">
			<Image
				source={icons.search}
				className="size-5"
				resizeMode="contain"
				tintColor="#ab8bff"
			/>
			<TextInput
				onPress={onPress}
				placeholder={placeholder}
				value=""
				onChangeText={() => {}}
				placeholderTextColor="white"
				className="flex-1 ml-2 text-white"
			/>
		</View>
	);
};
export default SearchBar;
