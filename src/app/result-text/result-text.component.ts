import { Component, OnInit,Input, OnChanges, SimpleChanges} from '@angular/core';
import { Text } from '../models/text.module';
import { Router } from '@angular/router';
import { UploadGenerateService } from '../services/upload-generate.service';
@Component({
  selector: 'app-result-text',
  templateUrl: './result-text.component.html',
  styleUrls: ['./result-text.component.css']
})
export class ResultTextComponent implements OnInit , OnChanges{

  @Input('file') file: File;
  textResult: Text = {
    text:''
  };
  constructor(private router: Router,
    private textAPI: UploadGenerateService) { }

  ngOnChanges(changes: SimpleChanges) {
    for (let property in changes) {
      if (property === 'file') {
        this.file = changes[property].currentValue;
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('firstChange:', changes[property].firstChange);
      }
    }
    this.traitImage(); 
  }

  ngOnInit(): void {
  }

  traitImage(){
    this.textAPI.postFile(this.file).subscribe(    
      (res:any) => {
        if (!res) return;
        console.log(res);
        this.textResult = res;
      }
    )

  }

}
