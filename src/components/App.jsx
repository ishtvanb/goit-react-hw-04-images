import { Component } from "react";
import Searchbar from './Searchbar';
import ShowImages from './ShowImages';
import ScrollToTop from 'react-scroll-up';
import Container from './Container';
import { ToastContainer } from 'react-toastify';
export default class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
          <Container>
            <ShowImages query={this.state.query} />
            <ScrollToTop
              showUnder={160}
              style={{
                color: '#ffff',
                backgroundColor: '#0ead69',
                padding: '20px',
                borderRadius: '50%',
              }}
            >
              <span>UP</span>
            </ScrollToTop>
            <ToastContainer autoClose={1500} />
          </Container>
      </>
    );
  }
}