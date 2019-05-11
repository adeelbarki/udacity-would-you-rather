import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from '../Question'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import "react-tabs/style/react-tabs.css"


class TabsComponent extends Component {
    render(){
        return (
            <Tabs>
              <TabList>
                <div className="Tabs">
                <Tab>Unanswered Questions</Tab>
                <Tab>Answered Questions</Tab>
                </div>
                
              </TabList>
          
              <TabPanel>
                <div>
                {<ul className="">
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <Question id={id}/>
                        </li>
                    ))}
                </ul> }    
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          );
    }
}

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestgamp)
    }
}

export default connect(mapStateToProps)(TabsComponent)