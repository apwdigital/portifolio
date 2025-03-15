export interface IProjects {
  src: string;
  alt: string;
  title: string;
  with: string;
  height: string;
  description: string;
  links: IProjectsLinks[];
}

export interface IProjectsLinks {
  name: string;
  href: string;
}