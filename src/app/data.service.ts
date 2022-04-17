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
        "Region":{"currValue":"us-east1","dropdown":["us-east1","us-east2"]},
        "OS":{"currValue":"windows","dropdown":["ubuntu","windows","amazon-linux"]},
        "EC2 Name":"",
        "Instance Type":{"currValue":"t2-nano","dropdown":["t2-micro","t2-nano"]}
    };

    public S3 = {
        "Bucket Name":"",
        "Region":{"currValue":"us-east1","dropdown":["us-east1","us-east2"]},
        "fileUpload" : "Upload Files to S3"
    }


    public ECS ={
      "Image to Pull from Docker Hub":{"currValue":"centOS","dropdown":["centOS","Alpine","Ubuntu","Windows"]},
      "Storage Memory to Assign(MB)":"",
      "Port Number":"",
      "CPU Memory":""
    }
    
    public CDN={

    }

    public Lambda={
      "fileUpload" : "Upload Function File",
      "Function Name":"",
      "Runtime Environment" : {"currValue":"Python3.6","dropdown":["Python3.6","Java8","C++","Javascript"]},
    }

    public Connector = {
      "Source":"",
      "Target":""
    };

  constructor() {
      this.objectType = '';
   }


  updateConnectorDetails(sourceID:string, targetID:string){
    
    this.sourceID.next( sourceID)
    this.targetID.next(targetID)
   // window.alert("Update details"+this.connectorID.getValue());
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  getObjectType() {
    //window.alert("getObject Type called"+this.messageSource.getValue());
    if(this.messageSource.getValue().includes("EC2")){
        this.objectType = "EC2";
    }
    else if(this.messageSource.getValue().includes("S3")){
        this.objectType  = "S3";
    }
    else if(this.messageSource.getValue().includes("CDN")){
      this.objectType  = "CDN";
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
    else if(this.messageSource.getValue().includes("ECS")){
      this.objectType  = "ECS";
  }else if(this.messageSource.getValue().includes("Lambda")){
    this.objectType  = "Lambda";
  }
    else{
        this.objectType  = "DynamoDB";
    }
      return this.objectType;
  }

  insertToContainer() {
    //window.alert("insert to container called"+this.objectType+ "msgSource : "+this.sourceID.getValue());
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
        //    window.alert("Object Type "+JSON.stringify(this.objectContainer));
            this.objectContainer[this.messageSource.getValue()]=_.cloneDeep(this.Connector)
            this.objectContainer[this.messageSource.getValue()]["Source"] =  this.sourceID.getValue()
            this.objectContainer[this.messageSource.getValue()]["Target"] =  this.targetID.getValue()
            
      //      window.alert("Object Type "+JSON.stringify(this.objectContainer));
          }else if(this.objectType == "ECS"){
            this.objectContainer[this.messageSource.getValue()]=_.cloneDeep(this.ECS)
          }else if(this.objectType=="CDN"){
            // this.objectContainer[this.messageSource.getValue()]={ ...this.S3};
            // this.objectContainer[this.messageSource.getValue()]=JSON.parse(JSON.stringify(this.S3))
            this.objectContainer[this.messageSource.getValue()]=_.cloneDeep(this.CDN)
          }else if(this.objectType == "Lambda"){
            this.objectContainer[this.messageSource.getValue()]=_.cloneDeep(this.Lambda)
          }
      }
        this.currentObject = this.objectContainer[this.messageSource.getValue()];
        console.log(this.currentObject);
        return this.objectContainer[this.messageSource.getValue()];
  }

}
