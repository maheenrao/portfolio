import React from 'react'
// import img from "./images/maheen.jpg"
const About = () => {
  return (
    <>
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="bg-purple-300 mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px] ">
            Who I am?
          </h1>
          <div>
            <h1 className="mb-9 text-base leading-relaxed text-body-color">
              I am a front end web developer with 1 year of experience of
              developing websites, creating layouts and connecting websites to
              the servers. I usually write code using markup language i.e HTML,
              Css and JavaScript and my main focus is React. I've completed my
              graduation in Information Technology and also done many courses
              related to website development, coding, and programming. I always
              meet deadlines. I never hesitate to make the best use of my skill
              and knowledge in order to complete a project successfully.
            </h1>
          </div>
        </div>
        {/* <img
          ClassName="  display: block;
    max-width: 100%; "
          src={img}
          alt="picsture" */}
        {/* /> */}
      </div>
    </>
  );
}

export default About