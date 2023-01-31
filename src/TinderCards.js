import React, { useState } from 'react'
import "./TinderCards.css";
import TinderCard from 'react-tinder-card'
export default function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Hrithik Roshan", 
            url:"https://media.zenfs.com/en/cinema.com.my/cf4c21db85b540f9bef395082a189fd8"
        },
        {
            name: "Elon Musk",
            url: "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg"
        },
        {
            name: "Albert Einstein",
            url: "https://i.insider.com/50e640e7eab8ead62f000005?width=1136&format=jpeg"
        }
    ])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className='tinderCard'>
           
            {people.map((person) => (
                <TinderCard
                    className='swipe'
                    key={person.name}
                    onSwipe={(dir) => onSwipe(dir, person.name)}
                    onCardLeftScreen={() => onCardLeftScreen(person.name)}
                    preventSwipe={['up', 'down']}>

                    <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                        <h2>{person.name}</h2>
                    </div>
                </TinderCard>
            ))}


        </div>
    )
}


