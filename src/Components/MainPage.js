import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <main>
                    <nav>
                        <span>Data Tech Systems</span>
                        <select id="account-option" name="account">
                            <option value="select">-Personal-</option>
                            <option value="update">Update Account</option>
                            <option value="log-out">Log Out</option>
                        </select>
                    </nav>

                    <section class="welcome">
                        <h1>Welcome (Username)</h1>
                        <h2>Please select from the options below :)</h2>
                    </section>
                    <section>

                        <h3>View employee database</h3>
                        <Link to='/view-employees'>
                            <button type="submit">View employees</button>
                        </Link>
                    </section>
                    <section>
                        <h3>Create new employee profile</h3>
                        <Link to='/create-employee'>
                            <button type="submit">Create profile</button>
                        </Link>
                    </section>
                    <section>
                        <h3>Update employee profile</h3>
                        <Link to='/update-employee'>
                            <button type="submit">Update profile</button>
                        </Link>
                    </section>
                    <section>
                        <h3>Delete employee profile</h3>
                        <Link to='/delete-employee'>
                            <button type="submit">Delete profile</button>
                        </Link>
                    </section>
                </main>
                <footer>DataTech for a better tommorow</footer>
            </div>
        )
    }
}
