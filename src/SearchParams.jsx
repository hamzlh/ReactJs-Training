import { useState } from "react"

const animals = ['Anjing', 'Babi', 'Kucing']

const SearchParams = () => {
  const [location, setLocation] = useState("")
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState("")
  const breeds = []
  return (
    <div className="search-params">
      <form>
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
        <label htmlFor="animal">Animal
            <select
            id="animal"
            value={animal}
            onChange={(e) => {
                setAnimal(e.target.value)
                setBreed("")
            }}>
                <option/>
                {animals.map(animal =>(
                    <option key={animal} value={animal}>
                        {animal}
                    </option>
                )
                )}
            </select>
        </label>
        <label htmlFor="breed">Breed
            <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => {
                setBreed(e.target.value)
            }}
            onBlur={(e) =>(setBreed(e.target.value))}>
                <option/>
                {breeds.map(breed =>{
                    <option key={breed} value={breed}>
                        {breed}
                    </option>
                })}
            </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
