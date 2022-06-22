import React from 'react';
import NavBar from './NavBar';
import TasksList from './TasksList';

const Dashboard: React.FC = () => {
  return (
    <>
      <NavBar />
      <TasksList />
    </>
  );
};

export default Dashboard;
