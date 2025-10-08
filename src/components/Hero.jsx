import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/1.jpg"; // adjust path

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen px-6 pt-2 bg-white dark:bg-gray-900 gap-12">
      {/* Photo */}
      <div className="w-40 h-52 md:w-56 md:h-72 lg:w-72 lg:h-84 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/30 ring-4 ring-blue-400 flex-shrink-0">
        <img
          src={profilePic}
          alt="Jalil Anthony Abulais"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text content */}
      <div className="max-w-3xl">
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Jalil Anthony Abulais
        </h3>

        {/* Typewriter roles */}
        <p className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-300 h-10">
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
          Skilled in bridging hardware and software, I’m currently expanding my
          expertise in modern web development and exploring how to integrate
          software with complex real-world systems.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
