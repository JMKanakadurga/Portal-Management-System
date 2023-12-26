const express = require('express');
const unirest = require('unirest');
const cors = require('cors');
var xml2js = require("xml2js");
const bodyparser = require("body-parser");
const parser = new xml2js.Parser({ attrkey: "ATTR" });

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


const app = express();
const port = 2000;
app.use(bodyparser.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-with,Content-Type,Accept");

    next();
});
app.listen(port, () => {
    console.log("running at 2000");
})


app.post('/auth', (req, res) => {
    var USERID = req.body.USERID;
    var PASSWORD = req.body.PASSWORD;
    //var USERID = '15';
    //var PASSWORD = 'Rubha@1';
    console.log(USERID);
    console.log(PASSWORD);
    var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_custt/100/zws_custt/zws_custt')
        .header({
            'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
            'Content-Type': 'application/soap+xml'
        })
        .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soap:Header/><soap:Body><urn:ZFMKANAKA><IM_CUSTOMERID>'+USERID+'</IM_CUSTOMERID><IM_PASSWORD>'+PASSWORD+'</IM_PASSWORD></urn:ZFMKANAKA></soap:Body></soap:Envelope>')
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
                        result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFMKANAKAResponse"]["IM_RESULT"]);
                        // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                    // console.log(this.res);
                });
            }
            console.log(this.result1);
            res.json(this.result1);
        })
})

app.post('/profile', (req, res) => {
    const USERID = req.body.USERID;
    console.log(USERID);
    unirest.get('https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_prof/100/zws_prof/zws_prof')
    .headers({
    Authorization: 'Basic YWJhcGVyMzphYmFwQDEyMw==',
    'Content-Type': 'application/soap+xml'
    })
    .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soap:Header/><soap:Body><urn:ZCUSTOMERPROFILE_KANAKA><CUST_ID>'+USERID+'</CUST_ID></urn:ZCUSTOMERPROFILE_KANAKA></soap:Body></soap:Envelope>')
    .end((result) => {
    if (result.error) {
    console.log(result.error);
    } else {                                
    let result1;
    const parser = new xml2js.Parser({ explicitArray: false });
    parser.parseString(result.body, (err, result) => {
    if (err) {
    console.error('xml2js.parseString: Error occurred: ', err);
    }
    result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZCUSTOMERPROFILE_KANAKAResponse"]["DATA"]);
    });
    console.log(result1);
    res.send(result1);
    }
    });
    });

    app.post('/inquiry', (req, res) => {
        var USERID = req.body.USERID;
        var PASSWORD = req.body.PASSWORD;
        //var USERID = '15';
        //var PASSWORD = 'Rubha@1';
        console.log(USERID);
        console.log(PASSWORD);
        var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_inquirykd/100/zws_inquirykd/zws_inquirykd')
            .header({
                'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
                'Content-Type': 'application/soap+xml'
            })
            .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soap:Header/><soap:Body><urn:ZFM_INQUIRY_KD><IT_INQUIRY_LIST></IT_INQUIRY_LIST><I_CUSID>'+USERID+'</I_CUSID></urn:ZFM_INQUIRY_KD></soap:Body></soap:Envelope>')
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
                            result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_INQUIRY_KDResponse"]["IT_INQUIRY_LIST"]["item"]);
                            // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                        // console.log(this.res);
                    });
                }
                console.log(this.result1);
                res.send(this.result1);
            })
    })


    app.post('/delivery', (req, res) => {
        var USERID = req.body.USERID;
        var PASSWORD = req.body.PASSWORD;
        //var USERID = '15';
        //var PASSWORD = 'Rubha@1';
        console.log(USERID);
        console.log(PASSWORD);
        var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_deliverykd/100/zws_deliverykd/zws_deliverykd')
            .header({
                'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
                'Content-Type': 'application/soap+xml'
            })
            .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soap:Header/><soap:Body><urn:ZDELIVERY_KANAKA><CUSID>'+USERID+'</CUSID><DELIVERY></DELIVERY></urn:ZDELIVERY_KANAKA></soap:Body></soap:Envelope>')
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
                            result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZDELIVERY_KANAKAResponse"]["DELIVERY"]["item"]);
                            // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                        // console.log(this.res);
                    });
                }
                console.log(this.result1);
                res.send(this.result1);
            })
    })



    app.post('/salesorder', (req, res) => {
        var USERID = req.body.USERID;
        var PASSWORD = req.body.PASSWORD;
        //var USERID = '15';
        //var PASSWORD = 'Rubha@1';
        console.log(USERID);
        console.log(PASSWORD);
        var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_saleskd/100/zws_saleskd/zws_saleskd')
            .header({
                'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
                'Content-Type': 'application/soap+xml'
            })
            .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soap:Header/><soap:Body><urn:ZFM_SALEORDER_KD><SAL_ORG>0001</SAL_ORG><USERID>'+USERID+'</USERID></urn:ZFM_SALEORDER_KD></soap:Body></soap:Envelope>')
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
                            result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_SALEORDER_KDResponse"]["SOD"]["item"]);
                            // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                        // console.log(this.res);
                    });
                }
                console.log(this.result1);
                res.send(this.result1);
            })
    })


    app.post('/invoice', (req, res) => {
        var USERID = req.body.USERID;
        var PASSWORD = req.body.PASSWORD;
        //var USERID = '15';
        //var PASSWORD = 'Rubha@1';
        console.log(USERID);
        console.log(PASSWORD);
        var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_invoicekd/100/zws_invoicekd/zws_invoicekd')
            .header({
                'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
                'Content-Type': 'application/soap+xml'
            })
            .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soap:Header/><soap:Body><urn:ZFM_INVOICE_KD><CUSID>'+USERID+'</CUSID><INVOICE></INVOICE></urn:ZFM_INVOICE_KD></soap:Body></soap:Envelope>')
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
                            result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_INVOICE_KDResponse"]["INVOICE"]["item"]);
                            // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                        // console.log(this.res);
                    });
                }
                console.log(this.result1);
                res.send(this.result1);
            })
    })

    app.post('/payments', (req, res) => {
        var USERID = req.body.USERID;
        var PASSWORD = req.body.PASSWORD;
        //var USERID = '15';
        //var PASSWORD = 'Rubha@1';
        console.log(USERID);
        console.log(PASSWORD);
        var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_payagekd/100/zws_payagekd/zws_payagekd')
            .header({
                'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
                'Content-Type': 'application/soap+xml'
            })
            .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soap:Header/><soap:Body><urn:ZFM_PAYAGE_KANAKA><!--Optional:--><IT_PAY_LIST><!--Zero or more repetitions:--></IT_PAY_LIST><I_CMP_CODE>0001</I_CMP_CODE><I_CUSID>'+USERID+'</I_CUSID></urn:ZFM_PAYAGE_KANAKA></soap:Body></soap:Envelope>')
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
                            result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_PAYAGE_KANAKAResponse"]["IT_PAY_LIST"]["item"]);
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
        var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_memokd/100/zws_memokd/zws_memokd')
            .header({
                'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
                'Content-Type': 'application/soap+xml'
            })
            .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soap:Header/><soap:Body><urn:ZFM_MEMO_KD><CREDIT><!--Zero or more repetitions:--></CREDIT><CUSID>12</CUSID><DEBIT><!--Zero or more repetitions:--></DEBIT></urn:ZFM_MEMO_KD></soap:Body></soap:Envelope>')
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
                            result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_MEMO_KDResponse"]["CREDIT"]["item"]);
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
        var req = unirest('GET', 'https://KTINDHNA02.kaartech.com:8001/sap/bc/srt/rfc/sap/zws_memokd/100/zws_memokd/zws_memokd')
            .header({
                'Authorization': 'Basic YWJhcGVyMzphYmFwQDEyMw==',
                'Content-Type': 'application/soap+xml'
            })
            .send('<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soap:Header/><soap:Body><urn:ZFM_MEMO_KD><CREDIT><!--Zero or more repetitions:--></CREDIT><CUSID>12</CUSID><DEBIT><!--Zero or more repetitions:--></DEBIT></urn:ZFM_MEMO_KD></soap:Body></soap:Envelope>')
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
                            result1 = JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_MEMO_KDResponse"]["DEBIT"]["item"]);
                            // console.log(JSON.stringify(result["env:Envelope"]["env:Body"]["n0:ZFM_CUSTOMERResponse"]["RESULT"]));
                        // console.log(this.res);
                    });
                }
                console.log(this.result1);
                res.send(this.result1);
            })
    })


  

