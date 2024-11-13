This repository currently contains original Website with following key pages
/ - landing
/pp - privacy policy
/get - information how to install beta version
/i - view shared summary app
/search - search app demo
 
Astro folder contains a decent template based on Astro. It is is not customized much but I thought it might be useful to get theme switching implementation and few websites blocks from, including peaces of landing, header, footer, blog etc. 

## To run dev version
npm install
npm run dev

# Note that might need to delete .next before building

# Use to build continuously
npx watch 'npm run build' ./components

## Production build

npm run build
npm run start
