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

  constructor() {
      this.objectType = '';
   }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  getObjectType() {
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
    }
    else{
        this.objectType  = "DynamoDB";
    }
      return this.objectType;
  }

  insertToContainer() {
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
          }
      }
        this.currentObject = this.objectContainer[this.messageSource.getValue()];
        console.log(this.currentObject);
        return this.objectContainer[this.messageSource.getValue()];
  }

}
