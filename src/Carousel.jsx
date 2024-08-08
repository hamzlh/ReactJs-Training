import { Component } from "react"

class Carousel extends Component{
    state = {
        active: 0,
    }

    static defaultProps = {
        images: ["http://pets-image.dev-apis.com/pets/none.jpg"]
    }

    handleIndexClick = (e) =>{
        this.setState({
            active: +e.target.dataset.index
        })
    }

    render(){
        const { active } = this.state
        const {images} = this.props

        return(
            <div className="carousel">
                <img src={images[active]} alt="pet" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                        <img key={index} src={photo} className={index === active ? "active" : ""} alt="pet-thumbnail" onClick={this.handleIndexClick} data-index={index}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel