import React from 'react'
import DisplaySelectedItems from './DisplaySelectedItems'

class RightModule extends React.Component {
    render() {
        const { mockDataOne, mockDataTwo, mockDataThree } = this.props
        return (
            <div className="right-box">
                <DisplaySelectedItems
                    mockData={mockDataOne}
                    title="Portugal"
                />
                <DisplaySelectedItems
                    mockData={mockDataTwo}
                    title="Nicaragua"
                />
                <DisplaySelectedItems
                    mockData={mockDataThree}
                    title="Marshall Islands"
                />
            </div>
        )
    }
}
export default RightModule