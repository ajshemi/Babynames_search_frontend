import React from 'react'
import { Input, Menu, Dropdown, Checkbox, MenuItem, Segment } from 'semantic-ui-react'

export default class Search extends React.Component{
    
   

    ethicities = [
        
        {
            key: 'ASIAN & PACIFIC ISLANDER',
            text: 'ASIAN & PACIFIC ISLANDER',
            value: 'ASIAN & PACIFIC ISLANDER',
         },
         {
            key: 'BLACK NON HISPANIC',
            text: 'BLACK NON HISPANIC',
            value: 'BLACK NON HISPANIC',
          },
          {
            key: 'WHITE NON HISPANIC',
            text: 'WHITE NON HISPANIC',
            value: 'WHITE NON HISPANIC',
          },
          {
            key: 'HISPANIC',
            text: 'HISPANIC',
            value: 'HISPANIC',
          }
    ]



    handlechange = (e) => {
        this.props.handleSort(e.target.value)
    }
    
    render() {
        console.log(this.props)
        //handleOnChange,handleSort,handleFemaleCheckbox,handleMaleCheckbox,searchTerm

        return (
            
            <center>
               <Segment basic compact clearing>

                <Menu secondary borderless fluid widths={2}> 
                    <MenuItem>
                        <Input size='large' icon='search' placeholder='Names that start with...' value={this.props.searchTerm} onChange={this.props.handleOnChange} /> 
                    </MenuItem>
                    <MenuItem>
                        <Checkbox label='Male' onClick={ this.props.handleMaleCheckbox }/>
                        <Checkbox label='Female' onClick={ this.props.handleFemaleCheckbox }/>
                        <Checkbox label='Both' onClick={ this.props.handleBothSexCheckbox }/>
                    </MenuItem>
                    <MenuItem>
                        {/* <Dropdown placeholder='Ethnicitiy' fluid multiple selection options={this.ethicities} /> */}
                    </MenuItem>
                    <MenuItem>
                        <label>
                            <strong>Sort:</strong>
                            <select onChange={this.handlechange}>
                                {/* <option value="Popularity"> Popularity</option> */}
                                <option value=""></option>
                                <option value="A-Z"> A-Z</option>
                            </select>
                        </label>
                    </MenuItem>          
                </Menu>
                </Segment>
            </center>
        )
    }
} 
 

