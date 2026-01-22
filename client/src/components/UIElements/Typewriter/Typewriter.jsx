import Typewriter from 'typewriter-effect';

const AppTypewriter = ({
  strings,
  wrapperClassName,
  cursorClassName,
}) => {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
        delay: 40,
        wrapperClassName,
        cursorClassName,
      }}
    />
  );
};

export default AppTypewriter;
