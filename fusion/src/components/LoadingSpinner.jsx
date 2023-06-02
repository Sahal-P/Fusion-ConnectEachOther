import './LoadingSpinner.css'
import {useState} from 'react'

const LoadingSpinner = (props) => { // const [loading,setLoading]= useState(false)

    if (props.active) {
        console.log('nnnn', props.active);
        // setLoading(true)
    }
    return (
        <div className={
            (props.active === true ? "load_active" : "load_inactive")
        }>
            <div className="loading">
                <div className="boxLoading boxLoading-dark"/>
                <div className='loading_text'>
                    <h3>Loading ....</h3>
                </div>
            </div>
        </div>
    )
}

export default LoadingSpinner
