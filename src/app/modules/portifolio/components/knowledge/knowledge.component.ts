import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';


@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/scharp.png',
      alt: 'Ícone de conhecimento de scharp',
    },
    {
      src: 'assets/icons/knowledge/dotnet.png',
      alt: 'Ícone de conhecimento de dotnet',
    },
    {
      src: 'assets/icons/knowledge/aws.png',
      alt: 'Ícone de conhecimento de scharp',
    },
    {
      src: 'assets/icons/knowledge/html5.png',
      alt: 'Ícone de conhecimento de html5',
    },    
    {
      src: 'assets/icons/knowledge/css3.png',
      alt: 'Ícone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/javascript.png',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/ts.png',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/nodejs.png',
      alt: 'Ícone de conhecimento de nodejs',
    }
  ]);
}