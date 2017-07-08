import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  
  static defaultProps = {
        categories: ['Web Design','Mobile Development','Web Development']
  };

  handleAddProject(e)
    {
      if(this.refs.title.value === '')
      {
        alert('Title is required');
      }else{
        this.setState({newProject:{
                                    'id': uuid.v4(),
                                    'title': this.refs.title.value,
                                    'category': this.refs.category.value,
                                  }
      },function(){
        //console.log(this.setState);
        this.props.addProject(this.state.newProject);
      });

      }
      
      e.preventDefault();
    }

   render() {
       let categoryOptions = this.props.categories.map(category => {
         return (
           <option key={category} value={category}>{category}</option>
         );
       });

    return (
      <div>
        <h3>Add Project</h3>        
        <form onSubmit={this.handleAddProject.bind(this)}>
          <div> 
              <label>Title</label>
              <input type="text" ref="title" />
          </div>
          <div>  
              <label>Category</label>
              <select ref="category">
                { categoryOptions }
              </select>
          </div>
          <br/>
          <input type="submit" name="submit" value="Add" />          
        </form>
      </div>
    );
  }
}

AddProject.protoTypes = {
  addProject : React.PropTypes.func
}

export default AddProject;