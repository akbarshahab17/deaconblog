import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase/config";
import { PostCard } from "../components/PostCard";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";


export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const postsRef = useRef (collection(db, "posts"));

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef.current);
      setPosts(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }
    getPosts();
  }, [postsRef, toggle]);
 
  return (
    <div>
      <div className="text-center my-8">
      <h1 className="mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome to</span> Deacon Blog.</h1>
        <p className="mb-6 text-lg font-normal text-body lg:text-xl sm:px-16 xl:px-48">A space for insightful articles, fresh ideas, and practical knowledge. Here you'll find well-written posts covering a variety of topics, designed to inform, inspire, and add real value. Whether you're looking to learn something new or stay updated, this blog delivers clear, engaging content in a clean and easy-to-read format.</p>
        <Link to="#" className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-base px-5 py-3 focus:outline-none">Learn more</Link>
      </div>
      <div>
      <h1 className="text-center mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        <Link to="/featured">Featured</Link></span>.</h1>
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
      <div>
      <h1 className="text-center my-9 mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl"> Recent Blogs</h1>
      </div>
      <section>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
        ))}
      </section>
      <div className="mx-40 my-4">        
        <p className="mb-3 text-body first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-heading first-letter:me-3 first-letter:float-start">They used to believe that everything in life needed a clear plan and perfect timing, but experience taught her otherwise. Some days felt heavy, filled with doubts and unanswered questions, while others carried quiet moments of hope. Through it all, she kept moving forward, learning to adapt rather than resist change. Each setback became a lesson, shaping her patience and resilience. Over time, she discovered strength in consistency—showing up even when results weren’t immediate. Small habits, honest effort, and self-belief slowly transformed her mindset. She learned to appreciate progress instead of perfection, understanding that growth is rarely linear. In embracing both her struggles and successes, she realized that her journey was building a stronger, wiser version of herself, one step at a time.</p>
        <p className="font-bold text-right my-2">Author: Vanessa Hudgens</p>
      </div>
      <br />
      <div className="mx-40 my-4">
        <p className="mb-3 text-body first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-heading first-letter:me-3 first-letter:float-start">She learned that growth doesn’t always happen in loud moments or big achievements. Sometimes it comes quietly—through patience, small efforts, and choosing to keep going even when motivation fades. Life tested her in ways she didn’t expect, but each challenge taught her something valuable about herself. She began to trust the process, understanding that progress is not always visible right away. With time, resilience, and self-belief, she realized that becoming stronger is a journey, not a destination—and every step forward, no matter how small, truly matters.</p>
        <p className="font-bold text-right my-2">Author: Barry Allen</p>
      </div>
      <div className="mx-40 my-4">
        <p className="mb-3 text-body first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-heading first-letter:me-3 first-letter:float-start">He reached a point where she stopped rushing her life and started listening to it instead. The pressure to have everything figured out slowly faded, replaced by a deeper understanding of herself. Mistakes no longer felt like failures but reminders that she was learning. Every experience, good or bad, added a new layer to her perspective. He learned to be patient with her growth, allowing herself time to heal, reflect, and improve. Some days were productive, others quiet and slow, but all of them mattered. With self-awareness and determination, she continued moving forward, trusting that even the smallest steps were shaping a future she could be proud of.</p>
        <p className="font-bold text-right my-2">Author: Eric John</p>
      </div>
    </div>

  )
}
