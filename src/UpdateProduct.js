import React from 'react';
import { Button, TextField } from "@material-ui/core"


class UpdateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: "",maker:"", color:"", userid:""}};
        this.update = props.update;
        this.search = props.search;
    }

    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
    }

    onButtonClick1 = () => {
        this.search(this.state.item);
    }

    onButtonClick2 = () => {
        this.update(this.state.item);
    }

    render() {
        return(
            <table>
                <tbody>
                    <tr>
                        <td>title:</td>
                        <td>
                            <TextField
                            onChange={this.ontitleChange}  
                            value={this.state.item.title}
                            
                            />
                        </td>
                        <td>
                            <Button
                                onClick={this.onButtonClick1}>
                                제품 검색</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>maker:</td>
                        <td>
                            <TextField
                            onChange={this.onmakerChange}  
                            value={this.state.item.maker}
                            />
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>color:</td>
                        <td>
                            <TextField
                            onChange={this.oncolorChange}  
                            value={this.state.item.color}
                            />
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>userId:</td>
                        <td>
                            <TextField
                            onChange={this.onuserIdChange}  
                            value={this.state.item.userId}
                            />
                        </td>
                        <td>
                                <Button
                                onClick={this.onButtonClick2}>
                                제품 수정</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            

        );
    }
}

export default UpdateProduct;