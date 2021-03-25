# Pre-work - _Memory Game_

**Memory Game!** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Christopher Pane

Time spent: 3 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Easy, Medium, and Hard difficulties selected in a list

## Video Walkthrough

Here's a walkthrough of implemented user stories:
https://i.imgur.com/hQZW0uP.gif

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- Prior experience
- w3schools

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

While developing this app, a challenge that I encountered was becoming overwhelmed with ideas of features to add to the app. I overcame this by breaking the development of the app into smaller pieces and then finishing those smaller pieces until I had a workable foundation where I could be free to implement new and fun features to the app. For example, one of the first things that came to my mind when thinking about features before development started was how can I make this game very flexible (i.e. programmatically adding game buttons with colors and note frequencies decided arithmetically, customizable sound patterns for the buttons, scripted sequences to be played at the start or end of the game). These ideas are very good to have during the process of development but cannot be implemented if there isn’t a foundation for the app. Once having implemented the base game logic and style, implementing other features like the difficulty selector or random pattern generator were easily implemented simply by having a good base for the app. Although this game is relatively simple, using this development strategy has been quite successful for me when developing more ambitious games with more complicated logic or building thorough and long-lasting websites.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

After having developed this app, a question that I have about web development is how projects become really large but also remain maintained by a multitude of developers. I’d really love to see how a project becomes maintained over a long time and how new developers can pick up a project that they have never worked on before. I am familiar with how easy it is to write unmaintainable code and I am really interested in seeing the best practices done by the professionals to ensure that the projects made are not only long-standing but also easily maintainable by current and future developers.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I had more time to work on this project, there are a few features and redesigns I would like to implement. First, I would like to add the game button elements programmatically through JavaScript so that any amount of buttons can be in the game only by changing a single parameter to a function rather than adding in new elements to the HTML. Additionally, I would remove the onclick, onmouseup, and onmousedown attributes from the HTML and implement them through the JavaScript as it would make maintaining the project easier in the future. Another feature that I would like to implement is some sort of sequence of the buttons that plays at the start and end of the game. Scripted sequences in games are fun because they build a lot of anticipation to actually playing the game, like at the start of a new game of Pac-Man on the old arcade machines. My favorite thing about programming is that the only limit to new features and additions is your imagination. Although that may sound slightly corny, it makes developing programs a lot of fun because anything can be achieved.

## License

    Copyright Christopher Pane

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
