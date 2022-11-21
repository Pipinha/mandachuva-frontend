import { Component } from "react";


class Button extends Component {
    render(){
        return (
            <>
                <button className={this.props.className}>{this.props.children}</button>
            </>
        )
    }
}

Button.defaultProps = {
    className: 'btn btn-a',
}

export default Button;