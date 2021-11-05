
import './App.css';
import {useState} from 'react';

function App() {
  const [babyMonth, setBabyMonth] = useState(0)
  const [babyDay, setBabyDay] = useState(0)
  const [babyLBS, setBabyLBS] = useState(0)
  const [babyOZ, setBabyOZ] = useState(0)
  const [babyHeight, setBabyHeight] = useState(0)
  const [labor, setLabor] = useState(0)

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const guesses = [
    {
      name: "Eric T.",
      date: [11,3],
      weight: [7,8],
      height: 20,
      labor: 3
    },
    {
      name: "Elsa",
      date: [11,18],
      weight: [7,4],
      height: 18,
      labor: 10
    },
    {
      name: "Ryan F.",
      date: [11,6],
      weight: [8,9],
      height: 22,
      labor: 4
    },
    {
      name: "Emily MacCormack",
      date: [11,11],
      weight: [7,8],
      height: 19,
      labor: 8
    },
    {
      name: "Brigid",
      date: [10,31],
      weight: [7,4],
      height: 18,
      labor: 1
    },
    {
      name: "Emily Rackleff",
      date: [11,4],
      weight: [8,1],
      height: 19,
      labor: 3
    },
    {
      name: "Auntie Lorri",
      date: [11,13],
      weight: [9,6],
      height: 21,
      labor: 7.5
    },
    {
      name: "Kim Sullivan",
      date: [11,10],
      weight: [8,13],
      height: 21.75,
      labor: 12
    },
    {
      name: "Janet",
      date: [11,11],
      weight: [9,0],
      height: 21,
      labor: 22
    },
    {
      name: "Linda Golia",
      date: [11,6],
      weight: [8,3],
      height: 20,
      labor: 16
    },
    {
      name: "Auntie Val",
      date: [11,11],
      weight: [8,6],
      height: 20,
      labor: 5.5
    },
    {
      name: "Jessica",
      date: [11,9],
      weight: [8,2],
      height: 21.5,
      labor: 17
    },
    {
      name: "Auntie Juju",
      date: [11,7],
      weight: [8,2],
      height: 21,
      labor: 8.5
    },
    {
      name: "Katie Sullivan",
      date: [11,8],
      weight: [8,10],
      height: 20,
      labor: 15
    },
    {
      name: "Kendra Engel",
      date: [11,10],
      weight: [7,12],
      height: 19,
      labor: 12
    },
    {
      name: "Katie Murphy",
      date: [11,11],
      weight: [8,12],
      height: 22,
      labor: 21
    },
    {
      name: "Elise",
      date: [11,11],
      weight: [8,7],
      height: 21,
      labor: 19
    },
    {
      name: "Molly Kenney",
      date: [11,2],
      weight: [6,15],
      height: 21,
      labor: 3.25
    },
    {
      name: "Allison Bourassa",
      date: [11,7],
      weight: [7,2],
      height: 18,
      labor: 11
    },
    {
      name: "Great Nana Mac",
      date: [11,11],
      weight: [8,3],
      height: 21,
      labor: 10
    },
    {
      name: "Catherine Band",
      date: [11,10],
      weight: [7,7],
      height: 21,
      labor: 40
    },
    {
      name: "Auntie Sarah",
      date: [11,9],
      weight: [10,2],
      height: 19,
      labor: 16
    }
  ]

  let sampleBabyStats = {
    date: [babyMonth, babyDay],
    weight: [babyLBS, babyOZ],
    height: babyHeight,
    labor: labor
  }

  const rateGuesses = (babyStats, guessesArray) => {
    // const difference = (a,b) => {
    //   return Math.abs(a-b)
    // }
    guessesArray.forEach((guess) => {
      let rating = 0;
      let dateDifference;
      let weightDifference;
      let heightDifference;
      let laborDifference;

      if (guess.date[0] === 10) {
        dateDifference = 31 - guess.date[1] + babyStats.date[1]
      } else {
        dateDifference = Math.abs(babyStats.date[1] - guess.date[1])
      }
      weightDifference = Math.abs((babyStats.weight[0]*16 + babyStats.weight[1]) - (guess.weight[0]*16 + guess.weight[1]))
      heightDifference = Math.abs(babyStats.height - guess.height);
      laborDifference = Math.abs(babyStats.labor - guess.labor)
      rating = (dateDifference*100) + weightDifference + heightDifference + (laborDifference*.5);
      // console.log(guess.name + ': ' + rating);
      guess.rating = rating;
      // console.log(guess);
    })
  }

  rateGuesses(sampleBabyStats, guesses);
  guesses.sort((a,b) => {
    return a.rating -b.rating;
  });
  console.log(guesses);
  
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('baby stats submitted');
    console.log(sampleBabyStats)
    console.log(guesses);
    console.log(typeof babyMonth)
  }



  return (
    <div>
      <div id='form-holder'>
        <form id='baby-golia-official-stats' onSubmit={handleSubmit}>
          <h3>birth date: </h3>
          <input type='text' placeholder='month' onChange={(ev) => setBabyMonth(Number(ev.target.value))}/>
          <input type='text' placeholder='day' onChange={(ev) => setBabyDay(Number(ev.target.value))}/>
          <h3>weight: </h3>
          <input type='text' placeholder='lbs.' onChange={(ev) => setBabyLBS(Number(ev.target.value))}/>
          <input type='text' placeholder='ounces' onChange={(ev) => setBabyOZ(Number(ev.target.value))}/>
          <h3>height: </h3>
          <input type='text' placeholder='inches' onChange={(ev) => setBabyHeight(Number(ev.target.value))}/>        
          <h3>labor: </h3>
          <input type='text' placeholder='hours' onChange={(ev) => setLabor(ev.target.value)}/>
          <br/>
          <br/>
          <br/>
          {/* <input type='submit' /> */}
        </form>
      </div>
      <div id='cards-holder'>
        { guesses.map((guess) => {
          return (
            <div className='guess-card'>
            <h1>{guess.name}</h1>
            <span className='inline-stat'>
            <b>birth date: </b><h2> {months[guess.date[0]-1]} {guess.date[1]}</h2>
            </span>
            <span className='inline-stat'>
            <b>birth weight: </b><h2> {guess.weight[0]} lbs. {guess.weight[1]} oz</h2>
            </span>
            <span className='inline-stat'>
            <b>birth height: </b><h2> {guess.height} inches</h2>
            </span>
            <span className='inline-stat'>
            <b>time in labor: </b><h2> {guess.labor} hours</h2>
            </span>
          </div>
          )
        })

        }
      </div>
    </div>

    
  );
}

export default App;
