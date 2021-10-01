import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) { }

  async showAdd() {
    const alert = await this.alertCtrl.create({
      header: 'O que deseja fazer?',
      inputs: [
        {
          name: 'newTask',
          type: 'text',
          placeholder: 'Nova tarefa'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('clicked cancel');
          }
        },
        {
          text: 'Adicionar',
          handler: (form) => {
            console.log(form.newTask);
            this.add(form.newTask);
          }
        }
      ]
    });

    await alert.present();
  }

  async add(newTask: string) {
    if (newTask.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Informe um nome para a nova tarefa!',
        duration: 2000,
        position: 'top'
      });

      toast.present();
      return;
    }

    let task = { name: newTask, done: false }
  }
}