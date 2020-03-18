import React from 'react'
// import Name from './Name'
import Name from './Name'

import {Grid} from 'semantic-ui-react'

export default class NameList extends React.Component {

    render() {
        // console.log(this.props.groupNames)
        // console.log(this.props.listOfNamesToRender())
        let arrayOfNames=this.props.listOfNamesToRender()
        console.log(arrayOfNames)
        // let listOfNamesToRender = arrayOfNames.map(nameObj => {
        //         return <Grid.Column> <Name key={nameObj.id} name={nameObj} user={this.props.user} handleFavorites={this.props.handleFavorites}/> </Grid.Column>
        //     // console.log(name.id)
        //     })
        let listOfNamesToRender = arrayOfNames.map((nameArr,index) => <Grid.Column key={`${nameArr[0]}+${index}`} > <Name key={`${nameArr[0]}-${index}`} name={nameArr} user={this.props.user} handleFavorites={this.props.handleFavorites}/> </Grid.Column>)
        
        
        // user,listOfNamesToRender,renderNames,handleFilter,handleFavorites,allNames,groupNames

        return (
            <center>
                <Grid relaxed columns={10}>
                    {listOfNamesToRender}
                    {/* {this.props.renderNames()} */}
                </Grid>
            </center>

        )
    }
}