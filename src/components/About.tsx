import LoremText from "./LoremText";
import { useNavigate } from "react-router-dom";

// About Page
const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>About</h1>
            <button onClick={() => navigate(-1)}>Назад</button>
            <LoremText />
        </div>
    );
};

export default About;

