import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LogInPage extends Component {
    render() {
        return (
            <div>
                <main>

                    <section>
                        <header>
                            <h1>Log into account</h1>
                        </header>
                        <h2>Enter Info</h2>
                        <form>
                            <div>
                                <label for="username">Username</label>
                                <input type="text" id="username" />
                            </div>
                            <div>
                                <label for="password">Password</label>
                                <input type="text" id="password" />
                                <Link to='/main-page'>
                                    <button type="submit">Enter Account</button>
                                </Link>
                            </div>
                        </form>
                    </section>
                </main>

            </div>
        )
    }
}
