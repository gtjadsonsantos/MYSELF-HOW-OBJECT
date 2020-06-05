/*
 Author: Jadson Santos
 License: MIT
*/

interface IProject {
    name: string
    url: string
}
interface IFormation {
    name: string
    status: string
}
interface IPlatform {
    name: string
    url: string
}
interface ILocation {
    street: string
    number: number
    zipcode: number
    state: string
    city: string
}

class Pearson {
    private name: string 
    private age: number
    private work: string 
    private email: string  
    private phone: string

    private location: ILocation

    private platforms: IPlatform[]

    private formations: IFormation[]

    private technologies: string[]

    private certificates: string[]

    private projects: IProject[]

    private organizations: string[] 


    constructor(name?: string, age?: number, work?: string, email?: string, phone?: string, location?: ILocation, platforms?: IPlatform[], formations?: IFormation[], technologies?: string[], certificates?: string[], projects?: IProject[], organizations?: string[]) {
        this.name = name || "Jadson dos Santos Silva"
        this.age = age || new Date().getFullYear() - 1997
        this.work = work || "JavaScript Developer"
        this.email = email || "jadosn44.santos@gmail.com"
        this.phone = phone || "(48) 99932-8092"
        this.location = location || { street: "Almirante Carlos da Silveira Carneiro", number: 394, zipcode: 88025350,state:"Santa Catarina",city:"Florianópolis" }
        this.platforms = platforms || [{ name: "Github", url: "http://github.com/jadson179" }, { name: "Linkedin", url: "https://gist.github.com/jadson179/www.linkedin.com/in/jadson-santos-a9aa9b145" }, { name: "porfolio", url: "http://jadsonsantos.com" }]
        this.formations = formations || [{ name: "Analise e Desenvolvimento de Sistemas ", status: "Cursando" }, { name: "Curso Superior de Tecnologia em Gestão da Tecnologia da Informação", status: "Concluído" }, { name: "Ensino Médio", status: "Concluído" }]
        this.technologies = technologies || ["JavaScript", "Mysql", "React", "ReactNative", "Expo", "Postgress", "Knex", "Java", "Nmap", "Docker", "Docker-Compose", "Bash", "Linux", "MacOS", "Windows", "Git", "Github", "Bitbucket", "SSH", "FTP", "VNC", "HTML 5", "CSS3", "Nodejs", "REST API", "Express", "SQL", "Markdown", "Material Design", "Font Awesome", "Sequelize ORM", "UML", "Zabbix", "Network", "Grafana", "Python"]
        this.certificates = certificates ||  ["Semana OmniStack 11", "Analista de Gerenciamento de Projetos", "Deteccção avançada de problemas com zabbix", "Redes Wireless - Começando", "Redes de Computadores- Começando", "CERTIFICAÇÃO ITIL FOUNDATION 1: INTRODUÇÃO AO GERENCIAMENTO DE TI", "MYSQL I: INICIANDO SUAS CONSULTAS", "MYSQL II: CONSULTAS PODEROSAS", "JAVA I: PRIMEIROS PASSOS", "JAVA II: ORIENTAÇÃO A OBJETOS", "LÓGICA DE PROGRAMAÇÃO I: OS PRIMEIROS PROGRAMAS COM JAVASCRIPT HTML", "LÓGICA DE PROGRAMAÇÃO II: PRATIQUE COM DESENHOS, ANIMAÇÕES E UM JOGO", "Analista de Infraestrutura de TI"]
        this.projects = projects || [{ name: "Gestão de Salas Comerciais", url: "https://github.com/jadson179/PAINEL" }, { name: "Portfólio", url: "https://github.com/jadson179/portoflio" }]
        this.organizations = organizations || ["UNISEC LTDA", "Beco-Castelo LTDA", "UNIQUE"]
    }

    public setName(name: string): void {
        this.name = name;
    }
    public setAge(age: number): void {
        this.age = age;
    }
    public setWork(work: string): void {
        this.work = work;
    }
    public setPhone(phone: string): void {
        this.phone = phone;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public setLocation(location: ILocation): void {
        this.location = location;
    }
    public setPlatforms(platforms: IPlatform[]): void {
        this.platforms = platforms;
    }
    public setFormations(formations: IFormation[]): void {
        this.formations = formations;
    }
    public setTechnologies(technologies: string[]): void {
        this.technologies = technologies;
    }
    public setCertificates(certificates: string[]): void {
        this.certificates = certificates;
    }
    public setProjects(projects: IProject[]): void {
        this.projects = projects;
    }
    public setOrganizations(organizations: string[]): void {
        this.organizations = organizations;
    }
    public getnName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }
    public getWork(): string {
        return this.work;
    }
    public getPhone(): string {
        return this.phone
    }
    public getEmail(): string {
        return this.email;
    }
    public getLocation(): ILocation {
        return this.location;
    }
    public getPlatforms(): IPlatform[] {
        return this.platforms;
    }
    public getFormations(): IFormation[] {
        return this.formations;
    }
    public getTechnologies(): string[] {
        return this.technologies
    }
    public getCertificates(): string[] {
        return this.certificates
    }
    public getProjects(): IProject[] {
        return this.projects
    }
    public getOrganizations(): string[] {
        return this.organizations
    }
}

export default Pearson;