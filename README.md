# Plain HTML website using multiple libraries for animation

This website creates a festive countdown for us to celebrate Taulov's exit. By pressing the red button you get an annoucment with some fancy decorations and pictures taken during moving out of Taulov.

## Getting Started

To run this project locally:

1. Clone this repository.
2. Open the particles.html file in your web browser. (Both Chrome and Firefox will work)

## Usage

Click the "Press Me" button on the canvas. This will start a countdown from 10. Once it reaches 0,particles in different shapes and colors will start flowing across the screen.

## Ideas 

Our background will initially be animated when the button is still on the screen. Once the red button is pressed, and after the countdown reaches zero, fireworks will appear on a blank backround (either white or a plain color). [here](https://fireworks.js.org/) is the JavaScript library we will use to visualize the fireworks. Along with the fireworks, we will have a text announcing the end of life for Taulov. This instance of the screen will be up for a short time, after that the backround will remain in its plain form and the particles will flow around with the images taken during movin out from Taulov. Our approach here is to have the particles as LEGO bricks and the images as particles as well. The images will be small floating in the background but at time intervals one image at the time will get larger and appear in the front. Then it will go back floating along with the LEGO bricks. For generating the paricles we will use the JavaScript library tsparticles that supports image sources as list of strings. (See [here](https://github.com/tsparticles/tsparticles?tab=readme-ov-file) a detailed documentation).


## Comments

1. Interacting with a specific image itself wouldn't be possible using this particular library since the interactivity property applies to the particles as a whole. For this we would have to use a different approach probably with using JavaScript event listeners to handle interactions with the image. 

2. The image property only accepts strings ![Screenshot from Code](Images/Picture%201.png) which means we probably cannot put multiple images as a list 😭. One work around this is two add multiple instances of particles which may be a pain because we would have to do that both for bricks and images. Another reasonable solution is to stick with the shapes as before (rectangles, triangles, circles) for the floating particles instead of adding the actual bricks since the only difference is the LEGO logo on them which I am not even sure it will be visible. (__<span style="color:red">FIXED</span>__)

3. Good approach when the implementation is completed is to seperate the file to CSS, HTML and JavaScript for better visibility since there is a lot going on the CSS stylying. 

4. This will be hosted in Baseplate instead of locally.

## TO DO'S 

1. Add the fireworks. (__<span style="color:red">FIXED</span>__)

2. Change the background from the animated one to the plain one after the end of the countdown. (__<span style="color:red">FIXED</span>__)

3. Add the images from the Taulov's exit.

4. Find a way to adjust their movement and interaction in the screen.

## Test Environments

Adding different branches for trying out various options.

1. Particles should appear from the beginning (along with the button) until the end of the countdown and the background should be also animated. (__<span style="color:red">FIXED</span>__)

2. Particles should appear from the beggining (along with the button) until the end of the countdown and the background is white? (__<span style="color:red">FIXED</span>__)

