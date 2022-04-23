import Showcase from '../Components/HomeComps/Showcase'
import SubShowcase from '../Components/HomeComps/SubShowcase';
import '../styles/home.css';

export default function Home() {
  return (
    <div className='w-full h-fit'>
        <Showcase/>
        <SubShowcase/>
    </div>
  )
}
