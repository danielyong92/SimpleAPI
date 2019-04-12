# SimpleAPI

For this assignment, I built a simple API server and communicate with it directly over URL requests. The purpose of this API server is to hold on to a list of people born in the year 1955. In order to allow the API server full functionality over URL, we made sure all our incoming requests come in as GETs(routes not restful)

GET '/' will serve up the full collection of people born in 1955
GET '/new/:name/' will add a name into the database. So adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
GET '/remove/:name/' will delete a name from the database.
GET '/:name' will bring up the document of that particular person.
