import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Question from './Question';





export default function Start({handlestate}) {


// change state to play 

function handlestart() {
  localStorage.removeItem('appresult');
   localStorage.removeItem('quizscore');
  localStorage.removeItem('appstate');
  localStorage.removeItem('quizIndex');
  localStorage.removeItem('quizAnswer');
  localStorage.removeItem('quizIsTrue');
  
localStorage.setItem('appstate' , 'play')

handlestate("play")

}


  return (
    <>
    <Card style={{
        display:'flex' , 
        flexDirection:'column',
        alignItems:'center' , 
        justifyContent:'center',
        width:'100%' , 
        maxWidth:'400px',
        backgroundColor:"#283444",
        padding:'24px',
        margin:"auto",
        borderRadius:'20px',
        boxShadow:"0 0 10px black",
        // height:'300px'
        boxSizing:'border-box'

        }}>
      <CardContent>
        <Typography gutterBottom sx={{  fontSize: 14 , color:"#95a4b5" }}>
        CodeQuiz
        </Typography>
        <Typography variant="h5" component="div" style={{color:'white' , fontFamily:'sans-serif' , }}>
           React &JS Knowladge Quiz 
        
        </Typography>
        <div>
            {/* icon */}
            <PsychologyIcon style={{fontSize:'80px' , color:'#95a4b5'}}/>
           {/*=== icon ===*/}
        <Typography sx={{  mb: 1.5 , color:"#95a4b5" }}>
         test your skills with five quick coding chellange
        </Typography>
        </div>
       <CardActions style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
        <Button variant="contained" onClick={() => {
          handlestart()
        }}>Start Quiz</Button>
       </CardActions>
       
      </CardContent>

      
      
    </Card>
    {/* <Question /> */}
    </>
  );
}