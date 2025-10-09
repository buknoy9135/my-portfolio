import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/1.jpg"; // adjust path

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 gap-12">
      {/* Photo */}
      <div className="w-44 h-56 md:w-64 md:h-80 lg:w-80 lg:h-[22rem] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/30 ring-4 ring-blue-400 flex-shrink-0">
        <img
          src={profilePic}
          alt="Jalil Anthony Abulais"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text content */}
      <div className="max-w-3xl text-center md:text-left">
        <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Jalil Anthony Abulais
        </h3>

        {/* Typewriter roles */}
        <p className="mt-4 text-lg md:text-2xl font-medium text-blue-600 dark:text-blue-400 h-10">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "Electronics Engineer",
              "Oil and Energy Professional",
              "IT Professional",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </p>

        {/* About me description */}
        <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
          I’m a licensed Electronics Engineer turned Full-Stack Developer, with
          hands-on experience in IT, electronics, and the oil & energy industry.
          Now focused on modern web development, I bring a unique perspective
          from working with both hardware and software, allowing me to approach
          problems with a systems mindset and build solutions that are as
          reliable as they are innovative.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
