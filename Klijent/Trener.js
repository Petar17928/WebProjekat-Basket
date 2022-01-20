export class Trener{
    constructor(regbroj, ime, prezime, iskustvo){
        this.regbroj=regbroj;
        this.ime=ime;
        this.prezime=prezime;
        this.iskustvo=iskustvo;
        this.container=null;
    } 

    crtajTrenera(host){
        
        
        let red=document.createElement("tr");
        host.appendChild(red);
        this.container=red;

        let el=document.createElement("td");
        el.innerHTML=this.regbroj;
        red.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.ime;
        red.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.prezime;
        red.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.iskustvo;
        red.appendChild(el);
    }
}