import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity;
    clearSelectActivity:()=>void;
    formOpen:(id:string)=>void;
}
export default function AcitivityDetails({ activity,clearSelectActivity,formOpen }: Props) {
    return (
        <Card>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>
                    {activity.title}
                </Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={()=>formOpen(activity.id)} basic color='blue'content='Edit'/>
                    <Button onClick={clearSelectActivity} basic color='grey'content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}