import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CircularProgress from '@mui/material/CircularProgress';





export default function Final({handlestate , score , totalresult}) {



function handlefinal() {

 localStorage.removeItem('appresult');
 localStorage.removeItem('quizscore');
  localStorage.removeItem('appstate');
  localStorage.removeItem('quizIndex');
  localStorage.removeItem('quizAnswer');
  localStorage.removeItem('quizIsTrue');
    handlestate("")


}
  return (
    <Card style={{
        display:'flex' , 
        alignItems:'center' , 
        justifyContent:'center',
        width:'290px' , 
        backgroundColor:"#283444",
        padding:'20px',
        margin:"200px 0 0 80px",
        borderRadius:'20px',
        boxShadow:"0 0 10px black",
        height:'300px'

        }}>
      <CardContent>
       
        <Typography variant="h5" component="div" style={{color:'white' , fontFamily:'sans-serif' , }}>
          Quiz complete
    
        </Typography>
                     
             <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'  ,margin:'20px' }}>
  <CircularProgress
    variant="determinate" 
    value={(15 / 15) * 100} // 
    size={80}
    thickness={3}
  />
  
 
  <Box
    sx={{
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography variant="caption" component="div" sx={{ color: 'white', fontWeight: 'bold' , fontSize:'20px' }}>
      {score} / {totalresult}
    </Typography>
  </Box>
</Box>
        <div>  
        <Typography sx={{  mb: 1.5 , color:"#95a4b5"  }}>
        create jop! keep learning
        </Typography>
        </div>
       <CardActions style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
        <Button variant="contained" onClick={() => {
          handlefinal()
        }}>try again / play again</Button>
       </CardActions>
       
      </CardContent>
      
    </Card>
  );
}