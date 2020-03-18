import React from 'react'
import { Image, Button, Modal, Icon} from 'semantic-ui-react'
import ModalTable from './ModalTable'

export default class Name extends React.Component {
    
    
    handleFavClick=(e) => {
        // console.log(e.target)
        this.props.handleFavorites(this.props.name,this.props.user)
    }

    state = { 
        open: false
     }
    
    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
      
    returnColor=() => {
        if(this.props.name[1].map(name=>name.gender).indexOf('FEMALE')===-1){
            return 'blue'
        }
        else if(this.props.name[1].map(name=>name.gender).indexOf('MALE')===-1){
            return 'pink'
        }
        else {
            return 'grey'
        }
        
    }
    renderTable=() => {
        let arrayOfNames=this.props.name[1].map(name=><ModalTable key={name.id} name={name}/>)
        return(
            <>
              <table className="ui celled padded table">
                  <thead className="">
                      <tr className="">
                      <th className="">Gender</th>
                      <th className="">Ethnicity</th>
                      <th className="">Rank</th>
                      <th className="">Count</th>
                      </tr>
                  </thead>
                  <tbody className="">
                      {arrayOfNames}
                  </tbody>
              </table>
            </>
          );
    }
        
    render() {
    
    const { open, dimmer } = this.state


        return (

            <div>
                {/* {<Button className="babynames" color={this.props.name.gender === "MALE" ? 'blue' : 'pink'} onClick={this.show('blurring')}>
                    {this.props.name.first_name}
                </Button>} */}
                <Button className="babynames" color={this.returnColor()} onClick={this.show('blurring')}>{this.props.name[0]}</Button>
                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header><h1>{this.props.name[0]}</h1></Modal.Header>
                        <Modal.Content image>
                            <Image
                            wrapped
                            size='medium'
                            src={'https://i.pinimg.com/originals/59/57/75/595775041933aeb57cee83e4934d006b.png'}
                            />
                            <Modal.Description>
                                {this.renderTable()}
                                {/* <h3>Gender: {this.props.name[1].map(name=>name.gender)}</h3> */}
                                {/* <h3>Ethnicity: {this.props.name.ethnicity}</h3> */}
                                {/* <h3>Popularity Ranking: {this.props.name[1].map(name=>name.rank)}</h3> */}
                                {/* <h4>In 2016 <u>{this.props.name[1].map(name=>name.count)}</u> parents chose this name</h4> */}

                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={this.close}>
                            Close
                            </Button>
                            <Button color='red' icon onClick={this.handleFavClick}>
                                <Icon name='heart' />
                            </Button>
 
                        </Modal.Actions>
                </Modal>
            </div>

        )
    }
}