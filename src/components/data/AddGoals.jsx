import axios from 'axios';
export const AddGoals = (props) => {
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
                field_descripcion: props.name,
                field_fecha: "2023-02-17",
                field_hora: props.hour,
                field_radio: props.name
            }
        }
    };


    return axios.post(baseUrl + restPath, data, config);

}
