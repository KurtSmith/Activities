import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import ActivityDetails from '../details/ActivityDetails'
import ActivityList from './ActivityList'
import ActivityForm from '../form/ActivityForm'

interface Props{
    activities:Activity[];
    selectedActivity:Activity | undefined;
    selectActivity:(id:string)=>void;
    clearSelectActivity:()=>void;
    editMode : boolean;
    formOpen:(id:string) => void;
    formClose:()=>void; 
    editOrCreate:(activity:Activity)=>void;
}

export default function ActivityDashboard(
    {
        activities,selectedActivity,
        clearSelectActivity,
        selectActivity,
        formOpen,formClose,editMode,editOrCreate}:Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
               <ActivityList activities={activities} selectActivity={selectActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode && 
                <ActivityDetails 
                    activity={selectedActivity} 
                    clearSelectActivity={clearSelectActivity}
                    formOpen={formOpen}
                />}
                {editMode &&
                <ActivityForm formClose={formClose} activity={selectedActivity} editOrCreate={editOrCreate}/>}
            </Grid.Column>
        </Grid>
    )
}