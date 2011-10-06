# jquery.stackShuffle

A jQuery plug-in to stack a pile of images and shuffle through them as a slideshow.

## Dependencies

[jQuery](http://jquery.com/) 1.2.3 or later.

## Usage

### HTML

    <ul id="slideshow">
      <li><img src="images/01.jpg" width="400" height="400" alt="Slide 1" /></li>
      <li><img src="images/02.jpg" width="400" height="400" alt="Slide 2" /></li>
      <li><img src="images/03.jpg" width="400" height="400" alt="Slide 3" /></li>
      <li><img src="images/04.jpg" width="400" height="400" alt="Slide 4" /></li>
      <li><img src="images/05.jpg" width="400" height="400" alt="Slide 5" /></li>
    </ul>

### JavaScript

    $(function() {
      $("#slideshow").stackShuffle();
    });

## Options

- **delay**
  The time to pause on each item before shuffling to the next, in milliseconds. Default is `2000`.
- **left**
  The distance from the side of the stack to move an image when shuffling, in pixels. Default is `100`.
- **top**
  The distance from the top of the stack to move an image when shuffling, in pixels. Default is `-100`.
- **rotation**
  The maximum angle an item will be randomly rotated, clockwise or anticlockwise, in degrees. Default is `10`. Set to `0` to disable rotation.

### Example

    $(function() {
      $("#slideshow").stackShuffle({
        delay:    2000,
        left:     100,
        top:      -100,
        rotation:  10
      });
    });

## License

Copyright (c) 2011 Marcus Campbell

jquery.stackShuffle is dual-licensed under the MIT and GPL Version 2 licenses:

- http://www.opensource.org/licenses/mit-license.php
- http://www.gnu.org/licenses/gpl.html