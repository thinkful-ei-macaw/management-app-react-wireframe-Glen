import React, { Component } from 'react'

export default class DeleteEmployee extends Component {
    render() {
        return (
            <div>
                <main>
                    <section class="employee-data">
                        <h1>Delete the following Employee?</h1>
                        <form>
                            <div>
                                <h2>Personal</h2>
                                <p>Name: Dunder Mifflin</p>
                                <p>Address: 123 someplace rd.</p>
                                <p>City: Las Vegas</p>
                                <p>State: NV</p>
                                <p>ZipCode: 89512</p>
                                <p>Phone: 702-123-4567</p>
                            </div>


                            <div>
                                <h2>Company Profile</h2>
                                <p>Business: Apple Inc.</p>
                                <p>Address: 456 your place ave.</p>
                                <p>City: Las Vegas</p>
                                <p>State: NV</p>
                                <p>ZipCode: 89512</p>
                                <p>Business Phone: 702-123-4567</p>
                                <p>Position: Junior Developer</p>
                                <p>Salay: 100k Annual</p>
                            </div>
                        </form>
                        <button type="submit">DELETE EMPLOYEE</button>
                    </section>
                </main>
            </div>
        )
    }
}
