let React = require('react');
let{Link} = require('react-router');

let Examples = (props) => {
    return (
        <div>
        <h1 className="text-center">Examples</h1>
        <p> Here are few Example locations to try out.</p>
            <ol>
                <li>
                    <Link to='/?location=Auburn Hills'>Auburn Hills, MI </Link>
                </li>
                <li>
                    <Link to='/?location=Mannheim'>Mannheim, Germany </Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;