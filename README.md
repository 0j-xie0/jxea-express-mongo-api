# REST API with NodeJS Express MongoDB & Mongoose

# Installation   
•Install NodeJS v12.x.x  
•Install MongoDB v4.2.x  
•Clone this repo to your computer    
•Open terminal and navigate to repo directory    
•Install the required dependecies with: npm install  
•Create directory named: mongodb  
•Create subdirectory named: data  

# Usage   
•In a new terminal navigate to the mongodb directory    
•Start MongoDB & use data directory as db with: mongod --dbpath=data --bind_ip 127.0.0.1      
•From the first terminal start the Express server with: npm start    
•From an HTTP client make requests via the Express server to MongoDB to create update retrieve JSON data    

# Tasks Performed  
### •Used Express methods to make HTTP requests & parse incoming JSON data  
### •Created Router node modules to handle request & response routing & error handling at multiple endpoints  
••bandRouter.js  
### •Created Models via Mongoose ODM in order to interface with database   
••defined Schemas in bands.js  

# Next Steps  
### Authentication & Validation   
•Implement HTTPS  
•Implement OAuth2 with JWTs & Passport  
### React Client & Server Integration
