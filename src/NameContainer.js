import React from 'react'
import NameList from './NameList'
import Search from './Search'
import {Grid} from 'semantic-ui-react'
import Instructions from './Instructions'

export default class NameContainer extends React.Component {

    state = {
        searchTerm: "",
        sortValue: "Popularity",
        male: false,
        female: false,
        both:false
    }
    //pass down the  this.state.searchTerm as props
    //lobster trap to get searchTerm
    handleOnChange = (evt) => {
        this.setState({searchTerm: evt.target.value})
    }
    //lobster trap to get the malecheckbox
    handleMaleCheckbox = () =>{
        this.setState({male: !this.state.male})
    }
    //lobster trap to get the femalecheckbox
    handleFemaleCheckbox = () =>{
        this.setState({female: !this.state.female})
    }
    //lobster trap to get bothsexcheckbox
    handleBothSexCheckbox=() => {
        this.setState({both:!this.state.both})
    }
    //lobster trap to get the sortvalue
    handleSort = (newSortValue) => {
        this.setState({
            sortValue: newSortValue
        })
    }

    sortNames = () => {
        let {sortValue} = this.state
        let copiedObj= {...this.props.groupNames} //copy object versus copy array
        let arrayEntries=Object.entries(copiedObj)
        if(sortValue === "A-Z"){ 
            let sortedArray = arrayEntries.sort((nameA, nameB) => {
                return nameA[0].localeCompare(nameB[0])
            })
            return sortedArray
        } 
        else {
            return arrayEntries
        }
    }

    handleFilter = (sortedNames) => {
        let {male,female,both} = this.state    
        let copiedObj= [...sortedNames] //copy array versus copy object
        const filteredArray= copiedObj.filter(name => 
            name[0].toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))

        if (male){
            return filteredArray.filter(name=> name[1].map(name=>name.gender).indexOf('FEMALE')===-1)
        }
        else if (female){
            return filteredArray.filter(name=> name[1].map(name=>name.gender).indexOf('MALE')===-1)
        }
        else if(both){
            return filteredArray.filter(name=> (name[1].map(name=> name.gender).indexOf('FEMALE')!==-1 && name[1].map(name=> name.gender).indexOf('MALE')!==-1))
        }
        else{
            return filteredArray
        }
    }

    listOfNamesToRender=() => {
       return this.handleFilter(this.sortNames())
    }

    render() {
        console.log(this.sortNames())
        console.log(this.state.male, this.state.female);
        console.log(this.props.allNames)
        // console.log(this.listOfNamesToRender)
        return (
            <div>
                <Search searchTerm={this.state.searchTerm} handleSort={this.handleSort} handleOnChange={this.handleOnChange} handleFemaleCheckbox={this.handleFemaleCheckbox} handleMaleCheckbox={this.handleMaleCheckbox} handleBothSexCheckbox={this.handleBothSexCheckbox}/>
                {this.state.searchTerm ? 
                <NameList groupNames={this.props.groupNames} allNames={this.props.allNames} handleFilter={this.handleFilter} handleFavorites={this.props.handleFavorites} user={this.props.user} listOfNamesToRender={this.listOfNamesToRender} />
                : 
                <Instructions />}
            </div>
        )
    }
}
