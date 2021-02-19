import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

import CountryTable from '../../components/country_table'



export async function getServerSideProps(context) {
  const { pid } = context.query
  return {
    props: { pid },
  }
}


export default function Country(props) {
  return (
    <>
      <Head>
        <title>País: {props.pid}</title>
      </Head>
      <Container maxWidth="xl">
        <CountryTable slug={props.pid} />
        <Link href="/">&larr; volver</Link>
      </Container>
    </>
  );
}
