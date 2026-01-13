import { useState } from "react";

import "./App.css";
import LikeDislike from "./components/LikeDislike";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import ProgressBar from "./components/ProgressBar";
import StarRating from "./components/StarRating";
import FileExplorer from "./components/FileExplorer";
import AnalogClock from './components/AnalogClock'
import ImageCarousel from './components/ImageCarousel'
import ConnectFourGames from "./components/ConnectFourGames";
import JSONCreater from './components/JSONCreater'
import LightAndDark from "./components/LightAndDarkMode";
import NavigationBar from "./components/NavigationBar";
import Pagination from './components/Pagination'
import Tictactoe from "./components/Tictactoe";
import CountdownWidget from './components/CountdownWidgets'

function App() {
  const [progress,setProgress]=useState(0)
  return (
    <> 
<CountdownWidget/>
    </>
  );
}

export default App;
