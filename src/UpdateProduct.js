import React from 'react';
import { Button, TextField } from "@material-ui/core"


class UpdateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: "",maker:"", color:"", userId:""}};
        this.search = props.search;
        this.update = props.update;
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
        thisItem.userId = e.target.value;
        this.setState({ item: thisItem });
        console.log(thisItem);
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
        const thisItem = this.state.item;
        this.update(thisItem)
        window.location.reload();
    }


    render() {
        return(
            <table border="1" solid red>
                <caption>제품 검색</caption>
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