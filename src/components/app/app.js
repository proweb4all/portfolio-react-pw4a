import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from "../app-header";
import ContactLinks from "../contacts";
import HomePage from '../home-page';
import ProjectList from '../project-list';
import ErrorPage from '../error404';
import About from '../about';
import './app.scss';

export default class App extends Component {
  
  state = {
    data: [],
    filter: '',
  };

  loadContent = async (url, callback) => {
		await fetch(url)
			.then(response => response.json())
            .then(({ data }) => this.setState({ data }))
            .catch(alert);
		callback();
  }
  
  componentDidMount() {
    this.loadContent('pf-pw4a.json', () => {console.log('Загрузка JSON')});
  }


  render() {
    const {data, filter} = this.state;
    return (
      <Router>
        <div className='app container'>
          <AppHeader />
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/about' component={About} />
            <Route path='/portfolio' render={ () => (
              (data !== []) ? <ProjectList projects={data}/> : <span>Портфолио не загружено</span>
            )} />
            <Route path='*' component={ErrorPage} />
          </Switch>
          <ContactLinks outerClass='contacts-links__main' />
        </div>
      </Router>
    );
  }
};
