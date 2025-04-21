export const rapid_config = {
	BASE_URL: "https://imdb236.p.rapidapi.com/imdb",
	API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
	headers: {
		accept: "application/json",
		"x-rapidapi-key": process.env.EXPO_PUBLIC_MOVIE_API_KEY,
		"x-rapidapi-host": "imdb236.p.rapidapi.com",
	},
};

export const getPopularMovies = async ({ query }: { query: string }) => {
	const endpoint = query
		? `${rapid_config.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
		: `${rapid_config.BASE_URL}/most_popular_movies}`;
	const response = await fetch(endpoint, {
		method: "GET",
		// @ts-ignore
		headers: rapid_config.headers,
	});

	if (!response.ok) {
		throw new Error(
			"Failed to fetch popular movies from API.",
			// @ts-ignore
			response.statusText,
		);
	}

	const data = await response.json();
	return data.results;
};
