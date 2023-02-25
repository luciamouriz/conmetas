
export const InputOnlyNumbers = ({ onChange }) => {


    //Solo numeros
    const handleInputNumbers = event => {
        const pattern = /^[0-9]+$/;
        const inputChar = String.fromCharCode(event.charCode);

        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }

    };



    const handleChange = event => {
        onChange(event.target.value)
    }

    return (
        <>
            <input className="input" type="text" onChange={handleChange} onKeyPress={handleInputNumbers}/>
        </>
    )
}
