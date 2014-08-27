jQuery.ResponsiveTopScreen
===========================

Change image tag to fullscreen. jQuery plugin page is [here](http://plugins.jquery.com/responsivetopscreen/)


Usage
------

##### html
    <section id="top-screen">
	    <img src="http://placekitten.com/2500/1200" data-original-width="2500" data-original-height="1200" />
    </section>

##### javascript

    <script type="text/javascript">
    $(function(){
        $("#top-screen").responsiveTopScreen({
            screenFilterImage: "/images/gradiate.png" // optional, default undefined
        });
    });
    </script>


Options
--------


### optional

###### screenFilterImage
In sample. gradiate.png will be overlie on placekitten's image. 

---

Special thanks
===============
I love [Storehouse](https://www.storehouse.co/) and [placekitten](http://placekitten.com/)!
