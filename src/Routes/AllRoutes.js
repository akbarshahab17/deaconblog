import { Routes, Route } from 'react-router-dom';
import { Home, Categories, CreatePost, Login, Register, PostDetail, NotFound, AboutUs, Featured } from '../pages';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
