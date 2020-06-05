"use strict";
/*
 Author: Jadson Santos
 License: MIT
*/
exports.__esModule = true;
var Pearson = /** @class */ (function () {
    function Pearson(name, age, work, email, phone, location, platforms, formations, technologies, certificates, projects, organizations) {
        this.name = name || "Jadson dos Santos Silva";
        this.age = age || new Date().getFullYear() - 1997;
        this.work = work || "JavaScript Developer";
        this.email = email || "jadosn44.santos@gmail.com";
        this.phone = phone || "(48) 99932-8092";
        this.location = location || { state: "Santa Catarina", city: "Florianópolis" };
        this.platforms = platforms || [{ name: "Github", url: "http://github.com/jadson179" }, { name: "Linkedin", url: "https://gist.github.com/jadson179/www.linkedin.com/in/jadson-santos-a9aa9b145" }, { name: "porfolio", url: "http://jadsonsantos.com" }];
        this.formations = formations || [{ name: "Analise e Desenvolvimento de Sistemas ", status: "Cursando" }, { name: "Curso Superior de Tecnologia em Gestão da Tecnologia da Informação", status: "Concluído" }, { name: "Ensino Médio", status: "Concluído" }];
        this.technologies = technologies || ["JavaScript", "Mysql", "React", "ReactNative", "Expo", "Postgress", "Knex", "Java", "Nmap", "Docker", "Docker-Compose", "Bash", "Linux", "MacOS", "Windows", "Git", "Github", "Bitbucket", "SSH", "FTP", "VNC", "HTML 5", "CSS3", "Nodejs", "REST API", "Express", "SQL", "Markdown", "Material Design", "Font Awesome", "Sequelize ORM", "UML", "Zabbix", "Network", "Grafana", "Python"];
        this.certificates = certificates || ["Semana OmniStack 11", "Analista de Gerenciamento de Projetos", "Deteccção avançada de problemas com zabbix", "Redes Wireless - Começando", "Redes de Computadores- Começando", "CERTIFICAÇÃO ITIL FOUNDATION 1: INTRODUÇÃO AO GERENCIAMENTO DE TI", "MYSQL I: INICIANDO SUAS CONSULTAS", "MYSQL II: CONSULTAS PODEROSAS", "JAVA I: PRIMEIROS PASSOS", "JAVA II: ORIENTAÇÃO A OBJETOS", "LÓGICA DE PROGRAMAÇÃO I: OS PRIMEIROS PROGRAMAS COM JAVASCRIPT HTML", "LÓGICA DE PROGRAMAÇÃO II: PRATIQUE COM DESENHOS, ANIMAÇÕES E UM JOGO", "Analista de Infraestrutura de TI"];
        this.projects = projects || [{ name: "Gestão de Salas Comerciais", url: "https://github.com/jadson179/PAINEL" }, { name: "Portfólio", url: "https://github.com/jadson179/portoflio" }];
        this.organizations = organizations || ["UNISEC LTDA", "Beco-Castelo LTDA", "UNIQUE"];
    }
    Pearson.prototype.setName = function (name) {
        this.name = name;
    };
    Pearson.prototype.setAge = function (age) {
        this.age = age;
    };
    Pearson.prototype.setWork = function (work) {
        this.work = work;
    };
    Pearson.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    Pearson.prototype.setEmail = function (email) {
        this.email = email;
    };
    Pearson.prototype.setLocation = function (location) {
        this.location = location;
    };
    Pearson.prototype.setPlatforms = function (platforms) {
        this.platforms = platforms;
    };
    Pearson.prototype.setFormations = function (formations) {
        this.formations = formations;
    };
    Pearson.prototype.setTechnologies = function (technologies) {
        this.technologies = technologies;
    };
    Pearson.prototype.setCertificates = function (certificates) {
        this.certificates = certificates;
    };
    Pearson.prototype.setProjects = function (projects) {
        this.projects = projects;
    };
    Pearson.prototype.setOrganizations = function (organizations) {
        this.organizations = organizations;
    };
    Pearson.prototype.getnName = function () {
        return this.name;
    };
    Pearson.prototype.getAge = function () {
        return this.age;
    };
    Pearson.prototype.getWork = function () {
        return this.work;
    };
    Pearson.prototype.getPhone = function () {
        return this.phone;
    };
    Pearson.prototype.getEmail = function () {
        return this.email;
    };
    Pearson.prototype.getLocation = function () {
        return this.location;
    };
    Pearson.prototype.getPlatforms = function () {
        return this.platforms;
    };
    Pearson.prototype.getFormations = function () {
        return this.formations;
    };
    Pearson.prototype.getTechnologies = function () {
        return this.technologies;
    };
    Pearson.prototype.getCertificates = function () {
        return this.certificates;
    };
    Pearson.prototype.getProjects = function () {
        return this.projects;
    };
    Pearson.prototype.getOrganizations = function () {
        return this.organizations;
    };
    return Pearson;
}());
exports["default"] = Pearson;
