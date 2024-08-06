import { useEffect, useState } from "react";
import Pet from "./Pet.jsx";
import useBreedList from "./useBreedList.js";
const animals = ["bird", "cat", "dog"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  console.log("length : ", breeds);

  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <>
      <div className="search-params">
        <form onSubmit={(e) => {
          e.preventDefault()
          requestPets()
        }}>
          <label htmlFor="location">
            Location
            <input
              type="text"
              id="location"
              value={location}
              placeholder="location"
              onChange={(e) => {
                setLocation(e.target.value);
                console.log(location);
              }}
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={animal}
              onChange={(e) => {
                setAnimal(e.target.value);
                setBreed("");
              }}
            >
              <option />
              {animals.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              disabled={!breeds.length}
              id="breed"
              value={breed}
              onChange={(e) => {
                setBreed(e.target.value);
              }}
              onBlur={(e) => setBreed(e.target.value)}
            >
              <option />
              {breeds.map((breed) => {
                return (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                );
              })}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
        />
      ))}
    </>
  );
};

export default SearchParams;
