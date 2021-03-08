# JS Slot Machine
### by Matt Packer

![JS Slot Machine Wireframe] (planning/JS Slot Machine-Wireframe_v2.png)

## Technical Summary

* Technology used in development:
  * Javascript
  * HTML
  * CSS
  * Git
  * Github

## App Requirement Summary


## Game Summary


## Pseudocode

* Constants:
  * Reel Images:
    * eTank
    * Met
    * Proto Man
    * Dr. Wily
    * Mega Man
  * Default Reel Images:
    * Mega Man 1-Up
    * Mega Man Title
  * Spin Animation Image:
    * Mega Man Spin


* Variables - state:
  * Reel 1 State
  * Reel 2 State
  * Reel 3 State
  * Win State
  * Win Credits
  * Credits Remaining
  * Random Number 1
  * Random Number 2
  * Random Number 3
  * ------ Audio Status


* Cached Element References:
  * Slot Reel 1
  * Slot Reel 2
  * Slot Reel 3
  * Credits Won
  * Credits Remaining
  * Slot Message
  * ------ Audio Image


* Event Listeners:
  * Click 'Spin' Button
  * Click 'Reset' Button
  * ------ Click 'Audio' Button


*  Functions:

   *  Initialize - init:
      *  Loads game to initial state.
      *  Sets most values in variables to 'null', 0, or empty string.
      *  Sets reels to default images.
      *  Sets default message saying 'Press SPIN to play!'.
      *  Sets default credits remaining.
      *  ------ Sets audio to 'off'.
      *  Is invoked on page load/refresh.
      *  Is invoked when 'reset' button is clicked.
  
   *  Spin:
      *  Checks the number of credit remaining:
         *  if < = 0, display game over message
         *  if > 0, continue
      *  Deducts 1 credit from remaining credits.
         *  Updates remaining credits value on screen.
      *  Resets win state variable to an empty string value.
      *  Sets message to 'Reels Spinning...'
      *  Sets reel image values to the 'spin' animation image.
      *  ------ Plays spin sound.
      *  Invokes function to 'spin' reel 1.
      *  Invokes function to 'spin' reel 2.
      *  Invokes function to 'spin' reel 3.
      *  Invokes function to check for a win.
  
   *  Spin Reel 1:
      *  Generates a random number between 1 and 100.
      *  Assigns the randon number value to the Random Number 1 variable.
      *  Uses if...else statement to evaluate the random number and assigns the value for the reel 1 state variable.
  
   *  Spin Reel 2:  
      *  Generates a random number between 1 and 100.
      *  Assigns the randon number value to the Random Number 2 variable.
      *  Uses if...else statement to evaluate the random number and assigns the value for the reel 2 state variable.

   *  Spin Reel 3:  
      *  Generates a random number between 1 and 100.
      *  Assigns the randon number value to the Random Number 3 variable.
      *  Uses if...else statement to evaluate the random number and assigns the value for the reel 3 state variable.
  
   *  Check Winner:
      *  Compares values of each reel state variable using if...else statement.
      *  Sets the value of the win state variable.
      *  Invokes the render reel 1 function with a timed delay using setTimeout.
  
   *  Render Reel 1:
      *  ------ Plays slot stop sound.
      *  Maniputes the DOM to display reel 1 image based on reel 1 state value.
      *  Invokes the render reel 2 function with a timed delay using setTimeout.
  
   *  Render Reel 2:
      *  ------ Plays slot stop sound.
      *  Maniputes the DOM to display reel 2 image based on reel 2 state value.
      *  Invokes the render reel 3 function with a timed delay using setTimeout.

   *  Render Reel 3:
      *  ------ Plays slot stop sound.
      *  Maniputes the DOM to display reel 3 image based on reel 3 state value.
      *  Invokes the render final function with a timed delay using setTimeout.
  
   *  Render Final:
      *  Checks the win state variable using an if...else statement to:
         *  Change the slot message by manipulating the DOM.
         *  Sets value of the win credits variable.
         *  Manipulates the DOM to change the win credits value displayed.
         *  Sets value of the credits remaining variable - credits won plus the previous credits remaining.
         *  Manipulates the DOM to change the credits remaining value displayed.
         *  ------ Plays the appropriate 'winning' sound effect.
         *  ------ Displays other winning effects.
         *  OR
            *  Checks the number of credits remaining:
               *  If there are credits remaining:
                  *  Manipulates the DOM to change the slot message to display 'spin again' message.
               *  If there are NO credits remaining:
                  *  Manipulates the DOM to change the slot message to display 'game over' message.
                  *  ------ Plays 'game over' sound effect.


*  Invoke the init function so that the game loads to the initial state when the page loads.
