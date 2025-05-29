import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import HomePage from "./pages/Home"; 


const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return <>
  {showSplash ? <SplashScreen /> : <HomePage />}
  
  </>;

};

export default App;

