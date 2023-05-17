import React from 'react';
import { Button, TextField } from "@material-ui/core"


class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: "",maker:"", color:"", userid:""}};
        this.add = props.add;
    }

    ontitleChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
    }

    onmakerChange = (e) => {
        const thisItem = this.state.item;
        thisItem.maker = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
    }

    oncolorChange = (e) => {
        const thisItem = this.state.item;
        thisItem.color = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
    }

    onuserIdChange = (e) => {
        const thisItem = this.state.item;
        thisItem.userid = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
    }

    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
    }

    onButtonClick = () => {
        this.add(this.state.item);
    }


    render() {
        return(
            <table>
                <tbody>
                    <tr>
                        <td>title:</td>
                        <td>
                            <TextField
                            onChange={this.editEventHandler}
                            value={this.state.item.title}
                            />
                        </td>
                        <td>
                            <Button
                                onClick={this.onButtonClick}>
                                제품 추가</Button>
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
                            value={this.state.item.userid}
                            />
                        </td>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
            

        );
    }
}

export default AddProduct;