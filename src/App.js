import React from 'react';
import logo from './logo.svg';
import {  Hidden,AppBar,Tabs,Tab,Container, Button, Box, Grid, Typography, Paper, ListItem, ListItemText, ListItemIcon, List } from '@material-ui/core/';
// import { makeStyles } from '@material-ui/core/styles';
import './App.css';
// import CenteredTabs from './Components/tabs.js';  
import img from './20191110d_155427.jpg';
import resume from './MohammadAminAbtahi.pdf';
import keyboard from './1440.png';
const at = '[at]';
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
const SoftSkills = [{ skill: 'Problem-solving', Level: '4' },
  { skill: 'Communication', Level: '5' },
  { skill: 'Teamwork', Level: '5' },
  { skill: 'Adaptability', Level: '4' },
  { skill: 'Creativity', Level: '4' },
  { skill: 'Work Ethic', Level: '5' },
  { skill: 'Time Management', Level: '5' },
  { skill: 'Leadership', Level: '4' },
]
const Education = [{ since: '2018', Title: 'B.E. at Ghiaseddin Jamshid Kashani University', description: 'Ghazvin, Iran', }, { since: '2019', Title: `On the top 1% in the Master's Entrance Exam `, description: `On the top 1% of the entire participants in the Master's Entrance Exam (ranked 519 out of over 614000  participants)`, }, { since: 'Present', Title: 'MSc at Khaje Nasir Tousi University', Place: 'Tehran, Iran', description: 'The 1256th University of the World,15th of Iran', }]
const AboutMe = [`Experience in Agile methodology of Scrum and Waterfall model.`,`Expertise in using Rally to manage Scrum/Agile sprints and user stories.`,`Ability to exercise independent judgment, project management skills and proficiency in planning.`,`Capability to manage multiple projects and/or tasks and adept new technologies with a minimal learning curve.`,`Excellent problem-solving skills with a strong technical background and good interpersonal skills.`,`Quick learner and excellent team player, ability to meet deadlines and work under pressure.`,]
const workingexperience = [{
  Since: '2019',
  Title: 'Rubika',
  CompanyType:'LLC',
  Description: `Rubika became Iran's most downloaded app in 2019 with an estimated 30 million downloads`,
  // Rubika has been downloaded about 30 million times in the Iran',
  Position: 'Full-Stack Developer',
  Environment: `HTML5, CSS3, LESS, JavaScript, Reactjs, Restful API, Node.js, Mongo DB, AGILE, Material UI, Rest API's, Webpack, Jasmine, NPM, GIT, JIRA.`
  , detail: [
    ' Created micro-services for decisions, mandates, meetings, and documents using node.js, And deployed the docker containers.',
    ' Worked with NPM commands and using package.json for managing dependencies and dev - dependencies of NodeJS applications.',
    ' Built a single page application with loading multiple views using route services and adding more user experience.',              
             ' Planned and implemented backup and recovery of the Mongo databases.',           
             ' Developed and retrieved No-SQL data using Mongo DB.',           
             ' Used GIT for source control and JIRA for tracking purposes.',      
             ' Worked within an AGILE team environment and participated in multiple scrum meetings to discuss planning and development needs for the current cycle',             
]

}, 
 
  {
    Since: '2018',
    Title: 'Mobile Telecommunication Company of Iran (Hamrahe Aval)',
    CompanyType:'Corporation',
    Description:'The first and largest mobile operator in Iran',
    Position: 'Full-Stack Developer',
    Environment: `Node.js, ReactJS, Redux, MongoDB, GIT, HTML5, CSS3, JSON, Bootstrap, WebPack, Babel.`
    , detail: [
      ` Working end to end, requirement gathering, designing, development, and implementation for the enhancements.`,
      ` Developed well responsive single page application using ReactJS, Redux, and Node.js in combination with HTML5, CSS3, and MongoDB.`,
      ` I Used the Bootstrap framework for building a responsive website for different devices, such as desktop, laptop, mobile, and iPad.`,
      ` Developed front end user interface components using ReactJS, Redux, and JavaScript(ES6) and Integration of user-facing elements with server-side logic with Node.js, etc.`,
      ` Advanced unit tests for each new feature implemented using the Jasmine testing framework.`,
      ` Work as part of the engineering team in a Scrum environment throughout the complete design and implementation process.`,
      ` Designed REST API endpoints for communication with the client-side interface.`,
    ]

  },
  {
    Since: '2017',
    Title: 'Pardis Hooshmand Aseman',
    CompanyType:'LLC',
    Position: 'Front-End Developer',
    Environment: ` React, Redux, Visual studio code, IntelliJ, JEST, HTML5, LESS, react, Web pack, NPM, Yarn, ESLint, GIT, Rest APIs.`
    , detail: [
      ' Design and development of React-Redux framework to create component-based scalable applications.',
      ' Built Search form for a variety of search parameters with different combinations for data.',
      ' Wrote, refactored, and tested dozens of new components, including best practices for styling in a large codebase.',
      ` Developed Rule Editor React component for creating rules with conditional statements and also for populating existing rules from API's.  `,
      ` Established React-Redux framework to generate dynamic forms, panels, and pages from users configuration files.`,
    ]

  },
  
  {
    Since:'2016',
    Title: 'Shegeftangizan',
    CompanyType:'LLC',
    Position: ' Front-End Developer',
    Environment: `Node.js,Mongoose, Reactjs, MongoDB, MS SQL Server, GIT, HTML5, CSS3, JSON, Bootstrap. `
    , detail: [
` Developed, enhanced, and corrected bugs in UI using JavaScript, JQuery, Reactjs, HTML5, and CSS3.`,
` Designed and developed RESTful API for consuming in UI.`,
` Integration of user-facing elements with server-side logic with Node.js etc.`,
` Created and managed all of hosted or local repositories through GIT using Fork, Pull request, and Push.`,
` Peer code review and Unit testing, CIT(Continuous Integrated Testing) phase.`,
    ]

  },
  {
    Since: '2014',
    Title: 'Ladybird',
    CompanyType:'LLC',
    Position: ' Front-End Developer',

    Environment: `
    HTML5, CSS3, LESS, Material UI, JavaScript, Restful API, ES6, ReactJs,Node.js, Mongo DB, Agile, Bootstrap, REST API's, Webpack, Jasmine, NPM, GIT, JIRA, and Visual Studio Code.`
    , detail: [
      ` Created front end user interface using ReactJs, HTML5, LESS to interact with microservices. Used MongoDB, a NoSQL database for Data storage.Created API Gateway to communicate front end and microservices.`,
      ` Responsible for Style, look and feel of the web page with LESS that extends CSS with dynamic behavior such as variable, mixing, operations, and functions.`,
      ` Implemented Restful API from the core using NodeJs and React Framework.`,
      ` Designed dynamic client-side JavaScript codes to build web forms and simulate process for a web application, page navigation, and form validation.`,
      ` Created react reusable components and services to consume REST API's using Component-based architecture.`,
      ` Used GIT for source control and JIRA for tracking purposes.`,
      ` Also Worked within an AGILE team environment and participated in multiple scrum meetings to discuss planning and development needs for the current cycle.`,
    ]

  },
];

const worksexperiences = workingexperience.map((workItem) =>  
  <Grid item xs={12}>
    <Paper>
      <Grid container spacing={2} direction="row" justify="center"
        alignItems="center">
        <Grid item xs={12} md={1} align="center">
          <Typography variant="h4" color="primary" style={{ fontWeight: '700' }}>
    {workItem.Since}
          </Typography>
        </Grid>
        <Grid item xs={12} md={11}>
          <Grid container >
   
      <Grid item xs={12}>
      </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ fontWeight: '600' }}>
                {workItem.Position}
              
                </Typography>
      </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" style={{ fontWeight: '600' }}>
                {workItem.Title}
              

                </Typography>
      </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" style={{ fontWeight: '500' }}>
                {workItem.CompanyType}
                </Typography>
      </Grid>
      <Grid item xs={12}>
              <Typography variant="h6" >
                {workItem.Description}
                </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography variant="h6" style={{ fontWeight: '700' }}>
              Key Qualification & Responsibilities
              </Typography>
            </Grid>
      <Grid item xs={11}>
        {workItem.detail.map((detailll) =>
          <Grid container spacing={3} style={{marginLeft:'4px'}}>
            <Grid item xs={12}>
              ●{detailll}
            </Grid>
             </Grid>
             )}

            </Grid>
            <Grid item xs={12}>
              <Typography >
                <span style={{ fontWeight: '600' }}>

              Environment : 
                </span>
              {workItem.Environment}
              </Typography>
            </Grid>
             </Grid>
      </Grid>

    </Grid>
    </Paper>
</Grid>

);


const EducationsItem = Education.map((EducationItem) =>
  <Grid item xs={12} md={6}>
    <Paper style={{minHeight:'100px'}}>

      <Grid container spacing={2} style={{ minHeight: '100px' }}
        direction="row" justify="center"
        alignItems="center">
        <Grid item xs={12} md={3} align="center">
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
   
  // <Paper>
    <Grid item xs={12} sm={6}>{skillItem.skill}</Grid>
  // </Paper>
)
const SoftSkillsItem = SoftSkills.map((softSkillItem) =>
  <Grid item sm={6} xs={12}>{softSkillItem.skill}</Grid>
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
      <AppBar position="static"  style={{ borderRadius: '5px',backgroundColor:'white' }}>
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
          <Tab label="Skills" {...a11yProps(0)} />
          <Tab label="Work experience" {...a11yProps(1)} />
          <Tab label="Education" {...a11yProps(3)} />
          {/* <Tab label="About Me" {...a11yProps(2)} /> */}
         <Tab label="Contact Information" {...a11yProps(4)} />
          {/*
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>

      </AppBar>
   
      <TabPanel value={value} index={1}>
        <Grid container spacing={4}>    
              {worksexperiences}          
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={0}>
      
          <Grid container row="column">
            <Grid item xs={12}>
              <List>
                {AboutMe.map((aboutmeItem) =>
                  <ListItem>
                    <ListItemText>
                      {aboutmeItem}
                    </ListItemText>

                  </ListItem>


                )}

              </List>

</Grid>

         
          <Grid item xs={12}>
            <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
           
                <Typography variant="h4">
                  Skills
                </Typography>
            <Paper>

            <Grid container style={{padding:'10px',borderRadius:'5px'}}>
          
          {SkillsItem}
              
            </Grid>
            </Paper>
              </Grid>

           
          <Grid item item xs={12} md={6}>
            <Typography variant="h4">
              Soft skills
                </Typography>
            <Paper>
            <Grid container style={{ padding: '10px', borderRadius: '5px' }}>

              {SoftSkillsItem}

            </Grid>
            </Paper>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        <Paper>

        <Grid item xs={12} style={{
        borderRadius: '5px', padding: '20px 5px', marginTop: '10px'
        }} >
          <Typography variant="h2">
            A little bit about Me
          </Typography>
          <List>
            {AboutMe.map((aboutmeItem) =>
              <ListItem>
                <ListItemText>
{aboutmeItem}
                </ListItemText>

              </ListItem>

            
            )}
          
          </List>

        </Grid>
        </Paper>
      </TabPanel> */}
    
      <TabPanel value={value} index={3}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>

            <a href="mailto:mohammadapi@live.com?Subject=Hello%20Mohammad Amin" target="_top" style={{ textDecoration: 'none' }}>
              <Paper style={{ minHeight: '100px' }} textAlign="center">
                <Grid container style={{ minHeight: '100px' }}
                  direction="row" justify="center"
                  alignItems="center">
                  <Grid item xs={12} align="center">
                    <Typography variant="h6" textAlign="center">
                      Mohammadapi{at}Live.com
            </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </a>
          </Grid>
          <Grid item xs={12} md={6}>

            <a href="tel:+989203046020" target="_top" style={{ textDecoration: 'none' }}>
              <Paper style={{ minHeight: '100px' }} textAlign="center">
                <Grid container style={{ minHeight: '100px' }}
                  direction="row" justify="center"
                  alignItems="center">
                  <Grid item xs={12} align="center">
                    <Typography variant="h6" textAlign="center">
                  +989203046020
            </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </a>
          </Grid>
          <Grid item xs={12} md={12}>

              <Paper style={{ minHeight: '100px' }} textAlign="center">
                <Grid container style={{ minHeight: '100px' }}
                  direction="row" justify="center"
                  alignItems="center">
                  <Grid item xs={12} align="center">
                    <Typography variant="h6" textAlign="center">
                No.15, Saeedi Street, Nelson Mandela boulevard, Tehran, Iran
            </Typography>
                  </Grid>

                </Grid>
              </Paper>
          </Grid>
          {/* {EducationsItem} */}
        </Grid>


      </TabPanel>
     
      <TabPanel value={value} index={2}>
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
      <Grid container alignItems="center">
        <Grid item xs={12} style={{ backgroundImage: `url("${img}")`, height: '200px', backgroundSize: 'cover', borderRadius: '10px', textAlign: 'center' }}>
          <Grid container direction="row" justify="center"
            alignItems="center">
            <Grid item xs={12}>

              <Typography align="center" variant="h4" style={{ marginTop: '60px', color: 'white', textShadow: '1px 0px 5px black' }}>
                Mohammadapi
            <br />
                Developer / Fullstack
          </Typography>
              <Box style={{position:'relative'}}>
              <Typography style={{ position: 'absolute',top:'400', color: '#fff', textShadow: '1px 0px 5px black'}}>
                Caspian, Iran
          </Typography>
                
          </Box>
            </Grid>
            <Grid item xs={8} md={3} align="center" style={{marginTop:'4%'}}>
           <a href={resume} target="_blank">   <Button color="primary" variant="contained" fullWidth style={{ margin: 'auto' }}>
                Download
          </Button></a>
            </Grid>
          </Grid>

          {/* <Button color="primary" variant="contained" size="large">
            Read more
          </Button> */}
        </Grid>
        <Grid item xs={12} style={{
         
        }} >
          <Typography variant="h3" style={{marginTop:'10px',marginBottom:'10px'}}>
           Mohammad Amin
             
            </Typography>
          <Typography variant="h5" >
            I am a technically skilled full-stack developer with over six years of experience.
I am a self-learner and highly motivated team player with the ability to work under pressure in complex environments.
    
         </Typography>
          {/* <Button color="secondary" variant="outlined" size="large" style={{matgin:'auto'}}>
            Download
          </Button> */}
        </Grid>
        <Grid item xs={6} style={{ }} align="center">
          {/* hello */}
{/* <Hidden only="lg"> */}
          {/* <img src={keyboard} alt="image" style={{maxWidth:'100%',Width:'300px'}}/> */}
          {/* </Hidden> */}
        </Grid>
        <Grid item xs={12}>
         
          <ScrollableTabsButtonAuto></ScrollableTabsButtonAuto>
        </Grid>
      </Grid>
    </Container >
  );
}

export default App;
