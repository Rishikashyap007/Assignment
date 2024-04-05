// import './App.css'
import Card from './Components/LearningCards/Cards'
import CourseCard from './Components/CourseCard/CourseCard'
import Navbar from './Components/Navbar/Navbar'
import Streak from './Components/Streak/Streak'
import RecCard from './Components/RecommendedCard section/Rec-Card'
import FeaturedCard from './Components/FeaturedLearningSection/FeaturedCard'

function App() {

  return (
   <>
       <Navbar />
       <Streak/>
       <CourseCard />
       <Card />
       <RecCard/>
       <FeaturedCard />
   </>
  )
}

export default App
