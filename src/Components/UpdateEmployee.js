import React, { Component } from 'react'

export default class UpdateEmployee extends Component {
    render() {
        return (
            <div>
                <main>
                    <section class="employee-data">
                        <form>
                            <h2>Employee Data</h2>
                            <div>
                                <label for="first-name">First Name</label>
                                <input type="text" id="first-name" value="Dunder" />
                            </div>
                            <div>
                                <label for="last-name">Last Name</label>
                                <input type="text" id="last-name" value="Mifflin" />
                            </div>
                            <div>
                                <label for="address">Address</label>
                                <input type="text" id="address" value="Address: 123 someplace rd." />
                            </div>
                            <div>
                                <label for="city">City</label>
                                <input type="text" id="city" value="Las Vegas" />
                            </div>
                            <div>
                                <label for="state">State</label>
                                <input type="text" id="state" value="NV" />
                            </div>
                            <div>
                                <label for="zipcode">ZipCode</label>
                                <input type="text" id="zipcode" value="89512" />
                            </div>
                            <div>
                                <label for="phone">ZipCode</label>
                                <input type="text" id="phone" value=" 702-123-4567" />
                            </div>
                            <button type="submit">Update Employee</button>

                        </form>
                    </section>
                </main>

            </div>
        )
    }
}
