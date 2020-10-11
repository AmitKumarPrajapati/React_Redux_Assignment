import React from 'react'
import DisplayItems from './DisplayItems'

class LeftModule extends React.Component {
    render() {
        const { mockDataOne, mockDataTwo, mockDataThree } = this.props;
        return (
            <div className="left-box">
                <DisplayItems title="Portugal" mockData={mockDataOne} />
                <DisplayItems title="Nicaragua" mockData={mockDataTwo} />
                <DisplayItems title="Marshall Islands" mockData={mockDataThree} />
            </div>
        )
    }
}

export default LeftModule;