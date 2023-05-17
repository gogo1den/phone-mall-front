import React from 'react';
import { Button, TextField } from "@material-ui/core"


class DeleteProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: "",maker:"", color:"", userId:""}};
        this.delete = props.delete;
    }

    ontitleChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
    }

    onButtonClick = () => {
        this.delete(this.state.item);
    }
    


    render() {
        const item = this.state.item;
        return(
            <table>
                <tbody>
                    <tr>
                        <td>title:</td>
                        <td>
                            <TextField
                            onChange={this.ontitleChange}  
                            value={this.state.item.title}
                            type="text" 
                            id={item.id}
                            name={item.id}
                            multiline={true}
                            />
                        </td>
                        <td>
                            <Button
                                onClick={this.onButtonClick}>
                                제품 삭제</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            

        );
    }
}

export default DeleteProduct;