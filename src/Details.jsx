import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet.js";
import Carousel from "./Carousel.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Modal from "./Modal.jsx";
import AdoptedPetContext from "./AdoptedPetContex.js";

const Details = () => {
  const navigate = useNavigate()
  const [, setAdoptedPet] = useContext(AdoptedPetContext)
  const [showModal, setShowModal] = useState(false)

  const params = useParams();
  console.log("param :", params);

  const result = useQuery(["details", params.id], fetchPet);
  console.log("res : ", result);
  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Loading...</h2>
      </div>
    );
  }
  const pet = result.data.pets[0];
  return (
    <div>
      <div className="details">
        {/* <div className="img-container-custom">
          {pet.images.map((image, index) => (
            <img key={index} src={image} alt={pet.name} />
          ))}
        </div> */}
        <Carousel images={pet.images} />
        <div>
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} - ${pet.breed} | ${pet.city} - ${pet.state}`}</h2>
          <button onClick={() => setShowModal(true)}>Ingin bawa &quot;{pet.name}&quot; pulang?</button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Apakah kamu yakin?</h1>
                <div className="buttons">
                  <button onClick={() => {
                    setAdoptedPet(pet)
                    navigate("/")
                  }}>Yes</button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props){
  return(
    <ErrorBoundary>
      <Details {...props}></Details>
    </ErrorBoundary>
  )
};
