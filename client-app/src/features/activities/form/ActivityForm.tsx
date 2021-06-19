import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'

interface Props{
    activity:Activity | undefined;
    formClose:()=>void;
    editOrCreate:(activity:Activity)=>void;
}

export default function ActivityForm({formClose, activity:selectedActivity,editOrCreate}:Props){
    
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    }

    const [activity,setActivity] = useState<Activity>(initialState);

    function handleSubmit(){
        editOrCreate(activity);
    }
    function handleInputChange(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    {
        const {name,value} = event.target;
        setActivity({...activity,[name]:value});
    }
    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder='Title' name="title" onChange={handleInputChange} value={activity.title}/>
                <Form.TextArea placeholder='Description' name="description" onChange={handleInputChange} value={activity.description}/>
                <Form.Input placeholder='Category' name="category" onChange={handleInputChange} value={activity.category}/>
                <Form.Input placeholder='Date' name="date" onChange={handleInputChange} value={activity.date}/>
                <Form.Input placeholder='City' name="city" onChange={handleInputChange} value={activity.city}/>
                <Form.Input placeholder='Venue' name="venue" onChange={handleInputChange} value={activity.venue}/>
                <Button onClick={handleSubmit}floated='right' positive content='Submit' type='submit'/>
                <Button onClick={formClose} floated='right' content='Cancel' type='submit'/>
            </Form>
        </Segment>
    )
}