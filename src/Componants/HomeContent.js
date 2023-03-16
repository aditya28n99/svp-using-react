import { useState } from "react";
import React from "react";

function HomeContent() {

    const animateData =() => {

        const observer = new IntersectionObserver((all_entries) => {

            all_entries.forEach((each_entry) => {

                if (each_entry.intersectionRatio > 0) {
                    each_entry.target.classList.add("show");
                }
            })
        });
        const animate = document.querySelectorAll(".animate")
        animate.forEach((el) => observer.observe(el));

    }

    return (
        <main onLoad={animateData}>
            <section className="sections back-width card-section">
                <div className="animate" id="card1">
                    <h1 className="element-white">Vidya Pratishthan, Maharashtra</h1>
                    <p>Aims to provide quality education to the children from economically weaker sections of the society
                    </p>
                    <div><a href="#">About Us <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="cards card2 animate">
                    <i className="fa fa-building-o" aria-hidden="true"></i>
                    <h3>Shri Saraswati Vidya Mandir school, Pune</h3>
                    <p>One of the aspiring educational, cultural and social organizations in the area.</p>
                </div>
                <div className="cards card3 animate">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <h3>Students</h3>
                    <p>Majority of our students belong to the financially weaker section of the society.</p>
                </div>
                <div className="cards card4 animate">
                    <i className="fa fa-book" aria-hidden="true"></i>
                    <h3>Vidya Bharti</h3>
                    <p>We educate children based on Vidya Bharti's five principals: Music, Yoga, Sanskrit, Moral Education
                        and Physical Education.</p>
                </div>
            </section>
            <article className="articles background-pink">
                <div className="back-width" id="aboutus">
                    <img id="about-img" className="animate" src="https://vpmpune.com/img/about-img.jpg" alt="" />
                    <div id="aboutus-detail">
                        <h3 className="animate">About us</h3>
                        <h1 className="animate">Vidya Pratishthan, Maharashtra</h1>
                        <p className="animate">Vidya Pratishthan Maharashtra's Shri Saraswati Vidya Mandir school, Pune aims to
                            provide quality
                            education to the children from economically weaker sections of the society. The school caters to
                            the slum communities/ Seva Vastis around Dahanukar Colony, Kothrud, and Karvenagar. Majority of
                            our students belong to the financially weaker section of the society. Most of the parents are
                            construction workers, artisans, auto rickshaw drivers, house workers, and doing minimal jobs.
                            The parents of our students have not been fortunate enough to receive minimum essential
                            education. Despite of this, our school has seen consistent growth in admissions from the working
                            class of the society due to the quality education we provide.</p>
                        <p className="animate">The school was founded in June 1986 by social visionaries of that time, namely
                            -Late Sureshrao
                            Chandekar, Late Anna Gokhale, Late Prabhakar Nerlekar, Late Raghunath alias Tatya Acharya.</p>
                        <p className="animate">The school is now one of the aspiring educational, cultural and social
                            organizations in the area.
                            Our school is associated with Vidya Bharati. We educate children based on Vidya Bharti's five
                            principals: Music, Yoga, Sanskrit, Moral Education and Physical Education.</p>
                        <p className="animate">We also emphasize on educational subjects that are important in current times -
                            1. Computer literacy
                            2. Environmental Studies - Cleanliness
                            3. Scientific Attitude
                            4. Inculcation of good habits, Manners (Sanskar) and Physical, Mental Health

                        </p>
                        <p className="animate">Currently there are 1200 students enrolled in the school from Pre-primary to
                            Junior
                            College-Commerce. The school owns a fully furnished building at Karvenagar, Pune, and spread
                            over an area of 17000sf.</p>
                        <p className="animate">We have a staff of 65 consists of teachers and sevaks, of which, only 17 get
                            government salary.
                            Other staff members are paid by our institution.</p>
                        <p className="animate">Taking into consideration the financial conditions of the parents, we charge a
                            minimal fee of Rs.
                            5000 for the whole academic year. This creates a need for support from the people who can
                            contribute to education of needy.</p>
                    </div>
                </div>
            </article>

            <article className="articles back-width" id="article-activity">
                <h1 className="animate">Activities</h1>
                <p className="animate">Along with the curriculum directed by the state government, we also carry out various
                    activities in the school, such as:</p>
                <ol className="animate">
                    <li>Discourses by experts on various topics</li>
                    <li>Host Inter-School Elocution competition</li>
                    <li>Drawing, storytelling, essay, handwriting, sports competitions</li>
                    <li>Nurturing talent development through games - HasathKhelat Buddhi Vikas</li>
                    <li>Inculcating reading culture in collaboration with Doorstep school</li>
                    <li>Special efforts for remedial students</li>
                    <li>Education in mother tongue -Marathi; equal efforts for fluency in English</li>
                    <li>In-house training center for teachers</li>
                    <li>Spoken English from 5th Std</li>
                    <li>Annual Student Magazine - PRERNA</li>
                    <li>Lessons by young talented youth from IT sector - Seva Sahyog</li>
                    <li>Counseling to Students and their parents by Blossom Sanstha, Pune</li>
                    <li>Science project for students by Bhagini Nivedita Sanstha Pune</li>
                </ol>
            </article>
            <section className="sections background-pink">
                <div className="back-width" id="tech-edu-sec">
                    <h1 className="animate">Technical Education</h1>
                    <p className="animate">We have vocational training unit in our school for 9th and 10th. This is done to
                        build their technical skills and increase chances of better employment in future. It is done along
                        with academics and it helps them to get admission for Engineering, Diploma, ITI, and other such
                        fields. Currently, we have Mechanical and Electrical Technology Training blended with academics for
                        150 students annually. Following trainings are provided - welding, plumbing, fitting, electrical,
                        carpentry, two-wheeler repairing.
                        All these courses are conducted for a minimal fee from our students.</p>
                </div>
            </section>

            <article className="articles back-width" id="article-jr-college">
                <h1 className="animate">Junior College Commerce</h1>
                <p className="animate">We plan to start courses for 11th and 12th STD students on below lines -</p>
                <ul className="animate">
                    <li>Tally with Practice</li>
                    <li>Foreign Language Training</li>
                    <li>Bi-focal technical courses</li>
                    <li>Computer Literacy Courses</li>
                </ul>
            </article>
            <section className="sections background-pink">
                <div className="back-width" id="upcomming-projects-sec">
                    <h1 className="animate">New and Upcoming Projects</h1>
                    <ol className="animate">
                        <li className="animate">Infrastructure Development in Karvenagar campus with estimated cost of Rs. 50
                            lakhs</li>
                        <li className="animate">Re-initiation of the following government approved technical courses:</li>
                        <ol className="animate">
                            <li>Electrical wireman</li>
                            <li>Mechanical welding (Gas and Electric)</li>
                            <li>Mechanical fitter (Bench Fitter)</li>
                            <li>Automobile scooter, two-wheeler motorcycle servicing</li>
                            <li>TALLY ERP</li>
                            <li>Diesel Mechanic</li>
                        </ol>
                    </ol>
                </div>
            </section>

            <article className="articles back-width" id="article-donations">
                <h1 className="animate">Donation</h1>
                <p className="animate">We are fortunate to have received help from generous people and institutions, and we will
                    be grateful to them forever.</p>
                <p className="animate">We wish our STUDENTS TO BE PATRIOTS AND IDEAL CITIZENS OF BHARAT, and for this, all the
                    members of the institution and teachers are working with the utmost dedication, focus, and persistence.
                </p>
                <p>We seek your contribution in - Institution as follows:</p>
                <ol className="animate">
                    <li>Infrastructure Development of the School Premises</li>
                    <li>Sponsoring activities like Music, Sports, Drawing, Reading competitions</li>
                    <li>Dattak Palak Yojana - Supporting for School Fees of the most needy students</li>
                    <li>Sponsoring for the salary of the Teachers/ Sevaks</li>
                    <li>Volunteering at School under Seva- Sahyog Program</li>
                </ol>
                <p className="animate">Your Donation is exempt under Section 80G of IT act.</p>
                <p className="animate">Here are the account details - You Can give a Cheque/DD/ and Internet Banking</p>
                <table className="animate">
                    <tbody>
                        <tr>
                            <td>A/c Name:</td>
                            <td>VIDYA PRATISHTHAN MAHARASHTRA</td>
                        </tr>
                        <tr>
                            <td>A/c Number:</td>
                            <td>031220100003248 (Saving Account)</td>
                        </tr>
                        <tr>
                            <td>IFSC Code:</td>
                            <td>JSBP0000031</td>
                        </tr>
                        <tr>
                            <td>Bank:</td>
                            <td>Janata Sahkari Bank, Karvenagar Branch, Pune</td>
                        </tr>
                    </tbody>

                </table>
                <p>We request your kind co-operation and guidance.</p>
            </article>

            <section className="sections background-pink">
                <div className="back-width" id="trustee-sec">
                    <div className="t-heading animate">
                        <h1>TRUSTEE DETAILS</h1>
                    </div>
                    <table className="animate">
                        <tbody>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Name of Trustee</th>
                                <th>Designation</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Mr. Narayan Raghunath Acharya</td>
                                <td>Chairman</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Smt. Ratnaprabha Ramesh Rajhans</td>
                                <td>Secretary</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Mrs. Pratiksha Sadashiv Ranade</td>
                                <td>Member</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Mr. Umakant Vitthal Dharmadhikari</td>
                                <td>Member</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Dr. Sudhir Digambar Chandekar</td>
                                <td>Member</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="back-width" id="management">
                <div className="t-heading animate">
                    <h1>LOCAL SCHOOL MANAGEMENT COMMITEE</h1>
                </div>
                <table className="animate">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Designation</th>
                        </tr>
                        <tr>
                            <td>Mr. Narayan Raghunath Acharya</td>
                            <td>Chairman</td>
                        </tr>
                        <tr>
                            <td>Smt. Sandhya Vinayak Dambir</td>
                            <td>Secretary</td>
                        </tr>
                        <tr>
                            <td>Mr. Rajesh Bhandarkar</td>
                            <td>Treasurer</td>
                        </tr>
                        <tr>
                            <td>Smt. Bharati Anirudhh Deshpande</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Smt. Ratnaprabha Ramesh Rajhans</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Prashant Deshpande</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Chandrakant Kulkarni</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Smt. Pratiksha Sadashiv Ranade</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Smt. Urmila Uday Gujar</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Smt. Amruta Ashok Sarpotdar</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Smt. Yogini Samir Tilak</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Smt. Kanchantai Anagal</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Umakant Vitthal Dharmadhikari</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Dr. Sudhir Digambar Chandekar</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Vijay Jayram Dandekar</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Dattatray Balkrushna Gokhale</td>
                            <td>Member</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <section className="sections background-pink" id="contact-us">
                <div className="back-width" id="contact-us-heading">
                    <h1 className="align-center animate">Contact Us</h1>
                    <p className="align-center animate">Please contact us if you want to know more. We would be happy to assist
                        you further.</p>
                    <div className="animate" id="contact-boxes">
                        <div className="cb" id="cb1">
                            <h1>Our Address</h1>
                            <p>Sr.No. 11/2, Shahu Colony, Lane No. 01, Near Cummins Eng. College, Karve Nagar, Pune - 411052
                            </p>
                        </div>
                        <div className="cb" id="cb2">
                            <h1>Email Us</h1>
                            <p>vidyapratishthanm@gmail.com</p>
                        </div>
                        <div className="cb" id="cb3">
                            <h1>Call Us</h1>
                            <p>+91 20 25471977 <br /> +91 20 25470414</p>
                        </div>
                    </div>
                </div>
                <div className="back-width animate ">
                    <form className="form-back animate" action="">

                        <input type="text" name="name" id="input1" placeholder="Name" />
                        <input type="email" id="input2" placeholder="Email" />
                        <input type="text" placeholder="subject" id="input3" />

                        <textarea name="Message" id="input4" rows="5" placeholder="Message"></textarea>
                        <div id="send-massage">Send Message</div>
                    </form>
                </div>
            </section>
        </main>
    );
}
export default HomeContent;