import React, {Component} from 'react';

class Headlines extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=5GItLZ0YtGEpb97aHdWBnlntcVPxsUpU')
            .then((response) => response.json())
            .then(data => {
                this.setState(() => {
                    return {data: data.results}
                });
                console.log(data.results)
            })
    }
    render() {
        console.log('render method called')

        return (
            <div className="list">
                <ul>
                    {this.state.data.map((item, index) => {
                            return <li key={item.id}><a href={item.url}> {item.title} </a></li>
                        })}
                </ul>
                </div>
        )
    }


}

export default Headlines;