const scoreGame = () => {
  let score = 50;
  {
    let score = 100;
    console.log(score);
  }
  console.log(score);
};

scoreGame();
