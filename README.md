# Rock, Paper, Scissors, Spock, Lizard Game

[View the deployed website here](https://duffew.github.io/rock-paper-scissors-spock-lizard/)

The Rock, Paper, Scissors, Spock, Lizard Game website is a one-page, interactive website upon which, users can play a game of chance. Users of this site are able to:

+ Play the game by selecting emojis
+ View their result against a randomly generated computer choice
+ View their accumulated score tally
+ Reset the game tally
+ View the rules

This website is fully responsive for a range of screen sizes.

<img src="screenshots/mockup.png" alt="mock-ups of the game page on different devices">

## Features

### Existing Features

+ Header - The page opens with a large, clear header, which uses a h1 heading to provide users with the name of the game.

    <img src="screenshots/header.png" alt="screenshot of the game heading">

*Game heading*

+ Game Area - The main section of the website is the game area, which includes the following features:
    - Game Controls - Large buttons styled as colourful emojis, which users can interact with to make a selection. Users are given clear instructions via the h2 heading. On screens that make use of a mouse, the buttons zoom when hovered over to provide user feedback.

    <img src="screenshots/game_controls.png" alt="screenshot of the game controls">

    *Game controls*

    - Results Display - Game results are displayed in a table beneath the game controls. The table makes use of clear table headings to indicate both player and computer choices. The table data rows display the chosen emojis. A results message is then shown beneath the table. The results display makes use of a time delay to provide the user with feedback they have made a selection (see Bugs sections below).

    <img src="screenshots/results_display.png" alt="screenshot of the results display area">

    *Results display*

    - Game Tally - The tally keeps track of the cumulative scores of the player and computer. The tallies increment by 1 point for each win. The tally can be reset by refreshing the page or selecting the 'Reset Tally' button in the footer.

    <img src="screenshots/tally.png" alt="screenshot of the tally area">

    *Tally*

    <img src="screenshots/game_area.png" alt="screenshot of the complete game area">

    *Complete game area*

+ Footer - On this site, the footer has been used to place the following features for user convenience:
    - Rules Modal - Selecting the 'rules' text will bring up a modal showing a key to the weapons and a graphical representation of which weapons beat which. The modal can be closed by either selecting the green cross or clicking outside the modal area.
    - Reset Tally - Selecting this text will reset both the player and computer tallies and clear the results area without the user having to refresh the page.

    <img src="screenshots/footer.png" alt="screenshot of the footer area">

    *Footer area*

    <img src="screenshots/rules_modal.png" alt="screenshot of the rules modal">

    *Rules modal*

+ 404 Page - This website also makes use of a 404 page. This page informs the user that the page they are looking for does not exist and features a link back to the game.

    <img src="screenshots/404.png" alt="screenshot of the 404 page">

    *404 page*

### Possible Future Features

+ Ability for a player to add a name to the display table heading.
+ Ability to set a 'best of' feature so that the winner is declared after a player-defined number of games.

## Testing

### Validator Testing

+ HTML - no errors were found when entering the index.html or 404.html code into the W3C validator

    <img src="screenshots/index_html.png" alt="screenshot of HTML validation results">

*W3C validator results - HTML*

+ CSS - no errors were found when entering the style.css code into the W3C Jigsaw validator

    <img src="screenshots/css.png" alt="screenshot of CSS Jigsaw validation results">

*W3C Jigsaw validator results - CSS*

+ JavaScript - no errors were found when entering the script.js code into the jshint validator - the unused variable message relates to an onclick attribute within index.html and is not called directly within script.js.

    <img src="screenshots/javascript.png" alt="screenshot of jshint validation results">

*jshint validation results - JavaScript*

### Lighthouse Testing

+ The website returned the following Lighthouse results when tested in incognito mode:

    <img src="screenshots/lighthouse.png" alt="lighthouse test results">

*Lighthouse test results*

### WAVE Testing

+ The website returned the following results when tested using the Web Accessibility Evaluation Tool:

    <img src="screenshots/WAVE.png" alt="WAVE test results">

*WAVE test results*

### User Interactivity Testing

+ All of the game selection buttons work and return the correct results message and tally increment when required.
+ Tallies do not increment in the event of a tie.
+ The modal opens when 'rules' is selected and closes when either the green cross is selected or the user clicks away from the modal.
+ The tallies reset when 'reset tally' is selected.
+ A 404 page displays un the event of a navigation error
+ The game page appears when the 'Get Back' link is selected on the 404 page.

### Browser Testing

+ The website was tested and proved to work on the following browsers:
    - Chrome
    - Edge
    - Safari
    - Firefox

### Bugs

#### Bugs Fixed During Development

The following provides examples of bugs that were identified and fixed within development.

+ Missing user feedback
    - The issue: During development, it became clear that sometimes both the player and computer would make the same selection multiple times in a row. In the instance of a draw, nothing would change on the page and it appeared that the game was frozen.
    - The fix: To counter this, I created a clearDisplay() function and a setTimeout() function. Result: fixed. These functions ensured that when the user made a selection: 
        - the display would clear
        - the game results would be returned after a short delay
        - the user is sure that that their selection has been actioned

    <img src="screenshots/clearDisplay.png" alt="screenshot of the clear display function">

    *clearDisplay() function*

    <img src="screenshots/setTimeout.png" alt="screenshot of the set timeout function">

    *setTimeout() function*

+ Computer tally not updating
    - Early in the development cycle, a bug was identified whereby the computer tally was not updating in the event of a player loss.

    <img src="screenshots/bug_1_issue.png" alt="screenshot of computer tally bug">

    *Computer tally bug - the issue*

    - The problem - spelling. When writing the span used to display the computer's tally, I had misspelled the id: "compuer-tally". This meant that the JavaScript function was referencing a span that did not exist.

    <img src="screenshots/bug_1_problem.png" alt="screenshot of the computer tally bug problem">

    *Computer tally bug - the problem*

    - The fix: adjust the spelling so that index.html and script.js match. Result: fixed.

    <img src="screenshots/bug_1_fixed.png" alt="screenshot of the computer tally bug fixed">

    *Computer tally bug - fixed*

#### Outstanding Bugs

+ There are no outstanding bugs.

## Lessons

### Lesson Incorporated

In my previous project, I identified three lesson to build into this project. These were:
1. Use temporary borders when styling.
2. Plan class and id names before writing code - sketch the divs out on paper and define their purpose.
3. Continue to experiment and explore but set a time limit of 1 hour. If I can't solve a problem within the hour, use a backup.

+ Lesson 1 - I did this extensively in this project and it made a huge different to how quickly I was able to style my page. Continue with this practice
+ Lesson 2 - I experimented with this and it helped with quickly organising the HTML and basic styling. Continue with this practice.

    <img src="screenshots/wirefrme_with_divs.png" alt="screenshot of wireframe with divs">

    *Wireframe showing divs with class names*

+ Lesson 3 - I applied this practice; cutting short ideas that were interesting but were taking too long to execute. Continue with this practice.

### Lessons From This Project

This section includes a list of lessons learned during this project in no particular order:

+ My understanding of CSS has improved a lot since my last project. I'm able to style quicker and am getting closer to matching the image in my head with the image on the screen.
+ VS Code is an excellent resource. Being able to write code and see the output appear on screen immediately was a huge help, particularly with CSS.
+ Anchors should not be mixed in with buttons.
+ Horizontally centring a div using margin auto now makes complete sense.

### Follow-on Actions

In my next project, in addition to continuing with current lessons incorporated: 
+ I need to work on quickly centring elements vertically
+ I need to experiment with auto resizing as the browser window resizes, particularly with text.
+ I need to study more on standard screen sizes, breakpoints and optimal ratios for media queries. Likely in conjunction with the above two points.

## Deployment

### Deployment to GitHub Pages

Deployment was managed on GitHub by using the following steps:

1. Go to the 'settings' tab within the GitHub Debt Deliverance repo
2. Select 'pages' from the code and automation section
3. Ensure that:
    + source is set to 'deploy from branch'
    + main branch is selected
    + folder is set to 'root'
4. Under 'branch', select 'save'
5. Back in the 'code' tab, wait for the build to finish then fresh the repo
6. the same page, from the 'environments' section, select 'github-pages'
7. Select 'view deployment' to see the deployed site

### Version Control

The website was developed using the GitPod Integrated Development Environment (IDE) and pushed to the Debt Delivery repo on GitHub. The following git commands were used to communicate from the IDE to the repo:

+ git add . - used to add updates to the staging area ready for committal to the queue
+ git commit -m "comment" - used to commit updates to the repo queue
+ git push - used to send updates in the queue to the reop on GitHub

## Technologies Used

### Languages
+ HTML
+ CSS
+ JavaScript

### Libraries & Online Resources
+ W3.org was used to validate the HTML code
+ jigsaw.w3.org was used to validate the CSS code
+ jshint.com was used to validate the JavaScript code
+ Chrome Developer Tools was used monitor development and preview changes
+ Lighthouse was used to assess performance, accessibility, best practices and SEO metrics
+ wave.webaim.org was used to check enhanced accessibility metrics
+ stackoverflow.com was used for general coding queries
+ w3schools.com was used for specific programming code
+ youTube.com was used for coding tutorials
+ emojipedia.org was used to source the game emojis
+ favicon.io was used to generate the favicon images

## Credits

### Code
+ The CSS and JavaScript code for the modal was sourced from [w3schools](https://www.w3schools.com/howto/howto_css_modals.asp)
+ The JavaScript code for updating the tally was derrived from the Code Institute [Love Maths Walklthrough Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+3/courseware/2d651bf3f23e48aeb9b9218871912b2e/8775beaed6ed403d92318845af971b30/?child=last)
### Content
+ All content was created by the developer
### Acknowledgements
+ The following youTube content creators for coding walkthroughs:
    - [Web Dev Simplified](https://www.youtube.com/watch?v=1yS-JV4fWqY)
    - [codeSTACKr](https://www.youtube.com/watch?v=P_H4_miTKsI)
    - [Code With Ania Kobow](https://www.youtube.com/watch?v=RwFeg0cEZvQ&t=263s)
    - [Kenny Yip Coding](https://www.youtube.com/watch?v=fIBOydve2f8)
+ My mentor Spencer Barriball for great advice yet again!