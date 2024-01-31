import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await res.json();

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function HomePage({ pokemons }) {
  return (
    <main>
      <h1 className="text-xl font-bold">Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        eaque veniam cumque deleniti nemo ipsum cupiditate aliquam odio
        veritatis vero rerum, officia quasi. Alias nemo consequatur autem magni
        quasi accusamus!
      </p>

      <Link className="text-blue-600 underline " href="/about">
        About
      </Link>

      <hr />
      <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        ...
      </button>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </main>
  );
}
