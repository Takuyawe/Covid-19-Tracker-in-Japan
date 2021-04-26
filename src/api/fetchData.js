import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api/countries/Japan/confirmed'

export const fetchData = async () => {
    try {
        const {data} = await axios.get(URL)

        const filteredData = data.map(d => {
            return {
                provinceState: d.provinceState,
                active: d.active,
                confirmed: d.confirmed,
                recovered: d.recovered,
                deaths: d.deaths
            }
        })
        return filteredData
    } catch (error) {
        return error.message
    }
    
}