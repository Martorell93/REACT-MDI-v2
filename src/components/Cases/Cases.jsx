import React from 'react'
import SingleCase from './SingleCase'
import { cases } from './../../models/cases'
import Category from '../Category/Category'
import '../content.scss'

const Cases = () => {
    return (
        <div className="cases">
            <div className="section_header display_center">
                <h2 className="section_title">CASES</h2>
                <Category/>
            </div>
            <div className="section_content">
                {/* <SingleCase title="hola" muted={false} category="red" /> */}
                <div className="content_cases">
                    {
                        cases.map((case_, i) => (
                            <SingleCase
                                key={i}
                                title={case_.title}
                                muted={case_.muted}
                                pinned={case_.pinned}
                                category={case_.category} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cases
