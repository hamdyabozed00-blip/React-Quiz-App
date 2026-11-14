import logo from './logo.svg';
import './App.css';
import Start from './Start';
import Question from './Question';
import Final from './Final'
import { useState , useEffect} from 'react';

function App() {










 const [state , setstate] = useState(() => {
  return localStorage.getItem('appstate') || "";
 })
 const [result , setresult] = useState(() => {
  const saveresult = localStorage.getItem("appresult")
  return saveresult ? JSON.parse(saveresult) : {score: 0 , total : 0} ;
 })


  useEffect(() => {
    if (state) {
      localStorage.setItem('appState', state);
    } else {
      localStorage.removeItem('appState');
    }
  }, [state]);

  useEffect(() => {
    localStorage.setItem('appResult', JSON.stringify(result));
  }, [result]);


  return (
    <div className="App">
      {/* container */}
      <div style={{
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        minHeight:'100vh',
        padding:'16px',
        boxSizing:'border-box'
       
      }}>
     
       {state == "" ? <Start handlestate = {setstate}/>: ""}
       {state == "play" ? <Question handlestate = {setstate} handletotalresult = {setresult} key={localStorage.getItem("quizIndex") || 0}/>: ""}
       {state == "final" ? <Final handlestate = {setstate} score={result.score} totalresult ={result.total}/>: ""}
        
       
       

      </div>
        {/*== container== */}
  
    </div>
  );
}

export default App;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Slider from '@mui/material/Slider';
// import CircularProgress from '@mui/material/CircularProgress';
// import {CircularProgressProps} from '@mui/material/CircularProgress'
// import Final from './Final';
// import { useState } from 'react';
// import './App.css';
// import { useEffect } from 'react';
// import axios from 'axios'
















// export default function Question({handlestate ,handletotalresult}) {



//   // api request 


//   // question:"" ,
//   // length:null ,
//   // correctanswer:"", 
//   // choose :[]

//  const [Questions , setquestions] = useState([])
//   let cancelaxios = null ;
//   useEffect(() => {
//       axios.get("https://opentdb.com/api.php?amount=3&category=18&difficulty=medium", {
//     cancelToken: new axios.CancelToken((c) => {
//        cancelaxios = c;
//     })
//   })
//   .then((response) => {
//     // const results = response.data.results ; 
//     const formattedQuestions = response.data.results.map((item) => {
//   const allChoices = [...item.incorrect_answers, item.correct_answer]
//     .sort(() => Math.random() - 0.5);

//   return {
//     question: item.question,
//     correctanswer: item.correct_answer,
//     chooses: allChoices ,
//   };
// });

// setquestions(formattedQuestions);
//     // const question = results.question ;
//     // const length = results.length;
//     // const chooses = results.incorrect_answers;
//     // const correct = results.correct_answer;


//     console.log(formattedQuestions)
    
//   })
//   .catch((error) => {
//     console.error(error);
//   })
 


//   return () => {
//     console.log("cancel")
//   cancelaxios();
//   }
//   },[])









  
// //  const Questions = [
// //   {id :crypto.randomUUID() ,
// //   question:"What is the primiry purpose of the `use effect`hook in React 1?" ,
// //   chooses:[
// //     {choose:"hhhhhhhhhhh" , id:crypto.randomUUID(),letter:"A", },
// //     {choose:"hhhhhhhhhhhhhhh" , id:crypto.randomUUID(),letter:"B", },
// //     {choose:"hhhhhhhh" , id:crypto.randomUUID(),letter:"C", },
// //     {choose:"h" , id:crypto.randomUUID(),letter:"D", },
// //   ],  correctanswer:"h",

// // },
// //   {id :crypto.randomUUID() ,
// //   question:"What is the primiry purpose of the `use effect`hook in React 2?" ,
// //   chooses:[
// //     {choose:"hhhhhhhhhhhhh" , id:crypto.randomUUID(),letter:"A" },
// //     {choose:"hhhhhhhhh" , id:crypto.randomUUID(),letter:"B", },
// //     {choose:"hhhhhhhhhhhhhhhhh" , id:crypto.randomUUID(),letter:"C", },
// //     {choose:"hh" , id:crypto.randomUUID(),letter:"D", },
// //   ],  correctanswer:"hh",

// // },
// //   {id :crypto.randomUUID() ,
// //   question:"What is the primiry purpose of the `use effect`hook in React 3?" ,
// //   letter:"c",
// //   chooses:[
// //     {choose:"hhhhhhhhhhhh" , id:crypto.randomUUID(),letter:"A"},
// //     {choose:"hhhhhhhhhhhhhhh" , id:crypto.randomUUID(),letter:"B"},
// //     {choose:"hhhhhhhhhhh" , id:crypto.randomUUID(),letter:"C"},
// //     {choose:"hhh" , id:crypto.randomUUID(),letter:"D"},
// //   ],
// //   correctanswer:"hhh",

// // },
// // ]
//   const[ resultQuiz , setresultQuiz] =useState(() => {
//     const savedscore = localStorage.getItem('quizscore');
//   return savedscore !== null ?{number: parseInt(savedscore, 10)}:{number:0} ;
//   });
//   useEffect( () => {
//     localStorage.setItem("quizscore" ,resultQuiz.number)
//   },[resultQuiz.number])

//   const [progress, setProgress] = React.useState(0);




 
// // refresh

// const [currentindex, setcurrentindex] = React.useState(() => {
//   const savedIndex = localStorage.getItem('quizIndex');
//   return savedIndex !== null ? parseInt(savedIndex, 10) : 0;
// });

// const [isclicked, setisclicked] = React.useState(() => {
//   return localStorage.getItem('quizAnswer') || null;
// });

// const [istrue, setistrue] = React.useState(() => {
//   return localStorage.getItem('quizIsTrue') || null;
// });




// // timer

//   React.useEffect(() => {

//     setProgress(0)
//     const timer = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 15) {
//    clearInterval(timer)
//    return 15 ;
//           }
//         return prev + 1;
//       });
//     }, 1000);

//     return () => {
      
//       clearInterval(timer);
//     };
    
//   }, [currentindex]);

// //==========================



// //  const currentquestion = Questions[currentindex].question;
// //   const correct = Questions[currentindex].correctanswer;
//  const currentquestion = Questions.question;
//  const correct = Questions.correctanswer;



 

// // handle choose 

// function handleclickchoose(value) {
//   if(progress >= 15 || isclicked !== null) {
//     return;
//   }

//    setisclicked(value)
//    localStorage.setItem("quizAnswer" , value)

// if(value == correct) {
//       // setresultQuiz({...resultQuiz ,number:resultQuiz.number + 1})
//       setistrue(value)
//       localStorage.setItem("quizIsTrue" , value)


// }


// }
// // console.log(resultQuiz.number)
// // handle next 


// // function handlecurrentindex() {
// //   if(istrue == correct) {
// //    setresultQuiz({...resultQuiz ,number:resultQuiz.number + 1})

// //   }
// //   if(currentindex < Questions.length - 1){
// //       setcurrentindex(e => e + 1)
// //       setProgress(0)
// //       setistrue(null)
     
      
    

      

// //     }

// // }
// function handlecurrentindex() {
//   if (istrue == correct) {
//     setresultQuiz({...resultQuiz, number: resultQuiz.number + 1});
//   }
  
//   if (currentindex < Questions.length - 1) {
//     setcurrentindex(e => e + 1)
//     localStorage.setItem('quizIndex', currentindex + 1); 
    
//     setisclicked(null);
//     setistrue(null);
//     localStorage.removeItem('quizAnswer');
//     localStorage.removeItem('quizIsTrue');
    
//     setProgress(0);
//   } else {
//     handleQuestion(); 
//   }
// }


//  // check answer

// // Questions[currentindex].chooses





// // const option = Questions[currentindex].chooses.map((index , chooseoption) => {
// //    const isselect = isclicked === chooseoption
// //    const iscorrect = chooseoption === correct
// //    const timer = progress >= 15
// //    let backgroundColor = '#516981'
// //    if(timer) {
// //     if(iscorrect){
// //       backgroundColor = "green" ;
// //     }else if(isselect) {
// //       backgroundColor ="red"
// //     }
// //    }
// //       return (
// //         <>
     
// //           <Card key={index}  className ={`cardchoose ${isselect ? 'active':""}`}style={{
// //             backgroundColor,
// //             padding:"20px",
// //             marginBottom:'10px',
// //             display:'flex',
// //             alignItems:'center' ,
// //             borderRadius:'15px',
// //             color:'white',
// //             transition: 'all .5s ease' ,

            



// //         }} onClick={() => {
// //           handleclickchoose(chooseoption)
          
// //         }}>
            
            
// //             <Typography style={{
// //               fontSize:"20px",
// //               fontFamily:'sans-serif'
// //             }}>
// //               {chooseoption}
// //             </Typography>




// //         </Card>
// //         </>
// //       )
// //     }
// //   )

 









// function handleQuestion() {
//   let finalscore = resultQuiz.number;
//   if(istrue == correct) {
//     finalscore += 1;
//   }
  
//   handletotalresult({ score: finalscore, total: Questions.length });
//   handlestate("final");
// }









// // function handleQuestion() {
// //   let finalscore = resultQuiz.number;
// //   if(istrue == correct) {
// //   finalscore +=1 ;

// //   }
// // handletotalresult({score:resultQuiz.number , total:Questions.length})
// // handlestate("final" )

// // }




//   return (
//      <>

//       <Card style={{
//        width:'100%' ,
//        maxWidth:'500px', 
//        margin:"auto" ,
//        borderRadius:'20px',
//        boxShadow:"0 0 10px black",
//        backgroundColor:"#283444",
//        padding:'20px',
//        boxSizing:'border-box'
       
//        }}>
//       <CardContent>
//         <div style={{
//            display:'flex',
//            justifyContent:'space-between',
//            gap:'20px'
//         }}>
//             <div style={{width:"100%"}}>
//             {/* range */}
      
//             <Slider
//             key={currentindex}
//             value={currentindex + 1} aria-label="Default" valueLabelDisplay="off"
           
//             sx={{
                
//                 '& .MuiSlider-thumb': {
//                 display: 'none', // بيخفي الدائرة تماماً
//               },
              
//             }}
//              min={0}
//              max={Questions.length} 
             
//             />

//              <Typography gutterBottom sx={{  fontSize: 20 , textAlign:'left' , color:'white'}}>
//                 Question {currentindex + 1} of {Questions.length}
//             </Typography>
//             </div>

//             {/* timer */}
          
              
//              <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
//   <CircularProgress
//     variant="determinate" 
//     value={(progress / 15) * 100} // 
//     size={80}
//     thickness={3}
//     key={currentindex}
//     duration ={15}
//   />
  
 
//   <Box
//     sx={{
//       top: 0,
//       left: 0,
//       bottom: 0,
//       right: 0,
//       position: 'absolute',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     }}
//   >
//     <Typography variant="caption" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
//       {progress}
//     </Typography>
//   </Box>
// </Box>
//              {/* <CircularProgress
//       variant="determinate"
//       min={1}
//       max={15}
//       value={progress}
//       aria-label="Upload photos"
//     /> */}


//         </div>
//          <Typography variant="h4" component="div" style={{
//         textAlign:'left',
//         color:"white",
//         margin:"15px 0 20px 0",
        
//       }}>
        
//        {currentquestion.question}
//       </Typography> 
     
//       {Questions[currentindex].chooses.map((index , chooseoption) => {
//    const isselect = isclicked === chooseoption
//    const iscorrect = chooseoption === correct
//    const timer = progress >= 15
//    let backgroundColor = '#516981'
//    if(timer) {
//     if(iscorrect){
//       backgroundColor = "green" ;
//     }else if(isselect) {
//       backgroundColor ="red"
//     }
//    }
//       return (
//         <>
     
//           <Card key={index}  className ={`cardchoose ${isselect ? 'active':""}`}style={{
//             backgroundColor,
//             padding:"20px",
//             marginBottom:'10px',
//             display:'flex',
//             alignItems:'center' ,
//             borderRadius:'15px',
//             color:'white',
//             transition: 'all .5s ease' ,

            



//         }} onClick={() => {
//           handleclickchoose(chooseoption)
          
//         }}>
            
            
//             <Typography style={{
//               fontSize:"20px",
//               fontFamily:'sans-serif'
//             }}>
//               {chooseoption}
//             </Typography>




//         </Card>
//         </>
//       )
//     }
//   )}
      
//       <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>

//       </Typography>
//       <Typography variant="body2">
       
//       </Typography>
//     </CardContent>
//     <CardActions>
    
//     </CardActions>
//     <div >
     
//           <Button variant='contained' style={{margin:'10px'}} onClick={() => {
//             handlecurrentindex()
//           }}  disabled={currentindex >= Questions.length - 1 || progress <15}>Next</Button>
//           <Button variant='contained' disabled={currentindex < Questions.length - 1 || progress < 15} onClick={() => {
//             console.log( resultQuiz.number) ;
//             handleQuestion()

//           }}>Submit</Button>


//       </div>
//       </Card>
//       {/* <Final /> */}
//      </>
    
//   );
// }



// // import * as React from 'react';
// // import CircularProgress, {
// //   CircularProgressProps,
// // } from '@mui/material/CircularProgress';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';

// // function CircularProgressWithLabel(
// //   props: CircularProgressProps & { value: number },
// // ) {
// //   return (
// //     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
// //       <CircularProgress
// //         variant="determinate"
// //         aria-label="Upload photos"
// //         {...props}
// //       />
// //       <Box
// //         sx={{
// //           top: 0,
// //           left: 0,
// //           bottom: 0,
// //           right: 0,
// //           position: 'absolute',
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //         }}
// //       >
// //         <Typography
// //           variant="caption"
// //           component="div"
// //           sx={{ color: 'text.secondary' }}
// //         >{`${Math.round(props.value)}%`}</Typography>
// //       </Box>
// //     </Box>
// //   );
// // }

// // export default function CircularWithValueLabel() {
// //   const [progress, setProgress] = React.useState(10);

// //   React.useEffect(() => {
// //     const timer = setInterval(() => {
// //       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
// //     }, 800);
// //     return () => {
// //       clearInterval(timer);
// //     };
// //   }, []);

// //   return <CircularProgressWithLabel value={progress} />;
// // }