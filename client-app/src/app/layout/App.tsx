import React, {useState,useEffect, Fragment} from 'react';
import {Container, List} from 'semantic-ui-react'
import axios from 'axios'
import {Activity} from '../models/activity'
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities,setActivities] = useState<Activity[]>([]);
  const [selectedActivity,setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode,setEditMode] = useState<boolean>(false);

  useEffect(()=>{
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response=>{
      setActivities(response.data);
      console.log(response.data);
    })
  },[])

  function selectActivity(id:string){
    var activity = activities.find( x => x.id === id)
    setSelectedActivity(activity);
  }
  function clearSelectActivity()
  {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?:string){
    id ? selectActivity(id) : clearSelectActivity();
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  function handleActivityEditOrCreate( activity : Activity)
  {
    activity.id ? 
      setActivities([...activities.filter(x=>x.id !== activity.id), activity]) :
      setActivities([...activities, activity]);
      setEditMode(false);
      setSelectedActivity(activity); 
  }
  return (
    <>
     <Navbar formOpen={handleFormOpen}/>
     <Container style={{marginTop:'7em'}}>
        <List>
          <ActivityDashboard 
            activities = {activities} 
            selectActivity={selectActivity} 
            clearSelectActivity={clearSelectActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            formOpen={handleFormOpen}
            formClose={handleFormClose}
            editOrCreate={handleActivityEditOrCreate}/> 
        </List>
        </Container>
      </>
  );
}

export default App;
