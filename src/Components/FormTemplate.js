import React from 'react';
import { Link } from 'react-router-dom';
export class FormTemplate extends React.Component {
    render() {
        return (
            <div className="container form-horizontal" style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '2px', marginTop: '5em', boxShadow: '0px 0px 10px black', textAlign: 'center', maxWidth: '30%' }}>
                {this.props.children}
            </div>
        )
    }
}



