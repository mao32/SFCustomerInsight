import { LightningElement, api,wire } from "lwc";
import { getRecord, getFieldValue } from "lightning/uiRecordApi";

import TOTAL_PROJECTS_FIELD from "@salesforce/schema/Account.Total_Project__c";
import CREATEDDATE_FIELD from "@salesforce/schema/Account.CreatedDate";
import PIPELINE_AMOUNT_FIELD from "@salesforce/schema/Account.Pipeline_Amount__c";

const fields = [TOTAL_PROJECTS_FIELD,CREATEDDATE_FIELD,PIPELINE_AMOUNT_FIELD];
export default class QuickInsights extends LightningElement {
  @api stringTitle;
  @api stringIconName;
  @api stringFooter;

  @api stringMetricStatus1;
  @api stringMetric1;
  @api stringValue1;
  @api stringValue1Color;
  @api stringMetric1IconName;

  @api stringMetricStatus2;
  @api stringMetric2;
  @api stringValue2;
  @api stringValue2Color;
  @api stringMetric2IconName;

  @api stringMetricStatus3;
  @api stringMetric3;
  @api stringValue3;
  @api stringValue3Color;
  @api stringMetric3IconName;

  @api stringMetricStatus4;
  @api stringMetric4;
  @api stringValue4;
  @api stringValue4Color;
  @api stringMetric4IconName;

  //Instanza del record
  @api recordId;

  @wire(getRecord, { recordId: "$recordId", fields })
  account;

  get stringValue1() {
    return getFieldValue(this.account.data, PIPELINE_AMOUNT_FIELD);
  }

  //TOTAL PROJECT
  get stringValue2() {
    return getFieldValue(this.account.data, TOTAL_PROJECTS_FIELD);
  }

  get stringValue4() {
    // Create the formatted date string
    //const [yyyy, mm, dd, hh, mi] = getFieldValue(this.account.data, CREATEDDATE_FIELD).split(/[-:T]/);
    //const formattedDate = `${dd}-${mm}-${yyyy}` ;
    return getFieldValue(this.account.data, CREATEDDATE_FIELD);
  }

  get colorClassValue1() {
    return this.stringValue1Color ? this.stringValue1Color.toLowerCase() + " value" : "black value";
  }

  get colorClassValue2() {
    return this.stringValue2Color ? this.stringValue2Color.toLowerCase() + " value" : "black value";
  }

  get colorClassValue3() {
    return this.stringValue3Color ? this.stringValue3Color.toLowerCase() + " value" : "black value";
  }

  get colorClassValue4() {
    return this.stringValue4Color ? this.stringValue4Color.toLowerCase() + " value" : "black value";
  }

  get columnSize() {
      var numberOfMetrics = (this.stringMetricStatus1 ? 1 : 0) + (this.stringMetricStatus2 ? 1 : 0) + (this.stringMetricStatus3 ? 1 : 0) + (this.stringMetricStatus4 ? 1 : 0)
      
      return 12 / (numberOfMetrics === 0 ? 1 : numberOfMetrics);
  }
}