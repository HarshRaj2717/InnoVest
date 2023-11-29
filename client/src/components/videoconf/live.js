import React from 'react'
import "./live.css"
import { Link } from 'react-router-dom'
const Live = () => {
    return (
        <div className='hehe'>
            <ol>
                <Link to="/video">
                    <li >
                        <div class="icon"><i class="fa-solid fa-bicycle"></i></div>
                        <div class="title">SHARK TANK 1</div>
                        <div class="descr">Luis Pillich</div>
                    </li></Link>
                <Link to="/video">
                    <li >
                        <div class="icon"><i class="fa-solid fa-car"></i></div>
                        <div class="title">SHARK TANK 2</div>
                        <div class="descr">Andrew Masotta</div>
                    </li>
                </Link>
                <Link to="/video">
                    <li >
                        <div class="icon"><i class="fa-solid fa-helicopter"></i></div>
                        <div class="title">SHARK TANK 3</div>
                        <div class="descr">Michael Krakovsky</div>
                    </li>
                </Link>
            </ol>

        </div>
    )
}

export default Live
