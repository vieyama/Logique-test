import React from 'react'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row,
} from 'reactstrap'
import Rate from 'rc-rate'
import 'rc-rate/assets/index.css'
import Poster1 from 'assets/images/Poster1.png'
import Poster2 from 'assets/images/Poster2.png'
import Poster3 from 'assets/images/Poster3.png'

const listMovie = [
    {
        poster: Poster1,
        title: 'KONG, THE ICELAND SKULL',
        category: ['Action', 'Adventure', 'Sci-Fi'],
        star: 8.5,
    },
    {
        poster: Poster2,
        title: 'LOGAN',
        category: ['Action', 'Adventure', 'Sci-Fi'],
        star: 8.5,
    },
    {
        poster: Poster3,
        title: 'THE SHALLOWS',
        category: ['Action', 'Adventure', 'Sci-Fi'],
        star: 8.5,
    },
    {
        poster: Poster1,
        title: 'KONG, THE ICELAND SKULL',
        category: ['Action', 'Adventure', 'Sci-Fi'],
        star: 8.5,
    },
    {
        poster: Poster3,
        title: 'THE SHALLOWS',
        category: ['Action', 'Adventure', 'Sci-Fi'],
        star: 8.5,
    },
    {
        poster: Poster2,
        title: 'LOGAN',
        category: ['Action', 'Adventure', 'Sci-Fi'],
        star: 8.5,
    },

    {
        poster: Poster1,
        title: 'KONG, THE ICELAND SKULL',
        category: ['Action', 'Adventure', 'Sci-Fi'],
        star: 8.5,
    },

    {
        poster: Poster3,
        title: 'THE SHALLOWS',
        category: ['Action', 'Adventure', 'Sci-Fi'],
        star: 8.5,
    },
    {
        poster: Poster2,
        title: 'LOGAN',
        category: ['Action', 'Adventure', 'Sci-Fi'],
        star: 8.5,
    },
]

const Home = () => {
    return (
        <Row className="wrapper">
            {listMovie.map((item, key) => (
                <Col md="4" lg="3" sm="6" xs="12" key={key}>
                    <Card style={{ marginBottom: 50 }}>
                        <CardImg
                            top
                            width="100%"
                            src={item.poster}
                            alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle tag="h5">{item.title}</CardTitle>
                            <CardSubtitle
                                tag="h6"
                                className="mb-2 category-movie"
                            >
                                {item.category.join(', ')}
                            </CardSubtitle>
                            <Rate count={5} value={item.star} allowHalf />{' '}
                            {item.star}
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Home
