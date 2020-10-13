import React from 'react'
import RightModule from './RightModule';
import LeftModule from './LeftModule'

const mockData = {
    mockDataOne: {
        title: 'Portugal',
        data: [
            {
                name: "Aaron Almaraz",
                selected: false
            },
            {
                name: "Jelena Denisova",
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
    },
    mockDataTwo: {
        title: "Nicaragua",
        data: [
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
    },

    mockDataThree: {
        title: "Marshall Islands",
        data: [
            {
                name: "Aaron Almaraz",
                selected: false
            },
            {
                name: "Jelena Denisova",
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
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state={allData:[]}
    }

    componentWillMount(){
        this.setState({allData:mockData})
    }

    handleSelectItem(event){
       console.log("Hello World !")
    }

    render() {
        console.log(this.state.allData)
        return (
            <div className="container">
                <div className="column">
                    <LeftModule
                        mockData={this.state.allData}
                        handleSelectItem={this.handleSelectItem}
                    />
                </div>
                <div className="column">
                    <RightModule
                        mockData={this.state.allData}
                    />
                </div>
            </div>
        )
    }
}

export default Container