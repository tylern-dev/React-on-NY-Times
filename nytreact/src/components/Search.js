import React from 'react';

class Search extends React.Component {
    state = {

    }

    render(){
        return(
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="topic-field">Moon Landing</label>
                        <input className="form-control" type="text" id="topic-field" placeholder="Topic" value={this.state.topic}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="start-field">Starting Year</label>
                        <input className="form-control" type="number" id="start-field" placeholder="i.e. 1969" value={this.state.startYear}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="topic-field">Ending Year</label>
                        <input className="form-control" type="number" id="topic-field" placeholder="i.e. 1972" value={this.state.endYear}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }
}

//figure out how to pass the data from child component back to the parent
export default Search;
