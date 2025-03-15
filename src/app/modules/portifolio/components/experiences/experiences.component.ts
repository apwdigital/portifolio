import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Analista Desenvolvedor .NET | Angular | AWS',
        p: 'APW Digital | fev 2025 - atual',
      },
      text: `
      <p>Consultoria, análise e densenvolvimento de soluções personalizadas .NET, Angular e AWS</p>`,
    },
    {
      summary: {
        strong: 'Analista de Engenharia de TI SR',
        p: 'Itaú Unibanco | mai 2020 ~ jan 2025',
      },
      text: `
          <p>
            Atuando com análise, desenvolvimento e sustentação de sistemas integrados de fundos de investimentos e gestão de ETFs e Caixa.
          </p>
          <p>
            Destaques:
            Oportunidade de aprender diariamente com cenário dinâmico.
            Tudo muda o tempo todo, isso nos força a buscar conhecimento e atualizações constantemente.
          </p>
          <p>
            Tecnologias, plataformas e ferramentas:
            C#, .Net Core, Python, TypeScript, MSSQL, Git, Cloud AWS, Openshift, APIs.
            Conceitos e metodologias:
            Site Reliability Engineering, SOLID, Clean code, Clean architecture, FOCO NO CLIENTE.
      </p>`,
    },
    {
      summary: {
        strong: 'Consultor e Analista de desenvolvimento .NET',
        p: 'APW IT Solutions | jul 2014 - mai 2022',
      },
      text: `
      <p>Consultoria em análise e desenvolvimento de soluções para o setor de tecnologia da informação e agronegócio.</p>
      <p>Principal atuação em análise e desenvolvimento e integrações entre sistemas, gestão de projetos, planejamento estratégico e tomadas de decisões relevantes para o direcionamento de melhores resultados para o negócio.</p>
      <p>Clientes: Digi Pronto, Mira Tecnologia, Espresso Speciale, Oficina de Artes Jundiaí e Marmoraria Alto Padrão</p>`,
    },
    {
      summary: {
        strong: 'Analista Desenvolvedor .NET',
        p: 'Quali IT | jan 2021 - abr 2022',
      },
      text: `
      <p>Consultoria em análise e desenvolvimento de soluções para o setor de tecnologia da informação.</p>
      <p>Análise e desenvolvimento de soluções para integração de sistemas (Totvs, SalesForce, SAP, entre outros).</p>`,
    },
    {
      summary: {
        strong: 'Analista Desenvolvedor .NET',
        p: 'Tática Solutions | jun 2018 - jan 2021',
      },
      text: `
      <p>Consultoria em análise e desenvolvimento de sistemas para projeto de gestão de contratos para o cliente TecBan.</p>`,
    },
    {
      summary: {
        strong: 'Analista Desenvolvedor .NET',
        p: 'Grupo GFT | nov 2015 - jun 2016',
      },
      text: `
      <p>Participação de projeto para instituições financeiras como Bradesco, entre outros.</p>`,
    },
    {
      summary: {
        strong: 'Analista de sistemas',
        p: 'Foxconn | fev 2009 - jul 2014',
      },
      text: `
      <p>Analista de Suporte de linha de produção (entre 2009 e 2011)</p>
      <p>Analista de Sistemas, atuando com suporte e desenvolvimento de soluções para manufatura de Placas Mãe, Notebooks, Desktops e Tablets, suporte ao usuário.</p>`,
    },
    {
      summary: {
        strong: 'Analista de suporte técnico',
        p: 'Thyssenkrupp | set 2008 - dez 2008',
      },
      text: `
      <p>Participação de projeto de outsorcing de 3 meses atuando como suporte técnico aos usuários, instalação configuração de softwares, manutenção de hardware.</p>`,
    },
    {
      summary: {
        strong: 'Técnico em informática',
        p: 'Info Soluções | jun 2006 - abr 2008',
      },
      text: `
      <p>Atuando como técnico interno e externo, manutenção de hardware, redes, desenvolvimento de websites, e atendimento ao cliente.</p>`,
    },
  ]);
}
