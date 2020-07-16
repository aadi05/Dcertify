import React, {Component} from "react";
import DigitalCertificationInstance from '../instances/DigitalCertificationInstance';
import { Statistic, Form, Button, Input, Message, Icon, Table} from 'semantic-ui-react';
import Layout from '../components/Layout';
const SHA256 = require("crypto-js/sha256");
const MerkleTools = require('merkle-tools');
import web3 from '../instances/web3';

const statisticStyle = {
    margin:"25px 25px 25px 25px"
};

const formStyle = {
    fontSize:"25px"
}

class Dcertify extends Component{

    state = {
        candidateID : "",
        verificationStatus:false,
        tableStatus:false,
        buttonStatus:true,
        messageHeader:"Verification Failed",
        messageContent:"Certificate doesn't exist!",
        messageColor:"red",
        fullName:"",
        degreeName:"",
        courseName:"",
        collegeName:"",
        classCategory:"",
        organizationName:"",
        dob:"",
        issueDate:"",
        buttonText:"View Certificate",
        certificateStatus:false,
        buttonTwoText:"View raw data",
        certData:"",
        merkleRoot:"",
        merkleProof: []

    };

    static async getInitialProps(){
        const manager = await DigitalCertificationInstance.methods.manager().call();
        const totalCertificates = await DigitalCertificationInstance.methods.totalCertificatesIssued().call();

        return {manager:manager,totalCertificates:totalCertificates};
    }
    onSubmitVerify = async (event) => {
        event.preventDefault();

        const certificateHash = SHA256(this.state.certData).toString();
        console.log(certificateHash);
        console.log(this.state.certData);
        const merkleTools = new MerkleTools();
        const isValid = merkleTools.validateProof(this.state.merkleProof,certificateHash,this.state.merkleRoot);
        console.log(isValid);
        console.log(isValid);
        if(!isValid){
            this.setState({messageHeader:"Verification Failed",verificationStatus:true,buttonStatus:true,
                        messageContent:"Certificate doesn't exist!",messageColor:"red",tableStatus:false,certificateStatus:false});
            return;
        }

        console.log("separator______");

        this.setState({tableStatus:false,certificateStatus:false,buttonText:"View Certificate",buttonTwoText:"View raw data"});

        try{
            const revokeStatus = await DigitalCertificationInstance.methods.checkRevokeStatus(certificateHash).call();
            console.log(revokeStatus);
            if(!revokeStatus){
                try{
                    const merkleStatus = await DigitalCertificationInstance.methods.checkMerkleRoot(this.state.merkleRoot).call();
                    console.log("merkleStatus"+merkleStatus);
                    if(merkleStatus){
                        this.setState({messageHeader:"Verification Status",verificationStatus:true,buttonStatus:false,
                            messageContent:"Certificate verified successfully!",messageColor:"green"});
                        return;
                    }
                }
                catch(err){
                    this.setState({messageHeader:"Verification Failed",verificationStatus:true,buttonStatus:true,
                        messageContent:"Try again later!",messageColor:"red",tableStatus:false,certificateStatus:false});
                    return;
                }
            }
            this.setState({messageHeader:"Verification Failed",verificationStatus:true,buttonStatus:true,
                        messageContent:"This certificate is revoked. Please contact concerned authorities for more information",messageColor:"red",tableStatus:false,certificateStatus:false});
            return;
        }
        catch(err){
            console.log(err);
            this.setState({messageHeader:"Verification Failed",verificationStatus:true,buttonStatus:true,
                        messageContent:"Try again later!",messageColor:"red",tableStatus:false,certificateStatus:false});
        }


    };

    setValues = (obj) => {
        const data = obj.CertificateData;
        const issueD = this.convertDate(obj.Metadata.datetime)
        const cert = JSON.stringify(data);
        this.setState({candidateID:data.ID,degreeName:data.Degree,fullName:data.Name,courseName:data.Course,organizationName:data.Organization,
            dob:data.DOB,classCategory:data.ClassCategory,collegeName:data.College,issueDate:issueD,merkleProof:obj.MerkleProof,merkleRoot:obj.MerkleRoot,certData:cert});
        console.log(this.state);

    }

    handleFile = (selectorFiles) => {
        const reader = new FileReader();
        reader.onload = this.onReaderLoad;
        reader.readAsText(selectorFiles[0]);
    }

    onReaderLoad = (event) => {
        var obj = JSON.parse(event.target.result);
        this.setValues(obj);
        
    }

    showHideRawData = () => {
        if(this.state.tableStatus == true){
            this.setState({tableStatus:false,certificateStatus:false,buttonTwoText:"View raw data"});
        }
        else{
            this.setState({tableStatus:true,certificateStatus:false,buttonTwoText:"Hide raw data",buttonText:"View Certificate"});
        }

    }

    showHideCertificate = () => {
        if(this.state.certificateStatus == true){
            this.setState({certificateStatus:false,tableStatus:false,buttonText:"View Certificate"});
        }
        else{
            this.setState({certificateStatus:true,tableStatus:false,buttonText:"Hide Certificate",buttonTwoText:"View raw data"});
        }

    }

    convertDate = (inpTime) => {
        const months_arr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const date = new Date(inpTime*1000);
        const year = date.getFullYear();
        const month = months_arr[date.getMonth()];
        const day = date.getDate();

        return (month+" "+day+","+year);
    }

    statisticComponent(){
        const stat = <Statistic floated="right" style={statisticStyle}>
                        <Statistic.Value>{this.props.totalCertificates}</Statistic.Value>
                        <div className="label" style={{marginTop:"10px"}}>Certificates Issued So Far</div>
                    </Statistic>
        return stat;
    }

    render(){
        return  (<Layout>
                {this.statisticComponent()}<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <Form onSubmit={this.onSubmitVerify}>
                    <Form.Field>
                    <label style={{fontSize:"20px"}}>Verify Certificate</label><br></br>
                    <Input type="file" labelPosition="right" style={formStyle}
                     onChange={event =>this.handleFile(event.target.files)} />
                    </Form.Field>
                    <Button type='submit' fluid primary style={{fontSize:"20px"}}>Verify</Button>
                    <Message floating color={this.state.messageColor} hidden={!this.state.verificationStatus} header={this.state.messageHeader} content={this.state.messageContent}></Message>
                </Form>
                <br></br><br></br>
                <Button hidden={this.state.buttonStatus} onClick={this.showHideCertificate} primary>{this.state.buttonText}</Button>
                <Button style={{marginLeft:"15px"}} hidden={this.state.buttonStatus} onClick={this.showHideRawData}>{this.state.buttonTwoText}</Button>
                <br></br><br></br>
                <div hidden={!this.state.certificateStatus} style={{margin:"auto", width:"800px",height:"600px",padding:"20px",textAlign:"center", border:"10px solid #787878"}}>
                <div style={{width:"750px", height:"550px", padding:"20px", textAlign:"center", border: "5px solid #787878"}}>
                    <Icon name="certificate" color='yellow' size="huge"/><br></br><h1 style={{fonSize:"50px"}}><b>Certificate of Completion</b></h1>
                    <br></br>
                    <span style={{fontSize:"25px"}}><i>This is to certify that</i></span><br></br>
                    <br></br>
                    <span style={{fontSize:"25px"}}><b>{this.state.fullName}</b></span><br></br><br></br>
                    <span style={{fontSize:"25px"}}><i>has completed the course</i></span><br></br><br></br>
                    <span style={{fontSize:"30px"}}>{this.state.degreeName} in {this.state.courseName}</span> <br></br>
                    <span style={{fontSize:"20px"}}>with <b>{this.state.classCategory} class</b></span> <br></br><br></br>
                    <span style={{fontSize:"25px"}}><i>dated</i></span><br></br>
                    <span style={{fontSize:"30px"}}>{this.convertDate(this.state.issueDate)}</span>
                </div>
                </div>
                <Table hidden={!this.state.tableStatus} color="green" key="blue">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>{this.state.fullName}</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>Degree</Table.Cell>
                            <Table.Cell>{this.state.degreeName}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Course Name</Table.Cell>
                            <Table.Cell>{this.state.courseName}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Class</Table.Cell>
                            <Table.Cell>{this.state.classCategory}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>College</Table.Cell>
                            <Table.Cell>{this.state.collegeName}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Organization</Table.Cell>
                            <Table.Cell>{this.state.organizationName}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Date of Birth</Table.Cell>
                            <Table.Cell>{this.convertDate(this.state.dob)}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Issue Date</Table.Cell>
                            <Table.Cell>{this.convertDate(this.state.issueDate)}</Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
                <br></br><br></br><br></br><br></br>
                </Layout>
                );
    }

}

export default Dcertify;