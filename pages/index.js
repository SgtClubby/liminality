import { useState } from "react";
import Background from "../components/Background";
import Button from "../components/Button";
export default function Home() {
  const [entered, setEntered] = useState(false)

  return (
  <> 
    {!entered ? (
       <div className="flex items-center justify-center h-screen">
        <Button setEntered={setEntered}/>
      </div>
    ) : (
        <Background />
    )}
  </>
  )
}