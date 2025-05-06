import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface MovieCardProps {
	id: string;
	primaryTitle: string;
	primaryImage: string;
	releaseDate: string;
	numVotes: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
	id,
	primaryTitle,
	primaryImage,
	releaseDate,
	numVotes,
}) => {
	return (
		<Link href={`/movies/${id}`} asChild>
			<TouchableOpacity className="w-[30%]" onPress={() => {}}>
				<Image
					source={{
						uri: primaryImage,
					}}
					className="w-full h-52 rounded-lg"
					resizeMode="cover"
				/>
				<Text className="text-sm text-white font-bold mt-2">
					{primaryTitle}
				</Text>
				<View className="flex-row items-center justify-start gap-x-1">
					<Image source={icons.star} className="size-4" />
					<Text className="text-xs text-white font-bold uppercase">
						{numVotes}
					</Text>
				</View>
				<View className="flex-row items-center justify-between">
					<Text className="text-xs text-light-300 font-medium mt-1">
						{releaseDate}
					</Text>
					<Text className="text-xs text-light-300 uppercase font-medium">
						Movie
					</Text>
				</View>
			</TouchableOpacity>
		</Link>
	);
};

export default MovieCard;
