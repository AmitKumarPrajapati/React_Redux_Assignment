import React from 'react'
import NavigationBar from './NavigationBar'
import Container from './Container'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Container />
            </div>
        )
    }
}

export default Dashboard