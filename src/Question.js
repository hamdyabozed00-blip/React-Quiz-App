import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import CircularProgress from '@mui/material/CircularProgress';
import {CircularProgressProps} from '@mui/material/CircularProgress'
import Final from './Final';
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios'








export default function Question({handlestate ,handletotalresult}) {



  // api request 


 const [questions , setQuestions] = useState([])
 const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect( () => {
  const source = axios.CancelToken.source();

    axios
      .get("https://opentdb.com/api.php?amount=3&category=18&difficulty=medium", {
        cancelToken: source.token,
      })
      .then((response) => {
        const formattedQuestions = response.data.results.map((item) => {
          const allChoices = [...item.incorrect_answers, item.correct_answer].sort(
            () => Math.random() - 0.5
          );

          return {
            question: item.question,
            correctanswer: item.correct_answer,
            chooses: allChoices,
          };
        });

        setQuestions(formattedQuestions);
        setLoading(false);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          console.error(err);
          setError("فشل تحميل الأسئلة");
          setLoading(false);
        }
      });

    return () => {
      source.cancel("Component unmounted");
    };
  }, []);









  

  const[ resultQuiz , setresultQuiz] =useState(() => {
    const savedscore = localStorage.getItem('quizscore');
  return savedscore !== null ?{number: parseInt(savedscore, 10)}:{number:0} ;
  });
  useEffect( () => {
    localStorage.setItem("quizscore" ,resultQuiz.number)
  },[resultQuiz.number])

  const [progress, setProgress] = React.useState(0);




 
// refresh

const [currentindex, setcurrentindex] = React.useState(() => {
  const savedIndex = localStorage.getItem('quizIndex');
  return savedIndex !== null ? parseInt(savedIndex, 10) : 0;
});

const [isclicked, setisclicked] = React.useState(() => {
  return localStorage.getItem('quizAnswer') || null;
});

const [istrue, setistrue] = React.useState(() => {
  return localStorage.getItem('quizIsTrue') || null;
});




// timer

  React.useEffect(() => {

   
    if(loading == false){
       setProgress(0)
      const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 15) {
   clearInterval(timer)
   return 15 ;
          }
        return prev + 1;
      });
    }, 1000);

    return () => {
      
      clearInterval(timer);
    };
    }

    
  }, [currentindex , loading]);

//==========================




const currentQuestion = questions[currentindex];
const correct = currentQuestion?.correctanswer;


 

// handle choose 
const [next , setnext] = useState(false)
function handleclickchoose(value) {
  if(progress >= 15 ) {
    return;
  }

   setisclicked(value)
   setnext(true)
   localStorage.setItem("quizAnswer" , value)

if(value == correct) {
      // setresultQuiz({...resultQuiz ,number:resultQuiz.number + 1})
      setistrue(value)
      localStorage.setItem("quizIsTrue" , value)


}else {
    setistrue(null)
    localStorage.removeItem("quizIsTrue" )
}




}

function handlecurrentindex() {
  if (istrue == correct) {
    setresultQuiz({...resultQuiz, number: resultQuiz.number + 1});
  }
  
  if (currentindex < questions.length - 1) {
    setcurrentindex(e => e + 1)
    localStorage.setItem('quizIndex', currentindex + 1); 
    
    setisclicked(null);
    setistrue(null);
    localStorage.removeItem('quizAnswer');
    localStorage.removeItem('quizIsTrue');
    
    setProgress(0);
    setnext(false)
  } else {
    handleQuestion(); 
     


  }
}


 

 









function handleQuestion() {
  let finalscore = resultQuiz.number;
  if(istrue == correct) {
    finalscore += 1;
  }
  
  handletotalresult({ score: finalscore, total: questions.length });
  handlestate("final");
}













if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error || questions.length === 0) {
    return (
      <Typography color="error" align="center" sx={{ mt: 10 }}>
        {error || "مفيش أسئلة"}
      </Typography>
    );
  }

  return (
     <>

      <Card style={{
       width:'100%' ,
       maxWidth:'500px', 
       margin:"auto" ,
       borderRadius:'20px',
       boxShadow:"0 0 10px black",
       backgroundColor:"#283444",
       padding:'20px',
       boxSizing:'border-box'
       
       }}>
      <CardContent>
        <div style={{
           display:'flex',
           justifyContent:'space-between',
           gap:'20px'
        }}>
            <div style={{width:"100%"}}>
            {/* range */}
      
            <Slider
            key={currentindex}
            value={currentindex + 1} aria-label="Default" valueLabelDisplay="off"
           
            sx={{
                
                '& .MuiSlider-thumb': {
                display: 'none', // بيخفي الدائرة تماماً
              },
              
            }}
             min={0}
             max={questions.length} 
             
            />

             <Typography gutterBottom sx={{  fontSize: 20 , textAlign:'left' , color:'white'}}>
                Question {currentindex + 1} of {questions.length}
            </Typography>
            </div>

            {/* timer */}
          
              
             <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
  <CircularProgress
    variant="determinate" 
    value={(progress / 15) * 100} // 
    size={80}
    thickness={3}
    key={currentindex}
    duration ={15}
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
    <Typography variant="caption" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
      {progress}
    </Typography>
  </Box>
</Box>
      


        </div>
         <Typography variant="h4" component="div" style={{
        textAlign:'left',
        color:"white",
        margin:"15px 0 20px 0",
        
      }}>
        
       {currentQuestion.question}
       {/* dangerouslySetInnerHTML={{ __html: currentQuestion.question }} */}
      </Typography>
      {currentQuestion.chooses.map((chooseoption, index) => {
  const isselect = isclicked === chooseoption;
  const iscorrect = chooseoption === correct;
  const timer = progress >= 15; 

  let backgroundColor = "#516981";

    if(next){
       if (iscorrect) {
      backgroundColor = "green";       
    } else if(isselect) {
      backgroundColor = "red";        
    }
    }
   
  

  return (
    <Card
      key={index}
      className={`cardchoose ${isselect ? "active" : ""}`}
      style={{
        backgroundColor,
        padding: "20px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        borderRadius: "15px",
        color: "white",
        transition: "all .5s ease",
        cursor: progress >= 15 || isclicked ? "default" : "pointer",
      }}
      onClick={() => handleclickchoose(chooseoption)}
    >
      <Typography style={{ fontSize: "18px", fontFamily: "sans-serif" }}>
        <span dangerouslySetInnerHTML={{ __html: chooseoption }} />
      </Typography>
    </Card>
  );
})} 
     
   
      
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>

      </Typography>
      <Typography variant="body2">
       
      </Typography>
    </CardContent>
    <CardActions>
    
    </CardActions>
    <div >
     
          <Button variant='contained' style={{margin:'10px', backgroundColor:!next ? "#94a3b8": "" , color : !next? "#cbd5e1": ""}} onClick={() => {
            handlecurrentindex()
          }}  disabled={currentindex >= questions.length - 1 || !next || progress>=15 }>Next</Button>
          <Button variant='contained' disabled={currentindex < questions.length - 1} style={{margin:'10px', 
          backgroundColor:currentindex < questions.length - 1 ? "#94a3b8": "" ,
           color : currentindex < questions.length - 1? "#cbd5e1": ""}}
           onClick={() => {
            console.log( resultQuiz.number) ;
            handleQuestion()

          }}>Submit</Button>


      </div>
      </Card>
    
     </>
    
  );
}



