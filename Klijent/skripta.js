import { Igrac } from "./Igrac.js";
import { Trener } from "./Trener.js";
import { Utakmica } from "./Utakmica.js";
import { Tim } from "./Tim.js";

var listaIgraca=[];
var listaTrenera=[];

var nizNaziva=["Registracioni broj","Ime","Prezime","Starost","Ocena","Cena"];
var nizNazivaT=["Registracioni broj","Ime","Prezime","Iskustvo"];
var nizNazivaTim=["Naziv","Grad","Kapital","Trener"];

var nizTipova=["number","text","text","number","number","number"];
var nizTipovaT=["number","text","text","number"];
var nizTipovaTim=["text","text","number","number"];

function crtaj(host){


    let div0=document.createElement("div");
    div0.className="div0";
    host.appendChild(div0);

    let div2=document.createElement("div");
    div2.className="div2";
    div0.appendChild(div2);

    let div1=document.createElement("div");
    div1.className="div1";
    div0.appendChild(div1);

    let l2=document.createElement("label");
    l2.className="l2";
    l2.innerHTML="Registruj trenera:";
    div1.appendChild(l2);

    let div11=document.createElement("div");
    div11.className="div11";
    div1.appendChild(div11);

    

   

    let l1=document.createElement("label");
    l1.className="l1";
    l1.innerHTML="Registruj igraca:";
    div2.appendChild(l1);

    let div20=document.createElement("div");
    div20.className="div20";
    div2.appendChild(div20);
    let div21=document.createElement("div");
    div21.className="div21";
    div20.appendChild(div21);
    let div22=document.createElement("div");
    div22.className="div22";
    div20.appendChild(div22);

    let div111=document.createElement("div");
    div111.className="div111";
    div11.appendChild(div111);
    let div211=document.createElement("div");
    div211.className="div211";
    div11.appendChild(div211);
    

    nizNaziva.forEach((naziv,index) => {
        let lNaziv=document.createElement("label");
        lNaziv.className="lNaziv";
        lNaziv.innerHTML=naziv+": ";
        div21.appendChild(lNaziv);

        let inputIgrac=document.createElement("input");
        inputIgrac.type=nizTipova[index];
        inputIgrac.className="polja";
        inputIgrac.name=naziv;
        div22.appendChild(inputIgrac);
    });

    nizNazivaT.forEach((naziv,index) => {
        let lNaziv=document.createElement("label");
        lNaziv.className="lNaziv";
        lNaziv.innerHTML=naziv+": ";
        div111.appendChild(lNaziv);

        let inputTrener=document.createElement("input");
        inputTrener.type=nizTipovaT[index];
        inputTrener.className="poljaT";
        inputTrener.name=naziv+"T";
        div211.appendChild(inputTrener);
    });

    let btnRegistrujIgraca=document.createElement("button");
    btnRegistrujIgraca.innerHTML="Registruj igraca";
    btnRegistrujIgraca.className="btnRegistrujIgraca";
    btnRegistrujIgraca.onclick=(ev)=>RegistrujIgraca
    (
        document.getElementsByName("Registracioni broj")[0].value,
        document.getElementsByName("Ime")[0].value,
        document.getElementsByName("Prezime")[0].value,
        document.getElementsByName("Starost")[0].value,
        document.getElementsByName("Ocena")[0].value,
        document.getElementsByName("Cena")[0].value
    );
    div2.appendChild(btnRegistrujIgraca);


    let btnRegistrujTrenera=document.createElement("button");
    btnRegistrujTrenera.innerHTML="Registruj trenera";
    btnRegistrujTrenera.className="btnRegistrujTrenera";
    btnRegistrujTrenera.onclick=(ev)=>RegistrujTrenera
    (
        document.getElementsByName("Registracioni brojT")[0].value,
        document.getElementsByName("ImeT")[0].value,
        document.getElementsByName("PrezimeT")[0].value,
        document.getElementsByName("IskustvoT")[0].value
    );
    div1.appendChild(btnRegistrujTrenera);


    let divZaTabele=document.createElement("div");
    divZaTabele.className="divZaTabele";
    host.appendChild(divZaTabele);

    let radiobox=document.createElement("div");
    radiobox.className="radiobox";
    divZaTabele.appendChild(radiobox);

    let divTabelaTrener=document.createElement("div");
    divTabelaTrener.className="divTabelaTrener";
    div1.appendChild(divTabelaTrener);
    
    let l= document.createElement("label");
    l.innerHTML="Prikaz igraca:";
    l.className="l3"
    radiobox.appendChild(l);

    let radiobox1=document.createElement("div");
    radiobox.appendChild(radiobox1);
    let radiobox2=document.createElement("div");
    radiobox2.radiobox2="radiobox2";
    radiobox.appendChild(radiobox2);

    let rb1=document.createElement("input");
    rb1.type="radio";
    rb1.name="izborIgraca"
    radiobox1.appendChild(rb1);
    l= document.createElement("label");
    l.innerHTML="Slobodni igraci";
    radiobox1.appendChild(l);

    let rb2=document.createElement("input");
    rb2.type="radio";
    rb2.name="izborIgraca"
    radiobox2.appendChild(rb2);
    l= document.createElement("label");
    l.innerHTML="Zauzeti igraci";
    radiobox2.appendChild(l);

    let btnPrikazi=document.createElement("button");
    btnPrikazi.innerHTML="Prikazi";
    btnPrikazi.className="btnPrikazi";
    btnPrikazi.onclick=(ev)=>PrikaziIgrace();
    radiobox.appendChild(btnPrikazi);

    let tabela=document.createElement("table");
    tabela.setAttribute('id','idTabele');
    radiobox.appendChild(tabela);
    crtajHeder(tabela); 
    
    let tabela2=document.createElement("table");
    tabela2.setAttribute('id','idTabeleT');
    divTabelaTrener.appendChild(tabela2);
    crtajHederT(tabela2);

    PrikazTrenera();
////////////////////////////////////////////////////Za igraca
    let divOceni=document.createElement("div");
    divOceni.className="divOceni";
    div2.appendChild(divOceni);

    l= document.createElement("label");
    l.innerHTML="Promeni ocenu igraca: ";
    divOceni.appendChild(l);

    let inputOceni=document.createElement("input");
    inputOceni.type="number";
    inputOceni.className="inputOceni";
    inputOceni.name="inputOceni";
    divOceni.appendChild(inputOceni);

    l= document.createElement("label");
    l.innerHTML="Nova ocena: ";
    divOceni.appendChild(l);

    let inputOcena=document.createElement("input");
    inputOcena.type="number";
    inputOcena.className="inputOcena";
    inputOcena.name="inputOcena";
    divOceni.appendChild(inputOcena);

    let btnOceniIgraca=document.createElement("button");
    btnOceniIgraca.innerHTML="Promeni ocenu";
    btnOceniIgraca.className="btnOceniIgraca";
    btnOceniIgraca.onclick=(ev)=>OceniIgraca(
        document.getElementsByName("inputOceni")[0].value,
        document.getElementsByName("inputOcena")[0].value
    );
    divOceni.appendChild(btnOceniIgraca);
////////////////////////////////////////////////////Za tim
    let divTim=document.createElement("div");
    divTim.className="divTim";
    div0.appendChild(divTim);

    let l4=document.createElement("label");
    l4.className="l4";
    l4.innerHTML="Dodaj tim";
    divTim.appendChild(l4);

    let divTim0=document.createElement("div");
    divTim0.className="divTim0";
    divTim.appendChild(divTim0);

    let divTim01=document.createElement("div");
    divTim01.className="divTim01";
    divTim0.appendChild(divTim01);

    let divTim02=document.createElement("div");
    divTim02.className="divTim02";
    divTim0.appendChild(divTim02);

    nizNazivaTim.forEach((naziv,index) => {
        let lNaziv=document.createElement("label");
        lNaziv.className="lNaziv";
        lNaziv.innerHTML=naziv+": ";
        divTim01.appendChild(lNaziv);

        let inputTim=document.createElement("input");
        inputTim.type=nizTipovaTim[index];
        inputTim.className="poljaTim";
        inputTim.name=naziv;
        divTim02.appendChild(inputTim);
    });
  

    let btnDodajTim=document.createElement("button");
    btnDodajTim.innerHTML="Dodaj novi tim";
    btnDodajTim.className="btnDodajTim";
    btnDodajTim.onclick=(ev)=>DodajTim(
        document.getElementsByName("Naziv")[0].value,
        document.getElementsByName("Grad")[0].value,
        document.getElementsByName("Kapital")[0].value,
        document.getElementsByName("Trener")[0].value
    );
    divTim.appendChild(btnDodajTim);

    l= document.createElement("label");
    l.innerHTML="Dodaj igraca u tim: ";
    divTim.appendChild(l);

    let inputTim=document.createElement("input");
    inputTim.type="text";
    inputTim.className="inputTim";
    inputTim.name="inputTim";
    divTim.appendChild(inputTim);

    l= document.createElement("label");
    l.innerHTML="Novi igrac: ";
    divTim.appendChild(l);

    let inputIgracZaTim=document.createElement("input");
    inputIgracZaTim.type="number";
    inputIgracZaTim.className="inputIgracZaTim";
    inputIgracZaTim.name="inputIgracZaTim";
    divTim.appendChild(inputIgracZaTim);

    let btnDovediIgraca=document.createElement("button");
    btnDovediIgraca.innerHTML="Dovedi igraca u tim";
    btnDovediIgraca.className="btnDovediIgraca";
    btnDovediIgraca.onclick=(ev)=>DovediIgraca(
        document.getElementsByName("inputIgracZaTim")[0].value,
        document.getElementsByName("inputTim")[0].value
    );
    divTim.appendChild(btnDovediIgraca);
/////////////////////////////////////////////////////Za utakmicu
    let divUtakmica=document.createElement("div");
    divUtakmica.className="divUtakmica";
    div0.appendChild(divUtakmica);
    
    let l5=document.createElement("label");
    l5.innerHTML="Zakazi utakmicu";
    l5.className="l5";
    divUtakmica.appendChild(l5);

    l5=document.createElement("label");
    l5.innerHTML="Datum odrzavanja:";
    divUtakmica.appendChild(l5);

    let inputDatum=document.createElement("input");
    inputDatum.type="date";
    inputDatum.className="poljeDatum";
    inputDatum.name="poljeDatum";
    divUtakmica.appendChild(inputDatum);

    l5=document.createElement("label");
    l5.innerHTML="Tim domacin:";
    divUtakmica.appendChild(l5);

    let inputDomacin=document.createElement("input");
    inputDomacin.type="text";
    inputDomacin.className="poljeDomacin";
    inputDomacin.name="poljeDomacin";
    divUtakmica.appendChild(inputDomacin);

    l5=document.createElement("label");
    l5.innerHTML="Tim gost:";
    divUtakmica.appendChild(l5);

    let inputGost=document.createElement("input");
    inputGost.type="text";
    inputGost.className="poljeGost";
    inputGost.name="poljeGost";
    divUtakmica.appendChild(inputGost);

    let btnZakazi=document.createElement("button");
    btnZakazi.innerHTML="Zakazi utakmicu";
    btnZakazi.className="btnZakazi";
    btnZakazi.onclick=(ev)=>Zakazi(
        document.getElementsByName("poljeDomacin")[0].value,
        document.getElementsByName("poljeGost")[0].value,
        document.getElementsByName("poljeDatum")[0].value
    );
    divUtakmica.appendChild(btnZakazi);
////////////////////////////////////////////////////////Za listu utakmica
    let divListaUtakmica=document.createElement("div");
    divListaUtakmica.className="divListaUtakmica";
    divZaTabele.appendChild(divListaUtakmica);

    

    let l6=document.createElement("label");
    l6.innerHTML="Izaberite datum za prikaz utakmica:"
    divUtakmica.appendChild(l6);

    let inputDatumPretraga=document.createElement("input");
    inputDatumPretraga.type="date";
    inputDatumPretraga.className="poljeDatumPretraga";
    inputDatumPretraga.name="poljeDatumPretraga";
    divUtakmica.appendChild(inputDatumPretraga);

    let btnPretraga=document.createElement("button");
    btnPretraga.innerHTML="Pretrazi";
    btnPretraga.className="btnPretraga";
    btnPretraga.onclick=(ev)=>Pretraga(
        document.getElementsByName("poljeDatumPretraga")[0].value
    );
    divUtakmica.appendChild(btnPretraga);

    function RegistrujIgraca(regbroj, ime, prezime, starost, ocena, cena)
    {
        if(regbroj==0 || ime=="" || prezime=="" || starost==0 || ocena==0 || cena==0)
        {
            alert("Popunite sva polja!");
            return;
        }
        fetch("https://localhost:5001/Igrac/DodajIgraca/"+regbroj+"/"+ime+"/"+prezime+
        "/"+starost+"/"+ocena+"/"+cena,
        {
            method:"POST"
        }).then(s=>{
            if(s.ok)
            {
                alert("Uspesno registrovan novi igrac");
                location.reload();
            }
            s.text();
        })
        
    }
    function Slobodni()
    {
        fetch("https://localhost:5001/Igrac/PrikazSlobodnihIgraca")
        .then(p=>{
            p.json().then(igraci=>{
                igraci.forEach(igrac => {
                    var p= new Igrac(igrac.regBroj, igrac.ime, igrac.prezime, igrac.starost, igrac.ocena, igrac.cena);
                    listaIgraca.push(p);
                });
            })
        })    
    }
    function Zauzeti()
    {
        fetch("https://localhost:5001/Igrac/PrikazZauzetihIgraca")
        .then(p=>{
            p.json().then(igraci=>{
                igraci.forEach(igrac => {
                    var p= new Igrac(igrac.regBroj, igrac.ime, igrac.prezime, igrac.starost, igrac.ocena, igrac.cena);
                    listaIgraca.push(p);
                });
            })
        })
    }   
    function crtajHeder(host)
    {
        let red=document.createElement("tr");
        host.appendChild(red);
        
        let h;
        nizNaziva.forEach(naziv => {
            h=document.createElement("th");
            h.className="nazivi"; 
            h.innerHTML=naziv;
            red.appendChild(h);
        });
    }

    function DeleteRows() {
        var rowCount = tabela.rows.length;
        for (var i = rowCount - 1; i > 0; i--) {
            tabela.deleteRow(i);
        }
    }
    function PrikaziIgrace()
    {       
        if(rb1.checked===false && rb2.checked===false)
        {
            alert("Izaberite da li zelite zauzete ili slobodne igrace");
            return;
        }
        DeleteRows();         
        if(rb1.checked===true)
        {                  
            Slobodni();
        }
        else if(rb2.checked===true)
        {                
            Zauzeti();          
        }
        listaIgraca.forEach(p=>{          
            p.crtajIgraca(tabela);
        });

        listaIgraca=[];          
    }
    function OceniIgraca(regbroj, ocena)
    {
        if(regbroj==0 || ocena==0)
        {
            alert("Popunite sva polja");
            return;
        }
        fetch("https://localhost:5001/Igrac/IzmeniIgraca/"+regbroj+"/"+ocena,
        {
            method:"PUT"
        }).then(s=>{
            if(s.ok)
            {
                alert("Uspesno promenjena ocena");
                location.reload();
            }
            s.text();
        })
    }


    function RegistrujTrenera(regbroj, ime, prezime, iskustvo)
    {
        if(regbroj==0 || ime=="" || prezime=="" || iskustvo==0 )
        {
            alert("Popunite sva polja!");
            return;
        }
        fetch("https://localhost:5001/Trener/DodajTrenera/"+regbroj+"/"+ime+"/"+prezime+
        "/"+iskustvo,
        {
            method:"POST"
        }).then(s=>{
            if(s.ok)
            {
                alert("Uspesno registrovan novi trener");
                location.reload();
            }
            s.text();
        })
        
    }
    function crtajHederT(host1)
    {
        let red=document.createElement("tr");
        host1.appendChild(red);
        
        let h;
        nizNazivaT.forEach(naziv => {
            h=document.createElement("th");
            h.className="nazivi"; 
            h.innerHTML=naziv;
            red.appendChild(h);
        });
    }
    function PrikazTrenera()
    {
    fetch("https://localhost:5001/Trener/PrikazTrenera")
    .then(p=>{
            p.json().then(treneri=>{
                treneri.forEach(trener => {
                    var p= new Trener(trener.regBroj, trener.ime, trener.prezime, trener.iskustvo);
                    listaTrenera.push(p);
                    p.crtajTrenera(tabela2);
                });
            })
        })
    }   

    function DodajTim(naziv,grad,kapital,trener)
    {
        fetch("https://localhost:5001/Tim/DodajTim/"+naziv+"/"+grad+"/"+kapital+
        "/"+trener,
        {
            method:"POST"
        }).then(s=>{
            if(s.ok)
            {
                alert("Uspesno registrovan novi tim");
                location.reload();
            }
            s.text();
        })
    }
    function DovediIgraca(igrac, tim)
    {
        fetch("https://localhost:5001/Tim/PromeniIgraca/"+igrac+"/"+tim,
        {
            method:"PUT"
        }).then(s=>{
            if(s.ok)
            {
                alert("Ugovor je uspesno sklopljen");
                location.reload();
            }
            s.text();
        })
    }


    function Zakazi(domacin, gost, datum)
    {
        fetch("https://localhost:5001/Utakmica/DodajUtakmicu/"+domacin+"/"+gost+"/"+datum+"/"+domacin,
        {
            method:"POST"
        }).then(s=>{
            if(s.ok)
            {
                alert("Utakmica uspesno zakazana");
                location.reload();
            }
            s.text();
        })
    }
    function IgraciTima(tim)
    {
        let sum=0;
        fetch("https://localhost:5001/Tim/IgraciTima/"+tim)
        .then(p=>{
            p.json().then(igraci=>{
                igraci.forEach(igrac => {
                    var p= new Igrac(igrac.regBroj, igrac.ime, igrac.prezime,
                         igrac.starost, igrac.ocena, igrac.cena);
                 
                    sum=sum+p.ocena;
                   
                });
                return sum;
            }); 
            
        })
        
        
    }
    function Pretraga(datum)
    {   
        let today = new Date().toISOString().slice(0, 10);
        if(datum=="" || datum<today)
        {
            alert("Unesite ispravan datum");
            return;
        }
        fetch("https://localhost:5001/Utakmica/NadjiUtakmicu/"+datum,
        {
            method:"GET"
        }).then(p=>{
            p.json().then(utakmice=>{
                utakmice.forEach(utakmica => {
                    var p= new Utakmica(utakmica.tim1, utakmica.tim2,
                         utakmica.datum, utakmica.domacin);

                       var it1=IgraciTima(p.tim1.naziv);
                       var it2=IgraciTima(p.tim2.naziv);

                        let ut=document.createElement("div");
                        ut.className="prikazUtakmice";
                        divListaUtakmica.appendChild(ut);
            
                        let t1=document.createElement("label");
                        t1.innerHTML=p.tim1.naziv;
                        ut.appendChild(t1);
                        

                        let t2=document.createElement("label");
                        t2.innerHTML=p.tim2.naziv;
                        ut.appendChild(t2);
                });
            })
            
        })
        

    }

    
}

crtaj(document.body);

