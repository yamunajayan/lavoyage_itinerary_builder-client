# Project Title

## Overview

This is a travel itinerary bulder app. It will build an itinerary based on users selection of country, number of days, location wants to visit. The itinerary will be created using OpenAI.

### Problem Space

If someone wants to make a travel itineray, they need to resaerch alot to come up with a good one. The use of AI in creating this will make travel stress free.

### User Profile

Anyone who wants to travel to an unknown country can use it, This will give you location information and places they can visit in that country.

### Features

1. Display initial data on popular countries and travel destinations
2. Display detailed information on selected country and must visit places
3. Build itineary based on user selection of places
4. OpenAI integration for building itinerary.

## Implementation

### Tech Stack

#### Front End

- React
- HTML
- CSS
- SASS

#### Back End

- Express.js
- Node.js
- PostGreSQL

### APIs

- OpenAI Api
- GeoAPIfy APi

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

1. Landing page - Has searchh bar, shows most popular travel destinations.
2. Country details page- Shows details of the country, location on google map, shows the location and details. Build the itineray appears after button click

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.
<img width="844" alt="Screenshot 2024-10-16 at 12 43 37 AM" src="https://github.com/user-attachments/assets/8a176ccb-855b-4462-9447-d7fbbcd12421">

<img width="485" alt="Screenshot 2024-10-16 at 12 54 14 AM" src="https://github.com/user-attachments/assets/8c58f7fc-d6d7-4994-8423-6302815b49e0">

### Data

1. Famous Countries data- Images
2. Famous places in each country

### Endpoints

1. /countries : Initail data for the landing page
2. /countries/:id : Data for each country based on id

## Roadmap

1. Week 1

- Build the front end
- Build database tables for initial landing page
- Build back-end server
- Use mock data to build itinerary
- Start with Open AI integration

2. Week 2

- Build Open AI integration
- Deploy the font end and backend using Heroku, Netlify

## Future Implementations

1. Incoroprate rarefinds from each country
2. Filter based on type of vacation, road trip, adventure etc
3. Add tripadvisor comments
4. User login to save the itinerary, and leave comments on countries and places
