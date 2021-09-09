import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';
import { BlobService } from 'src/app/services/blob.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  loginForm: FormGroup; 
  registerStoreForm: FormGroup; 
  registerIndividualForm: FormGroup; 

  isCompany: boolean = false; 
  isIndividual: boolean = true; 

  CompanyType: number = 1;
  IndividualType: number = 1;

  fileName: string;
  imageSource: string; 
  imageURL 
  haveImage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private spinner: NgxSpinnerService,
    private blobService: BlobService
    ) { }

  ngOnInit(): void {
    this.form()
  }

  form(){
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })

    this.registerStoreForm = this.formBuilder.group({
      email: [null, Validators.required],
      fantasyName: [null, Validators.required],
      type: [null, Validators.required],
      cpf_cnpj: [null, Validators.required],
      logoImage: [null, Validators.required],
      WebSiteURL: [null, Validators.required],
      password: [null, Validators.required]
    })

    this.registerIndividualForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      type: [null, Validators.required],
      fullName: [null, Validators.required],
    })
  }

  sendLoginForm(){
    console.log(this.loginForm.value)
  }

  chooseRegisterFormType(event: any){
    if(event.target.value == this.CompanyType){
      this.isCompany = true
      this.isIndividual = false;  
    } else { 
      this.isCompany = false
      this.isIndividual = true;  
    }
  }

  sendStoreRegister(){
    console.log(this.registerStoreForm.value)
  }
  
  inputFileChange(files: any) {
    if (files[0]) {
      const formData = new FormData();
      this.fileName = files[0].name;
      formData.append(files[0].name, files[0]);
      this.spinner.show();
      this.blobService.uploadImage(formData).subscribe(({ path }) => {
        this.spinner.hide();
        this.imageSource = path;
        this.haveImage = true;
      }),
        (error: any) => {
          this.spinner.hide();
          console.log(error)
          // this.toastr.error("Erro ao mandar a imagem!");
        };
    }
  }

}
