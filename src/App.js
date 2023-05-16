import React from 'react';
import './App.css';
import Product from './Product';
import { Paper, List, Container } from "@material-ui/core";
import TopProduct from "./TopProduct.js"
import { call } from "./service/ApiService";
import ProductTable from './ProductTable';
import styles from './table.css'
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

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
    call("/product", "GET", item).then((response) => 
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
    <table className={styles.prodTable}>
      <caption>Product item table</caption>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>삭제</th>
          </tr>        
        </thead>
        <tbody>
          { this.state.items.map((item, index) => (
            <ProductTable 
              item={item} 
              key={item.id} 
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
            <UpdateProduct update={this.update} search={this.search}/>
          </div>
        </Container>
      </div>
  );
  }
}

export default App;
