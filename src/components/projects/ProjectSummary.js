import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="m-4 p-4 rounded border border-danger">
            <div className="amira">{project.id}</div>
            <div className="amira">{project.name}</div>
            <div className="amira">{project.title}</div>

        </div>
    );
};

export default ProjectSummary;