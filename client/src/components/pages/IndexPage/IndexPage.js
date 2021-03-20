import { Container, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <Container>
            <h1>Welcome to The Phone Cave Playground</h1>
            <p>This is my playground, I use this simple single page application as a template to apply new stuff while I learn.</p>
            <Link to="/teléfonos">
                <Button variant="warning">See Phones</Button>
            </Link>
        </Container>
    )
}

export default Index