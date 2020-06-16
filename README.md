# Car Rental Service

## Team NASA
1. Alaukika Diwanji 
2. Amit Garg
3. Nachiket Trivedi
4. Sarthak Jain

## Problem Statement
We need to built an online car rental application which will allow the users, in our case Drivers, to browse and books for Car. Our system will allow the user to register irrespective of the age limiattion as long as they have a valid Driver's License. The system will need to be hosted and available online.There are two main users for the system - Driver and the Admin. 

The Driver will register with the system, upload his Driver's License and payment details. At the time of registration, he/she will be charged with an inital membership fee for 6 months. This membership is renewable and can be terminated (non-refundable) by the driver. Once the driver is registered, they can browse vehicles, check out the pricing slabs, locations , vehicle-types available in the system and so on. The Driver can then create a booking wherein he/she enters the location, vehicle-type, date and time for his booking. The system allots the most suitable vehicle to him/her. If no vehicles are located at his/her desired location, vehicle at a nearby location is alloted. The driver can manage and modify his upcoming, ongoing and past bookings.

The Admin will carry out the addition, modification and deletion of the main elements of the system like Locations, Vehicle-types and Vehicles. The Admin is responsible to map the vehicles to the appropriate location. The Admin is responsible for maintaining all the pricing involved in the system like the price for rentals, late charges, cancellation charges. The Admin can also terminate the membership of any Driver if he/she has violated some terms or cause some serious offence. The Admin can also register with the system provided he has proper authorization from the company.

## Design Decisions
The following major decisions were taken before arriving at the mentioned tech-stack.
1. NoSQL database was opted over the traditional MySQL database, because of possible scalability in the future. Moreover, the type of data is not purely structured as there are images and documents involved. As there were more retrieval queries, NoSQL would prove as a better choice.
2. As for the frontend and backend development, Javascript was opted for as it is one of the most popular language with a rich collection of libraries and support. ReactJS was taken for frontend as it allows easy building of interactive components. NodeJS was taken for backend.
3. We decided on adding the load-balancer to the Backend as majority of the processing was carried out there. The Frontend, having comparatively lighter weight, did not need it.
4. While designing the application, we also considered scaling it so that it can accomodate more than one companies. Hence we have come up with a Company Schema which will allow the Admin to be associated and manage the vehicles, location, vehicle-types and users of a particular company.

## Our Tech Stack
1. Frontend: React JS
2. Backend: Node JS
3. Database: MongoDB Atlas
4. Deployment(for extra credit): Containerized using Docker, deployed on AWS with Auto Scaling as well as Load Balancing.

## UI Wireframe
![Admin UI Wireframe](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-team-nasa/blob/master/Diagrams/AdminUIWireframes.jpg)

![Driver UI Wireframe](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-team-nasa/blob/master/Diagrams/DriverUIWireframes.jpg)

## Architecture
![Architecture](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-team-nasa/blob/master/Diagrams/Architecture.jpeg)

## Database Diagram
![Architecture](https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-team-nasa/blob/master/Diagrams/Database%20Diagram.jpeg)

## Feature Set

The different features of the system are:
* Persistent data : The data is stored in Mongo DB Atlas and hence is available online.
* Easy and intuitive UI : The frontend is simple and interactive and is easy to use.
* Authentication and Authorization : Only the users registered in the system with proper credentials can access the system.
* Confidentiality: The password is stored in encrypted form in the database.
* Online: The system is hosted on Amazon AWS and can be accessed through a web browser by concurrent users.
* Session Management: We are maintaining the sessions and roles for the users using browser storage.

Apart from the above features, the main functionalities of the system are mentioned below:

#### Admin: 
* The system allows the users to be registered with the system only if they have the correct company code for the respective company. This will allow only the authorised users to be assigned the role of Admin. 
* The admin will be able to define the rental locations in the system. These locations will be the pickup and the drop-points for the vehicles. The admin can remove the locations as needed.
* The admin can enter details related to the vehicle-types. These vehicle-types will be viisble to the drivers. They will base their booking search based on the vehicle-types. The admin can edit and remove the vehicle-types as needed. The admin can also set and edit the hourly pricing for the different vehicle types. He/she can also define the late charges and the late cancellation charges.
* The admin can define the individual vehicles that are present in the system. These vehicles will have their characteristic details like the model, mileage, make year, service date, condition etc. They will be mapped to a particular vehicle type, such that when the Driver searches for a particular vehicle-type, a vehicle mapped to that type will be returned. Moreover, the admin can also map the vehicles to a particular rental location.
* The admin can view the drivers registered in the system and also terminate the membership of any driver, in case they have violated any terms.

#### Driver:
* The driver can register with the system only if they have provided details about their Driver's Licencse and payment details. At the time of registration, they will be charged with a 6-month membership fee. This membership details can be viewed in his/her respective profile. the driver can opt to renew his/her membership for another 6-months or terminate it. Once he/she terminated the membership, he/she will not be able to login to the system. They will need to contact the administrator in order to access their account.
* The driver can browse through the vehicles, vehicle-types and the locations present in the system.
* The Driver can make a reservation for a vehicle. He/she will enter the pickup location, date, time, vehicle type and the length of rental. The system check if there is any vehicle matching the entries of the Driver. if yes, the vehicle is alloted to the driver. If no, the vehicle in the nearby locations are checked for.
* Once a vehicle is alloted to the driver, he/she can view his/her booking. He/she can cancel his/her bookings or begin the trip. If the cancellation time is less than 1 hour from the scheduled booking, late cancellation charges are applicable.
* The driver can start his/her trip once the scheduled time has reached. He/she can end the ongoing trip and select the drop location. Once this is done, the system bills the driver as per the usage and adds any late charges if applicable.
* The driver can also view his past bookings and billing information.


## Links for the Software Engineering Boards:

Link to Journal: https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-team-nasa/blob/master/JOURNAL.md

Link to Sprint Sheet: https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-team-nasa/blob/master/Sprint%20Task%20Sheet.xlsx

Link to Project Task Board: https://github.com/gopinathsjsu/sp20-cmpe-202-sec-03-team-project-team-nasa/projects/2



## Directory Structure for the Git Repository

The directories in the Git Repository are:
* Backend : The code for the NodeJS Backend. The index.js contains the routes of the different APIs used. The package.json file contains the dependencies in the backend. The Backend can be started by implementing the commands:
> npm -i

> nodemon start

* Frontend : The code for the ReactJS frontend. The index.js contains the routes for the different components. The package.json file contains the dependencies needed for the frontend. the Frontend can be started by implementing the commands:
> npm -i

> npm start

* Diagrams : The directory contains the diagrams in the README.md file. The DriverUIWireframes and AdminUIWireframes contain the UI Wireframes. The Architecture.jpeg contains the architecture diagram for the software as well as the deployment components. The DatabaseDiagram.jpeg contains the Database Schema used in the system.

* Files:
  * Journal.md : The Project Journal which contains the weekly individual tasks, the achieved tasks and the XP Values learned.
  * README.md : The Readme markup file
  * Sprint Task Sheet.xlsx : The Excel workbook contains two sheets - one to maintain the sprints and the second sheet for the Burndown Chart.
  * Zipcar- Car Rental Service.pptx : The Presentation for the demo of the system.
