import moment from 'moment'
import { DataGrid } from '@material-ui/data-grid'

import useSWR from 'swr'
import fetcher from '../src/fetcher'


export default function CountryTable(props) {
  const { data, error } = useSWR(`/api/country/${props.slug}`, fetcher)
  if (error) return <div>error al cargar</div>
  if (!data) return <div>cargando...</div>
  if (!data?.results?.records) return <div>sin datos</div>

  const columns = [
    { field: 'date', headerName: 'fecha', type: 'date', width: 250 },
    { field: 'active', headerName: 'activos', type: 'number', width: 200 },
    { field: 'confirmed', headerName: 'confirmados', type: 'number', width: 200 },
    { field: 'deaths', headerName: 'muertes', type: 'number', width: 200 },
    { field: 'recovered', headerName: 'recuperados', type: 'number', width: 200 },
  ]
  const rows = data.results.records.reverse().map(record => {
    return {
      id: record.id,
      date: moment(record.date).format('LL'),
      active: record.active,
      confirmed: record.confirmed,
      deaths: record.deaths,
      recovered: record.recovered,
    }
  })
  return (
    <>
      <h1>{data.results.name}</h1>
      <div style={{ height: 650, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} />
      </div>
    </>
  )
}
