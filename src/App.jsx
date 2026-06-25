import React, { useState, Suspense ,createContext } from "react";

import "./App.css";
import LikeDislike from "./components/LikeDislike";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import ProgressBar from "./components/ProgressBar";
import StarRating from "./components/StarRating";
import FileExplorer from "./components/FileExplorer";
import AnalogClock from "./components/AnalogClock";
import ImageCarousel from "./components/ImageCarousel";
import ConnectFourGames from "./components/ConnectFourGames";
import JSONCreater from "./components/JSONCreater";
import LightAndDark from "./components/LightAndDarkMode";
import NavigationBar from "./components/NavigationBar";
import Pagination from "./components/Pagination";
import Tictactoe from "./components/Tictactoe";
import CountdownWidget from "./components/CountdownWidgets";
import InfiniteScroll from "./components/InfiniteScroll";
import DynamicContentFiltering from "./components/DynamicContentFiltering";
import FetchDataFromAPi from "./components/FetchAPi";
import DragAndDrop from "./components/DragAndDrop";
import SocialMediaSharingButton from "./components/SocialMediaSharingButton";
import LazyLoadImage from "./components/LazyLoadImage";
import Autocomplete from "./components/AutocompleteSearch";
import LightBox from "./components/LightBox";
import ChatApplication from "./components/Chatapplication";
import Events from "./components/Events";
import SnakeAndLadder from "./components/SnakeAndLadder";
import InfiniteScrollWithIntersection from "./components/InfiniteScrollInterSection";
const LazyLoad = React.lazy(() => import("./components/LazyLoad"));
import ThemeComponent from "./components/ThemeUpdateWithContex";
export const ThemeContext=createContext()
// import ErrorBoundaries from "./components/ErrorBoundries";
import ParkingLot from "./components/ParkingLot";
import VirtualizationInInfiniteScroll from "./components/InfiniteScrollWithVirtualization";
import FormHandling from "./components/FromHandling";
import TypeAhead from "./components/TypeAhead";

function App() {
  const [progress, setProgress] = useState(0);
  const [theme,setTheme]=useState("dark")

const toggle=()=>{
  console.log("Theme",theme)
  setTheme((prev)=>{if(prev=="dark")return "light"
  else{return "dark"}
})}

  return (
    <>
      {/* <LazyLoadImage src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800"/> */}

      {/* <Events/> */}
   
      {/* <Suspense fallback={<div>Loading_______</div>}>
        <LazyLoad />
      </Suspense> */}
      {/* <ThemeContext.Provider value={{theme,toggle}}>
      <ThemeComponent />
        </ThemeContext.Provider> */}
        {/**!Instead of combaning whole app in the Error Boundaries ,please seprate the component which are more prone to error
         * So other component will keeps working only Error will show the fallback for error
         */}
       {/* <ErrorBoundaries> <InfiniteScrollWithIntersection/></ErrorBoundaries> */}

      {/* <FormHandling fields={["email","password","submitbutton"]}/> */}
 <TypeAhead/>
    </>
  );
}

export default App;
