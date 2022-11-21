import "./Cards.css";

function Cards({ description, image, price, address, feature }) {

    return (
        <div className="Card">
            <div className="Image_Wrapper">
                <div className="feature">
                    <span>{feature}</span>
                </div>
                <img src={image} alt="Olx Product Image" />
            </div>

            <div className="Card_body">
                <div className="titleIcon">
                    <div className="Title">
                        <a href="#">{description}</a>
                    </div>
                </div>

                <div className="price">
                    <h4>{price}</h4>
                </div>
                <div className="areaTime">
                    <span>{address}</span>
                </div>
            </div>


        </div>

    )
}

export default Cards;


