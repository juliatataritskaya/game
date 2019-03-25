import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReactiveFormsBaseClass} from '../../../shared/classes/reactive-forms.base.class';
import {Router} from '@angular/router';
import {ChallengeService} from '../../../services/challenge.service';

@Component({
  selector: 'app-new-challenge',
  templateUrl: './new-challenge.component.html',
  styleUrls: ['./new-challenge.component.scss']
})
export class NewChallengeComponent extends ReactiveFormsBaseClass implements OnInit {
  challengeForm: FormGroup;
  urls = [];

  constructor(private fb: FormBuilder, private router: Router, private challengeService: ChallengeService) {
    super({
      name: '',
      img: '',
      title: '',
      description: ''
    }, {
      name: {
        required: 'Name is required.',
      },
      img: {
        required: 'Image is required.',
      },
      title: {
        required: 'Title is required.',
      },
      description: {
        required: 'Description is required.',
      }
    });

  }


  ngOnInit() {
    this.createChallengeForm();
  }

  createChallengeForm() {
    this.challengeForm = this.fb.group({
      img: ['', [Validators.required]],
      name: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.challengeForm.valueChanges.subscribe(data => this.onValueChanged(this.challengeForm, data));
    this.onValueChanged(this.challengeForm);
  }

  save(form) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    // this.challengeService.createChallenge(form.value).then((res) => {
    //   console.log(res);
    // });
    this.router.navigate(['main/choice']);
  }

  detectFiles(event) {
    this.urls = [];
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        if (file.type == 'image/x-png' || file.type == 'image/gif' || file.type == 'image/jpeg'
          || file.type == 'image/png' || file.type == 'image/jpg') {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.urls.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      }
    } else {
      console.log('error')
    }
  }

}
