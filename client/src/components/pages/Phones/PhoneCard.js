import { Link } from 'react-router-dom'

import { Col, Card, Button } from 'react-bootstrap'

const PhoneaCard = ({ phone }) => {
    return (
        <Col md={6} lg={4} style={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"https://i.postimg.cc/" + phone.imageFileName} />
                <Card.Body>
                    <Card.Title>{phone.name}</Card.Title>
                    <Link to={`/teléfonos/${phone._id}`}>
                        <Button variant="light">Ver detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default PhoneaCard