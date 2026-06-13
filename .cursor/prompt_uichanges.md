## This is the file that comprises instructions related to UI changes. Before making any changes to the Frontend interface, it is important to go through this pointers and strictly follow them while making the changes. 
<ColorPalette>
#FF8282
#FF6363
#BEE4D0
#DBFFCB
</<ColorPalette>>
<Fonts>
We will be using a combination of these 2 Fonts - 
1. Kranky for Headings/Titles
2. Dongle for rest of the text
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400&family=Kranky&display=swap" rel="stylesheet">
.dongle-light {
  font-family: "Dongle", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.dongle-regular {
  font-family: "Dongle", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.kranky-regular {
  font-family: "Kranky", serif;
  font-weight: 400;
  font-style: normal;
}
</Fonts>
<Elements>
1. This project is using to display a bunch of elements - For eg, a Box, Sunglasses, Sunflower, Teabags, etc
2. We will be strictly using HTML,CSS to display these elements. STRICTLY NOT IMPORTING ANY IMAGES
3. HTML/CSS for every new element should be inside a new files under an elements folder, basically treating every element as a different component
<Elements>