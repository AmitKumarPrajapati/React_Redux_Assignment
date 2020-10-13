import React from 'react'
import DisplayItems from './DisplayItems'

class LeftModule extends React.Component {
    render() {
        let { mockData : { mockDataOne, mockDataTwo, mockDataThree },handleSelectItem } = this.props;
        return (
            <div className="left-box">
                <DisplayItems 
                    mockData={mockDataOne}
                    handleSelectItem={handleSelectItem}
                />
                <DisplayItems 
                    mockData={mockDataTwo}
                    handleSelectItem={handleSelectItem}                    
                />
                <DisplayItems 
                    mockData={mockDataThree}
                    handleSelectItem={handleSelectItem}
                />
            </div>
        )
    }
}

export default LeftModule;