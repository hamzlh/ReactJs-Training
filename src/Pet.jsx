const Pet = (props) => {
    const {animal, breed, location, name, images, id} = props

    let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
    if (images.length) {
        hero = images[0]
    }
    return (
        <a href={`/details/${id}`} className="pet">
            <div>
                <img src={hero} alt={name} />
            </div>
            <div>
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </a>
    )
};

export default Pet