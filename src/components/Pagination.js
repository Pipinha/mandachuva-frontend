import { Component } from "react";
import { Link } from "react-router-dom";

class Pagination extends Component {
    render() {
        return (
            <nav aria-label="Paginação">
                <ul className="pagination">
                    {this.props.pagination.map((item, idx) => {
                        return (
                            <li key={`pag-${idx}`} className={'page-item' + (item.active ? ' active' : '')}>
                                <Link className="page-link" to={`${this.props.to}${this.props.to.indexOf('?') !== -1 ? '&' : '?'}pg=${item.pg}`} dangerouslySetInnerHTML={{ __html: item.content }} />
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Pagination