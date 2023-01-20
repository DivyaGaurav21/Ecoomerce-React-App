import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../assets/meals.jpg'
import IMG2 from '../assets/meals2.jpg'
import IMG3 from '../assets/meals3.jpg'

function MealDemo() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMG2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p style={{ color: "white" }}>Delicious Receipy are definatly founded here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMG1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <p style ={{color: "white" } }>Best review by client almost whole item</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={IMG3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <p style ={{color: "white"}}>
                    A delicious Burger Delviery top rated by customer
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MealDemo;