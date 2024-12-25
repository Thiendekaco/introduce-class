import React, { useState, useEffect } from 'react';
import membersData from './members.json';
import './Member.css';
import Button from "./component/button/button";
import { useNavigate } from 'react-router-dom';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('name');
  const [filterGender, setFilterGender] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setMembers(membersData);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    setSortKey(key);
  };

  const handleFilter = (gender) => {
    setFilterGender(gender);
  };

  const filteredMembers = members
    .filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterGender ? member.gender === filterGender : true)
    )
    .sort((a, b) => a[sortKey].localeCompare(b[sortKey]));


    const handleItemClick = (id) => {
        navigate(`/member-detail/${id}`);
    };
  return (
    <div className={'member-container'}>
        <div className={'member-header'}>
            <input type="text" placeholder="Search by name" value={searchTerm} className={'input-item'} onChange={handleSearch}/>
            <Button content={'Sort by Name'} backgroundColor={"#000"} onClick={() => handleSort('name')} />
            <Button content={'Sort by Date of Birth'} backgroundColor={"#000"} onClick={() => handleSort('dob')} />
            <Button content={'Filter Male'} backgroundColor={"#000"} onClick={() => handleFilter('Male')} />
            <Button content={'Filter Female'} backgroundColor={"#000"} onClick={() => handleFilter('Female')} />
            <Button content={'Clear Filter'} backgroundColor={"#000"} onClick={() => handleFilter('')} />
        </div>
        <div className={'member-list'}>
            {filteredMembers.map((member, index) => (
                <div key={member.id} className={'member-item'} onClick={() => handleItemClick(member.id)}>
                    <h2>{member.name}</h2>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Members;
