/**
 * jQuery stackShuffle 1.1.0
 * Copyright (c) 2011 Marcus Campbell
 *
 * Dual-licensed under the MIT and GPL Version 2 licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
  $.fn.stackShuffle = function(options) {
    var settings = {
      delay: 2000, /* ms */
      left: 100, /* px */
      top: -100, /* px */
      rotation: 10 /* degrees */
    };
    return this.each(function() {
      var $ul = $(this);

      /**
       * Override default settings
       */
      if (options) { 
        $.extend(settings, options);
      }

      /**
       * Apply styles
       */
      var container_height = 0;
      var container_width  = 0;
      $("img", this).load(function() {
        if ($(this).height() > container_height) {
          container_height = $(this).height();
          $ul.css({ height: container_height });
        }
        if ($(this).width() > container_width) {
          container_width = $(this).width();
          $ul.css({ width: container_width });
        }
      });
      $ul.css({
        listStyle: "none",
        margin: 0,
        padding: 0,
        position: "relative"
      });
      $("li", this)
        .each(function() {
          $(this).prependTo($(this).parent());
          if (settings.rotation > 0) {
            _rotate(this);
          }
        })
        .css({
          left: 0,
          listStyle: "none",
          listStyleImage: "none",
          position: "absolute",
          top: 0,
          zIndex: 100
        });

      /**
       * Start shuffling
       */
       _shuffle(this);

      function _rotate(target) {
        var deg = Math.floor(Math.random() * (settings.rotation * 2 + 1)) - settings.rotation;

        var supported = false;
        var vendors   = ['', 'Webkit', 'Moz', 'ms', 'O'];
        detectSupport:
          for (var i = 0; i < 5; i++) {
            if (typeof document.body.style[vendors[i] + 'Transform'] != 'undefined') {
              supported  = true;
              var prefix = '';
              if (vendors[i].length) {
                prefix = '-' + vendors[i].toLowerCase() + '-';
              }
              $(target).css(prefix + 'transform', 'rotate(' + deg + 'deg)');
              break detectSupport;
            }
          }
        if (!supported) {
          rad = deg * Math.PI * 2 / 360;
          costheta = Math.cos(rad);
          sintheta = Math.sin(rad);
          m11 = parseFloat(costheta).toFixed(8);
          m12 = parseFloat(-sintheta).toFixed(8);
          m21 = parseFloat(sintheta).toFixed(8);
          m22 = parseFloat(costheta).toFixed(8);
          $(target).css('filter', 'progid:DXImageTransform.Microsoft.Matrix(M11=' + m11 + ', M12=' + m12 + ', M21=' + m21 + ', M22=' + m22 + ', sizingMethod="auto expand"');
        }
      }

      function _shuffle(target) {
        $("li:last", target)
          .animate({ dummy: 1 }, settings.delay)
          .animate({
            left: settings.left,
            top: settings.top
          }, 500, function() {
            $(this).css({
              zIndex: 99
            }).animate({
              left: 0,
              top: 0
            }, 750, function() {
              $(this).prependTo($(this).parent());
              $(this).css({
                zIndex: 100
              });
              _shuffle(target);
            });
          });
      }
    });
  };
})(jQuery);