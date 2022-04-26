import '../styles/home.css';

// React Slick Slideshow
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import Showcase from '../Components/HomeComps/Showcase/Showcase'
// import Stories from '../Components/HomeComps/Stories';
// import SubShowcase from '../Components/HomeComps/SubShowcase';
import CodeBanner from '../Components/HomeComps/CodeBanner';
// import GooglePlay from '../Components/HomeComps/GooglePlay';


export default function Home() {
  return (
    <div className='w-full h-fit'>
        {/* <Showcase/> */}
        {/* <SubShowcase/> */}
        {/* <Stories/> */}
        <CodeBanner/>
        {/* <GooglePlay/> */}
    </div>
  )
}
