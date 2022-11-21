import { Component } from "react";


class Button extends Component {
    render(){
        return (
            <>
                <button className={`${this.props.className} ${(this.props.elevated?'with-shadow':'no-shadow')}`}>{this.props.children}</button>
            </>
        )
    }
}

Button.defaultProps = {
    className: 'btn btn-a',
    elevated: false,
}

export default Button;