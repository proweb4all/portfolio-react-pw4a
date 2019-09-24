import React, { Component } from "react";
import ProjectListItem from "../project-list-item";
import StatusFilter from "../status-filter";
import "./project-list.scss";

export default class ProjectList extends Component {
  state = {
    checks: [
      {name: 'design', label: 'Дизайн', check: false},
      // {name: 'htmlscc', label: 'HTML+CSS', check: true},
      {name: 'javascript', label: 'Javascript', check: false},
      {name: 'jquery', label: 'jQuery', check: false},
      {name: 'react', label: 'React', check: false},
      // {name: 'ajax', label: 'AJAX', check: false}
    ]
  }
  
  onCheckToggle = (name) => {
      this.setState(({checks}) => {
        const index = checks.findIndex(elem => elem.name === name);
        const newArr = [...checks];
        newArr[index].check = !newArr[index].check;
        return {checks: newArr};
      })
  }

  render() {
    let { projects } = this.props;
    // Массив выделенных checkbox
    const filters = this.state.checks.filter(({check}) => check === true);
    // Фильтрация
    filters.forEach(({label}) => {
      projects = projects.filter(({technology}) => technology.includes(label));
    });
    const elements = projects.map(item => {
      if (item != null && typeof item == "object") {
        const { id, ...itemProps } = item;
        return (
          <ProjectListItem key={id} {...itemProps} />
        );
      };
    });
    return (
      <div>
        <h2 className='projects-h1'>Кое-что из моих проектов</h2>
        <StatusFilter checks={this.state.checks} onCheckToggle={this.onCheckToggle} />
        <div id='style-1' className='block-scroll'>
          <div className='projects-block'>{elements}</div>
        </div>
      </div>
    )
  };
};
