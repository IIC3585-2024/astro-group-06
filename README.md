# Cuevana 6 - Astro

Our Astro aplication manage a platform with diferent series recomendations and with users. In it you can see all the series that have been uploaded and rate them. Also, it allows you to upload new series to recommend, and you can filter by streaming service. To use the app you have to create a user or login with an already created one, but as a guest you can see the list of series. It is developed using SSR so it render very quickly and it's optimized to be used in mobile devices.  

## Web
Available in: [https://wasm.cparedesr.com/astro](https://wasm.cparedesr.com/astro)

## Local
Run `npm install` and `npm run dev`

## Components Features
- See list of series: Home page with all the series uploaded to the platform, with their respective name, image, category and rating.
- Details of a series: When clicking on a series, all the information is displayed, with description, seasons, chapters, rating, etc.
- Rate series: In the details view it is possible to rate the series, from 1 to 5 stars.
- Upload/Create series: Form to create a new series in the database, filling in all the necessary values. This way every user can upload a series to recommend it to the community.
- Filters: It is possible to search for specific series by filtering streaming services.
- Login/SignUp: The application manages user authentication to enter the page. You can register with a simple form with username and password and then log in with those credentials.

## Stack

- Astro
- React
- JavaScript
- TailwindCSS
- DaysiUI
- SupaBase
