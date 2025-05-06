import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { getPopularMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
	ActivityIndicator,
	FlatList,
	Image,
	ScrollView,
	Text,
	View,
} from "react-native";

export default function Index() {
	const router = useRouter();
	const { data, loading, error } = useFetch(() =>
		getPopularMovies({ query: "" }),
	);

	return (
		<View className="flex-1 bg-primary">
			<Image source={images.bg} className="absolute w-full z-0" />
			<ScrollView
				className="flex-1 px-5"
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
			>
				<Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
				{loading ? (
					<ActivityIndicator
						size="large"
						color="#0000ff"
						className="mt-10 self-center"
					/>
				) : error ? (
					<Text className="text-white">{error?.message}</Text>
				) : (
					<View className="flex-1 mt-5">
						<SearchBar
							onPress={() => router.push("/search")}
							placeholder="Search for a movie"
						/>
						<Text className="text-lg text-white font-semibold mt-5 mb-3">
							Latest Movies
						</Text>
						<FlatList
							data={data}
							keyExtractor={(item) => item.id.toString()}
							renderItem={({ item }) => <MovieCard {...item} />}
							numColumns={3}
							columnWrapperStyle={{
								justifyContent: "flex-start",
								gap: 20,
								paddingRight: 5,
								marginBottom: 10,
							}}
							className="mt-2 pb-32"
							scrollEnabled={false}
						/>
					</View>
				)}
			</ScrollView>
		</View>
	);
}
