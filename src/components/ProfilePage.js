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
                    <h3>FULL - STACK  MOBILE / WEB  DEVELOPER</h3>
                  </Divider>

                  <Divider horizontal>
                    <h5>Front End && +</h5>
                  </Divider>

                  <Typical
                    steps={['<Javascript> <React> <React Native> <Redux> <CLI> <GIT>', 1000]}
                    loop={Infinity}
                    wrapper="h4"
                  />
                  <Divider horizontal>
                    <h5>Backend && +</h5>
                  </Divider>

                  <Typical
                    steps={['<Ruby> <Ruby on Rails> <Firebase> <Sinatra> <SQL>', 1000]}
                    loop={Infinity}
                    wrapper="h4"
                  />

                  <Divider horizontal>
                    <h5>Design</h5>
                  </Divider>

                  <Typical
                    steps={['<Material UI> <Semantic UI> <Bootstrap> <Ant Design> <HTML> <CSS>', 1000]}
                    loop={Infinity}
                    wrapper="h4"
                  />

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
                    href="https://www.linkedin.com/in/abbosbek-muydinboev-7785b11b2"
                    target="_blank"

                  >
                    <Button
                      justIcon
                      simple
                      color="linkedin"
                      className={classes.margin5}
                    >
                      <LinkedInIcon />
                    </Button>
                  </a>
                  <a
                    href="https://medium.com/me/stories/public"
                    target="_blank"

                  >
                    <Button tiny>
                      Medium
                    </Button>

                  </a>

                  <a
                    href="https://docs.google.com/document/d/1TPhRwwcjpv8zEfPgl9adMIs_Z1nhuUEXyDxAkCOtk0s/edit?usp=sharing"
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
                  title="Add me on Linked In"
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
                <h4>Abbosbek Muydinboev</h4>
              </Divider>

            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <h4>
            I'm a full-stack software engineer. Never stop learning and getting new skills every single day. I feel great as long as I could help people making their businesses and daily work easier and effective by creating new technologies. Like other software engineers, I press my keyboards until I could make something that amazes me. Please feel free to contact me, I am here to help and contribute to your ideas and intentions. Thank you 
            {" "}
            </h4>
          </div>
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
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Upcoming Project
                                  </h4>
                                  <Muted>
                                    <h6>BeatPete</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Android/IOS mobile app
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
                  tabButton: "Accomplishments",
                  tabIcon: SchoolIcon,
                  tabContent: (
                    <GridContainer justify="center">
                      
                      <GridItem xs={12} sm={12} md={3}>
                      <a
                                    href="https://drive.google.com/file/d/1vMQOnAS89ZMbQRZ-NVhXWsyVgR4D5FMV/view?usp=sharing"
                                    target="_blank"

                                  >
                                    <Button>University of Westminster</Button>
                                  </a>
                        <img
                          alt="..."
                          src={a}
                          className={navImageClasses}
                
                        />
                        <a
                                    href="https://drive.google.com/file/d/1iKBp57QYngTllU_LaSGhUNeuJ1Lxl7Mp/view?usp=sharing"
                                    target="_blank"

                                  >
                                    <Button>Yangiobod College</Button>
                                  </a>
                        <img
                          alt="..."
                          src={bo}
                          className={navImageClasses}
                        />

                    
                      </GridItem>

                      <GridItem xs={12} sm={12} md={3}>
                      <a
                                    href="https://drive.google.com/file/d/18JBcJwbyup05BxKhTZEAKiPjP9E2j2KA/view?usp=sharing"
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
                                  January 2021
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    Data Structures and Algorithms
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
                                  January 2021
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    SQL
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
                                  January 2021
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    React Native
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
                                  January 2021
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    Firebase
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
                          Currently, I removed all blogs that I have already published. I am upgrading them :)
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
              Work with Me
            </Divider>
            <Contact />
            <Divider horizontal>
              Special Inquiry Contact
            </Divider>
            <Button>
              <PhoneIcon />
            + 1 628 502 91 63
            </Button>
            <Button>
              <EmailIcon />
            muydinboevabbosbek@gmail.com
            </Button>
            <Divider horizontal>
            </Divider>
          </div>

        }
      />
    </div>
  );
}
