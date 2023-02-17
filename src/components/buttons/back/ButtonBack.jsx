
import arrowBack from "../../../assets/arrow-back.svg"
export const ButtonBack = ({ back }) => {

    
    return (
        <>
            <button onClick={back} className="button-back"> <img src={arrowBack} /> Atras </button>
        </>
    )
}
