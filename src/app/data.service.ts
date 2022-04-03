import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
        "region":{"currValue":"temp1","dropdown":["us-east1","us-east2"]},
        "OS":{"currValue":"temp2","dropdown":["ubuntu","windows","amazon-linux"]},
        "EC2Name":"",
        "instanceType":{"currValue":"","dropdown":["t2-micro","t2-nano"]}
    };

    public S3 = {
        "bucketName":"",
        "region":{"currValue":"","dropdown":["us-east1","us-east2"]},
        "filePath":"",
        "fileUpload" : "Upload Files to S3"
    }

  constructor() {
      this.objectType = '';
   }

  changeMessage(message: string) {
    //window.alert("change message");
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
          if(this.objectType=="EC2"){
            this.objectContainer[this.messageSource.getValue()]={ ...this.EC2};
          }
          else if(this.objectType=="S3"){
            this.objectContainer[this.messageSource.getValue()]={ ...this.S3};
          }
      }
        this.currentObject = this.objectContainer[this.messageSource.getValue()];
        console.log(this.currentObject);
        return this.objectContainer[this.messageSource.getValue()];
  }

}
