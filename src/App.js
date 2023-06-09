import React from 'react';
import './App.css';
import Product from './Product';
import { Paper, List, Container } from "@material-ui/core";
import TopProduct from "./TopProduct.js"
import { call, searchByTitle } from "./service/ApiService";
import ProductTable from './ProductTable';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';

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

  search = (item) => {
    searchByTitle(item.title).then((response) => 
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

    
    var todoRows = this.state.items.length > 0 && (
      <div>
    <table  border="1">
      <caption>Product item table</caption>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>maker</th>
            <th>color</th>
            <th>userId</th>
            <th>삭제</th>
          </tr>        
        </thead>
        <tbody>
          { this.state.items.map((item, index) => (
            <ProductTable 
              key={item.id}
              item={item} 
              delete={this.delete}
              update={this.update} 
            />
          ))}
        </tbody>
    </table>
  </div>
    );

    return (
      <div className="App">
        <Container maxWidth="md">
          <TopProduct add={this.add} />
          <div className="ProdList">
            {/* <Todo> 컴포넌트 여러 개*/}
            {prodItems}
          </div>
          <div>
            {todoRows}
          </div>
          <div>
            <AddProduct add={this.add}/>
          </div>
          <div>
            <UpdateProduct update={this.update} search={this.search} componentDidMount={this.componentDidMount}/>
          </div>
          <div>
            <DeleteProduct delete={this.delete}  />
          </div>
        </Container>
      </div>
  );
  }
}

export default App;
