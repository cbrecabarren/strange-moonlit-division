import axios from 'axios'

const endpointUrl = 'https://api.covid19api.com/country/:slug'

export default async function handler(req, res) {
  const {
    query: { pid },
  } = req

  const url = endpointUrl.replace(':slug', pid)

  try {
    const response = await axios.get(url)

    let name, records
    const slug = pid
    if (response.data) {
      records = response.data.map(record => {

        if (!name) name = record['Country']
        return {
          id: record['ID'],
          active: record['Active'],
          confirmed: record['Confirmed'],
          deaths: record['Deaths'],
          recovered: record['Recovered'],
          date: record['Date'],
        }
      })
    } else {
      records = []
    }

    res.status(200).json({status: 'ok', results: { name, slug, records }})
  }
  catch (error) {
    res.status(404).json({status: 'error', error: `Error de comunicación con API remota (${error})`})
  }

}
