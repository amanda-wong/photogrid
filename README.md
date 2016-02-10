# Instagrid

### Summary

[Instagrid](http://amanda-wong.github.io/photogrid/) is a fully responsive webpage that allow users to display on the page the most recent images and social details corresponding to the searched hashtag.

### Tools and methods

The building of Instagrid focuses on using __Ajax__ to retrieve information from Instagram's __API__ and the benefits that __Flexbox__ provides to better control the objects on the page.

Other tools and methods used include:
* HTML/CSS
* jQuery
* Responsive design (mobile, tablet, desktop)
* Gulp, SASS, Autoprefixer, Browser-Sync
* Git and GitHub

### Process

1. Add markup into index.html file
2. Add styles using CSS/SASS and make changes to layout with Flexbox
3. Create event handler for 'on-click' event
4. Create an Ajax 'GET' request to fetch the hashtag image, username, profile picture, comments count, and likes count from Instagram's API
5. Style Instagram objects
6. Create media queries and add styles to make webpage responsive
7. Add load more functionality that adds twelve new images after the previous list of images.

### Experience

The use of Gulp, SASS, Autoprefixer and Browser-Sync are helpful in setting up an efficient coding environment. The two major obstacles I had came when I was trying to 'GET' Instagram's information to display on the screen and creating a function to load more images. This was a difficult process as it needs to clear the string beforehand to prevent the same twelve images from appending again.
