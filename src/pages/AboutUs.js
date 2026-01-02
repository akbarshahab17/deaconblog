import photo from "../assets/photo.jpg";

export const AboutUs = () => {
  return (
    <div className="about-us-container text-center">
    <header className="text-center mb-4 text-3xl font-bold text-heading md:text-5xl lg:text-6xl">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">About Us</h1>
    </header>
    <section className="about-us-content text-center">
      <p>
        Welcome to our company! We are dedicated to providing the best service possible.
        Our team is composed of creative individuals who are passionate about their work.
      </p>
      <p>
        Our mission is to help people achieve their goals through innovative solutions.
      </p>
    </section>
    <section className="our-team">
      <h2>Our Team</h2>
      <div className="team-members">
        {/* Example team member card - you can map over an array of team members */}
        <div className="team-member-card">
          {/* Replace with actual image source */}
          <img src={photo} alt="Team DeaconX" className="team-member-img" />
          <h3>Akbar Shahab</h3>
          <p className="team-member-title">CEO & Founder</p>
          <p>Akbar leads our team with vision and expertise.</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </section>
  </div>
  )
}
