import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
// import Pet from "./Pet.jsx";
import AdoptedPetContext from "./AdoptedPetContex.js";
import fetchSearch from "./fetchSearch.js";
import useBreedList from "./useBreedList.js";
import Results from "./Results.jsx";
const animals = ["bird", "cat", "dog"];

const SearchParams = () => {
  const [adoptedPet] = useContext(AdoptedPetContext)
  const [animal, setAnimal] = useState("");
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed:""
  })
  const [breeds] = useBreedList(animal);

  const results = useQuery(['search', requestParams], fetchSearch)
  const pets = results?.data?.pets ?? []

  return (
    <>
      <div className="search-params">
        <form onSubmit={(e) => {
          e.preventDefault()
          const fromData = new FormData(e.target)
          const obj = {
            animal: fromData.get("animal") ?? "",
            breed: fromData.get("breed") ?? "",
            location: fromData.get("location") ?? ""
          }
          setRequestParams(obj)
        }}>
          {adoptedPet ? (
            <div className="pet image-container">
              <img src={adoptedPet.images[0]} alt={adoptedPet.Name} />
            </div>
          ) : null}
          <label htmlFor="location">
            Location
            <input
              type="text"
              id="location"
              placeholder="location"
              name="location"
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              name="animal"
              onChange={(e) => {
                setAnimal(e.target.value);
              }}
              onBlur={(e) =>{
                setAnimal(e.target.value)
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
              name="breed"
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
        <Results pets={pets}></Results>
      </div>
      
    </>
  );
};

export default SearchParams;
