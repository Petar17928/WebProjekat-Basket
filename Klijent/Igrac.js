export class Igrac{
    constructor(regbroj, ime, prezime, starost, ocena, cena){
        this.regbroj=regbroj;
        this.ime=ime;
        this.prezime=prezime;
        this.starost=starost;
        this.ocena=ocena;
        this.cena=cena;
        this.container=null;
    }   

    ObrisiIgraca(regbroj) {
        fetch("https://localhost:5001/Igrac/IzbrisatiIgraca/"+regbroj,{
        method:'DELETE'
        })
        .then(s=>{
            if(s.ok)
            {
                alert("Uspesno obrisan igrac "+regbroj);
                location.reload();
            }
            s.text();
        })
    }
    crtajIgraca(host){
        
        
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
        el.innerHTML=this.starost;
        red.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.ocena;
        red.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.cena;
        red.appendChild(el);

        el=document.createElement("button");
        el.innerHTML="Obrisi igraca";
        el.className="btnBrisanje";
        el.name=this.regbroj;
        red.appendChild(el);
        el.onclick=(ev)=>this.ObrisiIgraca(el.name);


    }

} 
    
