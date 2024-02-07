/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons

import AssignmentIcon from '@material-ui/icons/Assignment';
import PaletteIcon from '@material-ui/icons/Palette';
import Add from "@material-ui/icons/Add";
import SchoolIcon from '@material-ui/icons/School';

// core components
import Footer from "./Footer.js";
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import NavPills from "./NavPills.js";
import Card from "./Card.js";
import CardBody from "./CardBody.js";
import CardHeader from "./CardHeader.js";
import Badge from "./Badge.js";
import Muted from "./Muted.js";
import Parallax from "./Parallax.js";
import Clearfix from "./Clearfix.js";
import Button from "./Button.js";

import muslim from "./assets/muslim.jpg";


import bo from "./assets/c.jpg";
import ha from "./assets/ha.png";
import a from "./assets/a.jpg";
import sa from "./assets/sa.png";
import avatar from "./assets/avatar.jpg";
import marc from "./assets/marc.jpg";
import kendall from "./assets/kendall.jpg";
import cardProfile2Square from "./assets/card-profile2-square.jpg";
import b from "./assets/b.jpg"
import profilePageStyle from "./profilePageStyle.js";

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typical from 'react-typical'
import { Divider } from 'semantic-ui-react'
import Contact from "../Contact.js"
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Parallax
        image={b}
        filter="dark"
        className={classes.parallax}

      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={muslim} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>


                  <Divider horizontal>
                   
                  </Divider>
                  <Divider horizontal>
                   
                   </Divider>
                   <Divider horizontal>
                   
                   </Divider>

                  <Divider horizontal>
                    <h5>Frontend</h5>
                  </Divider>

                  <Typical
                    steps={['JavaScript/React/ReactNative/HTML/CSS/Figma', 1000]}
                    loop={Infinity}
                    wrapper="h4"
                  />

<                 Divider horizontal>
                   
                   </Divider>
                  <Divider horizontal>
                    <h5>Backend</h5>
                  </Divider>

                  <Typical
                    steps={['Ruby/Ruby on Rails/Python/SQL/AWS/Node.js/Express.js/Git', 1000]}
                    loop={Infinity}
                    wrapper="h4"
                  />

                  <Divider horizontal>
                   
                   </Divider>

                  <Divider horizontal>
                    <h5>Web3</h5>
                  </Divider>

                  <Typical
                    steps={['DApps/Smart Contracts/Solidity/Ethereum/Blockchain', 1000]}
                    loop={Infinity}
                    wrapper="h4"
                  />

                    <Divider horizontal>
                   
                   </Divider>
                   <Divider horizontal>
                   
                   </Divider>

                  <a
                    href="https://github.com/Abbosbek-SE"
                    target="_blank"

                  >
                    <Button
                      justIcon
                      simple
                      color="github"
                      className={classes.margin5}

                    >
                      <GitHubIcon />
                    </Button>
                  </a>


                  <a
                    href="https://drive.google.com/file/d/1R00v5N0vp5Qt5quh5Dkc8pkjL5-TQkaE/view?usp=sharing"
                    target="_blank"

                  >
                    <Button tiny>
                      Resume
                    </Button>

                  </a>

                </div>
              </div>
              <div className={classes.follow}>
                <Tooltip
                  id="tooltip-top"
                  title="Add me on LinkedIn"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <a
                    href="https://www.linkedin.com/in/abbosbek-muydinboev-7785b11b2"
                    target="_blank"

                  >
                    <Button
                      justIcon
                      round
                      color="primary"
                      className={classes.followButton}
                    >
                      <Add className={classes.followIcon} />
                    </Button>
                  </a>
                </Tooltip>
              </div>
              <Divider horizontal>
               
              </Divider>

            </GridItem>
          </GridContainer>
          
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[

                {
                  tabButton: "Projects",
                  tabIcon: PaletteIcon,
                  tabContent: (
                    <div>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={avatar} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + avatar + ")",
                                      opacity: "1"
                                    }}

                                  />
                                  <a
                                    href="https://b-project-a2a2c.web.app/"
                                    target="_blank"

                                  >
                                    <Button>Website</Button>
                                  </a>
                                  <a
                                    href="https://youtu.be/Mn1PMwe5VYo"
                                    target="_blank"

                                  >
                                    <Button>Demo</Button>
                                  </a>
                                  <a
                                    href="https://github.com/Abbosbek-SE/salam"
                                    target="_blank"

                                  >
                                    <Button>GitHub</Button>
                                  </a>
                                  
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Salam(GroupVideoChat)
                                  </h4>
                                  <Muted>
                                    <p>React, Firebase, Node.js, Express, Socket.IO, Material UI, Semantic UI, Bootstrap</p>
                                  </Muted>
                                  <p className={classes.description}>
                                    Salam Web App offers realtime social-networking between your teams, friends and co-workers,
                                    allowing users to have video and chat, share their screen, etc.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={marc} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + marc + ")",
                                      opacity: "1"
                                    }}
                                  />
                                    <a
                                    href="https://youtu.be/RexEOE_rqKM"
                                    target="_blank"

                                  >
                                    <Button>Demo</Button>
                                  </a>
                                  <a
                                    href="https://github.com/Abbosbek-SE/Fifa-CLI-app"
                                    target="_blank"

                                  >
                                    <Button>GitHub</Button>
                                  </a>
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    FIFA CLIApp
                                  </h4>
                                  <Muted>
                                    <p>Ruby, ActiveRecord(ORM), SQLITE3</p>
                                  </Muted>
                                  <p className={classes.description}>
                                  CLIApp with full CRUD functionality runs on CLI and built with vanilla Ruby
                                  <br />
                                  * Created application using ActiveRecord(ORM) and SQLITE3
                                  <br/>
                                  * Constructed full CRUD actions for users utilizing FIFA API
                                  <br/>
                                   * Used RubyGems to distribute more  functionality to CLIApp
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={kendall} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + kendall + ")",
                                      opacity: "1"
                                    }}
                                  />
                                    <a
                                    href="https://youtu.be/77VnAEHpjtM"
                                    target="_blank"

                                  >
                                    <Button>Demo</Button>
                                  </a>
                                  <a
                                    href="https://github.com/Abbosbek-SE/module-2-project"
                                    target="_blank"

                                  >
                                    <Button>GitHub</Button>
                                  </a>
                                </CardHeader>
                              </GridItem>
                              
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Active
                                  </h4>
                                  <Muted>
                                    <p>Ruby on Rails, HTML5, CSS3</p>
                                  </Muted>
                                  <p className={classes.description}>
                                  active. was inspired by its creators who believe in the importance of an agile, athletic lifestyle. With a series of features, including: Assessment, where one is able to gain knowledge regarding an individual's overall health, as well as WorkoutLogs/RecoveryLogs, which enables one to keep track of movement from a selection of our comprehensive list of options, a user has the ability to attain their health goals, regardless of experience level.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={cardProfile2Square} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage:
                                        "url(" + cardProfile2Square + ")",
                                      opacity: "1"
                                    }}
                                  />
                                  <a
                                    href="https://youtu.be/ndVnQOLn5aE?si=TMkGkXBToEI6EDhW"
                                    target="_blank"

                                  >
                                    <Button>Demo</Button>
                                  </a>
                                 
                                </CardHeader>
                              </GridItem>
                              
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Niyba
                                  </h4>
                                  <Muted>
                                    <h6>Afterhour Food Delivery App | React, React Native, Node.js, Java, MongoDB, Docker, SQL, AWS</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Android/IOS mobile app/WebApp
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  )
                },
                {
                  tabButton: "Certificates",
                  tabIcon: SchoolIcon,
                  tabContent: (
                    <GridContainer justify="center">
                      
                      <GridItem xs={12} sm={12} md={3}>
                      <a
                                    href="https://www.udemy.com/certificate/UC-b604bf5e-7ffd-4857-8a70-c56663bc4a60/"
                                    target="_blank"

                                  >
                                    <Button>Udemy</Button>
                                  </a>
                        <img
                          alt="..."
                          src={a}
                          className={navImageClasses}
                
                        />
                        <a
                                    href="https://certificate.algoexpert.io/BlockchainExpert%20Certificate%20BCE-6c0d5e6025"
                                    target="_blank"

                                  >
                                    <Button>AlgoExpert.io</Button>
                                  </a>
                        <img
                          alt="..."
                          src={bo}
                          className={navImageClasses}
                        />

                    
                      </GridItem>

                      <GridItem xs={12} sm={12} md={3}>
                      <a
                                    href="https://drive.google.com/file/d/13DeRJqlR3lsUKprbECSc5xxPPHoUvjG7/view?usp=sharing"
                                    target="_blank"

                                  >
                                    <Button>Flatiron School</Button>
                                  </a>
                        <img
                          alt="..."
                          src={ha}
                          className={navImageClasses}
                        />
                      </GridItem>
                        
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Blogs",
                  tabIcon: AssignmentIcon,
                  tabContent: (
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={7}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Upcoming Blogs</h4>
                        <GridContainer className={classes.collections}>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + sa + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge
                                  color="warning"
                                  className={classes.badge}
                                >
                                  {/* January 2021 */}
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    {/* Data Structures and Algorithms */}
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + sa + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="info" className={classes.badge}>
                                  {/* January 2021 */}
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    {/* SQL */}
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + sa + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="danger" className={classes.badge}>
                                  {/* January 2021 */}
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    {/* React Native */}
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + sa + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge
                                  color="success"
                                  className={classes.badge}
                                >
                                  {/* January 2021 */}
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    {/* Firebase */}
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={2}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Stats</h4>
                        <ul className={classes.listUnstyled}>
                          <li>
                            <b>0</b> Current Blogs
                          </li>
                          <li>
                            <b>4</b> Upcoming Blogs
                          </li>
                          <li>
                            <b>0</b> Comments
                          </li>
                          <li>
                            <b>0</b> Likes
                          </li>
                        </ul>
                        <hr />
                        <h4 className={classes.title}>About this work</h4>
                        <p className={classes.description}>
                          Currently, I removed all blogs that I had already published. I am upgrading them :)
                        </p>
                        <hr />
                        <h4 className={classes.title}>Focus</h4>
                        <Badge color="primary">Programming Languages and Frameworks</Badge>
                        <Badge color="rose">Data Structures and Algorithms</Badge>
                      </GridItem>
                    </GridContainer>
                  )
                }
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <Footer
        content={
          <div>
            <Divider horizontal>
              Contact
            </Divider>
            <Contact />
            <Divider horizontal>
              
            </Divider>
           
            {/* <Button>
              <EmailIcon />
            amuygplex@gmail.com
            </Button> */}
            <Divider horizontal>
            </Divider>
          </div>

        }
      />
    </div>
  );
}
