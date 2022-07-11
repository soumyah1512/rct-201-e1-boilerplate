const useClock = () => {
  // TODO
  // refer readme.md for what to return
  
  var current = new Date();
  
  const hours = current.getHours();

  const minutes = current.getMinutes();

  const seconds = current.getSeconds();

  return { hours, minutes, seconds };
};

export default useClock;
