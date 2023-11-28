import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import useFetch from "../hooks/useFetch";

const Search = ({ apiPath }) => {
	const [searchParams] = useSearchParams();
	const queryTerm = searchParams.get("q");

	const { data: movies } = useFetch(apiPath, queryTerm);
	return (
		<>
			<main>
				<section className="py-4">
					<p className="text-3xl text-gray-700 dark:text-white">
						{movies.length > 0
							? `Result for search:`
							: `No results found for:`}{" "}
						{queryTerm}
					</p>
				</section>
				<section className="max-w-7xl mx-auto py-7">
					<div className="flex justify-start flex-wrap gap-10 others:justify-evenly">
						{movies.map((movie) => (
							<Card key={movie.id} movie={movie} />
						))}
					</div>
				</section>
			</main>
		</>
	);
};

export { Search };
