import React from 'react'
import {Image, Divider} from 'semantic-ui-react'
import babynamerlogo from './babynamerlogo.png'
export default class Header extends React.Component {

    render() {

        return (
            <center>
                <Divider hidden/>
                <Image src={babynamerlogo} alt='babynamerlogo' size='large' /> 
                <Divider hidden/>
            </center>
        )
    }
}