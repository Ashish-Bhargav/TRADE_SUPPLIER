import React, { Component } from 'react'
import BuyersForm from '../../modals/Buyers.js';
import './styles.css';
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';
import { inviteNewBuyer } from '../../../redux/action.js';

function RenderBuyers({buyer, inviteNewBuyer}){
        return(
                <Card className='buyer-card mb-3'>
                    <CardBody>
                        <CardTitle className='title' heading><h4>{buyer.companyName}</h4></CardTitle>
                        <CardText>
                            <ul className='buyer-details list-unstyled'>
                                <li>COMPANY NAME: {buyer.companyName}</li>
                                <li>COMPANY ID: {buyer.companyId}</li>
                                <li>COMPANY MAIL: {buyer.companyMail}</li>
                                <li>COMPANY MOBILE: {buyer.companyMobile}</li>
                                <li>COMPANY CONTACT PERSON: {buyer.companyContactPerson}</li>
                            </ul>
                        </CardText>
                    </CardBody>
                </Card>
        );
}

class BuyerInvite extends Component {
    render() {
        const buyer = this.props.buyers.map((buyer)=>{
            return(
                <div key = {buyer.id} className='col-12 col-md-6'>
                    <RenderBuyers buyer = {buyer}
                        inviteNewBuyer={this.props.inviteNewBuyer}
                    />
                </div>
            );
        })
        return (
            <div className='container mt-5 text-left'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Invited Buyers</h3>
                    </div>
                </div>
                <div className='row mt-3'>
                    {buyer}
                </div>
                <div className='row mt-5'>
                    <div className='col-12 col-md-5'>
                        <BuyersForm inviteNewBuyer={this.props.inviteNewBuyer}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default BuyerInvite;