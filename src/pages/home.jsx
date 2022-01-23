import React from 'react';
import { withRouter } from 'react-router-dom'

function Home({props}) {
    console.log(props)
    return (
        <div>
            Home
        </div>
    )
}

export default withRouter(Home);
