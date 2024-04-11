import './App.css';
import React,{useState} from 'react';
function App() {

  let[weight,Setweight] = useState(0)
  let[height,Setheight] = useState(0)
  let[bmi,setbmi] = useState('')
  let[msg,Setmsg] = useState('')

  let calc = (e) => {
    
    e.preventDefault();
    if(weight == 0 || height ==0)
    {
      alert("Please Enter Valid Values.")
    }
    else
    {
      let bmi = (weight/(height*height))
      setbmi(bmi.toFixed(1));
      if(bmi<=22)
      {
        Setmsg('You are underweight')
      }
      else if(bmi>=22 && bmi <28)
      {
         Setmsg('You have a healthy weight')
      }
      else{
        Setmsg('You are overweight')
      }


    }
  }

  let reload = () =>
  {
    window.location.reload()
  }


  return (
    <div className="App">
      <div className="container">
          <h1>BMI Calculator</h1>
          <form onSubmit={calc} >
            <div>
            <label>Weight (Kg)</label>
            <input type="text"  placeholder='Enter weight value' value={weight} onChange={(e)=> Setweight(e.target.value)} />
            </div>
            <div>
            <label>Height (M)</label>
            <input type="text"  placeholder='Enter height value' value={height} onChange={(e)=> Setheight(e.target.value)} />
            </div>
            <div>
            <button className='btn' type='submit'>Calculate</button>
            <button className='btn' onClick={reload} type='submit'>Reload</button>
            </div>

            <div className='center'>
              <h3>Your BMI is : {bmi}</h3>
              <p>{msg}</p>
            </div>
            
            
          </form>
        </div>
    </div>
  );
}

export default App;
