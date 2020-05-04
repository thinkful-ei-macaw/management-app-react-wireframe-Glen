import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <main>
                    <header class="header-section">
                        <div class="header-div">
                            <h1>Welcome to DataTech</h1>
                            <h2>The Employee Management App</h2>
                        </div>
                    </header>

                    <section>
                        <header>
                            <h2>Built for Managers like you</h2>
                        </header>
                    </section>
                    <section>
                        <header>
                            <h3>Create Employee Profiles</h3>
                        </header>
                        <p>Have a new hire? This app allows you to create a profile for your new employee</p>
                        <p>Simple and straightforward, as it should be.</p>
                    </section>
                    <section>
                        <header>
                            <h3>Pull up existing employees</h3>
                        </header>
                        <p>Not in the office but need to access employee records?</p>
                        <p>Pull up existing employee data in a snap!</p>
                    </section>
                    <section>
                        <header>
                            <h3>Update employee records on the go</h3>
                        </header>
                        <p>An easy to use interface allows modification of current employee profiles.</p>
                        <p>Wish to leave comments on work performance? Leadership? Or update employee data?</p>
                        <p>Make it so!</p>
                    </section>
                    <section>
                        <header>
                            <h3>Remove employee records</h3>
                        </header>
                        <p>Someone no longer working for you?</p>
                        <p>No problem! You can easily remove their info in a single click</p>
                    </section>

                    <section>
                        <header>
                            <h3>Sign Up Now</h3>
                        </header>
                        <form>

                            <div>
                                <label for="first-name">First name</label>
                                <input type="text" id="first-name" />
                            </div>

                            <div>
                                <label for="last-name">Last name</label>
                                <input type="text" id="last-name" />
                            </div>

                            <div>
                                <label for="position">Current Role</label>
                                <input type="text" id="position" />
                            </div>

                            <div>
                                <label for="email">Enter Email</label>
                                <input type="text" id="email" />
                            </div>

                            <div>
                                <label for="password">Create Password</label>
                                <input type="text" id="password" />
                            </div>
                            <button class="create-btn" type="submit">Create Profile</button>
                            <Link to='/login-page'>
                                <button class="log-in-btn" type="button">Log In</button>
                            </Link>
                        </form>
                    </section>





                </main>

            </div>
        )
    }
}
