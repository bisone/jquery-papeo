# 开始


 1. npm install
 2. node_modules/.bin/gulp build
 3. node_modules/.bin/gulp 



# PAPEO jQuery plugin
========================

A jQuery Plugin for embedding a PAPEO menu into your site.



## REQUIREMENTS

* jQuery has to be included in your site



## USAGE

Include the "jquery.papeo.js" file from this repository or use the latest version from (TODO)

```html
<script type="text/javascript" src="http://jquery.papeo.com/jquery.papeo.0.1.min.js"></script>
```

Add the following snippet to the page you want to display your menu on.

```html
<div id="papeo_menu"></div>
<script type="text/javascript">
  $(function(){
    $("#papeo_menu").papeo({
      'restaurant_id' : 1
    });
  });
</script>
```


## EXTRAS

If you want to add a loading message just place it into the html container like:

```html
<div id="papeo_menu">loading...</div>
```