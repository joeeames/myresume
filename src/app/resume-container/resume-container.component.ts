import { Component, Inject, OnInit } from '@angular/core';
import { FAUNADB_CLIENT } from '../fauna-dbclient.service';
import * as fdb from 'faunadb';

@Component({
  selector: 'app-resume-container',
  templateUrl: './resume-container.component.html',
  styleUrls: ['./resume-container.component.css']
})
export class ResumeContainerComponent implements OnInit {

  name: string;
  skillsHighlight: string;
  phoneNumber: string;
  emailAddress: string;
  
  constructor(@Inject(FAUNADB_CLIENT) private faunaClient: fdb.Client) { }

  ngOnInit(): void {
    this.faunaClient.query(
      fdb.Get(fdb.Ref(fdb.Collection('Headers'), '297635720948875786'))
    ).then((ret: any) => {
      this.name = ret.data.value;
      console.log(ret.data.value);
    })

    this.faunaClient.query(
      fdb.Map(
        fdb.Paginate(fdb.Documents(fdb.Collection('Headers'))),
        fdb.Lambda('headerRef', fdb.Get(fdb.Var('headerRef')))
      )
    ).then((ret: any) => {
        ret.data.forEach(d => {
          if(d.data.type === "phone") {
            this.phoneNumber = d.data.value;
          } else if(d.data.type === "email") {
            this.emailAddress = d.data.value;
            console.log('email', this.emailAddress)
          }
        })
     
    })

    this.faunaClient.query(
      fdb.Get(fdb.Ref(fdb.Collection('Highlights'), '297635841626341898'))
    ).then((ret: any) => {
      this.skillsHighlight = ret.data.text;
      console.log(ret.data.text);
    })
  }

}
