import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import HomePage from "./pages/Home"; 



const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return( 
  <>
  <div className="min-h-screen w-full overflow-x-hidden bg-white">
  {showSplash ? <SplashScreen /> : <HomePage />}
  </div>
  
  </>
  );

};

export default App;

