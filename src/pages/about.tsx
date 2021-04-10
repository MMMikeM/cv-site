const About = ({ elementRef }) => {
  return (
    <div className="wrapper" ref={elementRef}>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-3/4">
          <h2 className="h2 mb-4">About me</h2>
          <p className=" text-lg pb-2">
            I have always had a passion for technology, particularly when it
            comes to improving human interactions.
          </p>

          <p className=" text-lg pb-2">
            I am a driven individual, my friends would describe me as high
            energy and full of jokes. In my free time, I enjoy keeping fit and
            playing soccer and trying to learn something new every day;
            ocassionally I spend some time practicing typing or questioning
            keyboard ergonomics.
          </p>
          <p className=" text-lg pb-2">
            I started my journey in development at the beginning of 2019
          </p>
          <p className=" text-lg pb-2">
            Prior to the social-distancing era, I enjoyed attending developer
            meetups. 2020 did open many doors to attend online conferences and
            teleconferenced courses.
          </p>
        </div>
        <div className="h-72 md:h-auto w-full sm:w-1/2 xl:w-1/3 md:ml-8 mb-16 md:mb-0 flex-grow bg-secondary-500 bg-opacity-30 flex justify-center items-center">
          <h3>image</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
