import React, { Component } from 'react';

class TeamMembers extends Component {

    render() {
        return (
            <div className="col-lg-6">
                <div className="team-member">
                    <img className="mx-auto rounded-circle" src={this.props.image} alt="" />
                    <h4>{this.props.title}</h4>
                    <p className="text-muted">{this.props.subtitle}</p>
                    <a className="btn btn-dark btn-social mx-2" href={this.props.github}><i className="fab fa-github"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href={this.props.facebook}><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href={this.props.linkedin}><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        )
    }
}

export default TeamMembers