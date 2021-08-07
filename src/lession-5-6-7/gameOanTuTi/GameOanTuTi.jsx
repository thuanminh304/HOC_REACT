import React, { Component } from 'react'
import ThongTinGame from './ThongTinGame'
import "./buble.css"
export default class GameOanTuTi extends Component {
    render() {
        return (
            <div className="game-container">

                <div className="mt-10">
                <ThongTinGame/>
                </div>
                
            </div>
        )
    }
}


