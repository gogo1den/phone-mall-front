import React from 'react';
import './App.css';
import Product from './Product';
import { Paper, List, Container } from "@material-ui/core";
import AddProduct from "./AddProduct.js"
import { call } from "./service/ApiService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [

      ]
    };
  }

  componentDidMount() {
    call("/product", "GET", null).then((response) =>
      this.setState({items: response.data})
    );
  }

  add = (item) => {
    call("/product", "POST", item).then((response) =>
      this.setState({ items: response.data })
    );
  }

  delete = (item) => {
    call("/product", "DELETE", item).then((response) =>
      this.setState({ items: response.data })
    );
  }

  update = (item) => {
    call("/product", "PUT", item).then((response) => 
      this.setState({items: response.data})
    );
  }

  render() {
    var prodItems = this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          { this.state.items.map((item, index) => (
              <Product 
                item={item} 
                key={item.id} 
                delete={this.delete}
                update={this.update} 
              />
          ))}
        </List>
      </Paper>
    );


    return (
      <div className="App">
        <Container maxWidth="md">
          <AddProduct add={this.add} />
          <div className="ProdList">
            {/* <Todo> 컴포넌트 여러 개*/}
            {prodItems}
          </div>
        </Container>
      </div>
  );
  }
}

export default App;
