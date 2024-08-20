# Rock, Paper, Scissors, Spock, Lizard Game

[View the depolyed website here](https://duffew.github.io/rock-paper-scissors-spock-lizard/)

The Rock, Paper, Scissors, Spock, Lizard Game website is a one-page, interactive website upon which, users can play a game of chance. Users of this site are able to:

+ Play the game by selecting emojis
+ View thier result against a randomnly generated computer choice
+ View their accumulated score tally
+ Reset the game tally
+ View the rules

This website is fully responsive for a range of screen sizes.

<img src="screenshots/mockup.png" alt="mockups of the game page on different devices">

## Features

+ Header - The page opens with a large, clear header, which uses a h1 heading to provide users with the name of the game.

<img src="screenshots/header.png" alt="screenshot of the game heading">

*Game heading*

+ Game Area - The main section of the website is the game area, which includes the following features:
    - Game Controls - Large buttons styled as colourful emojis, which users can interact with to make a selection. Users are given clear instructions via the h2 heading. On screens that make use of a mouse, the buttons zoom when hovered over to provide user feedback.

    <img src="screenshots/game_controls.png" alt="screenshot of the game controls">

    *Game controls*

    - Results Display - Game results are displayed in a table beneath the game controls. The table makes use of clear table headings to indicate both player and computer choices. The table data rows display the chosen emojis. A results message is then shown beneath the table. The results display makes use of a time delay to provide the user with feedback they have made a selection (see Bugs sections below).
    - Game Tally
+ Footer
    - Rules Modal
    - Reset Tally

## dev steps

## testing
### html
### css
### js
### Bugs

+ During develpment, it became clear that sometimes both the player and computer would make the same selection multiple times in a row. In the instance of a draw, nothing would change on the page and it appeared that the game was frozen. To counter this, I created a clearDisplay() function and a setTimeout() function. These functions ensured that when the user made a selection: 
    - the display would clear
    - the game results would be returned after a short delay
    - the user is sure that that their selection has been actioned

    <img src="screenshots/setTimeout.png" alt="screenshot of clear display and set timeout functions">

    *clearDisplay() and setTimeout() functions*
### lesons

## deployment

## techologies used

## lessons

## credits