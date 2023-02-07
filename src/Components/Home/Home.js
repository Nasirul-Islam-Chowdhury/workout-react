import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Count from '../Count/Count';
import './Home.css'
import { CiDumbbell } from 'react-icons/ci';

const Home = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='header-container'>
            <div className='main-container'>
                <div className='card-container'>
                    <div className='header-text'>
                        <h2 className='header-logo'>
                            <p className='new-test'><CiDumbbell size="50px" id='logo-icon' />
                            </p>Workout Countdown</h2>
                        <p className='head-text'>Select today’s exercise</p>
                    </div>
                   <div className='first-side-container'>
                   <div className='first-side'>
                        {
                            activities.map(pro => <Card key={pro.id} pro={pro}></Card>)
                        }
                    </div>
                   </div>
                </div>

                <div className='second-side'>
                    <Count activities={activities}></Count>
                </div>
            </div>
        </div>
    );
};
export default Home;