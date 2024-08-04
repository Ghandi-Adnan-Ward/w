/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



function InfoBox({info}) {

    

    let COLD_URL= "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL= "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL= "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  return (
    <div className='card'>
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 70 ? RAIN_URL : info.temp > 10 ? HOT_URL  : COLD_URL  }
        title="green iguana"
      />
      <CardContent style={{Width:"500rem"}}>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>weather : {info.weather}</p>
        <p>Temperature : {info.temp}&deg;C</p> 
        <p>tempMin: {info.tempMin}&deg;C</p>
        <p>tempMax: {info.tempMax}&deg;c</p>
        <p>Humidity : {info.humidity}</p>
        <p>feels_like : {info.feelsLike}&deg;C</p>
        

        </Typography>
       
       
      </CardContent>
    </Card>
    </div>
  )
}

export default InfoBox