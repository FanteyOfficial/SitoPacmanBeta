const phrases = {
    home: {
        main: {
            chiSiamo: {
                titolo: {
                    ITA: "Chi siamo?",
                    ENG: "Who are we?"
                },
                sez1: {
                    ITA: "Siamo degli studenti iscritti all'indirizzo di informatica che stanno seguendo un corso riguardante la realtà virtuale.",
                    ENG: "We are students enrolled in computer science who are following a course on virtual reality."
                },
                sez2: {
                    ITA: "NOMI:",
                    ENG: "NAMES:"
                },
                sez3: "Chandra Vance Adam",
                sez4: "D'Aniello Lorenzo",
                sez5: "Zini Filippo"
            },
            ilProgetto: {
                titolo: {
                    ITA: "Il progetto",
                    ENG: "The project"
                },
                sez1: {
                    ITA: "Il progetto nasce durante la partecipazione ad un corso sulla realtà aumentata chiamato: \"AR-VR\".<br/>L'idea si ispira al gioco targato Bandai Namco, la nostra concezione riguardante il progetto si basa sul riutilizzare le meccaniche di gioco per applicarle in un labirinto 3D con all'interno una versione \"horror\" di Pacman.<br/>Il gioco non solo è in prima persona, ma il giocatore si ritroverà direttamente all'interno del labirinto grazie al sistema di Realtà Virtuale (VR).",
                    ENG: "The project was born during the participation in a course on augmented reality called: \"AR-VR\".<br/>The idea is inspired by the Bandai Namco game, our concept regarding the project is based on reusing the mechanics of game to apply them in a 3D labyrinth with a \"horror\" version of Pacman inside.<br/>The game is not only in first person, but the player will find himself directly inside the labyrinth thanks to the Virtual Reality (VR)."
                },
                sez2: {
                    ITA: "per vedere la documentazione ufficiale del gioco!",
                    ENG: "to see the official game documentation!"
                },
                toDocs: {
                    ITA: "Clicca qui ",
                    ENG: "Click here "
                }
            }
        }
    },
    docs: {
        main: {
            intro: {
                titolo: {
                    ITA: "INTRODUZIONE",
                    ENG: "INTRODUCTION"
                },
                sez1: {
                    ITA: "Benvenuto!<br/>In questa sezione troverai la documentazione e una spiegazione<br/>più approfondita riguardante il gioco dedicato al celebre titolo: \"Pacman\".",
                    ENG: "Welcome!<br/>In this section you will find the documentation and a more in-depth explanation<br/>about the game dedicated to the famous title: \"Pacman\"."
                },
            },
            parag1: {
                sez1: {
                    ITA: "Il gioco",
                    ENG: "The game"
                },
                sez2: {
                    ITA: "Come detto in precedenza (e se avete già giocato il gioco lo avrete capito)<br/>il gioco è ispirato a Pacman, il celebre gioco targato Bandai Namco e ideato da Tōru Iwatani.<br/>L'idea in sé è molto semplice: prendere il gioco Bandai Namco, renderlo 3D, horror e renderlo giocabile da VR (Virtual Reality).<br/>La parte più difficile? Realizzare i punti appena elencati senza molta esperienza nell'ambito della realizzazione di videogiochi.",
                    ENG: "As mentioned above (and if you have already played the game you will have understood)<br/>The game is inspired by Pacman, the famous game branded Bandai Namco and designed by Tōru Iwatani.<br/>The idea itself is very simple: take the game Bandai Namco, make it 3D, horror and make it playable from VR (Virtual Reality).<br/>The hardest part? Making the above points without much experience in making video games."
                },
            },
            parag2: {
                sez1: {
                    ITA: "I software utilizzati",
                    ENG: "Software used"
                },
                sez2: {
                    ITA: "Il progetto è nato su Unity, il motore grafico sviluppato da Unity Technologies.<br/>Visual Studio 2019 è stato utilizzato per la programmazione dei codici realizzati con il linguaggio C#.<br/>Per quanto riguarda la parte grafica abbiamo utilizzato Blender.",
                    ENG: "The project was born on Unity, the graphic engine developed by Unity Technologies.<br/>Visual Studio 2019 was used for programming code made with the C# language.<br/>As for the graphics we used Blender."
                },
            }
        }
    },
    downloadElem: {
        main: {
            sez1: {
                ITA: "Il gioco sarà presto disponibile!",
                ENG: "The game will be available soon!"
            },
            sez2: {
                ITA: "Gioca alla nostra versione horror di Pacman!",
                ENG: "Play our horror version of Pacman!"
            }
        }
    },
    demoElem: {
        main: {
            sez1: {
                ITA: "La demo sarà presto disponibile!",
                ENG: "The demo will be available soon!"
            },
            sez2: {
                ITA: "Scarica il gioco per la versione completa!",
                ENG: "Download the game for the full version!"
            }
        }
    },
    menu: {
        playDemo: "DEMO",
        download: {
            ITA: "SCARICA",
            ENG: "DOWNLOAD"
        }
    },
    titolo: {
        sub1: "PACMAN Project",
        sub2: "The Animation Incident"
    },
    contatti: {
        ITA: "Contatti:",
        ENG: "Contacts:"
    },
    nomiContatti: {
        cts1: "Chandra Vance Adam",
        cts2: "Lorenzo D'Aniello",
        cts3: "Filippo Zini"
    }
}

let changeMenuLanguage = () => {
    document.getElementById("giocaLaDemo").innerHTML = phrases.menu.playDemo;
    document.getElementById("scarica").innerHTML = phrases.menu.download[(document.getElementById("selectLanguage").value).toUpperCase()];
}

let changeTitleSite = () => {
    document.getElementById("sub1").innerHTML = phrases.titolo.sub1;
    document.getElementById("sub2").innerHTML = phrases.titolo.sub2;
}

let changeLangContacts = () => {
    document.getElementById("contacts").innerHTML = phrases.contatti[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById("cts1").innerHTML = phrases.nomiContatti.cts1;
    document.getElementById("cts2").innerHTML = phrases.nomiContatti.cts2;
    document.getElementById("cts3").innerHTML = phrases.nomiContatti.cts3;
}

let changeLanguageHomePage = () => {
    let home = phrases.home.main;
    document.getElementById("personalInfo").innerHTML = home.chiSiamo.titolo[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById("sez1").innerHTML = home.chiSiamo.sez1[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById("sez2").innerHTML = home.chiSiamo.sez2[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById("sez3").innerHTML = home.chiSiamo.sez3;
    document.getElementById("sez4").innerHTML = home.chiSiamo.sez4;
    document.getElementById("sez5").innerHTML = home.chiSiamo.sez5;

    document.getElementById("theProject").innerHTML = home.ilProgetto.titolo[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById("sez1.1").innerHTML = home.ilProgetto.sez1[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById("sez2.1").innerHTML = "<a href=\"pacmanDocs.html\" id=\"toDocs\"></a>" + home.ilProgetto.sez2[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById("toDocs").innerHTML = home.ilProgetto.toDocs[(document.getElementById("selectLanguage").value).toUpperCase()];
}

let changeLanguageDocsPage = () => {
    let docsElems = phrases.docs.main;
    document.getElementById('introTitle').innerHTML = docsElems.intro.titolo[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById('sezI.1').innerHTML = docsElems.intro.sez1[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById('sezI.2').innerHTML = docsElems.parag1.sez1[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById('sezI.3').innerHTML = docsElems.parag1.sez2[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById('sezI.4').innerHTML = docsElems.parag2.sez1[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById('sezI.5').innerHTML = docsElems.parag2.sez2[(document.getElementById("selectLanguage").value).toUpperCase()];
}

let changeLangDownloadPage = () => {
    document.getElementById("giocaLaDemo").innerHTML = phrases.menu.playDemo;
    let downElems = phrases.downloadElem.main;
    document.getElementById('sezD.1').innerHTML = downElems.sez1[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById('sezD.2').innerHTML = downElems.sez2[(document.getElementById("selectLanguage").value).toUpperCase()];
}

let changeLangDemoPage = () => {
    document.getElementById("scarica").innerHTML = phrases.menu.download[(document.getElementById("selectLanguage").value).toUpperCase()];
    let demoElems = phrases.demoElem.main;
    document.getElementById('sezDemo1').innerHTML = demoElems.sez1[(document.getElementById("selectLanguage").value).toUpperCase()];
    document.getElementById('sezDemo2').innerHTML = demoElems.sez2[(document.getElementById("selectLanguage").value).toUpperCase()];
}

document.getElementById("selectLanguage").onclick = () => {
    changeLanguage();
    changeTitleSite();
    changeLangContacts();
}

let changeLanguage = () => {
    if (document.title == "HOME") {
        changeMenuLanguage();
        changeTitleSite();
        changeLangContacts();
        changeLanguageHomePage();
    }
    else if (document.title == "DOCS") {
        changeLangContacts();
        changeMenuLanguage();
        changeTitleSite();
        changeLanguageDocsPage();
    }
    else if (document.title == "SCARICA") {
        changeLangContacts();
        changeTitleSite();
        changeLangDownloadPage();
    }
    else if (document.title == "DEMO") {
        changeLangContacts();
        changeTitleSite();
        changeLangDemoPage();
    }

    else console.log("altra pagina");
}

document.body.onload = () => {
    changeLanguage();
    creaAudio("../audio/MainMenuPacman.mp3");
}



/* -------------------------------- */
/* gestione musica */
/* -------------------------------- */



let bgMusicIsPlaying = false; // da cambiare a true se impostata su false

let creaAudio = audio => {
    let tagAudio = document.createElement("audio");
    tagAudio.autoplay = false;
    tagAudio.loop = true;
    tagAudio.id = "bgMusic";
    tagAudio.volume = 0.15; // il volume è tra 0 e 1
    tagAudio.muted = false;
    document.body.appendChild(tagAudio);

    let sourceTag = document.createElement("source");
    sourceTag.src = audio;
    sourceTag.type = "audio/mp3";
    document.getElementById("bgMusic").appendChild(sourceTag);
    if (bgMusicIsPlaying) playBgAudio();
    else stopBgAudio();
}

let playBgAudio = () => {
    document.getElementById("bgMusic").play();
    document.getElementById("gestBgAudio").textContent = "AUDIO OFF";
    bgMusicIsPlaying = true;
}

let stopBgAudio = () => {
    document.getElementById("bgMusic").pause();
    document.getElementById("gestBgAudio").textContent = "AUDIO ON";
    bgMusicIsPlaying = false;
}

document.getElementById("gestBgAudio").onclick = () => {
    if (bgMusicIsPlaying) stopBgAudio();
    else playBgAudio();
}