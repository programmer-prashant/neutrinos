/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder,Validators }from '@angular/forms';
import {democlientservice} from 'app/sd-services/democlientservice'
import {NSystemService} from 'neutrinos-seed-services'
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {
  sampleform;
  sampleformtwo;
  sampleformthree;
  environmentprops = NSystemService.getInstance()
 
state = [
   {value: 'delhi-0', viewValue: 'India'},
   {value: 'mumbai-1', viewValue: 'Afghanistan'},
   {value: 'pune-2', viewValue: 'Brazil'},
   {value: 'ngpr-3', viewValue: 'Canada'},
   {value: 'chennai-4', viewValue: 'France'},
   {value: 'banglore-5', viewValue: 'Iceland'},
 ];

 options = [
     {value: 'logout-0', viewValue: 'Log Out'},
   {value: 'profile-1', viewValue: 'Profile'},
   {value: 'edit-2', viewValue: 'Edit Profile'}
 ]

 dates=[1,2,3,4,5,6,7,,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

months=[{ months: 'January', value: 1 }, { months: 'February', value: 2 }, { months: 'March', value: 3 }, 
{ months: 'April', value: 4 }, { months: 'May', value: 5 }, { months: 'June', value: 6 }, 
{ months: 'July', value: 7 }, { months: 'August', value: 8 }, { months: 'September', value: 9 },
 { months: 'Octobar', value: 10 }, { months: 'November', value: 11 }, { months: 'December', value: 12 }]

years=[2021,2020,2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000]

    constructor(private fb:FormBuilder,private myclient:democlientservice) {
        super();
    }

    ngOnInit() {
 this.sampleform=this.fb.group({
            fullname:[' ',[Validators.required,Validators.pattern('[a-z|A-Z]*')]],
            title:['',[Validators.required,Validators.pattern('[a-z|A-Z]*')]],
            email:['',[Validators.required,Validators.email]],
            check:['',[Validators.required]],
            date:['',[Validators.required]],
            month:['',[Validators.required,Validators.pattern('[a-z|A-Z]*')]],
            year:['',[Validators.required]],
            country:['',[Validators.required,Validators.pattern('[a-z|A-Z]*')]],
            city:['',[Validators.required,Validators.pattern('[a-z|A-Z]*')]],
            postalcode:['',[Validators.required]],
            phone:['',[Validators.required]],
        });

 this.sampleformtwo=this.fb.group({
           faceboock:['',[Validators.required,Validators.pattern('(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')]],
            google:['',[Validators.required,Validators.pattern('(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')]],
            tweeter:['',[Validators.required,Validators.pattern('(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')]],
            linkedin:['',[Validators.required,Validators.pattern('(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')]],
            website:['',[Validators.required,Validators.pattern('(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')]],
            youtube:['',[Validators.required,Validators.pattern('(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')]],
            
        });

 this.sampleformthree=this.fb.group({
            search:[''],
            logout:[''],
            
        });


        console.log('webAppMountpoint value is ', this.environmentprops.getVal('webAppMountpoint'))

    }


    async onSubmit(){
        var valuefromclient;
        console.log('Form value submitted',this.sampleform.value);
        valuefromclient =(await this.myclient.dbstart(this.sampleform.value)).local.result;
        console.log('Changed Output From Client is ', valuefromclient)
    }

   async onURLSubmit(){
        var valuefromclienttwo
        console.log('Form value submitted',this.sampleformtwo.value)
        valuefromclienttwo =(await this.myclient.dbstart(this.sampleformtwo.value)).local.result;
        console.log('Changed Output From Client is ', valuefromclienttwo)
    }
}
