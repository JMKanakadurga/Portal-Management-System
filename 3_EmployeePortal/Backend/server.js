const express = require('express');
const unirest = require('unirest');
const cors = require('cors');
var xml2js = require("xml2js");
const bodyparser = require("body-parser");
const parser = new xml2js.Parser({ attrkey: "ATTR" });

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


const app = express();
const port = 3000;
app.use(bodyparser.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-with,Content-Type,Accept");

    next();
});
app.listen(port, () => {
    console.log("running at 3000");
})

app.post('/login', (req, res) => {

    var USERID = req.body.USERID; 
    var PASSWORD = req.body.PASSWORD;
    console.log(USERID);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EMPLOGIN_KD&receiverParty=&receiverService=&interface=SI_EMPLOGIN_KD&interfaceNamespace=http://EMPLOYEEPORTAL_KD.com')
        .header({
            //'Authorization': 'Basic cG91c2VyQDI6VGVjaEAyMDIy',
           // 'Authorization': 'Basic QUJBUEVSMzphYmFwQDEyMw==',
            //'Content-Type': 'application/soap+xml'
            //'Authorization': 'Basic cG91c2VyQDI6VGVjaEAyMDIy',
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })

        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soapenv:Header/><soapenv:Body><urn:ZFM_EMP_LOGIN_KD><PASS>'+PASSWORD+'</PASS><USERID>'+USERID+'</USERID></urn:ZFM_EMP_LOGIN_KD></soapenv:Body></soapenv:Envelope>')
        .end(function (result) {
            if (result.error) {
                console.log(result.error);
            }
            else {
                USERID = result.body;

                var result;
                console.log(USERID);
                var parser = new xml2js.Parser({ explicitArray: false });
                parser.parseString(USERID, function (err, result) {
                    if (err) {
                        console.error('xml2js.parseString: Error occurred: ', err);
                    }
                    result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_EMP_LOGIN_KD.Response"]["RESULT"]);
                });
            }
            console.log(this.result1);
            res.json(this.result1);
})
})




app.post('/emprofile', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EMPPROF_KD&receiverParty=&receiverService=&interface=SI_EMPPROFILE_KD&interfaceNamespace=http://EMPLOYEEPORTAL_KD.com')
        .header({
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soapenv:Header/><soapenv:Body><urn:ZFM_EMP_PROFILE_KD><USERID>'+USERID+'</USERID></urn:ZFM_EMP_PROFILE_KD></soapenv:Body></soapenv:Envelope>')
        .end(function (result) {
            if (result.error) {
                console.log(result.error);
            }
            else {
                USERID = result.body;
                var result;
                var parser = new xml2js.Parser({ explicitArray: false });
                parser.parseString(USERID, function (err, result) {
                    if (err) {
                        console.error('xml2js.parseString: Error occurred: ', err);
                    } 
                        result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_EMP_PROFILE_KD.Response"]["EMP_PROFILE"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.send(this.result1);
        })
})


app.post('/leavedata', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EMP_LEAVE_KD&receiverParty=&receiverService=&interface=SI_EMP_LEAVE_KD&interfaceNamespace=http://EMPLOYEEPORTAL_KD.com')
        .header({
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soapenv:Header/><soapenv:Body><urn:ZFM_EMP_LEAVE_KD><USERID>'+USERID+'</USERID><IT_LEAVE></IT_LEAVE></urn:ZFM_EMP_LEAVE_KD></soapenv:Body></soapenv:Envelope>')
        .end(function (result) {
            if (result.error) {
                console.log(result.error);
            }
            else {
                USERID = result.body;
                var result;
                var parser = new xml2js.Parser({ explicitArray: false });
                parser.parseString(USERID, function (err, result) {
                    if (err) {
                        console.error('xml2js.parseString: Error occurred: ', err);
                    } 
                        result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_EMP_LEAVE_KD.Response"]["IT_LEAVE"]["item"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.send(this.result1);
        })
})


app.post('/payslip', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_EMP_PAYSLIP_KD&receiverParty=&receiverService=&interface=SI_EMP_PAYSLIP_KD&interfaceNamespace=http://EMPLOYEEPORTAL_KD.com')
        .header({
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soapenv:Header/><soapenv:Body><urn:ZFM_EMP_PAYSLIP_KD><USERID>'+USERID+'</USERID><IT_PAYSLIP></IT_PAYSLIP></urn:ZFM_EMP_PAYSLIP_KD></soapenv:Body></soapenv:Envelope>')
        .end(function (result) {
            if (result.error) {
                console.log(result.error);
            }
            else {
                USERID = result.body;
                var result;
                var parser = new xml2js.Parser({ explicitArray: false });
                parser.parseString(USERID, function (err, result) {
                    if (err) {
                        console.error('xml2js.parseString: Error occurred: ', err);
                    } 
                        result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_EMP_PAYSLIP_KD.Response"]["IT_PAYSLIP"]["item"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.send(this.result1);
        })
})