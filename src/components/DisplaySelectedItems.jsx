import React from 'react'

class DisplaySelectedItems extends React.Component {
    render() {
        const { mockData } = this.props
        const getSelectedItems = mockData.filter((data) => data.selected === true)
        return (
            <div>
                <div className="title">{this.props.title}</div>
                <div>
                    {
                        getSelectedItems.map(data => (
                            <div className="single-row">{data.name}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default DisplaySelectedItems