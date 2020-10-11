import React from 'react'
import RightModule from './RightModule';
import LeftModule from './LeftModule'

const mockDataOne = [
    {
        name: "Aasiya Jayawant",
        selected: false
    },
    {
        name: "Luvleen Lawrence",
        selected: true
    },
    {
        name: "Rey Mibourne",
        selected: false
    },
    {
        name: "Cayla Brister",
        selected: true
    },
]

const mockDataTwo = [
    {
        name: "Deveedaas Nandi",
        selected: false
    },
    {
        name: "Obesy Chidy",
        selected: true
    },
    {
        name: "Xenia Dolezelova",
        selected: false
    },
    {
        name: "Ezequiel Dengra",
        selected: true
    }
]

const mockDataThree = [
    {
        name: "Aaron Almaraz",
        selected: true
    },
    {
        name: "Jelena Denisova",
        selected: false
    },
    {
        name: "Xenia Dolezelova",
        selected: true
    },
    {
        name: "Ezequiel Dengra",
        selected: false
    }
]

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="column">
                    <LeftModule
                        mockDataOne={mockDataOne}
                        mockDataTwo={mockDataTwo}
                        mockDataThree={mockDataThree}
                    />
                </div>
                <div className="column">
                    <RightModule
                        mockDataOne={mockDataOne}
                        mockDataTwo={mockDataTwo}
                        mockDataThree={mockDataThree}
                    />
                </div>
            </div>
        )
    }
}

export default Container