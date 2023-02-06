import './App.css';
import "./styles.css";
import HeatMap from 'react-heatmap-grid';


const input = [{
  day: 0,
  slot: 0,
  avg_turnover: 990
  },
  {
  day: 0,
  slot: 1,
  avg_turnover: 142
  },
  {
  day: 0,
  slot: 2,
  avg_turnover: 245
  },
  {
  day: 0,
  slot: 3,
  avg_turnover: 1232
  },
  {
  day: 0,
  slot: 4,
  avg_turnover: 134
  },
  {
  day: 0,
  slot: 5,
  avg_turnover: 125
  },
  {
  day: 0,
  slot: 6,
  avg_turnover: 125
  },
  {
  day: 0,
  slot: 7,
  avg_turnover: 135
  },
  {
  day: 0,
  slot: 8,
  avg_turnover: 435
  },
  {
  day: 0,
  slot: 9,
  avg_turnover: 192
  },
  {
  day: 0,
  slot: 10,
  avg_turnover: 40
  },
  {
  day: 0,
  slot: 11,
  avg_turnover: 0
  },
  {
  day: 0,
  slot: 12,
  avg_turnover: 500
  },
  {
  day: 0,
  slot: 13,
  avg_turnover: 234
  },
  {
  day: 0,
  slot: 14,
  avg_turnover: 234
  },
  {
    day: 0,
    slot: 15,
    avg_turnover: 523
  },
  {
    day: 0,
    slot: 16,
    avg_turnover: 34
  },
  {
    day: 0,
    slot: 17,
    avg_turnover: 0
  },
  {
    day: 0,
    slot: 18,
    avg_turnover: 10
  },
  {
    day: 0,
    slot: 19,
    avg_turnover: 1000
  },
  {
  day: 0,
  slot: 20,
  avg_turnover: 452
  },
  {
  day: 0,
  slot: 21,
  avg_turnover: 452
  },
  {
  day: 0,
  slot: 22,
  avg_turnover: 0
  },
  {
  day: 0,
  slot: 23,
  avg_turnover: 125
  },
  {
  day: 1,
  slot: 0,
  avg_turnover: 534
  },
  {
  day: 1,
  slot: 1,
  avg_turnover: 124
  },
  {
  day: 1,
  slot: 2,
  avg_turnover: 423
  },
  {
  day: 1,
  slot: 3,
  avg_turnover: 213
  },
  {
  day: 1,
  slot: 4,
  avg_turnover: 0
  },
  {
  day: 1,
  slot: 5,
  avg_turnover: 42
  },
  {
  day: 1,
  slot: 6,
  avg_turnover: 1231
  },
  {
  day: 1,
  slot: 7,
  avg_turnover: 231
  },
  {
  day: 1,
  slot: 8,
  avg_turnover: 31
  },
  {
  day: 1,
  slot: 9,
  avg_turnover: 543
  },
  {
  day: 1,
  slot: 10,
  avg_turnover: 2321
  },
  {
  day: 1,
  slot: 11,
  avg_turnover: 32
  },
  {
  day: 1,
  slot: 12,
  avg_turnover: 231
  },
  {
  day: 1,
  slot: 13,
  avg_turnover: 2341
  },
  {
  day: 1,
  slot: 14,
  avg_turnover: 61
  },
  {
  day: 1,
  slot: 15,
  avg_turnover: 341
  },
  {
  day: 1,
  slot: 16,
  avg_turnover: 0
  },
  {
  day: 1,
  slot: 17,
  avg_turnover: 1342
  },
  {
  day: 1,
  slot: 18,
  avg_turnover: 23
  },
  {
  day: 1,
  slot: 19,
  avg_turnover: 798
  },
  {
  day: 1,
  slot: 20,
  avg_turnover: 31
  },
  {
  day: 1,
  slot: 21,
  avg_turnover: 87
  },
  {
  day: 1,
  slot: 22,
  avg_turnover: 1354
  },
  {
  day: 1,
  slot: 23,
  avg_turnover: 186
  },
]


const xLabels = [ "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const yLabels = new Array(24).fill(0).map((_, i) => `${i>9? i: "0"+i }h - ${i+1>9? i+1: "0"+(i+1)}h`);

let dataa = new Array(24).fill(0).map(() => new Array(7).fill(0));

for (let value of input) {
  dataa[value.slot][value.day] = value.avg_turnover;
}




function App() {
  return (
  <HeatMap 
  xLabels={xLabels} 
  yLabels={yLabels} 
  yLabelTextAlign= {"left"}
  yLabelWidth= {80}
  data={dataa}
  //squares
  //onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
  cellStyle={(background, value, min, max, data, x, y) => 
    (
      (1 - (max - value) / (max - min) > 0.5)?
      {
        background: `rgba(244, 86, 66)`,
        fontSize: "20px",
        borderRadius: "5%",
        padding: "8px",
        marginRight: "5px",
        marginBottom: "3px"
      }:
      (1 - (max - value) / (max - min) > 0)?
      {
        background: `rgba(24, 214, 72)`,
        fontSize: "20px", 
        borderRadius: "5%",
        padding: "8px",
        marginRight: "5px",
        marginBottom: "3px"
      }:
      {
        background: `rgba(244, 244, 244)`,
        fontSize: "20px", 
        borderRadius: "5%",
        padding: "8px",
        marginRight: "5px",
        marginBottom: "3px"
      }
    )
    }
    />
    )}

export default App;
