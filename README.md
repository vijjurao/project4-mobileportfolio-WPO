# Website Optimization Project

  Optimized a given website to achieve a PageSpeed score above 90 for both
  Mobile and Desktop as well as render at 60 frames per second.

  Employed build tools such as Grunt and Gulp to automate various tasks.

## Running the websites

  Websites are available through gh-pages. The provided URLs can be copied and
  pasted into Google's PageSpeed Insights to be analyzed.


  http://vijjurao.github.io/project4-mobileportfolio-WPO
  
  http://vijjurao.github.io/project4-mobileportfolio-WPO/views/pizza.html

  Paste into here:

  https://developers.google.com/speed/pagespeed/insights/

## Optimizations - index.html

  Adjusted the critical rendering path to reduce the load time of the website

  The website would take over 10 seconds to load and users typically give up at this
  point and go to other sites. I analyzed areas that warranted an improvent and iterated
  over them until the page loaded under 1000 milliseconds.

   * Inlined the critical css with gulp-critical to reduce render blocking
   * The full style.css file will load after the intial painting of the page inside
     full-css-load.js
   * Included a print media query for printed pages as it isn't necessary on the
     initial above the fold load
   * Moved Google Analytics and Navigation Timing tools outside of index.html into
     seperate JavaScript files
   * Added async attribute to Google Analytics script element that will run as
     soon as it's available
   * Compressed pizzeria image with gulp imagemin-jpeg-recompress and resized
     with grunt-responsive-images
   * Minified JavaScript with gulp-uglify and concatenated all 3 files with
     gulp-concat into 1 file and placed it at the bottom of index.html
   *

## Optimizations - views/main.js

  Measured optimizations were made in order to render page at 60 frames per
  second in most cases depending on hardware.

  When scrolling the page felt very slow and stuttered quite a bit. I measured first then
  made improvements upon the areas that were causing issues.

   * Accessed the DOM as little as possible by storing values in a variable
     and using those variables inside for loops or doing calculations
   * Reduced amount of pizzas created in the background when page loads
   * Debounced scroll events that animate the sliding pizza images in background
   * Included requestAnimationFrame that runs only when scrolling
   * Batched the method that manipulates the pizza images when animating to not
     cause forced synchronous layouts
   * Replaced style left with transform: translateX() to not trigger a layout
   * Implemented the cloneNode() method to create copies of the background pizza
     image then append them once the DOM content has loaded
   * Replaced querySelectorAll where applicable with getElementsByClassName to
     reduce scripting
   * Used classList.add instead of ClassName to reduce painting
   * Promoted pizza background images onto their own compositor layers with
     will-change: transform, to offload work onto the GPU to reduce paint times<br>
     Performance on mobile might suffer

