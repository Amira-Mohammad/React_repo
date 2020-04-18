import React , {Component}from 'react';
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'

class Dashboard extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="Home-Background">
                
                <ProjectList projects={this.props.projects}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      projects: state.Project.projects
    }
  }
export default connect(mapStateToProps)(Dashboard);