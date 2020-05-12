import React, { useState } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const Entries = (props) => {

    const { entries } = props;
    console.log(props);
    if (entries) {
        return (
            <div>
                {entries.map(item => (
                    <div>
                        <p>{item.title}</p>
                        <p>  {item.details}</p>
                    </div>
                ))}
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading projects...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const projects = state.firestore.ordered.entries;
    console.log(projects)
    return {
        entries: projects
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'entries' }])
)(Entries)