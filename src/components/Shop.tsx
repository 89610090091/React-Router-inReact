import { Fragment } from "react/jsx-runtime";
import LoremText from "./LoremText";
import { useNavigate, useParams } from "react-router-dom";

// Shop Page
// const Shop = () => (
//     <Fragment>
//         <h1>Shop</h1>
//         <LoremText />
//     </Fragment>
// );

const Shop = () => {
    const params = useParams();
    const current = params.id;
    const next = Number(current) + 1;
    const navigate = useNavigate();
    return (
        <div>
            <h1>Shop</h1>
            <p>You requested item with ID: {current}</p>
            <button onClick={() => navigate(-1)}>Назад</button>
            {/* <button onClick={() => hist.push(/shop/${ next })}>Next product</button> */}
        </div>
    );
};

export default Shop;