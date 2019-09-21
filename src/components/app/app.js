import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppHeader from "../app-header";
import HomePage from '../home-page';
import ProjectList from '../project-list';
import ErrorPage from '../error';
import About from '../about';
import './app.scss';

export default class App extends Component {
  state = {
    data: [
      { id: 1, 
        title: 'Тетрис', 
        description: 'Реализация игры Тетрис на Javascript (JS6)',
        year: '',
        technology: ['HTML', 'CSS', 'Javascript'],
        linkWeb: 'https://...' ,
        linkGithub: '',
      },
      { id: 2, 
        title: 'ToDo App на React', 
        img: 'img/i.webp',
        year: '2019',
        description: 'Реализация ToDo-приложения на React и Redux с использованием localStorage',
        technology: ['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'localStorage'],
        linkWeb: 'https://...' ,
        linkGithub: 'https://...' ,
      },
      { id: 3, 
        title: 'Имитация Instagram на React', 
        img: 'img/i.webp',
        description: 'Имитация Instagram на React с использованием JSON',
        year: '2019',
        technology: ['HTML', 'CSS', 'Javascript', 'React', 'JSON'],
        linkWeb: 'https://...' ,
        linkGithub: 'https://...' ,
      },
      { id: 4, 
        title: 'Верстка интернет-магазина Manom', 
        img: 'img/i.webp',
        description: 'Верстка интернет-магазина',
        year: '2018',
        technology: ['HTML', 'CSS', 'Javascript', 'jQuery'],
        linkWeb: 'https://...' ,
        linkGithub: 'https://...' ,
      },
      { id: 5, 
        title: 'Имитация Instagram на React', 
        img: 'img/i.webp',
        description: 'Имитация Instagram на React с использованием JSON',
        year: '2019',
        technology: ['HTML', 'CSS', 'Javascript', 'React', 'JSON'],
        linkWeb: 'https://...' ,
        linkGithub: 'https://...' ,
      },
      { id: 6, 
        title: 'Вертска интернет-магазина', 
        img: 'img/i.webp',
        description: 'Вертска интернет-магазина',
        year: '2018',
        technology: ['HTML', 'CSS', 'Javascript', 'jQuery'],
        linkWeb: 'https://...' ,
        linkGithub: 'https://...' ,
      },
    ],
    filter: '',
  };
  
  render() {
    const {data, filter} = this.state;
    return (
      <Router>
        <div className='app container'>
          <AppHeader />
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/about' component={About} />
            <Route path='/portfolio' render={ () => <ProjectList projects={data}/>} />
            <Route path='*' component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
};