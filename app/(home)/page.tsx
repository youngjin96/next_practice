import Link from "next/link";

export const metadata = {
    title: 'home'
}

export const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
    const response = await fetch(URL);
    return await response.json();
}

export default async function HomePage() {
    const movies = await getMovies();

    return (
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </div>
    )
}