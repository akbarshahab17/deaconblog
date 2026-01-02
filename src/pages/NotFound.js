import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className='text-2xl font-bold'>404 - Page Not Found</h1>
      <p className='text-lg'>Sorry, the page you are looking for does not exist.</p>
      <br />
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        <Link to="/" className="text-white">Go Home</Link> 
        </button>
      </div>
    </div>
  );
};