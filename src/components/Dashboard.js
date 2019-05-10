import React, { Component } from 'react'
import { connect } from 'react-redux' 

class Dashboard extends Component {
    render() {
        return(
            <div>
                <h3 className="center">Your Timeline</h3>
                <ul className="dashboard-list">
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <div>Question ID: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestgamp)
    }
}

export default connect(mapStateToProps)(Dashboard)