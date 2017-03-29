'use strict';

var React = require('react');

var About = React.createClass({
    //static methods
    statics: {
        willTransitionTo: function(transition, params, query, cb) {
            if (!confirm('Are you sure you want to read this page?')) {
                //abort transition
                transition.abort();
            } else {
                //carry on as normal
                cb();
            }
        },
        willTransitionFrom: function(transition, component) {
            if (!confirm('Are you sure you want to leave this page?')) {
                //abort transition
                transition.abort();
            }
        }
    },

    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;