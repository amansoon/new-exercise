import { useState } from "react"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import Button from "./components/Button"
import JobCard from "./components/JobCard"
import JobList from "./components/JobList"
import CreateJob from './components/CreateJob'

function App() {
  const [isPopup, setIsPopup] = useState(false)
  
  return <div className="p-6">
    <Button type='primary' onClick={() => setIsPopup(true)} > Create a Job </Button>
    <br />
    {isPopup ? <CreateJob /> : <JobList />}
  </div>
}

export default App