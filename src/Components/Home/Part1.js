import React from 'react'
import Explore from '../Images/Background image header with cubs.png'

const Part1 = () => {
  return (
    <div className='part1'>
        <div className="p1-outbox">
            <div className="p1-left">
                <h1>Discover, collect and sell extraordinary NFTs</h1>
                <p>Explore on the world's best & largest NFT marketplace</p>
                <button className="create-btn-home">Create</button>
            </div>
            <div className="p1-right">
                <img src={Explore} className="explore-img" alt="explore" />
            </div>
        </div>
    </div>
  )
}

export default Part1