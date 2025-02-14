export interface ProjectsDataType {
  title?: string;
  content?: string;
  alt?: string;
  img?: string;
  expandImage?: boolean
  linkApi?: string
  linkApp?: string
  notionLink?: string
  projectLink?: string
  tags?: { name: string, color: string }[]
}

export const ProjectsData: ProjectsDataType[] = [
  {
    title: "ProjectBan",
    content: "Um projeto de kanbam para projetos de desenvolvidos",
    alt: "Texto alternativo para uma imagem",
    img: "projectban.png",
    expandImage: true,
    tags: [{ name: "Typescript", color: "#3178c6" }, { name: "MongoDB", color: "#00684a" }, { name: "Python", color: "#c6ad33" }],
    notionLink: "https://www.notion.so/pablonot13/Gerenciador-de-Tarefas-Colaborativo-17c34faebf4c80618658e5602c0d9886?pvs=4",
    linkApi: "https://github.com/pablobispo13/projectbanAPI",
  },
];
