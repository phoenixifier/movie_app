export const rapid_config = {
	BASE_URL: "https://imdb236.p.rapidapi.com/imdb",
	API_KEY: "7fd2c33783mshb9805a73b57b02ap17a484jsn9c4ef6372e81",
	headers: {
		"x-rapidapi-key": "7fd2c33783mshb9805a73b57b02ap17a484jsn9c4ef6372e81",
		"x-rapidapi-host": "imdb236.p.rapidapi.com",
	},
};

export const getPopularMovies = async ({ query }: { query: string }) => {
	if (!rapid_config.API_KEY) {
		throw new Error(
			"API key is missing. Check EXPO_PUBLIC_MOVIE_API_KEY environment variable.",
		);
	}

	const endpoint = query
		? `${rapid_config.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
		: `${rapid_config.BASE_URL}/most-popular-movies`;
	const response = await fetch(endpoint, {
		method: "GET",
		headers: rapid_config.headers,
	});

	if (!response.ok) {
		throw new Error(
			"Failed to fetch popular movies from API.",
			// @ts-ignore
			response.statusText,
		);
	}

	return await response.json();
};
