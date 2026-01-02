import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

export const Featured = () => {
  return (
    <div>
      <div>
      <h1 className="text-center mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Featured</span>.</h1>
      </div>
      <div className="text-left mx-40">    
        <img className="rounded-full shadow-xl float-on-hover" src={image1} alt="Post 1" />        
      </div>
      <div className="mx-40 py-4">
        <img className="rounded-full shadow-xl float-on-hover" src={image2} alt="Post 2" />        
      </div>
      <div className="text-left mx-40">    
        <img className="rounded-full shadow-xl float-on-hover" src={image3} alt="Post 3" />        
      </div>
    </div>
  )
}
