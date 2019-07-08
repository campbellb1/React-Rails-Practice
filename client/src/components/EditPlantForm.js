import React, { Component } from 'react';

class EditPlantForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scientific_name: this.props.plant.scientific_name,
            description: this.props.plant.description,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const { scientific_name, description } = this.state;
        this.props.editList(scientific_name, description);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input  name="title"
                    type="text"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.handleChange} />
            <input  name="excerpt"
                    type="text"
                    placeholder="Excerpt..."
                    value={this.state.excerpt}
                    onChange={this.handleChange} />
            <button>Update List</button>
        </form>  
        )
    }
}
export default EditListForm;