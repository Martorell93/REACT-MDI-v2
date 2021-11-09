import React from 'react'
import SingleCase from './SingleCase/SingleCase'
import { cases } from './../../models/cases'
import Category from '../Category/Category'
import './Cases.scss'

const Cases = () => {
    return (
        <section className="cases">
            <header className="section_header display_center">
                <h2 className="section_title">CASES</h2>
                <Category/>
            </header>
            <article className="section_content">
                <ul className="content_cases">
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
                </ul>
            </article>
        </section>
    )
}

export default Cases
