'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
    //lifecycle hook
    getInitialState: function() {
        return {
            authors: []
        };
    },

    //lifecycle hook
    componentWillMount: function() {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    },

    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key = {author.id}>
                    <td><a href={'/#authors/' + author.id}>{author.id}</a></td>
                    <td>{author.firstname} {author.lastname}</td>
                </tr>
            );
        };
        return (
            <div>
                <h1>Authors</h1>

                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Authors;
