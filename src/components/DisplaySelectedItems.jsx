import React from 'react'

class DisplaySelectedItems extends React.Component {
    render() {
        const { mockData } = this.props
        let getSelectedItems = mockData.data.filter((item) => item.selected === true)
        let { title } = mockData
        return (
            <div>
                <div>
                    {
                        getSelectedItems.length > 0 ? <div className="title">{title}</div> : ""
                    }
                    {
                        getSelectedItems.length > 0 ?
                            getSelectedItems.map(data => (
                                <div className="single-row">{data.name}</div>
                            ))
                            : " "
                    }

                </div>
            </div>
        )
    }
}

export default DisplaySelectedItems