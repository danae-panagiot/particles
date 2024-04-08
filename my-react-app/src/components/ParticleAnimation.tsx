import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import blueMoon from './/../lego-bricks/blue_moon.png';
import redCircle from './/../lego-bricks/red_circle.png';
import greenCircle from './/../lego-bricks/green_circle.png';
import yellowBrick from './/../lego-bricks/yellow_brick.png';
import violetRect from './/../lego-bricks/violet_rect.png';
import yellowRect from './/../lego-bricks/yellow_rect.png';

// Define a custom interface to extend PIXI.Sprite properties
interface CustomSprite extends PIXI.Sprite {
  vx: number;
  vy: number;
  currentAlpha: number;
  targetAlpha: number;
}

const ParticleAnimation: React.FC = () => {
  const app = useRef<PIXI.Application<PIXI.ICanvas>  | null>(null);
  
  
  useEffect(() => {
       // Create a new canvas element
       const canvas = document.createElement('canvas');

       // Set its dimensions
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
   
       // Append it to the document body
       if (document.body) {
         document.body.appendChild(canvas);
       }
   
       // Create a PixiJS application
       app.current = new PIXI.Application({
         view: canvas,
         width: window.innerWidth,
         height: window.innerHeight,
         backgroundColor: 0xffffff,
         resolution: window.devicePixelRatio || 1,
       });
    

    // Create a container for the sprites
    const spriteContainer = new PIXI.Container();
    app.current?.stage.addChild(spriteContainer);

    // Load the images for the sprites
    const imagePaths = [blueMoon, redCircle, violetRect, yellowBrick];

    // Create sprites
    const sprites: CustomSprite[] = [];
    for (let i = 0; i < 200; i++) {
      const textureIndex = Math.floor(Math.random() * imagePaths.length);
      const texture = PIXI.Texture.from(imagePaths[textureIndex]);
      const sprite = new PIXI.Sprite(texture) as CustomSprite;
      sprite.x = Math.random() * (app.current?.renderer.screen.width || 0);
      sprite.y = Math.random() * (app.current?.renderer.screen.height || 0);
      sprite.anchor.set(0.5);
      // Randomly scaling the bricks
      const scale = Math.random() * 0.5 + 0.5;
      sprite.scale.set(0.25 * scale);
      // Velocity
      sprite.vx = (Math.random() - 0.5) * 2;
      sprite.vy = (Math.random() - 0.5) * 2;
      // Target opacity
      sprite.currentAlpha = Math.random();
      sprite.targetAlpha = sprite.currentAlpha;
      sprites.push(sprite);
      spriteContainer.addChild(sprite);
    }

    // Update function
    const update = () => {
      sprites.forEach(sprite => {
        //const maxChange = 0.08;
        // Update position
        sprite.x += sprite.vx;
        sprite.y += sprite.vy;

        if (sprite.x > (app.current?.renderer.screen.width || 0)) {
          sprite.x = 0;
        }
        if (sprite.x < 0) {
          sprite.x = app.current?.renderer.screen.width || 0;
        }
        if (sprite.y > (app.current?.renderer.screen.height || 0)) {
          sprite.y = 0;
        }
        if (sprite.y < 0) {
          sprite.y = app.current?.renderer.screen.height || 0;
        }

        const alphaChangeSpeed = 0.1; // Opacity speed transition
        sprite.currentAlpha += (sprite.targetAlpha - 0.8 * sprite.currentAlpha) * alphaChangeSpeed;
        sprite.alpha = 0.8 * sprite.currentAlpha;
        // Randomly change opacity
        if (Math.random() < 0.01) {
          sprite.targetAlpha = Math.random();
        }
      });

    };

    app.current?.ticker.add(update);

    // Clean up function
    return () => {
      // Destroy PixiJS application
      app.current?.destroy(true);
    };
  }, []);

  return <canvas id="pixi-container"></canvas>; // Empty element since PixiJS will handle rendering
};

export default ParticleAnimation;
