import useSWR from 'swr'
import fetcher from '../src/fetcher'
import Grid from "@material-ui/core/Grid"
import CountryCard from './country_card'

export default function CountriesGrid() {
  const { data, error } = useSWR('/api/summary', fetcher)
  if (error) return <div>error al cargar</div>
  if (!data) return <div>cargando...</div>
  if (!data?.results) return <div>sin datos</div>

  return (
    <div>
      <h1>Todos los países</h1>
      <Grid container spacing={2}>
        {data.results['countries'].map(country => {
          return (
            <Grid item xl={3} key={country.slug}>
              <CountryCard
                name={country.name}
                slug={country.slug}
                total_confirmed={country.total_confirmed}
                total_deaths={country.total_deaths}
                total_recovered={country.total_recovered}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
