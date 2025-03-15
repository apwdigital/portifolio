import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/gestorline.png',
      alt: 'Gestor Line',
      title: 'Gestor Line',
      with: '200px',
      height: '100px',
      description:
        '<p>Sistema de gestão de lançamentos financeiros, dados analíticos e itens de conformidade.</p>',
      links: [
        {
          name: 'Conheça o sistema',
          href: 'http://line.espressospeciale.com.br',
        }
      ],
    },
    {
      src: 'assets/img/projects/espressospeciale.png',
      alt: 'Espresso Speciale Cafeteria',
      title: 'Espresso Speciale Cafeteria',
      with: '200px',
      height: '100px',
      description:
        '<p>Website - Espresso Speciale Cafeteria.</p>',
      links: [
        {
          name: 'Visite o site',
          href: 'http://www.espressospeciale.com.br',
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/espressospecialecafeteria/',
        }
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}