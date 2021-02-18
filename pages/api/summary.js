import axios from 'axios'

const endpointUrl = 'https://api.covid19api.com/summary'

export default async function handler(req, res) {
  try {
    const response = await axios.get(endpointUrl)

    let countries
    if (response?.data['Countries']) {
      countries = response.data['Countries'].map(country => {
        return {
          name: country['Country'],
          slug: country['Slug'],
          total_confirmed: country['TotalConfirmed'],
          total_deaths: country['TotalDeaths'],
          total_recovered: country['TotalRecovered'],
        }
      })
    } else {
      countries = []
    }

    res.status(200).json({status: 'ok', results: { countries }})
  }
  catch (error) {
    res.status(404).json({status: 'error', error: `Error de comunicación con API remota (${error})`})
  }

}
