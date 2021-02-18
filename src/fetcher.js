import axios from 'axios'

export default async function fetcher(url) {
  console.log(url)
  const res = await axios.get(url)
  return res.data
}
