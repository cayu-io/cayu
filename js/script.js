$(document).ready(function() {

  'use strict';

  // ===============
  // Off Canvas menu
  // ===============

  $('.off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.off-canvas-container').toggleClass('is-active');
  });

  // ======
  // Search
  // ======

  var search_field = $('.search-form__field'),
      search_results = $('.search-results'),
      toggle_search = $('.toggle-search-button'),
      close_search = $('.close-search-button'),
      search_result_template = "\
        <div class='search-results__item'>\
          <a class='search-results__item__title' href='{{link}}'>{{title}}</a>\
          <span class='post__date'>{{pubDate}}</span>\
        </div>";

  toggle_search.click(function(e) {
    e.preventDefault();
    $('.search-form-container').addClass('is-active');

    // If off-canvas is active, just disable it
    $('.off-canvas-container').removeClass('is-active');

    setTimeout(function() {
      search_field.focus()
    }, 500);
  });

  $('.search-form-container, .close-search-button').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close-search-button' || event.keyCode == 27) {
      $('.search-form-container').removeClass('is-active');
    }
  });

  search_field.ghostHunter({
    results: search_results,
    onKeyUp         : true,
    rss             : location.origin + '/feed.xml',
    zeroResultsInfo : false,
    info_template   : "<h4 class='heading'>Nombre de résultats: {{amount}}</h4>",
    result_template : search_result_template,
    before: function() {
      search_results.fadeIn();
    }
  });
});


// Resize iFrames
(function(){
  var iframes = document.querySelectorAll("iframe")
  for (var i = 0; i < iframes.length; i++) {
    var iframe = iframes[i]
    if (iframe.src.indexOf("youtube") > -1 ||
      iframe.src.indexOf("giphy") > -1 ||
      iframe.src.indexOf("vimeo") > -1) {
      iframe.setAttribute("aspectRatio", iframe.height / iframe.width)
      iframe.removeAttribute("width")
      iframe.removeAttribute("height")
      iframe.classList.add("resize-iframe")
    }
  }

  function _onresize (e){
    var iframes = document.getElementsByClassName("resize-iframe")
    for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i]
      var container = iframe.parentNode
      iframe.setAttribute("width", container.offsetWidth)
      iframe.setAttribute("height", container.offsetWidth * iframe.getAttribute("aspectRatio")) 
    }
  }

  window.onresize = _onresize
  _onresize()
})();

// Lightbox
(function(){function n(a,c,b){for(var d=0;d<g.length;d++){var e=g[d];e||(c=c.toLowerCase());a.addEventListener(e+c,b,!1)}}function h(a,c,b){for(var d=0;d<g.length;d++){var e=g[d];e||(c=c.toLowerCase());a.style[e+c]=b}}function p(a){this.element=a;this.config=Object.assign({},q,{element:a});this.wrap=function(){var a=document.createElement("div");a.className="media-placeholder";var b=this.element.parentNode,d=this.element.nextElementSibling;a.appendChild(this.element);d?b.insertBefore(a,d):b.appendChild(a)};
this.toggleZoom=function(a){var b=this.element,d="boolean"===typeof a?a:b.classList.contains("zoomed");a=this.onScroll.bind(this);for(var e=document.querySelectorAll(".zooming"),g=0;g<e.length;g++)e[g].classList.remove("zooming");if(d){h(b,"Transform","");b.classList.add("zooming-out");b.classList.remove("zoomed");if(b.nextElementSibling){var f=b.nextElementSibling;f.classList.add("fade-out");f.addEventListener(r,function(){f.parentNode&&f.parentNode.removeChild(f)})}this.config.ignoreScroll||document.removeEventListener("scroll",
a)}else d=t(b),e=u(b,this.useActualMax),f=document.createElement("div"),f.classList.add("zoom-overlay","fade-in"),h(b,"Transform",d+" scale("+e+")"),b.classList.add("zoomed","zooming-in"),this._ignoreScroll=!1,b.parentNode.insertBefore(f,b.nextElementSibling),v(f,"click",this.toggleZoom.bind(this)),this.config.ignoreScroll||document.addEventListener("scroll",a);b.classList.add("zooming")};this.onScroll=function(){this._ignoreScroll||(this._ignoreScroll=!0,this.toggleZoom.call(this,!0))};this.removeZoomClass=
function(){this.element.classList.remove("zooming");this.element.classList.remove("zooming-in");this.element.classList.remove("zooming-out")};w.call(a);a.addEventListener("click",this.toggleZoom.bind(this),!1);n(a,"TransitionEnd",this.removeZoomClass.bind(this));this.wrap()}function v(a,c,b){a.addEventListener(c,function(c){c.target.removeEventListener(c.type,a);return b(c)})}function x(a,c){var b=new Image;b.src=a;b.onload=function(){c({width:this.width,height:this.height})}}
function w(){var a=this,c=a.src;!c&&a.style.backgroundImage&&(c=a.style.backgroundImage.replace(/.*\s?url\([\'\"]?/,"").replace(/[\'\"]?\).*/,""));c&&x(c,function(){y.bind(a)})}function y(a){var c=this.offsetHeight;this.setAttribute("data-width",this.offsetWidth);this.setAttribute("data-height",c);this.setAttribute("data-actual-width",a.width);this.setAttribute("data-actual-height",a.height);this.insertAdjacentHTML("beforebegin",'<div class="media-fill" style="width:${width}px;height:${height}px"></div>');
this.classList.add("media-image")}function k(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function l(a){a=a.getBoundingClientRect();return{top:a.top+(document.documentElement.scrollTop||document.body.scrollTop),left:a.left+(document.documentElement.scrollLeft||document.body.scrollLeft)}}function u(a,c){var b=k(),d=b.width/(a.offsetWidth+10),b=b.height/(a.offsetHeight+10);c&&(d=Math.min(d,
a.dataset.actualWidth/a.offsetWidth),b=Math.min(b,a.dataset.actualHeight/a.offsetHeight));return Math.min(b,d)}function t(a){var c=k(),b=a.offsetWidth,d=a.offsetHeight,d=l(a).top+d/2-window.scrollY,d=c.height/2-d;a=l(a).left+b/2;return"translate("+(c.width/2-a)+"px, "+d+"px) translateZ(10px)"}var g=["webkit","moz","MS","o",""],m={animation:"animationend",OAnimation:"oanimationend",MSAnimation:"MSAnimationEnd",WebkitAnimation:"webkitAnimationEnd"},r=function(){var a=document.createElement("fakeelement"),
c;for(c in m)if(void 0!==a.style[c])return m[c]}(),q={attachTo:"body",ignoreScroll:!1,useActualMax:!1};document.addEventListener("DOMContentLoaded",function(){for(var a=document.querySelectorAll("[data-action=zoom], .image-zoom"),c=0;c<a.length;c++){var b=a[c];b.__zoomable__=new p(b)}})})();