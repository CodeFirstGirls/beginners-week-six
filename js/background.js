// writes to the log 'hello'
console.log('hello!')

// three different variables for the different images
var backgrounds = ['mike-yukhtenko.jpg', 'gabriele-garanzelli.jpg', 'fabian-oelkers.jpg']


// when the button is clicked it triggers a function
$('button').click(function () {
  // 1. log to the console that you have clicked the button


  // this selects a randon background from above and stores it as the variable 'randomBackground'
  var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  // 2. using jquery, change the image url of the body background to the new 'randomBackground'


  // EXTENSION TASK!
  // 3. Change the text of the 'span' to be that of the photographer
  //   (hint, you should re-use randomBackgroun)
  // Double points if you replace '-' between their names with a space



}) // here endeth the function