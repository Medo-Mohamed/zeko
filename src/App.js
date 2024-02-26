import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [arrCont, setArrCont] = useState([]);

  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      const randomMostOF = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;

      const choseNUM = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      let EgyNum;
      if (choseNUM === 0 || choseNUM === 4 || choseNUM === 8) {
        EgyNum = `010`;
      } else if (choseNUM === 1 || choseNUM === 5 || choseNUM === 9) {
        EgyNum = `011`;
      } else if (choseNUM === 2 || choseNUM === 6) {
        EgyNum = `012`;
      } else if (choseNUM === 3 || choseNUM === 7) {
        EgyNum = `015`;
      }
      const trueNUM = `${EgyNum}${randomMostOF}`
      const objNum = { id: i, num: trueNUM };
      newArray.push(objNum);
    }
    setArrCont(newArray)
  }, []);


  const copyDelet = (id) => {

    const li = document.getElementById(`li${id}`);
    if (li) {
      const text = li.textContent;
      navigator.clipboard.writeText(text);
      // div.remove();
    }
    let newALL = [...arrCont] ;
    let index = newALL.findIndex(ele => ele.id == id)
    console.log(index)
    newALL.splice(index ,1)
    setArrCont(newALL)

    
  }

  

  

  return (
    <div className="App">
      <header className="App-header">
      <ul>
        {
          arrCont.map(ele => {
            return <li id={`li${ele.id}`} onClick={()=> copyDelet(ele.id)}>{ele.num}</li>
          })
        }
      </ul>

      <button onClick={()=> window.location.reload()} className='reload'>Rest / More</button>
      </header>
    </div>
  );
}

export default App;
