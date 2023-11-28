import { useEffect, useState } from "react";

const useFetch = (apiPath, queryTerm="") => {

	const URL = 'https://api.themoviedb.org/3';
	const API_KEY = 'f5ac2a4ab0c583a1411b3def918ac2c4';

	const fetch_url = `${URL}/${apiPath}?api_key=${API_KEY}&query=${queryTerm}`
    const [data, setData] = useState([]);
    
    useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetch(
				fetch_url
			);
			const json = await response.json();
			setData(json.results);
		};
        fetchMovies();
	}, [apiPath]);

    return { data }
};

export default useFetch;