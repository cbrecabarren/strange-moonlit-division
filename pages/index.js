import React from 'react'
import Head from 'next/head'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import CountriesGrid from '../components/countries_grid'

import useSWR from 'swr'
import fetcher from '../src/fetcher'


export default function Index() {
  return (
    <>
      <Head>
        <title>Todos los países</title>
      </Head>
      <Container maxWidth="xl">
        <Box my={4}>
          <CountriesGrid />
        </Box>
      </Container>
    </>
  )
}
