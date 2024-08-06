import Pet from "./Pet.jsx";

const Results = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>Hewan yang dicari tidak ada.</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.key}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city} - ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;