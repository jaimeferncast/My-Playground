import { Link } from 'react-router-dom'

import { useEffect, useState } from "react"

import { Container, Row, Col } from "react-bootstrap"

import PhonesService from "../../../service/phones.service"

const PhonePage = (props) => {

    const phoneId = props.match.params.id

    const [phone, setPhone] = useState(null)

    useEffect(() => {

        const phonesService = new PhonesService()

        const fetchPhone = async () => {
            const fetchedPhone = await phonesService.getPhoneById(phoneId)
            setPhone(fetchedPhone.data.message)
        }

        fetchPhone()

    })

    return (
        <Container style={{ width: "90%" }}>
            {
                phone &&
                <>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 style={{ display: "inline" }}>{phone.name} by {phone.manufacturer}</h2>
                        <Link to="/teléfonos">Volver al listado de teléfonos</Link>
                    </div>
                    <Row className="phoneDetails">
                        <Col md={6}>
                            <p><code><strong>Color:</strong></code> {phone.color}</p>
                            <p><code><strong>Precio:</strong></code> {phone.price}€</p>
                            <p><code><strong>Procesador:</strong></code> {phone.processor}</p>
                            <p><code><strong>Memoria ram:</strong></code> {phone.ram}GB</p>
                            <p><code><strong>Pantalla:</strong></code> {phone.screen}</p>
                            <hr style={{ borderTop: "1px solid rgba(0,0,0,.3)" }}></hr>
                            <p><code><strong>Descripción en inglés:</strong></code> {phone.description}</p>
                        </Col>
                        <Col md={6} style={{ display: "flex", justifyContent: "center" }}>
                            <img src={"https://i.postimg.cc/" + phone.imageFileName} alt={phone.name} />
                        </Col>
                    </Row>
                </>
            }
        </Container>
    )
}

export default PhonePage