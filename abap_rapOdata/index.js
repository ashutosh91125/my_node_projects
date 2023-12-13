const axios = require('axios');

const odataServiceUrl = ' http://71.251.192.136:8011/sap/opu/odata/sap/ZAPI_SALES_ORDER_SRV';
const entitySetName = 'SalesOrderSet';

axios.get(`${odataServiceUrl}/${entitySetName}`)
  .then(response => {
    // Handle the OData response data here
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });