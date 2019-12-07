import React from 'react';
import logo from './logo.svg';
import {  Hidden,AppBar,Tabs,Tab,Container, Button, Box, Grid, Typography, Paper, ListItem, ListItemText, ListItemIcon, List } from '@material-ui/core/';
// import { makeStyles } from '@material-ui/core/styles';
import './App.css';
// import CenteredTabs from './Components/tabs.js';  
import img from './20191110d_155427.jpg';
import keyboard from './1440.png';
const at = '{at}';
const Skills = [
  { skill: 'Python', level: '4' },
  { skill: 'Javascript', level: '4' },
  { skill: 'Node.js', level: '4' },
  { skill: 'MongoDB', level: '4' },
  { skill: 'SQL Server', level: '4' },
  { skill: 'React Redux', level: '4' },
  { skill: 'Bash Script', level: '3' },
  { skill: 'Docker', level: '4' },
  { skill: 'Redis', level: '4' },
  { skill: 'Rest API', level: '4' },
  { skill: 'Nginx', level: '3' },
  { skill: 'Firebase', level: '4' },
  { skill: 'Angular', level: '3' },
  { skill: 'Phaser 3', level: '2' },
  { skill: 'LESS', level: '4' },
  { skill: 'Webpack', level: '4' },
  { skill: 'Material Design', level: '4' },
  { skill: 'JQuery', level: '4' },
  { skill: 'Jira', level: '4' },
  { skill: 'Git', level: '4' },

]
const SoftSkills = [{ skill: 'Problem-Solving', Level: '4' },
  { skill: 'Communication', Level: '5' },
  { skill: 'Teamwork', Level: '5' },
  { skill: 'Adaptability', Level: '4' },
  { skill: 'Creativity', Level: '4' },
  { skill: 'Work Ethic', Level: '5' },
  { skill: 'Time Management', Level: '5' },
  { skill: 'Leadership', Level: '4' },
]
const Education = [{ since: '2018', Title: 'Ghiaseddin Jamshid Kashani University', description: 'Ghazvin, Iran', }, { since: '2019', Title: `On the top 1% in the Master's Entrance Exam `, description: `On the top 1% of the entire participants in the Master's Entrance Exam (ranked 446 out of over 614000  participants)`, }, { since: 'Current', Title: 'Khaje Nasir University',Place:'Tehran, Iran' ,description: '1256th University of the World,15th of Iran', }]
const EducationsItem = Education.map((EducationItem) =>
  <Grid item xs={6}>
    <Paper style={{minHeight:'100px'}}>

      <Grid container spacing={2} style={{ minHeight: '100px' }}
        direction="row" justify="center"
        alignItems="center">
        <Grid item xs={3} align="center">
          <Typography variant="h4" color="primary" style={{fontWeight:'700'}}>
        {EducationItem.since}

          </Typography>
    </Grid>
      <Grid item xs={9} >
          <Grid container style={{ minHeight: '130px' }}
            direction="column" justify="center"
            alignItems="center">
          <Grid item xs={11}>
              <Typography variant="h5" style={{ fontWeight: '600' }}>
                
        {EducationItem.Title}
            </Typography>
          </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle1">

        {EducationItem.description}
              </Typography>
          </Grid>

        </Grid>
    </Grid>
    </Grid>  
    </Paper>
  </Grid>
);
const SkillsItem = Skills.map((skillItem) =>
   <Grid item xs={6}>{skillItem.skill}</Grid>
)
const SoftSkillsItem = SoftSkills.map((softSkillItem) =>
  <Grid item xs={6}>{softSkillItem.skill}</Grid>
);
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}


function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

function ScrollableTabsButtonAuto() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs"
          centered
        >
          <Tab label="About Me" {...a11yProps(2)} />
          <Tab label="Skills" {...a11yProps(0)} />
          <Tab label="Working experience" {...a11yProps(1)} />
          <Tab label="Education" {...a11yProps(3)} />
         <Tab label="Contact Me" {...a11yProps(4)} />
          {/*
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>

      </AppBar>
   
      <TabPanel value={value} index={2}>
         Working Exprerience
      
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={2}>
              
                </Grid>
              <Grid item xs={10}>
   ● Created micro-services for decisions, mandates, meetings and documents using node.js and ExpressJS. And deployed the docker containers.
       <br />      
             ● Worked with NPM commands and using package.json for managing dependencies and dev-dependencies of NodeJS applications.
       <br />      
             
             ● Built a single page application with loading multiple views using route services and adding more user experience.
       <br />      
             
             ● Planned and implemented backup and recovery of the Mongo databases.
       <br />      
             
             ● Developed and retrieved No-SQL data using Mongo DB.
       <br />      
             
             ● Used GIT for source control and JIRA for tracking purposes.
       <br />      
             
             ● Worked within an AGILE team environment and participated in multiple scrum meetings to discuss planning and development needs for the current cycle
       <br />      
             
             Environments: HTML5, CSS3, LESS, JavaScript, Reactjs, Restful API, Node.js, Mongo DB, AGILE, Material UI, REST API's, Webpack, Jasmine, NPM, GIT, JIRA.
                </Grid>
</Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={2}
              >
                2018
                </Grid>
              <Grid item xs={10}>
               ● Created front end user interface using ReactJs, HTML5, LESS to interact with microservices. Used MongoDB a NoSQL database for Data storage. Created API Gateway to communicate front end and microservices.
        <br />      

 ● Responsible for Style, look and feel of the web page with LESS that extends CSS with dynamic behavior such as variable, mixing, operations and functions.
        <br />      
 
 ● Implemented Restful API from the core using NodeJs and react Framework.
        <br />      
 
 ● Designed dynamic client-side JavaScript codes to build web forms and simulate process for a web application, page navigation, and form validation.
        <br />      
 
 ● Created react reusable components and services to consume REST API's using Component-based architecture.
        <br />      
 
 ● Used GIT for source control and JIRA for tracking purposes.
        <br />      
 
 ● Also Worked within an AGILE team environment and participated in multiple scrum meetings to discuss planning and development needs for the current cycle.
        <br />      
 
 Environments: HTML5, CSS3, LESS, Material UI, JavaScript, Restful API, ES6, ReactJs,Node.js, Mongo DB, Agile, Bootstrap, REST API's, Webpack, Jasmine, NPM, GIT, JIRA, and Visual Studio Code.
        <br />      
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={2}
                    >
                      2019
                </Grid>
                    <Grid item xs={10}>
     
            ● Developed, enhanced and corrected bugs in UI using JavaScript, JQuery, Reactjs, HTML5, and CSS3.
        <br />      

● Designed and developed RESTful API for consuming in UI.
        <br />      

● Integration of user-facing elements with server-side logic with Node.js and Express etc.
        <br />      

● Created and managed all of hosted or local repositories through GIT using Fork, Pull request and Push.
        <br />      

● Peer code review and Unit testing, CIT (Continuous Integrated Testing) phase.
        <br />      

Environment: Node.js, Express, Mongoose, Reactjs, MongoDB, MS SQL Server, GIT, HTML5, CSS3, JSON, Bootstrap.     
        <br />      
                 ● Designed and developed RESTful API for consuming in UI.
        <br />      
                 
                 ● Integration of user-facing elements with server-side logic with Node.js and Express etc.
        <br />      
                 
                 ● Created and managed all of hosted or local repositories through GIT using Fork, Pull request and Push.
        <br />      
                 
                 ● Peer code review and Unit testing, CIT (Continuous Integrated Testing) phase.
        <br />      
                 
                 Environment: Node.js, Express, Mongoose, Reactjs, MongoDB, MS SQL Server, GIT, HTML5, CSS3, JSON, Bootstrap.             
                </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={2}
              >
                2019
                </Grid>
              <Grid item xs={10}>
             Full-Stack Javascript Developer
   <br/>
   Hamrahe Aval ( First Operator ) 
   <br/>
   
   ● Working end to end, requirement gathering, designing, development, and implementation for the enhancements.
   <br/>
   
   ● Developed well responsive single page application using ReactJS, Redux, and Node.js in combination with HTML5, CSS3, and MongoDB.
   <br/>
   
   ● I Used the Bootstrap framework for building a responsive website for different devices, such as desktop, laptop, mobile, and iPad.
   <br/>
   
   ● Developed front end user interface components using ReactJS, Redux, and JavaScript (ES6) and Integration of user-facing elements with server-side logic with Node.js and Express, etc.
   <br/>
   
   ● Developed unit tests for each new feature implemented using the Jasmine testing framework.
   <br/>
   
   ● Work as part of the engineering team in a Scrum environment throughout the complete design and implementation process.
   <br/>
   
   ● Designed REST API endpoints for communication with the client-side interface.
   <br/>
   
   Environment: Node.js, ReactJS, Redux, Express, MongoDB, GIT, HTML5, CSS3, JSON, Bootstrap, WebPack, Babel.
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={2}
              >
                2019
                </Grid>
              <Grid item xs={10}>
             Front-End Developer
   <br/>
   Pardis Hooshmand Aseman
   <br/>
   
   ● Design and development of React Redux framework to create component-based scalable applications.
   <br/>
   
   ● Created Search form for a variety of search parameters with different combinations for data.
   <br/>
   
   ● Wrote, refactored and tested dozens of new components, including best practices for styling in a large code base.
   <br/>
   
   ● Developed Rule Editor React component for creating rules with conditional statements and also for populating existing rules from API's.
   <br/>
   
   ● Created React Redux framework to generate dynamic forms, panels, and pages from users configuration files.
   <br/>
   
   Environments: React, Redux, Visual studio code, IntelliJ, JEST, HTML5, LESS, react, Web pack, NPM, Yarn, ESLint, GIT, Rest APIs.
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
          <Grid item xs={6}>
                <Typography variant="h4">
                  Skills
                </Typography>
            <Grid container style={{backgroundColor:'#fff',padding:'10px',borderRadius:'5px'}}>
          
          {SkillsItem}
              
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">
              Soft skills
                </Typography>
            <Grid container style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>

              {SoftSkillsItem}

            </Grid>
          </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={0}>
        <Grid item xs={12}>
          <Grid container>
                <Grid item xs={12}>
          <Typography variant="h3" style={{marginBottom:'10px'}}>
           Mohammadamin
             
            </Typography>
          <Typography variant="h5" >
            I am a technically skilled full-stack web developer with more than 4 years of experience.
I am a self-learner and highly motivated team player with the ability to work under pressure in complex environments.
     I am a technically skilled full-stack web developer with more than 4 years of experience.
I am a self-learner and highly motivated team player with the ability to work under pressure in complex environments.
         </Typography>
        
        </Grid>
          <List>
            <ListItem>
              <ListItemText>
                • Experience in Agile methodology of Scrum and Waterfall model.
              </ListItemText>

            </ListItem>
            <ListItem>
              <ListItemText>
                • Expertise in using Rally to manage Scrum/Agile sprints and user stories.
              </ListItemText>

            </ListItem>
            <ListItem>
              <ListItemText>
                • Ability to exercise independent judgment, project management skills and proficiency in planning.
              </ListItemText>

            </ListItem>
            <ListItem>
              <ListItemText>
                • Capability to manage multiple projects and/or tasks and adept new technologies with minimal learning curve.
             </ListItemText>

            </ListItem>
            <ListItem>
              <ListItemText>
                • Excellent problem solving skills with strong technical background and good interpersonal skills.
              </ListItemText>

            </ListItem>
            <ListItem>
              <ListItemText>
                • Quick learner and excellent team player, ability to meet deadlines and work under pressure.
                Willing to relocate: Anywhere
              </ListItemText>

            </ListItem>

          </List>

        </Grid>
        </Grid>
      </TabPanel>
    
      <TabPanel value={value} index={4}>
        <Grid container>
          <Grid item xs={12} md={4}>

        <a href="mailto:someone@example.com?Subject=Hello%20from%20web" target="_top" style={{textDecoration:'none'}}>
              <Paper style={{ minHeight: '100px' }} textAlign="center">
                <Grid container style={{ minHeight:'100px'}}
                  direction="row" justify="center"
                  alignItems="center">
                  <Grid item xs={12} align="center">
                <Typography variant="h6" textAlign="center">
           Mohammadapi {at} Live.com
            </Typography>
</Grid>
                  
                </Grid>
            </Paper>
          </a>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container spacing={4}>
          {EducationsItem}
       </Grid>
        

      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
function App() {
  return (
    <Container fixed>
      <Grid container alignItems="center" spacing={5}>
        <Grid item xs={12} style={{ backgroundImage: `url("${img}")`, height: '200px', backgroundSize: 'cover', borderRadius: '10px', textAlign: 'center' }}>
          <Grid container direction="row" justify="center"
            alignItems="center">
            <Grid item xs={12}>
              
            <Typography align="center" variant="h4" style={{ marginTop: '60px', color: 'white', textShadow: '1px 0px 5px black' }}>
             Mohammadapi
            <br />
            Developer / Fullstack
          </Typography>
          <br />
          <br />
          </Grid>
          <Grid item xs={8} md={3} align="center">
            <Button color="primary" variant="contained" fullWidth style={{ margin: 'auto' }}>
              Download
          </Button>
          </Grid>
          </Grid>
          {/* <Button color="primary" variant="contained" size="large">
            Read more
          </Button> */}
        </Grid>
        <Grid item xs={12}>

          <ScrollableTabsButtonAuto></ScrollableTabsButtonAuto>
        </Grid>
      
        <Grid item xs={6} style={{ }} align="center">
          {/* hello */}
{/* <Hidden only="lg"> */}
          {/* <img src={keyboard} alt="image" style={{maxWidth:'100%',Width:'300px'}}/> */}
          {/* </Hidden> */}
        </Grid>
       
      </Grid>
    </Container >
  );
}

export default App;
