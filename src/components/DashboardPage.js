import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
        };
    }

    onSearchTermChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ searchTerm: value }));
    };

    render() {
        return (
            <div className="content-container">
                <SearchBar
                    onSearchTermChange={this.onSearchTermChange}
                    searchTerm={this.state.searchTerm}
                />
                <SearchResults searchTerm={this.state.searchTerm} />
            </div>
        );
    }
}

export default DashboardPage;
