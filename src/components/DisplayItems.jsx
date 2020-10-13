import React from 'react'

class DisplayItems extends React.Component {
    
    render() {
        const { mockData, handleSelectItem } = this.props
        const { data, title } = mockData
        return (
            <div>
                <div className="title">
                    {title}
                </div>
                <div>
                    {
                        data.map((data,index) => (
                            <div className="single-item">
                                <input id={`${title}_${index}`} onChange={handleSelectItem} type="checkbox" checked={data.selected} name={title} value={data.name} />
                                <label for="vehicle1">{data.name}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default DisplayItems