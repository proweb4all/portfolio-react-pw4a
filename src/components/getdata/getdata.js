import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ProjectList from '../project-list';


//import "./getdata.scss";

class GetData extends Component {
  state = {
    data: null,
    loading: true,
    error: false
  };

  loadContent = async (url, callback) => {
		await fetch(url)
			.then(response => response.json())
            // .then(json => createCar(json.cars))
            .then(json => console.log(json))
            .catch(alert);
		callback();
	}



  update() {
    this.setState( {
      loading: true,
      error: false
    });

    this.props.getData()
      .then((data) => {
        this.setState({
          data,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;
    // this.loadContent('http://127.0.0.1:5500/pf-pw4a/cars.json', () => {console.log('Поехали!')});
    this.loadContent('http://127.0.0.1:5500/pf-pw4a/pf-pw4a.json', () => {console.log('Поехали!')});
    // if (loading) {
    //   return <Spinner />;
    // }
    // if (error) {
    //   return <ErrorIndicator />;
    // }
    // return <View {...this.props} data={data} />;
    return (
      <h2>'Поехали!'</h2>
      // <ProjectList projects={data}/>
    )
  }
  
}

export default GetData;
