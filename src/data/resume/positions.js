const positions = [
  {
    company: 'Arox logistics B.V.',
    position: 'Graduate intern',
    link: 'https://www.arox.nl/',
    daterange: 'September 2020 - Febuary 2021',
    tech: 'Technologies: 5G, ROS, Visual SLAM, Python, Linux, Gazebo, PX4, Bash, Github, C++, Docker, OpenVPN, Wireguard, Wireshark, Raspberry Pi and  Arduino',
    points: [
      'I completed a 25 ECTs internship at Arox, where the first goal was to configure and test the accuracy of an Open-Source visual SLAM algorithm to locate a drone indoors based on a video feed.',
      'The second goal of the project was to create a 5G network architecture for ROS. To transmit video data from a small computer to a server nearby for further processing.',
      'I received the final grade of 8.5 for the project.',
    ],
  },
  {
    company: 'Arox logistics IT',
    position: 'Graduate reseach intern',
    link: 'https://www.arox.nl/',
    daterange: 'Ocotober 2019 - Mai 2020',
    tech: 'Technologies: ROS, Python, Visual SLAM, Linux, Gazebo, PX4, Pixhawk flight controller, Bash, Github, C++, Raspberry Pi and Arduino',
    points: [
      'Research project done in collaboration with the company. The research focused on programming controllers and a trajectory generation tool to give the drone autonomous capabilities. ',
      'The setup was then simulated in the robotics simulator Gazebo, where the autonomous capabilities were validated.',
      'The project was 30 ECTs and I received the final grade of 8.5 for the project.',
    ],
  },
  {
    company: 'University of Groningen',
    position: 'Reseach assiatant',
    link: 'https://www.rug.nl/research/discrete-technology-production-automation/?lang=en',
    daterange: 'February 2016 - March 2016',
    tech: 'Technologies: ROS, Python, Visual SLAM, Linux, Gazebo, PX4, Pixhawk flight controller, Bash, Github, C++, Raspberry Pi and Arduino',
    points: [
      'I worked for the DTPA groups to research and create an indoor autonomous drone.',
      'Architected connection between the drone onboard computer and server.',
      'Researched suitable components for a budget drone, ordered them and built prototypes.',
    ],
  },
  {
    company: 'University of Groningen',
    position: 'Web developer',
    link: 'https://www.rug.nl/research/discrete-technology-production-automation/?lang=en',
    daterange: 'Mai 2020 - September 2020',
    tech: 'Technologies: Django, Python, MYSQL server, MYSQL Workbench, JavaScript, HTML, CSS, Bootstrap, Apache web server, Github, Linux and Visual studio Code',
    points: [
      'I was tasked with creating a web portal for the faculty of science and engineering. The portal enabled students of the course control engineering to work on physical lab equipment over the internet.',
      'The back-end of the portal was written in Django with a My SQL database. The portal allowed each student to have a unique user that the teacher and teaching assistants could track and grade.',
      'Programmed software in python to interact with lab equipment, collect data and record video of the experiments, making it possible for students to access results and watch the experiment in the portal.',
      'I set up a Linux server that hosted the Django website with an Apache web server, My SQL database server for the students to access.',
    ],
  },
  {
    company: 'Annata',
    position: 'Software consultant',
    link: 'https://annata.net',
    daterange: 'July 2015 - January 2016',
    tech: 'Technologies: MorphX, SQL Server Management Studio, Microsoft Server, Power BI, Postman, SOAP API, X++ and SCRUM',
    points: [
      'Consulting car dealerships and retailers on their MS Dynamics AX workflows and making changes to forms and SSRS reports.',
      'Built for the Ford, Volvo, Citroen, Peugeot and Mazda dealerships a vehicle pre-registration tool inside MS Dynamics AX to speed up customs processing. The tool was written in X++ and communicated with the SOAP API of the Icelandic transportation agency. The tool eliminated paperwork and reduced delays for new vehicles arriving in Iceland by Sea.',
      'Worked with retail clients to set up Dynamics AX POS and customized the POS GUI.',
      'Programmed for small retail clients scripts that identified and cleaned corrupt warehouse data.',
    ],
  },
  {
    company: 'LS Retail',
    position: 'Software consultant',
    link: 'https://planet.com',
    daterange: 'June 2014 - January 2015',
    tech: 'Technologies: MorphX, SQL Server Management Studio, Microsoft Server, Power BI, X++, SCRUM and Visual Studio',
    points: [
      'Making changes to MS Dynamics AX forms and functionality.',
      'Setup and installation of MS Dynamics AX POS for retailers.',
      'Installing and setting up MS Server with MS Dynamics AX to develop POS features and customize the base suite.',
    ],
  },
  {
    company: 'City of Reykjavik',
    position: 'Counselor',
    link: 'https://reykjavik.is',
    daterange: '2008 - 2018',
    points: [
      'Going on outings with a disabled individual',
    ],
  },
  {
    company: 'Ísbíllinn ehf',
    position: 'Traveling salesman',
    link: 'https://isbillinn.is',
    daterange: 'Summer 2016, 2019',
    points: [
      'Traveling through towns and the countryside selling ice cream.',
    ],
  },
  {
    company: 'Sunny Hill Inc',
    position: 'Volunteer camp counselor',
    link: 'https://www.sunnyhillinc.org/adventure-camp',
    daterange: 'Summer 2012',
    points: [
      'The summer camp was for disabled inner city youth of St. Louis, Missouri in the United States. Mostly worked with a group of five functioning individuals or one-on-one with low functioning individuals. Received employee of the week twice for outstanding work with two severely autistic boys.',
    ],
  },
];

export default positions;
