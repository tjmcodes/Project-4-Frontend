<div align="right">
 <h2>General Assembly - Software Engineering Immersive
 <img width=35px src="https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png" />
  </h2>
</div>
 
## Project 4 - Full-stack Backend / Frontend
 
Venues and Artists is an application which allows two types of users; artists and venues to connect with each other. Venues can book artists and artists can book venues. It works on the basis of venues recommending artists and artists recommending venues. 
 
<div align="center">
<a href="https://ibb.co/sbPtFNB"><img src="https://i.ibb.co/FmWnByP/Venues-Artists-Landing-page.png" alt="Venues-Artists-Landing-page" border="0"></a>
</div>
 
### Link to live site: 
https://venuesandartists.netlify.app/
<br/>
 
### Login credentials
<br/>
 
Please feel free to use the below credentials to login when viewing the project
<br/>
 
*ARTIST LOGIN:*
 
Email:
testartist@testartist.com
 
Username:
testArtist
 
Password:
Testing1,2,3
 
<br/>
<br/>

*VENUE LOGIN:*
 
Email:
testvenue@testvenue.com
 
username:
testVenue
 
 
Password:
TestUser1!
 
 
<br/>
<br/>
 
 
### Contents 
1. [Project Overview](#projectoverview)
2. [API / CDN](#api)
3. [Instructions to install](#instructions)
4. [Code Installation](#code-installation)
5. [Technologies used](#tech-used)
6. [Planning](#planning)
7. [Whiteboarding](#whiteboarding)
8. [Project Management](#project-management)
9. [Creating the Backend](#creating-the-backend)
10. [Creating the Frontend](#creating-the-frontend)
11. [Challenge One - Populating user information](#feature-one)
12. [Challenge Two - Posting genre types](#feature-two)
13. [Wins](#wins)
14. [Challenges](#challenges)
15. [Bugs](#bugs)
16. [Future Improvements](#future-improvements)
17. [What have I learned?](#what-have-i-learned)
18. [Authors](#authors)

 
<br/>
<br/>
 
 
<div id='projectoverview'></div>
 
### The Overview
This fourth and last project at GA involved building a full stack web application as a pari in just over two weeks (part-time schedule). It utilises python and flask as a backend and JavaScript, React and TailwindCSS on the frontend. The application was based on two user models being able to interact with each other; a directory of artists and venues. It is reliant on users signing up with their details, and to make the experience engaging the application features a sign up form that is similar to typeform multi page sign up form. 
 
<br/>

<div id='api'></div>
 
### APIs Used:
 
Cloudinary
“Cloudinary provides a secure and comprehensive API for easily uploading media files from server-side code, directly from the browser or from a mobile application. You can either upload using Cloudinary's REST API or one of Cloudinary's client libraries (SDKs), which wrap the upload API and simplify integration with web sites and mobile applications. Once uploaded, you can manage your assets using the Admin API and automatically deliver them, applying smart optimizations and transformations.” Cloudinary Docs 2022

<br/>
 
<div id='instructions'></div>
 
### Instructions to install
 
I recommend that you use the deployed version here but if you do want to run it locally you will need to sign up for an API key from the API provider listed above. I also assume that you have an up to date version of node, Python, and NPM on your machine. 

<br/>

<div id='code-installation'></div>
 
### Code Installation:
Clone or download this repo and the MERN-Frontend (provide link here) repo then in your Terminal, run the following commands:
BACKEND:
Fork and clone this repository
$ cd into the project directory.
$ pipenv i to install dependencies.
$ create .env file and paste your cloudinary key in
$ If you would like examples of artists and venues posted:  $ pipenv run python seed.py to fill the database with example data and users.
$ start the back-end server using flask; $ pipenv run flask run
 
 
FRONTEND:
Fork and clone this repository
$ cd into the frontend directory
$ npm i to install dependencies.
$ create .env file and paste your cloudinary key in
$ mv example.env .env to rename file.
$ cd .. To move back to the backend folder.
$ npm run start Navigate to localhost:6000 in your browser (Chrome Recommended).

<br/>

<div id='tech-used'></div>
 
### Technologies Used
 
**Server**: 
Node.js
Express.js
PostgreSQL
Flask
Heroku
Insomnia
 
**Client**:
HTML5
JavaScript (ES6)
React
Netlify
 
**Styling:**
TailwindCss
 
**GitHub**
GitHub Flow (using feature branches and relating commits to Jira Tickets)
 
**Productivity**
Excalidraw
Miro
Figma
 
**Project Management**
JIRA
 
<br/>
<br/>
 
 
## APPROACH
<div id='planning'></div>
 
### Planning and Research
 
After learning whether this project could be a solo or group project, I was keen to work as a pair based on previous successful collaboration. This was the last project of the course and I wanted to maximise my learning experience by utilising working as a team to best prepare me for working as a team in the future incorporating communication skills, being held accountable for taking ownership on certain parts of the projects and reporting to a team member. 
 
To get started, we discussed and planned what bucket we would use for storing profile images and gallery images that users would post. We spent some considerable time exploring AWS S3 but due to the complexities involved, we decided we would do this as a stretch goal as we were both familiar with the Cloudinary widget tool from the previous project. 
 
We both took the time to research what we could use as technologies to enhance our app and since realising early on that our models would be quite involved, I looked into dynamic form options to create a more easy to use/engaging sign up form for users to sign up with. 
 
<div align="center">
<a href="https://ibb.co/547s6Bn"><img src="https://i.ibb.co/MSXPsMG/Register-Form.png" alt="Register Form" border="0"></a>
</div>

<br/>

 
I pitched the idea of using the TypeForm multi-page library and whilst I was able to implement this on a webpage, I was not able to access the information posted from my user account on TypeForm due to needing a paid account to access api and sdk.
We agreed to make it clean looking and believed that it would be possible to create our own form by either using different React Routes on the frontend for each of the questions, or setting React States for each question. 
 
To learn from the previous project where the styling suffered, some time was spent on considering the user interface. Using the Figma design option was useful to create components and start thinking about how to structure details that would need to be in the backend. I researched Tailwind and practised how to set this up so that we can be mindful when returning our jsx in React. 


<div align="center">
 <a href="https://ibb.co/2W3zHVW"><img src="https://i.ibb.co/WGvrj8G/Styling-Landing-Page.png" alt="Styling Landing Page" border="0"></a>
</div>

<br/>
<br/>
 
<div id='whiteboarding'></div>

### Whiteboarding
 
We worked collaboratively to create a wireframe for our project using excalidraw. This allowed us to pitch ideas quickly for us to decide on what will be implemented for MVP. 
<br/>
 
<div align="center">
  <a href="https://ibb.co/DG7NmTr"><img src="https://i.ibb.co/TKHZJdW/Project3-wireframe.png" alt="Project3 wireframe" border="0"></a>
</div>

<br/>
<br/>
 
After establishing some ideas about what the app could be, we used Figma to map out the user experience. This then allowed us to think more about what data would be stored in our databases.
<br/>
 
<div align="center">
 <a href="https://ibb.co/s9dhY8C"><img src="https://i.ibb.co/pjBgFYQ/Venues-and-Artists-UX.png" alt="Venues and Artists UX" border="0"></a>
</div>

<br/>
<br/>
 
Using the Quick Database Diagrams app, allowed us to decide on what tables we would create which allowed us to think deeply about what our models would be. 

<br/>
 
<div align="center">
<a href="https://ibb.co/GtqmcD1"><img src="https://i.ibb.co/WPLCgXd/Quick-DBD-Venues-and-Artist.png" alt="QuickDBD-Venues and Artist" border="0"></a>
</div>

<br/>
<br/>
 
<div id='project-management'></div>
 
### Project management
 
Jira proved to be a powerful tool to use in which we were able to organise Epics and Issues into two sprints. The first sprint was for building the backend and the second for the frontend.
 
</br>
 
<div align="center">
  <a href="https://ibb.co/6tNcBQC"><img src="https://i.ibb.co/xg3KHZT/Project-3-Jira-overview.png" alt="Project-3-Jira-overview" border="0"></a>
</div>

<br/>
 
Wins: As we had previously worked as a pair before, it was a lot easier to plan the project. We knew what tools to use, and were able to plan successfully thinking about the whole project. The user experience, user interface, the backend and frontend as well as identifying what would be stretch goals. 
 
</br>
 
<div align="center">
  <a href="https://ibb.co/rkxPD3s"><img src="https://i.ibb.co/y06THpS/Project-3-comments-jira.png" alt="Project-3-comments-jira" border="0"></a>
</div>
 
</br>
</br> 
 
<div id=’creating-the-backend'></div>
 
### Creating The Backend
We started as a pair to set up the backend and it was only when we started to look at models, serialisers, controllers that we would divide up that I would take artists components and Luke would take venues.
 
Wins: This worked well as it meant we could work together and be efficient, saving time by focusing on our tasks. 
Challenge: As I was not in my usual office set up, I found that by only having one screen made it hard to refer to another screen for my notes, accessing liveshare and referencing code using zoom share. It made me appreciative of the set up I have in my home. 
 
I created the core artists routes for the API (the models, serialisers and controller). 
This was the backbone of the project and so we spent time working together on our respective components to ensure that it was logically structured and that all of the required information was included in our models.
 
</br>
 
```py
class ArtistModel(db.Model, BaseModel):
 
   __tablename__ = "artists"
 
   username = db.Column(db.Text, nullable=False, unique=True)
   email = db.Column(db.Text, nullable=False, unique=True)
  
   artistName = db.Column(db.Text, nullable=False, unique=False)
   profileImage = db.Column(db.Text, nullable=False, unique=False)
   genre = db.Column(db.Text, nullable=False, unique=False)
  
   location = db.Column(db.Text, nullable=False, unique=False)
   travel = db.Column(db.Integer, nullable=False, unique=False)
   price = db.Column(db.Integer, nullable=False, unique=False)
   websiteUrl = db.Column(db.Text, nullable=False, unique=True)
   videoUrl = db.Column(db.Text, nullable=False, unique=True)
   optionUrl = db.Column(db.Text, nullable=True, unique=True)
   musicUrl = db.Column(db.Text, nullable=False, unique=True)
   backgroundCardImage = db.Column(db.Text, nullable=False, unique=False)
   galleryImage1 = db.Column(db.Text, nullable=False, unique=False)
   galleryImage2 = db.Column(db.Text, nullable=True, unique=False)
   galleryImage3 = db.Column(db.Text, nullable=True, unique=False)
   bio = db.Column(db.Text, nullable=False, unique=True)
   socialMediaUrl1 = db.Column(db.Text, nullable=False, unique=True)
   socialMediaUrl2 = db.Column(db.Text, nullable=True, unique=True)
   socialMediaUrl3 = db.Column(db.Text, nullable=True, unique=True)
 
```
 
</br>
 
We worked together to create user registration and login. We wanted to ensure that only users who were registered and logged in could perform certain functions therefore we placed these secure routes for deleting, updating, commenting. The secure route was authenticated using a bearer token which was assigned to the user at login; this was implemented using the Python JsonWebToken library.
 
```py
# ! Password field to apply hash
   password_hash = db.Column(db.Text, nullable=True)
 
   @hybrid_property
   def password(self):
       pass
 
   # ! We then use this password function as a decorator.
   # ! Called by Flask SQLAlchemy when the model gets created, BEFORE saving to the DB.
   @password.setter
   def password(self, password_plaintext):
       print("inside artist password hash method")
       # ! Write our code to hash the password. It will give us back an encoded pw
       encoded_pw = bcrypt.generate_password_hash(password_plaintext)
       # ! The decoded password, that we actually want to store.
       self.password_hash = encoded_pw.decode('utf-8')
 
   def validate_password(self, plaintext_password):  
       return bcrypt.check_password_hash(self.password_hash, plaintext_password)
 
 
```py
def generate_token(self):
       payload = {
           # timedelta(days=1) --> you can change this to do different amount
           "exp": datetime.utcnow() + timedelta(days=1),
           "iat": datetime.utcnow(),
           "sub": self.id,
       }
  
       # Get the token
       token = jwt.encode(
           payload,
           secret,
           algorithm="HS256", # keywords after the 2 positional arguments
       )
 
       return token
 
```
 
</br>
</br>
 
<div id=’creating-the-frontend'></div>
 
### Creating The Frontend

As we wanted to implement Tailwind in our project, we followed the documentation for creating a react app and installing tailwindcss. Once all the dependencies were installed we were able to display some information from our backend API. 

We initially set up the routes together, creating the components and importing them for the routes. 

We spent considerable time working on the styling for the ‘Landing Page’. This allowed us to refer to the Figma design and try to reconstruct layout and card details whilst learning how to use tailwind. The thinking behind spending time on this was so that we could reuse the styling for the other pages.

<br/>
<br/>
 
<div id='feature-one'></div>
 
### Challenge One - being able to populate users when making comments on the backend.
 
One of the challenges we had was being able to populate users information when they were making comments. This was due to the fact that there were two models and since table relationships were being referred to, we kept experiencing issues with looping.  Some time was spent on being able to establish the right table relationship without causing an infinite loop. 
After spending a few hours, revising class notes and working through methodically together, I took the time to ask our instructor for help/guidance. 

Here is an example of the help that was requested: 
“...we were able to populate the user’s info by nesting the venue schema onto the comments field posted by the venue to the artist.  However, we can’t get this working the other way (artist posting a comment to venue with the nested artist schema) due to the circular dependencies between the 2 models.
So, we have explored duplicating the artist schema (ie. artist_populate.py; ArtistPopulateSchema class which has the same information as ArtistSchema) however, we are getting stuck on where we link the relationship on the model as we keep getting the recursion error.
class VenueCommentModel(db.Model, BaseModel):
 
    __tablename__ = "venue_comments"
 
    content = db.Column(db.Text, nullable=False)
    artist_id =db.Column(db.Integer, db.ForeignKey("artists.id"), nullable=False)
    venue_id =db.Column(db.Integer, db.ForeignKey("venues.id"), nullable=False)
    # artist=db.relationship("ArtistModel", backref="artist") --> This causes the loop. 
   
RecursionError: maximum recursion depth exceeded in comparison
 
Our instructor challenged us to think about what the problem was and to break it down. 
So looks like:
VenueSchema -> VenueCommentSchema -> ArtistSchema -> ArtistCommentSchema -> VenueSchema is your loop.
Since you now know how to break a loop with an alternative schema, you need to ask yourself: What do you really need to show on the frontend? How much information do you really need to send back for where you need to call the venue endpoint? This will tell you which schema you should replace with the non-nested equivalent.
 
It turned out that we did not refer to the correct venue relationship in our comment model as we were referring to the table name of the model as opposed to referring to the db.relationship within the model.  This was a steep learning curve as it allowed us to trace through the necessary code and understand how it all works together. The naming conventions were also important too, as often this took time to understand due to not having named appropriately. 
Time was taken to rename these. 
 
```python 
 
from app import ma
 
 
from models.venue import VenueModel
 
# from serialisers.venue_comments import VenueCommentSchema
# from serialisers.venue_types import TypeSchema
 
class NestedVenueInfoSchema(ma.SQLAlchemyAutoSchema):
 
   class Meta:
       model = VenueModel
       load_instance = True
 
       exclude = (
           "password_hash",
           "username",
           "email",
           "type",
           "location",
           "address",
           "budget",
           "websiteUrl",
           "backgroundCardImage",
           "galleryImage1",
           "galleryImage2",
           "galleryImage3",
           "description",
           "fbUrl",
           "twitterUrl",
           "youTubeUrl",
           "instagramUrl",
           "created_at",
           "updated_at",
       )
 
       # load_only = ('venueName', 'title', 'role', 'profileImage')

```
 
</br>
</br>
 
<div id='feature-two'></div>
 
### Challenge Two - Posting Genre Types (many to many relationship)
 
Similar challenges presented itself with regards to establishing the many-to-many relationship in PostgreSQL, such as posting genre types when Artists signed up. 
Through troubleshooting, we were able to make requests using Insomnia to the backend. However, when trying to post from the frontend, I was not able to do this successfully using the react form. I knew that I had to set the states of the genre but I was unable to retrieve the data within the array of objects. I narrowed it down to 4 areas; the initial state, the handleChange function, the genre question and the handleSubmit function.
 
I would try many different instances, such as an array of empty string, with object and empty string, mapping through data in the handleChange. Making use of the network tab in the chrome inspect console proved to be very useful when troubleshooting this. By clicking on the requests that were being made and checking the preview, response and payload information. I referred to the Insomnia request that was successfully made and ensured that I was calling the correct data: 
 
JSON request:
</br>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/PMk8FF7/Insomnia-request.png" alt="Insomnia request" border="0"></a>
 
JSON data: 
 
<a href="https://ibb.co/Y4gCbTB"><img src="https://i.ibb.co/qL6SxFY/genre-array-of-object-s.png" alt="genre-array-of-object-s" border="0"></a>
 
 
``` js
 
const [genreType, setGenreType] = React.useState(
   { genre: "" })

```

Then when the artists enter the value in (string), this had to be included on the ‘handleChange’ function: 

```js

function handleChange(e) {

   const { name, value } = e.target

  setFormData({
     ...formData, //  This is whatever the form data was before, all it's fields.
     [name]: value,
   })

   setErrors({
     ...errors,
     [name]: '',
   })

   setGenreType({
     genre: [{ genre: (e.target.value) }],
     // genre: genres.map(genreElem => ({ genre: genreElem.value })),
     // genreArray: e.target.value,
     // genreObjects: genreArray.map(genreElem => ({ genre: genreElem.value })),
   })
   // console.log(genreType)
 }
```


Then the question had to call the handlechange function: 

```js
{Q10 ? <>
       <div className={styles.questionbox}>
         <div className={styles.titlebanner}>
           <h3 className={styles.h3}>What genre is your music?</h3>
         </div>
         <input
           placeholder="Enter genre in here"
           onChange={handleChange}
           className={styles.textinput}
           type="text"
           name="genre"
           value={formData.genre}
         />

         {errors.genre && <small className="errors">{errors.genre}</small>}
         <button onClick={postQ10} className={styles.nextbutton}>Review and submit</button>
         <button onClick={postQ10} className={styles.backbutton} value='back'><i className="fa-solid fa-arrow-left-long"></i> Previous step</button>
       </div></> : null }
```

Resulting on the updating the form on handlesubmit function: 

```js 

// F O R M   S U B M I T //
 async function handleSubmit(event) {
   event.preventDefault()
   const newFormData = {
     ...formData,
     ...genreType,
   }
   try {
     await axios.post(`${baseUrl}/artist-signup`, newFormData)
     updateButton(!button)
     setreview(false)
     setproccedlogin(true)
   } catch (err) {  

	}
}
```

 
</br>
</br>
 
<div id='wins'></div> 
 
### WINS: 
 
Planning
The planning and the preparation of the project was a huge win.  We were able to brainstorm our ideas and use the relevant productivity tools to capture everybody’s ideas. We agreed quite quickly to what we would all be working towards very early on, meaning that we could get on and start wireframing and provide some pseudo codes etc. 
 
Working as a pair to set up the backend and front end enabled us to consolidate our learning from class notes as well as learning from each other.  Working on our allocated models allowed us to work together but take ownership.  We learned the importance of communicating with one another, by checking naming conventions in order to provide consistency and to standardise areas of code we were working on.
 
 
</br>
</br>
 
<div id='challenges'></div>
 
### CHALLENGES: 
 
For the first part of the first week, I was away from my usual location and realised that the personal hotspot did not allow me to make requests using the localhost. Thankfully, I was at least able to communicate on zoom / liveshare and push/pull code. Whilst I was not able to check requests made to the API and seed data, my partner was able to and came to the conclusion that it was due to not being on private wifi connection. 

Styling was still the biggest problem for this project. Being able to implement a new framework for styling in order to show progression and learning from previous projects did not result in the expected positive outcome. 
Whilst the styling was being applied throughout the project, when it came to deployment, it did not translate the same way and resulted in inconsistency.  There were no tell signs that Tailwind Css was not behaving as expected, except when implementing a menu dropdown with @headlessui library, which was a component designed to integrate with Tailwind Css.  This was one of the last styling features I was trying to integrate before deployment. I was able to re-code the component to have it showing correctly in the live server but when it was deployed it was showing incorrectly. 
We did not have time to debug before the presentation deadline so it is on the list to investigate for future improvements to be made. 
 
 
</br>
</br> 
 
<div id='bugs'></div>
 
### BUGS:
Not able to post comments
Likes
Selecting multiple fields for posting genre types
Dashboard area

<a href="https://ibb.co/jhSTD5H"><img src="https://i.ibb.co/Mnms7h9/List-of-debugs.png" alt="List-of-debugs" border="0"></a>
 
 
<div id='future-improvements'></div>
 
### FUTURE IMPROVEMENTS:  
 
We were able to make good use of Jira when documenting stretch goals and hope to work through these to improve our app. 
 
 
<a href="https://ibb.co/rvjs3jM"><img src="https://i.ibb.co/cxBLwBt/Stretch-Goals.png" alt="Stretch-Goals" border="0"></a>
 
</br>
</br>
 
<div id='what-have-i-learned'></div> 
 
### WHAT HAVE I LEARNED? 
I realised that I had strong backend knowledge but when moving over to the frontend knowledge, I struggled to recall the use of React states and useEffects for rendering and re-rendering information needed. Working with a partner who had strong React skills was a great opportunity for me to work alongside and learn from which provided me with confidence to move forward with my own projects. 

Despite a successful start in the planning stages by successfully creating the design prototype in Figma, I have learned that when researching libraries and frameworks to use for applications, it is always useful to research and foresee any potential challenges when it comes to deploying the web app. Understanding the whole pipeline and full life cycle of developing an app, this has been one of the main learning points that I will implement moving forward. 

 
<div id='authors'></div> 

### AUTHORS

- [Luke O'Brien](https://github.com/luke-o-brien)
- [Teresa Morini](https://github.com/tjmcodes)
---
 
<!-- Stats -->
<div align='center'>
 <img height="150em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=tjmcodes&theme=vue-dark&custom_title=Languages&layout=compact">
 <img height="150em" src="https://github-readme-stats.vercel.app/api?username=tjmcodes&show_icons&theme=tokyonight">
</div>
