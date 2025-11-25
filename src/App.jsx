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

function App() {
  const [progress,setProgress]=useState(0)
  return (
    <> 
<ImageCarousel/>
    </>
  );
}

export default App;
