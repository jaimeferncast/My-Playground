import { useEffect, useState } from "react"

import { Container, Row, Col, Spinner } from "react-bootstrap"
import PhoneaCard from "./PhoneCard"

import PhonesService from "../../../service/phones.service"

const PhoneList = () => {

    const [phones, setPhones] = useState(null)

    useEffect(() => {

        const phonesService = new PhonesService()

        const fetchPhones = async () => {
            const fetchedPhones = await phonesService.getphones()
            setPhones(fetchedPhones.data.message)
        }

        setTimeout(fetchPhones, 2000)

    }, [])

    return (
        <Container>
            <Row>
                {
                    phones
                        ? phones.map(phone => (
                            <PhoneaCard key={phone.id} phone={phone}>{phone.name}</PhoneaCard>
                        ))
                        : <Col style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                            <Spinner animation="border" variant="warning" />
                        </Col>
                }
            </Row>
        </Container>
    )
}

export default PhoneList