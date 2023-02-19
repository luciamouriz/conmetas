import axios from 'axios';

export const ButtonAccept = () => {

    const createNode = () => {
        const baseUrl = 'http://localhost:8080/install-dir/web';
        const restPath = '/jsonapi/node/objetivo_a_corto_plazo';
        const username = 'lucia';
        const password = 'conmetas';

        const config = {
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            },
            auth: {
                username: username,
                password: password
            }
        };

        const data = {
            data: {
                type: 'node--objetivo_a_corto_plazo',
                attributes: {
                    title: "PRUEBA REACT 1",
                    field_descripcion: "prueba desde react",
                    field_fecha: "2023-02-17",
                    field_hora: "12:00",
                    field_radio: "2"
                }
            }
        };


        return axios.post(baseUrl + restPath, data, config);
    }

    return (
        <>
            <button onClick={createNode} className="button-accept">Aceptar</button>
        </>
    )
}
