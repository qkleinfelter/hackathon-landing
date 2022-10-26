import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any[] = [
    {
      id: 1,
      firstName: "Robert",
      lastName: "Connolly",
      projects: [
        {
          id: 1,
          title: 'Landing Page UI/UX',
          isSoftware: true,
        },
        {
          id: 2,
          title: 'Arduino',
          isSoftware: false,
        }
      ]
    },
    {

    }
  ]

  constructor() { }
}
