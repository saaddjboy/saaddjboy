import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0,
        url :'https://picsum.photos/200',
        tags : ['tag1','tag2']

    };

    style= {
        fontSize:30,
        color: 'Red'
    };
    render() {
        let classes = this.newMethod();
        return ( <div>
            <span className={classes} >
                Hello World {this.state.count}
                </span>
                <img src={this.state.url} alt='test ' />
                <button onClick={this.add} style={this.style}>
                    add
                    </button>
                    {this.renderTags()}
                    </div>);
    }
    newMethod() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0 ) ? 'primary' : 'secondary';

        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
    add = () => {

            this.setState({
                count : this.state.count + 1
            });
    }
    renderTags(){
        if(this.state.count === 0) return <h5>there is no tags </h5> ;
        else return   <ul> { this.state.tags.map(tags => <li key={tags} >{tags}</li>)} </ul> ;
    }
}

export default Counter;
