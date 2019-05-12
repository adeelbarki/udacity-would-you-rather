import React, { Component } from 'react' 

import TabsComponent from './Tabs/Tabs'

class Dashboard extends Component {

    render() {
        return(
            <div className="">
                <h3>Polls</h3>
                <header>Home | New Question | Leader Board </header>
                <TabsComponent />
            </div>
        )
    }
}

export default Dashboard