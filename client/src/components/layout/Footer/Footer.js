import Mailto from "./Mailto"

const Footer = () => {
    return (
        <footer>
            <Mailto email="jaimeferncast@gmail.com" subject="I liked you playground :)" body="Nice to meet you, my name is...">
                Mail me!
            </Mailto>
        </footer>
    )
}

export default Footer