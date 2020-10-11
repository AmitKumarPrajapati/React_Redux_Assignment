import React from 'react'

class DisplayItems extends React.Component {
    render() {
        const { mockData } = this.props
        return (
            <div>
                <div className="title">
                    {this.props.title}
                </div>
                <div>
                    {
                        mockData.map(data => (
                            <div className="single-item">
                                <input type="checkbox" checked={data.selected} id="language" name={data.name} value="Language" />
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