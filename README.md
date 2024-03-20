# Particle Animation 

This is a demonstration of a web animation using the particle.js library. Learn more about how it works [here](https://vincentgarreau.com/particles.js/#default).

## Getting Started

To run this project locally:

1. Clone this repository.
2. Open the particles.html file in your web browser. (Both Chrome and Firefox will work)

## Usage

Click the "Press Me" button on the canvas. This will start a countdown from 10. Once it reaches 0,particles in different shapes and colors will start flowing across the screen.

## Ideas 

Our background will initially be animated when the button is still on the screen. Once the red button is pressed, and after the countdown reaches zero, fireworks will appear on a blank backround (either white or a plain color). [here](https://fireworks.js.org/) is the JavaScript library we will use to visualize the fireworks. Along with the fireworks, we will have a text announcing the end of life for Taulov. This instance of the screen will be up for a short time, after that the backround will remain in its plain form and the particles will flow around with the images taken during movin out from Taulov. Our approach here is to have the particles as LEGO bricks and the images as particles as well. The images will be small floating in the background but at time intervals one image at the time will get larger and appear in the front. Then it will go back floating along with the LEGO bricks. For generating the paricles we will use the particles-js library as mentioned above. 


## Comments

1. Interacting with a specific image itself wouldn't be possible using this particular library since the interactivity property applies to the particles as a whole. For this we would have to use a different approach probably with using JavaScript event listeners to handle interactions with the image. 

2. The image property only accepts strings ![Screenshot from Code](Images/Picture%201.png) which means we probably cannot put multiple images as a list 😭. One work around this is two add multiple instances of particles which may be a pain because we would have to do that both for bricks and images. Another reasonable solution is to stick with the shapes as before (rectangles, triangles, circles) for the floating particles instead of adding the actual bricks since the only difference is the LEGO logo on them which I am not even sure it will be visible. 

3. Good approach when the implementation is completed is to seperate the file to CSS, HTML and JavaScript for better visibility since there is a lot going on the CSS stylying. 

