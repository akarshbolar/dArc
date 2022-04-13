import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

 class serviceParameterValues{

    public currValue : string;
    public dropDownList : string[];

    constructor(currValue,dropDownList){
        this.currValue = currValue;
        this.dropDownList = dropDownList;
    }
 }


@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  public objectType;
  private connectorID = new BehaviorSubject("");
  private sourceID = new BehaviorSubject(""); 
  private targetID = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();
    public objectContainer = {};
    public currentObject;

    public EC2 = {
        "region":{"currValue":"us-east1","dropdown":["us-east1","us-east2"]},
        "OS":{"currValue":"windows","dropdown":["ubuntu","windows","amazon-linux"]},
        "EC2Name":"",
        "instanceType":{"currValue":"t2-nano","dropdown":["t2-micro","t2-nano"]}
    };

    public S3 = {
        "bucketName":"",
        "region":{"currValue":"us-east1","dropdown":["us-east1","us-east2"]},
        "filePath":""
    }

    public Connector = {
      "sourceID":"",
      "targetID":""
    };

  constructor() {
      this.objectType = '';
   }


  updateConnectorDetails(sourceID:string, targetID:string){
    
    this.sourceID.next( sourceID)
    this.targetID.next(targetID)
    window.alert("Update details"+this.connectorID.getValue());
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  getObjectType() {
    window.alert("getObject Type called"+this.messageSource.getValue());
    if(this.messageSource.getValue().includes("EC2")){
        this.objectType = "EC2";
    }
    else if(this.messageSource.getValue().includes("S3")){
        this.objectType  = "S3";
    }
    else if(this.messageSource.getValue().includes("ECR")){
        this.objectType  = "ECR";
    }
    else if(this.messageSource.getValue().includes("VPC")){
        this.objectType  = "VPC";
    }
    else if(this.messageSource.getValue().includes("Lambda")){
        this.objectType  = "Lambda";
    } else if(this.messageSource.getValue().includes("connector")){
      this.objectType = "Connector";
    }
    else{
        this.objectType  = "DynamoDB";
    }
      return this.objectType;
  }

  insertToContainer() {
    window.alert("insert to container called"+this.objectType+ "msgSource : "+this.sourceID.getValue());
      if(!(this.messageSource.getValue() in this.objectContainer)){
        console.log(this.messageSource.getValue())
          if(this.objectType=="EC2"){
            // this.objectContainer[this.messageSource.getValue()]={ ...this.EC2};
            // this.objectContainer[this.messageSource.getValue()]=JSON.parse(JSON.stringify(this.EC2))
            this.objectContainer[this.messageSource.getValue()]=_.cloneDeep(this.EC2)
          }
          else if(this.objectType=="S3"){
            // this.objectContainer[this.messageSource.getValue()]={ ...this.S3};
            // this.objectContainer[this.messageSource.getValue()]=JSON.parse(JSON.stringify(this.S3))
            this.objectContainer[this.messageSource.getValue()]=_.cloneDeep(this.S3)
          }else if(this.objectType == "Connector"){
            window.alert("Object Type "+JSON.stringify(this.objectContainer));
            this.objectContainer[this.messageSource.getValue()]=_.cloneDeep(this.Connector)
            this.objectContainer[this.messageSource.getValue()]["sourceID"] =  this.sourceID.getValue()
            this.objectContainer[this.messageSource.getValue()]["targetID"] =  this.targetID.getValue()
            
            window.alert("Object Type "+JSON.stringify(this.objectContainer));
          }
      }
        this.currentObject = this.objectContainer[this.messageSource.getValue()];
        console.log(this.currentObject);
        return this.objectContainer[this.messageSource.getValue()];
  }

}
