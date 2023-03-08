const AgrEle = () => { // Agrega todos los elementos de la página.
    let elePad = document.getElementsByTagName('body')[0];

    let mai = document.createElement('main'); // Crea el contnedor principal.
    elePad.appendChild(mai);
    
    let aside = document.createElement('aside'); // Crea el panel izquierdo.
    mai.appendChild(aside);

        let fot = document.createElement('div'); // Crea contenedor de foto.
        fot.setAttribute('id', 'fot');
        aside.appendChild(fot);
            
            let icoOcu = document.createElement('div'); // Crea el icono para ocultar el aside.
            icoOcu.setAttribute('id', 'icoOcu');
            icoOcu.innerHTML = '<i class="fa fa-arrow-left"></i>';
            icoOcu.addEventListener('click', ocuAsi);
            fot.appendChild(icoOcu);

            let img = document.createElement('img'); // Crea la imagen.
            
            img.setAttribute('src', './img/foto.jpg');
            fot.appendChild(img);

            let parFot = document.createElement('p');
            parFot.setAttribute('id', 'parFot');
            parFot.innerHTML = 'CUIL: 20-24165281-6 <br />47 años<br />Berazategui - Bs As - Argentina <br /> CP (1885)';
            fot.appendChild(parFot);

        let datCon = document.createElement('div'); // Crea contenedor de datos de contacto
        datCon.setAttribute('id', 'datCon');
        aside.appendChild(datCon);

            let encDatCon = document.createElement('h2');
            encDatCon.innerText = 'DATOS DE CONTACTO';
            datCon.appendChild(encDatCon);

            let cueDatCon = document.createElement('p');
            cueDatCon.setAttribute('id', 'cueDatCon');
            cueDatCon.innerHTML = '<i class="fa fa-phone"></i>&nbsp;&nbsp; +54 911 61755824 <br /> <i class="fa fa-envelope"></i>&nbsp;&nbsp; sancimahugo@gmail.com <br /> <div id="lkd"><span id="lin">in</span> <a href="https://www.linkedin.com/in/hugo-sancima-webdev/">https://www.linkedin.com/in/<br />hugo-sancima-webdev/</a></div>';
            datCon.appendChild(cueDatCon);
        
        let edu = document.createElement('div'); // Crea contenedor de educación
        edu.setAttribute('id', 'edu');
        aside.appendChild(edu);

            let encEdu = document.createElement('h2');
            encEdu.innerText = 'EDUCACIÓN';
            edu.appendChild(encEdu);

            let cueEdu = document.createElement('p');
            cueEdu.innerHTML = 'ESCUELA METROPOLITANA DE ALTOS <br /> ESTUDIOS - EMAE (ALPI) <br /> Analista de sistema de información <br /> 2008 - 2010';
            edu.appendChild(cueEdu);
    
        let forCom = document.createElement('div'); // Crea contenedor de formación complementaria.
        forCom.setAttribute('id', 'forCom');
        aside.appendChild(forCom);

            let encForCom = document.createElement('h2');
            encForCom.innerHTML = 'FORMACIÓN <br />COMPLEMENTARIA';
            forCom.appendChild(encForCom);

            let cueForCom = document.createElement('p');
            cueForCom.innerHTML = 'EGG (Abr - Jun 2022) <br /> Programación desde cero <br /> UTN (Jun - Sep 2022) <br /> Software Testing <br /> CODO A CODO (Sep - Dic 2022) <br /> Programación Full Stack Java (1° etapa) <br /> ARGENTINA PROGRAMA (Sep - Oct 22) <br /> #Sé programar (1°etapa) <br /> CILSA (Sep - Dic 2022) <br /> Inglés vocacional <br /> CILSA (Sep - Nov 2022) <br /> JavaScript Avanzado';
            forCom.appendChild(cueForCom);
        
        let manIdi = document.createElement('div'); // Crea contenedor de manejo de idioma.
        manIdi.setAttribute('id', 'manIdi');
        aside.appendChild(manIdi);

            let encManIdi = document.createElement('h2');
            encManIdi.setAttribute('id', 'encManIdi');
            encManIdi.innerText = 'MANEJO DE IDIOMA';
            manIdi.appendChild(encManIdi);

            let cueManIdi = document.createElement('p');
            cueManIdi.innerText = 'Inglés básico';
            manIdi.appendChild(cueManIdi);

    // Crear una capa que superponga al secction.
    let capOcu = document.createElement('div'); // Crea la capa oculta para anular el section.
    capOcu.setAttribute('id', 'capOcu');
    mai.appendChild(capOcu);

    let section = document.createElement('section'); // Crea el panel derecho.
    mai.appendChild(section);

        let datPer = document.createElement('div'); // Crea contenedor de nombre y apellido.
        datPer.setAttribute('id', 'datPer');
        section.appendChild(datPer);

            let icoAco = document.createElement('div'); // Icono de slide.
            icoAco.setAttribute('id', 'icoAco');
            icoAco.addEventListener('click', mosAsi);
            icoAco.innerHTML = '<i class="fa fa-arrow-right"></i>';
            
            datPer.appendChild(icoAco);

            let encDatPer = document.createElement('h1');
            encDatPer.setAttribute('id', 'encDatPer');
            encDatPer.innerText = 'HUGO DANIEL SANCIMA';
            datPer.appendChild(encDatPer);

            let cueDatPer = document.createElement('h2');
            cueDatPer.setAttribute('id', 'cueDatPer');
            cueDatPer.innerText = 'ANALISTA DE SISTEMAS DE INFORMACIÓN';
            datPer.appendChild(cueDatPer);


        let aceDmi = document.createElement('div'); // Crea contenedor de acerca de mi.
        aceDmi.setAttribute('id', 'aceDmi');
        section.appendChild(aceDmi);

            let encAceDmi = document.createElement('h2');
            encAceDmi.innerText = 'ACERCA DE MÍ';
            aceDmi.appendChild(encAceDmi);

            let cueAceDmi = document.createElement('p');
            cueAceDmi.setAttribute('id', 'cueAceDmi');
            cueAceDmi.innerText = 'Me interesa el área relacionada al desarrollo de software y diseño web dado que los últimos años me capacité de forma autodidacta en las tecnologías relacionadas al rubro. En un principio mi objetivo es formar parte de un grupo en proyectos creativos para dar luego soltura a mi desenvolvimiento profesional y poder pasar a liderar proyectos de impacto.';
            aceDmi.appendChild(cueAceDmi);

        let habTec = document.createElement('div'); // Crea contenedor de habilidades técnicas.
        habTec.setAttribute('id', 'habTec');
        section.appendChild(habTec);

            let encHabTec = document.createElement('h2');
            encHabTec.innerText = 'HABILIDADES TÉCNICAS';
            habTec.appendChild(encHabTec);

            let cueHabTec = document.createElement('p');
            cueHabTec.setAttribute('id', 'cueHabTec');
            cueHabTec.innerHTML = 'Dominio de Microsoft Word, Excel, Access. <br />AutoCad, Adobe Flash CS3, Dreamweaver CS3.<br /> Pascal, C, C++, C#, Microsoft Visual Basic 6, Html5, CSS3, Bootstrap, Java Script, Jquery, Xml, Json, PHP5 y SQL.';
            habTec.appendChild(cueHabTec);

        let expLab = document.createElement('div'); // Crea contenedor de experiencia laboral.
        expLab.setAttribute('id', 'expLab');
        section.appendChild(expLab);

            let encExpLab = document.createElement('h2');
            encExpLab.innerText = 'EXPERIENCIA LABORAL';
            expLab.appendChild(encExpLab);

            let cueExpLab = document.createElement('p');
            cueExpLab.setAttribute('id', 'cueExpLab');
            cueExpLab.innerHTML = '2019 - 2021 Personal administrativo en el CAPs 23 de Berazategui. <br /> 2000 - 2007 Como M.M.O. Profesional independiente.';
            expLab.appendChild(cueExpLab);

        let otrAct = document.createElement('div'); // Crea contenedor de otras habilidades.
        otrAct.setAttribute('id', 'otrAct');
        section.appendChild(otrAct);

            let encOtrAct = document.createElement('h2');
            encOtrAct.innerText = 'OTRAS ACTIVIDADES Y CONOCIMIENTOS';
            otrAct.appendChild(encOtrAct);

            let cueOtrAct = document.createElement('p');
            cueOtrAct.setAttribute('id', 'cueOtrAct');
            cueOtrAct.innerText = 'El hecho de poder llevar adelante mi carrera como profesional independiente (MMO), me dio la experiencia de afrontar nuevos desafíos, liderar equipos de trabajos, coordinar distintos rubros y administrar económicamente un proyecto.';
            otrAct.appendChild(cueOtrAct);

        let otrDat = document.createElement('div'); // Crea contenedor de otros datos.
        otrDat.setAttribute('id', 'otrDat');
        section.appendChild(otrDat);

            let encOtrDat = document.createElement('h2');
            encOtrDat.innerText = 'OTROS DATOS DE INTERÉS';
            otrDat.appendChild(encOtrDat);

            let cueOtrDat = document.createElement('p');
            cueOtrDat.setAttribute('id', 'cueOtrDat');
            cueOtrDat.innerHTML = 'Poseo una discapacidad visual <br /> (degeneración de conos y bastones)';
            otrDat.appendChild(cueOtrDat);

    let scrLnk = document.createElement('script'); // Crea el enlace a font-awesome
    scrLnk.setAttribute('src', './script/font-awesome.js');
    elePad.appendChild(scrLnk);
}
function mosAsi(){
    let eleMos = document.getElementsByTagName('aside')[0];
    eleMos.className = 'mostrar';
    let eleBlo = document.getElementById('capOcu');
    eleBlo.style.display = 'block';
   
}
function ocuAsi() {
    let eleOcu = document.getElementsByTagName('aside')[0];
    eleOcu.className = 'ocultar';
    let eleBlo = document.getElementById('capOcu');
    eleBlo.style.display = 'none';
}

window.addEventListener('load', AgrEle);