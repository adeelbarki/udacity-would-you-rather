import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './question'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import "react-tabs/style/react-tabs.css"
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        const { unansweredQuestions, answeredQuestions } = this.props
            return (
                <div className="w-25 mx-auto">
                <Tabs>
                    <TabList>
                        <div className="Tabs">
                            <Tab>Unanswered Questions</Tab>
                            <Tab>Answered Questions</Tab>
                        </div>

                    </TabList>

                    <TabPanel>

                        <ul>
                            {unansweredQuestions.map(id => (
                                <li key={id}>
                                    <Question id={id} />
                                </li>
                            ))}
                        </ul>

                    </TabPanel>
                    <TabPanel>
                        <div>
                            <ul>
                                {answeredQuestions.map(id => (
                                    <li key={id}>
                                        <Question id={id} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </TabPanel>
                </Tabs>
                </div>
            );

    }
}

function mapStateToProps({ authedUser, users, questions }) {
    const user = users[authedUser];
    if(user === undefined){
        return <Link to="/login" />
    } else {
        const answeredQuestions = Object.keys(user.answers)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    const unansweredQuestions = Object.keys(questions).filter(id => !answeredQuestions.includes(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    return {
        unansweredQuestions,
        answeredQuestions,
        authedUser
    }
    }
    
}
export default connect(mapStateToProps)(Dashboard)