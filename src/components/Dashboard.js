import React, { Component } from 'react'
import { connect } from 'react-redux' 
import Question from './question'

class Dashboard extends Component {
    render() {
        return(
            <div>
                <h3 className="center">Polls</h3>
                <header>Home | New Question | Leader Board </header>
                
                <ul className="dashboard-list">
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <Question id={id}/>
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