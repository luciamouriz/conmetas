import axios from 'axios';



export const AddGoals = async (date, radio, hour, name, idLTG) => {


    const baseUrl = 'http://localhost:8080/install-dir/web';
    const restPath = '/jsonapi/node/short_term_goals';
    const restPath2 = '/jsonapi/node/long_term_goals';
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
        console.log("Fecha: " + date + " Radio: " + radio + " Hora: " + hour.hour1 + " Nombre: " + name + " ID: " + idLTG)

        data = {
            data: {
                type: 'node--short_term_goals',
                attributes: {
                    title: date,
                    field_description: name,
                    field_date: date,
                    field_start_time: hour.hour1,
                    field_end_time: hour.hour2,
                    field_radio_value: radio,
                    field_id_long_goals: idLTG
                }
            }
        };


        return await axios.post(baseUrl + restPath, data, config)


    } else {
        //console.log("Fecha: " + date + " Radio: " + radio + " Hora: " + hour + " Nombre: " + name)
        data = {
            data: {
                type: 'node--long_term_goals',
                attributes: {
                    title: date,
                    field_date_long: date,
                    field_description_long: name,
                }
            }
        };

        return await axios.post(baseUrl + restPath2, data, config)
    }




}
