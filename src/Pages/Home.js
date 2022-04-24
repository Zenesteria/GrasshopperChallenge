import Showcase from '../Components/HomeComps/Showcase'
import Stories from '../Components/HomeComps/Stories';
import SubShowcase from '../Components/HomeComps/SubShowcase';
import '../styles/home.css';

// React Slick Slideshow
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className='w-full h-fit'>
        <Showcase/>
        <SubShowcase/>
        <Stories/>
    </div>
  )
}
