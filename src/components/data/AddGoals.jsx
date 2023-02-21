import axios from 'axios';



export const AddGoals = (date, radio, hour, name) => {


    const baseUrl = 'http://localhost:8080/install-dir/web';
    const restPath = '/jsonapi/node/objetivo_a_corto_plazo';
    const username = 'lucia';
    const password = 'conmetas';
    let data = {};
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


    if (radio == "c") {
        console.log("Fecha: " + date + " Radio: " + radio + " Hora: " + hour + " Nombre: " + name)

        data = {
            data: {
                type: 'node--objetivo_a_corto_plazo',
                attributes: {
                    title: "PRUEBA REACT 4",
                    field_descripcion: name,
                    field_fecha: date,
                    field_hora: hour,
                    field_radio: radio
                }
            }
        };
    } else {

        data = {
            data: {
                type: 'node--objetivo_a_largo_plazo',
                attributes: {
                    title: "PRUEBA REACT 4",
                    field_descripcion: name,
                }
            }
        };
    }


    return axios.post(baseUrl + restPath, data, config).then(response => {
        window.location.reload();
      });

}
