var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>
                This is a weather application build on React. This application returns the temperature
                based on the city that you enter.
            </p>
            <p>
                Here are some of the tools I used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React Source</a> - This was the
                    JavaScript framework used.
                </li>
                <li>
                    <a href="https://www.gofpatterns.com">GofPatterns</a> -  Behavioral, Creational, and Design Patterns.
                </li>
            </ul>
        </div>
    )
};

module.exports = About;