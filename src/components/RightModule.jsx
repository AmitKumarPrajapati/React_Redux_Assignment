import React from 'react'
import DisplaySelectedItems from './DisplaySelectedItems'

class RightModule extends React.Component {
    render() {
        const { mockData } = this.props
        let select = []
        let { mockDataOne, mockDataTwo, mockDataThree } = mockData
        let select1 = mockDataOne.data.filter((item) => item.selected === true)
        let select2 = mockDataTwo.data.filter((item) => item.selected === true)
        let select3 = mockDataThree.data.filter((item) => item.selected === true)
        select.push(select1, select2, select3)
        let selectLength = select.length
        return (
            <div className="right-box">
                {
                    selectLength > 0
                        ?
                        <div>
                            <DisplaySelectedItems
                                mockData={mockDataOne}
                            />
                            <DisplaySelectedItems
                                mockData={mockDataTwo}
                            />
                            <DisplaySelectedItems
                                mockData={mockDataThree}
                            />
                        </div>: <div className="title">No Items has been selected</div>
                }

            </div>
        )
    }
}
export default RightModule