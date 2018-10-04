import React from "react"
import {CategoriesBox} from "./CategoriesBox"
import {Leaderboard} from "./Leaderboard"
import PropTypes from "prop-types"
import {Container} from "reactstrap";
import {NavBar} from "./NavBar";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class MainDashboard extends React.Component {
    componentWillMount() {
        this.props.refreshStudents();
        this.props.getCategories();
        this.props.getLeaderboard();
    }

	render() {
		return (
		    <div>
                <Container>
                    <div id="dashboard">

                        {/* beginning of intro modal */}
                        <Modal id="introModal" isOpen={true} toggle={this.toggle}>
                          <ModalHeader toggle={this.toggle}>Welcome to Emerge!</ModalHeader>
                          <ModalBody>
                            <p>Before you can get started, we'd like to know a bit about you!</p>
                            <Form id="demographicSurvey">
                                <FormGroup row>
                                  <Label for="email" sm={2}>Email</Label>
                                  <Col sm={10}>
                                    <Input type="email" name="email" id="email" placeholder="Enter your email address." />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="birth_year" sm={2}>Year of Birth</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="birth_year">
                                      <option>2018</option>
                                      <option>2017</option>
                                      <option>2016</option>
                                      <option>2015</option>
                                    </select>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="gender" sm={2}>Gender</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="gender">
                                      <option value="M">Male</option>
                                      <option value="F">Female</option>
                                      <option value="O">Other</option>
                                      <option value="U">Decline to respond</option>
                                    </select>
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="job" sm={2}>Job</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="job">
                                      <option value="EMTB">EMT B</option>
                                      <option value="EMTA">EMT A</option>
                                      <option value="PARA">Paramedic</option>
                                      <option value="PHYS">Physician</option>
                                      <option value="OTH">Other</option>
                                    </select>                                  
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="education" sm={2}>Education</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="education">
                                      <option value="LPS">Lower primary school</option>
                                      <option value="UPS">Upper primary school</option>
                                      <option value="G10">Grade 10 or equivalent</option>
                                      <option value="G12">HSCE or grad 12</option>
                                      <option value="UND">University Degree (BSc or equivalent)</option>
                                      <option value="GRD">Post-graduate degree (MSc/MA, etc.)</option>
                                    </select>                                    
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="country" sm={2}>Country</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="country">
                                      <option value="US">USA</option>
                                      <option value="IN">India</option>
                                      <option value="NP">Nepal</option>
                                      <option value="MM">Myanmar</option>
                                      <option value="BD">Bangladesh</option>
                                    </select>                                  
                                   </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="state" sm={2}>State</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="state">
                                      <option>California</option>
                                      <option>Tamil Nadu</option>
                                    </select> 
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="years_of_experience" sm={2}>Years of Experience</Label>
                                  <Col sm={10}>
                                    <Input type="number" step="0.25" name="number" id="years_of_experience" />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="organization" sm={2}>Organization</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="organization">
                                      <option value="GVK">GVK EMRI</option>
                                      <option value="OTH">Other</option>
                                    </select>                                  
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="cardio_refresher" sm={2}>Have you completed medical/cardiovascular refresher program Y/N</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="cardio_refresher">
                                      <option>No</option>
                                      <option>Yes</option>
                                    </select>                                   
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="cardio_refresher_date" sm={2}>If yes→Date/year completed</Label>
                                  <Col sm={10}>
                                    <Input type="date" name="text" id="cardio_refresher_date" />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="obgyn_refresher" sm={2}>Completed OB/GYN Refresher Program Y/N</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="obgyn_refresher">
                                      <option>No</option>
                                      <option>Yes</option>
                                    </select> 
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="obgyn_refresher_date" sm={2}>If yes→Date/year completed</Label>
                                  <Col sm={10}>
                                    <Input type="date" name="text" id="obgyn_refresher_date" />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="trauma_refresher" sm={2}>Completed Trauma Refresher Program Y/N</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="trauma_refresher">
                                      <option>No</option>
                                      <option>Yes</option>
                                    </select> 
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="trauma_refresher_date" sm={2}>If yes→Date/year completed</Label>
                                  <Col sm={10}>
                                    <Input type="date" name="text" id="trauma_refresher_date" />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="pediatrics_refresher" sm={2}>Completed Pediatrics Refresher Program Y/N</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="pediatrics_refresher">
                                      <option>No</option>
                                      <option>Yes</option>
                                    </select>                                   
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="pediatrics_refresher_date" sm={2}>If yes→Date/year completed</Label>
                                  <Col sm={10}>
                                    <Input type="date" name="text" id="pediatrics_refresher_date" />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="leadership_refresher" sm={2}>Completed Leadership Refresher Program Y/N</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="leadership_refresher">
                                      <option>No</option>
                                      <option>Yes</option>
                                    </select>                                    
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="leadership_refresher_date" sm={2}>If yes→Date/year completed</Label>
                                  <Col sm={10}>
                                    <Input type="date" name="text" id="leadership_refresher_date" />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="internet_device" sm={2}>What device do you use most to access the Internet?</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="internet_device">
                                      <option value="COMP">Computer</option>
                                      <option value="PHON">Smartphone</option>
                                      <option value="TABL">Tablet</option>
                                    </select>      
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="internet_quality" sm={2}>How would you rate the quality of your Internet?</Label>
                                  <Col sm={10}>
                                    <select class="form-control" id="internet_quality">
                                      <option value="1">Poor/Unreliable</option>
                                      <option value="2">Adequate</option>
                                      <option value="3">Excellent</option>
                                    </select>     
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="hours_work" sm={2}>How many hours a day do you use your phone/computer for work purposes?</Label>
                                  <Col sm={10}>
                                    <Input type="number" step="0.25" name="text" id="hours_work" />
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Label for="hours_personal" sm={2}>How many hours/day do you use your phone or computer for personal purposes?</Label>
                                  <Col sm={10}>
                                    <Input type="number" name="0.25" id="hours_personal" />
                                  </Col>
                                </FormGroup>
                            </Form>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={() => this.props.submitDemographicSurvey($('#demographicSurvey').serialize())}>Submit</Button>{' '}
                          </ModalFooter>
                        </Modal>
                        {/* end of intro modal */}

                        <div>
                            <p className="section-text">CHALLENGES</p>
                            <hr />
                            <CategoriesBox 
                                is_challenge_section={true} 
                                categories={this.props.categories}
                                selectCategory = {this.props.selectCategory}
                            />
                            <p className="section-text">PRACTICE</p>
                            <hr />
                            <CategoriesBox 
                                is_challenge_section={false}
                                categories={this.props.categories}
                                selectCategory = {this.props.selectCategory}
                            />
                            <br />
                            <p className="section-text">LEADERBOARD</p>
                            <Leaderboard leaderboardResult={this.props.leaderboardResult} />
                        </div>
                    </div>
                </Container>
            </div>
		);
	}
}

MainDashboard.propTypes = {
    api: PropTypes.array
};