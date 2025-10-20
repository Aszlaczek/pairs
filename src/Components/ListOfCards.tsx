import { Grid } from '@mui/material'
import OneCard from './OneCard'
import { Data } from '../App'
const ListOfCards = (props: { data: Data[] }) => {
    return (
        <Grid container spacing={2} >
            {props.data.map((e, id) => {
                return (
                    <Grid item key={id} xs={6} sm={4} md={3} lg={3}>
                        <OneCard name={e.name} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ListOfCards