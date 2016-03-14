# Url Shortener Code Test

We'd like you to create a URL shortening service.
- It should have a route where you can send a POST request with a URL in the body, which
returns a short URL.
- When you send a GET request to a previously returned URL, it should redirect to the
POSTed URL.
- We'd also like a simple frontend that can create and display shortened URLs without
reloading the page.
- For simplicity, don't worry about persisting the URLs between restarts (ie, we don't
need it to talk to an external database).

Use whatever languages and frameworks you are comfortable with. Don't worry about getting
the whole thing working flawlessly, this is more to see how you structure a program. Please
don't spend more than a few hours on it.

## Submission

Please fork this repository, write some code and update this README with a guide of how to
run it.

The app was built in Angular JS v.1.4.4 and is making use of the Google Url Shortener API which can be found here: https://developers.google.com/url-shortener/.
More specifically, I have used the API Client Javascript library of which an example can be found here: https://developers.google.com/api-client-library/javascript/samples/samples#loading-an-api-and-making-a-request.

I have followed the Angular Style guide written by John Papa. The documentation can be found here: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

Based on my intepretation of the above instructions, I have created the following objectives as stated below: 

  Objective 1: 
   POST Long Url and Return Short Url
   Display Short Url on page without page reload

  Objective 2:
    Locally Store Short Url with Long Url. i.e.

      {
        "http://goo.gl/fbsS": "http://www.google.com",
        etc.
      }

  Objective 3: 
    Check if Short Url had been returned previously
    If so, then redirect to Long Url else GET Short Url and Return Long Url
