import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import "react-tabs/style/react-tabs.css"


class Dashboard extends Component {
    render() {
        const { unansweredQuestions, answeredQuestions } = this.props
        return (
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
        );
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    const user = users[authedUser];
    const answeredQuestions = Object.keys(user.answers)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    const unansweredQuestions = Object.keys(questions).filter(id => !answeredQuestions.includes(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    return {
        unansweredQuestions,
        answeredQuestions
    }
}
export default connect(mapStateToProps)(Dashboard)