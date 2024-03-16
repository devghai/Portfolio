import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'; // Make sure to update the import path if necessary

class Interests extends Component {
    state = {}

    render() {
        return (
            <div className='interests'>
                <div className='interests-content'>
                    <h1><Fade bottom cascade>Interests.</Fade></h1>
                    <Fade bottom>
                        <ul className='interests-list'>
                            {data.interests.map((interest, index) => (
                               
                                <li key={index} dangerouslySetInnerHTML={{ __html: interest }} />
                            ))}
                        </ul>
                    </Fade>
                    <Fade bottom>
                        <ul className='additional-interests-list'>
                            {data.additionalInterests.map((interest, index) => (
                                <li key={index}>{interest}</li>
                            ))}
                        </ul>
                    </Fade>
                </div>
                {data.ShowInterestsImage ? <img src={data.interestsImage} alt='interests image' /> : null}
            </div>
        );
    }
}

export default Interests;
