#README file

this is the 4th project in the nanodegree Front END developer
we need in this project to insert a url in the input , this url first we need to test it if  valid or not , if valid we need to send to the user a message show this url is valid
and he can submit the url for testing if not valid , the user should be enter another valid url
this application you can use it in this link : localhost:1515

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.



#1 Getting Started

Iam using all the steps in these courses to create the server  with npm , webpack , Express

#the second step
Is create an account in meaningcloud to get the key , this key is necessary to call the API in order to test the link and get the result,
to secure the key we put it in .env file and send it over /passcode path to the client folder to call the API

#The third step
 I have installed all the loaders and Plugins and add it to the dev and prod config file

#The forth step
Create a simple design and layouts and check the input is a valid url or Not

#the fifth step
Call the API and get answer from the meaning cloud (external link)  with the needed data (analyze the input url)

#the sixth step
Setup the service Workers

#The seventh step
Install jest and test the js files inside __test__ folder

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
