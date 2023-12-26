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
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VPORTAL_KD&receiverParty=&receiverService=&interface=SI_VPORTAL_KD&interfaceNamespace=http://VENDORPORTAL_KD.com')
        .header({
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ven="http://VENDORPORTAL_KD.com"><soapenv:Header/><soapenv:Body><ven:MT_VPORTALKD_REQ><USERID>'+USERID+'</USERID><PASSWORD>'+PASSWORD+'</PASSWORD></ven:MT_VPORTALKD_REQ></soapenv:Body></soapenv:Envelope>')
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
                        result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_LOGIN_KD.Response"]["RESULT"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.json(this.result1);
        })
})


app.post('/vendor-profile', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENPROF_KD&receiverParty=&receiverService=&interface=SI_VENPROF_KD&interfaceNamespace=http://VENDORPORTAL_KD.com')
        .header({
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ven="http://VENDORPORTAL_KD.com"><soapenv:Header/><soapenv:Body><ven:MT_VPORTALKD_REQ><USERID>'+USERID+'</USERID><PASSWORD>'+PASSWORD+'</PASSWORD></ven:MT_VPORTALKD_REQ></soapenv:Body></soapenv:Envelope>')
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
                        result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_VENDORPROF_KD.Response"]["DATA"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.send(this.result1);
        })
})


app.post('/goods-receipt', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENGR_KD&receiverParty=&receiverService=&interface=SI_VENGR_KD&interfaceNamespace=http://VENDORPORTAL_KD.com')
        .header({
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ven="http://VENDORPORTAL_KD.com"><soapenv:Header/><soapenv:Body><ven:MT_VPORTALKD_REQ><USERID>5</USERID><PASSWORD>Kanaka</PASSWORD></ven:MT_VPORTALKD_REQ></soapenv:Body></soapenv:Envelope>')
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
                        result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_VENDOR_GR_KD.Response"]["GOODS_ITEM"]["item"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.send(this.result1);
        })
})



app.post('/quotation', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_QUO&receiverParty=&receiverService=&interface=SI_VENDOR_QUO_KD&interfaceNamespace=http://VENDORPORTAL_KD.com')
        .header({
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soapenv:Header/><soapenv:Body><urn:ZFM_VENDOR_QUOTATION_KD><USERID>5</USERID><QUOTATION></QUOTATION></urn:ZFM_VENDOR_QUOTATION_KD></soapenv:Body></soapenv:Envelope>')
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
                        result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_VENDOR_QUOTATION_KD.Response"]["QUOTATION"]["item"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.send(this.result1);
        })
})










app.post('/purchase-order', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VEN_PO_KD&receiverParty=&receiverService=&interface=SI_VENDOR_PO_KD&interfaceNamespace=http://VENDORPORTAL_KD.com')
        .header({
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ven="http://VENDORPORTAL_KD.com"><soapenv:Header/><soapenv:Body><ven:MT_VPORTALKD_REQ><USERID>'+USERID+'</USERID><PASSWORD>'+PASSWORD+'</PASSWORD></ven:MT_VPORTALKD_REQ></soapenv:Body></soapenv:Envelope>')
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
                        result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_PURCHASE_ORD_KD.Response"]["PO"]["item"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.send(this.result1);
        })
})


app.post('/vendor-invoice', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDORINVOICEE_KD&receiverParty=&receiverService=&interface=SI_VENDINV_KD&interfaceNamespace=http://VENDORPORTAL_KD.com')
        .header({
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soapenv:Header/><soapenv:Body><urn:ZFM_VENDOR_INVOICE_KD><USERID>5</USERID></urn:ZFM_VENDOR_INVOICE_KD></soapenv:Body></soapenv:Envelope>')
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
                        result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_VENDOR_INVOICE_KD.Response"]["INVOICE_ITEM"]["item"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.send(this.result1);
        })
})









app.post('/vendorpayments', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDORPAY_KD&receiverParty=&receiverService=&interface=SI_VPORTAL_PAY&interfaceNamespace=http://VENDORPORTAL_KD.com')
        .header({
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soapenv:Header/><soapenv:Body><urn:ZFM_VENDOR_PAYAGE_KD><USERID>5</USERID></urn:ZFM_VENDOR_PAYAGE_KD></soapenv:Body></soapenv:Envelope>')
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
                        result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_VENDOR_PAYAGE_KD.Response"]["PAYAGE"]["item"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.send(this.result1);
        })
})


















app.post('/credit', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_CREDEBTT&receiverParty=&receiverService=&interface=SI_CREDDEBT_KD&interfaceNamespace=http://VENDORPORTAL_KD.com')
        .header({
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soapenv:Header/><soapenv:Body><urn:ZFM_VENDOR_CREDTDEBT_KD><USERID>5</USERID><CREDIT></CREDIT><DEBIT></DEBIT></urn:ZFM_VENDOR_CREDTDEBT_KD></soapenv:Body></soapenv:Envelope>')
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
                        result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_VENDOR_CREDTDEBT_KD.Response"]["CREDIT"]["item"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.send(this.result1);
        })
})

app.post('/debit', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('POST', 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_CREDEBTT&receiverParty=&receiverService=&interface=SI_CREDDEBT_KD&interfaceNamespace=http://VENDORPORTAL_KD.com')
        .header({
            'Authorization': 'Basic cG91c2VyQDE6MjAyMkBUZWNo',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soapenv:Header/><soapenv:Body><urn:ZFM_VENDOR_CREDTDEBT_KD><USERID>5</USERID><CREDIT></CREDIT><DEBIT></DEBIT></urn:ZFM_VENDOR_CREDTDEBT_KD></soapenv:Body></soapenv:Envelope>')
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
                        result1 = JSON.stringify(result["SOAP:Envelope"]["SOAP:Body"]["rfc:ZFM_VENDOR_CREDTDEBT_KD.Response"]["DEBIT"]["item"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.send(this.result1);
        })
})