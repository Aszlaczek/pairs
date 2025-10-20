import ListOfCards from "./Components/ListOfCards"
import { Container, Grid, Typography } from '@mui/material'

const Data = [
  { name: 'jeden', value: 1 },
  { name: 'dwa', value: 2 },
  { name: 'trzy', value: 3 },
  { name: 'cztery', value: 4 },
  { name: 'cztery', value: 5 },
]

export type Data = {
  name: string,
  value: number
}

const App = () => {

  return (
    <Grid sx={{ gridRow: 2, background: 'blue' }}>
      <Grid item sm={12}>
        <Typography variant="h4" align="center">
          Play and have fun
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <ListOfCards data={Data} />
      </Grid>
    </Grid>
    // <MemoryGame />
  )
}

export default App