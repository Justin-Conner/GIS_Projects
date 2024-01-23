This is a demonstartion of using the google API to display a map with custom markers
and a info pop up for forest park.  It is intended to mimick the functionality a
user would experience with the SurCheck tool.  

To use this tool you will need to create your own google API. 
Instrcutions here: https://developers.google.com/maps/third-party-platforms/wordpress/generate-api-key

and replace this line in the index.HTML file with your API KEY inserted.

```html
<script src="https://maps.googleapis.com/maps/api/js?key='your key goes here'&callback=initMap" async defer></script>



I choose to use Vanilla Js for this project so the test I wrote must be viewed in the
browser dev tools "console" by opening the file test.html in the root folder.

In a real world setting for Surdex I would be using custom API data from Surdex sources I'm assuming, 
so the API would be different than it is with google.

