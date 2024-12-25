import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import membersData from './members.json';
import './MemberDetail.css';

const MemberDetail = () => {
    const { id } = useParams();
    const member = membersData.find(member => member.id === parseInt(id));


    if (!member) {
        return <div>Member not found</div>;
    }

    return (
        <div className="member-detail">
            <h2>{member.name}</h2>
            <p>Gender: {member.gender}</p>
            <p>Date of Birth: {member.dob}</p>
            <p>Class: {member.class}</p>
            <p>School: {member.school}</p>
            <p>Hobbies: {member.hobbies.join(', ')}</p>
        </div>
    );
};

export default MemberDetail;
