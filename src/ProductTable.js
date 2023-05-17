import React from 'react';
import { Button } from "@material-ui/core"


class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: props.item, readOnly: true };
        this.delete = props.delete;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item);
    }


    render() {
        const item = this.state.item;
        return(
            <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.maker}</td>
                  <td>{item.color}</td>
                  <td>{item.userid}</td>
                  <td><Button
                    onClick={this.deleteEventHandler}>
                    delete</Button>
                  </td>
            </tr>

        );
    }
}

export default ProductTable;