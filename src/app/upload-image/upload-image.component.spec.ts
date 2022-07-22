import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';
import { Router } from '@angular/router';
import { Text } from '../models/text.module';
import { UploadGenerateService } from '../services/upload-generate.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imageUrl : string = '/assets/img/COCO_train2014_10000.jpg';
  isShow = true;
  myForm: FormGroup ;
  public formData = {
    Image : File = null
  }
  

  constructor(public router: Router,
               public _formBuilder: FormBuilder) { 
    this.myForm = this._formBuilder.group({
      Image : File = null
      });
  }


  ngOnInit(): void {
  }

  test() : void{
    this.isShow = false;
    this.formData.Image = this.myForm.controls.Image.value;
  }

  handleFileInput(file: FileList) {
    this.formData.Image = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.formData.Image);
  }

}
