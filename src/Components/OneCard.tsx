import { Card, CardContent, Typography, CardActionArea } from "@mui/material"



const OneCard = (props: { name: string }) => {
    return (
        <Card sx={{ background: 'red' }}>
            <CardActionArea onClick={() => alert('clicked')} >
                <CardContent>
                    <Typography variant="h2" sx={{
                        color: 'black', fontSize: {
                            xs: 2
                        }
                    }} textAlign='center'>
                        {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default OneCard