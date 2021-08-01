// import { createViewModel } from './main-view-model';

// export function onNavigatingTo(args) {
  
//   const page = args.object

//   page.bindingContext = createViewModel()
// }
// exports.clickButton = () => {
//   alert('Witaj ' + emails + '!')
// }

// function showPromptDialog() {

//     const promptOptions = {
//         title: "Hey There",
//         defaultText: " Enter your mood ",
//         message: "How you doin'",
//         okButtonText: "OK",
//         cancelButtonText: "Cancel",
//         neutralButtonText: "Neutral",
//         cancelable: true,
//         inputType: "text", // email, number, text, password, or email
//         capitalizationType: "sentences" // all, none, sentences or words
//     };
//     prompt(promptOptions).then((result) => {
//             alert(`Hello, ${result.text}`);
//     });

// }
// exports.showPromptDialog = showPromptDialog;


function ariel(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/ariel");
}

function callisto(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/callisto");
}

function ceres(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/ceres");
}

function charon(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/charon");
}

function deimos(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/deimos");
}

function dione(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/dione");
}

function earth(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/earth");
}

function enceladus(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/enceladus");
}

function epimetheus(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/epimetheus");
}

function europa(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/europa");
}

function helene(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/helene");
}

function hyperion(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/hyperion");
}

function iapetus(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/iapetus");
}

function ida(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/ida");
}

function io(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/io");
}

function janus(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/janus");
}

function jupiter(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/jupiter");
}

function mars(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/mars");
}

function mercury(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/mercury");
}

function mimas(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/mimas");
}

function miranda(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/miranda");
}

function moon(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/moon");
}

function neptune(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/neptune");
}

function oberon(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/oberon");
}

function pandora(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/pandora");
}

function phobos(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/phobos");
}

function phoebe(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/phoebe");
}

function pluton(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/pluton");
}

function prometheus(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/prometheus");
}

function proteus(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/proteus");
}

function rhea(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/rhea");
}

function saturn(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/saturn");
}

function solarystem(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/solarystem");
}

function sun(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/sun");
}

function tethys(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/tethys");
}

function titan(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/titan");
}

function umbrieel(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/umbrieel");
}

function uranus(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/uranus");
}

function venus(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/venus");
}

function vesta(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("page/vesta");
}

exports.ariel = ariel;
exports.callisto = callisto;
exports.ceres = ceres;
exports.charon = charon;
exports.deimos = deimos;
exports.dione = dione;
exports.earth = earth;
exports.enceladus = enceladus;
exports.epimetheus = epimetheus;
exports.europa = europa;
exports.helene = helene;
exports.hyperion = hyperion;
exports.iapetus = iapetus;
exports.ida = ida;
exports.io = io;
exports.janus = janus;
exports.jupiter = jupiter;
exports.mars = mars;
exports.mercury = mercury;
exports.mimas = mimas;
exports.miranda = miranda;
exports.moon = moon;
exports.neptune = neptune;
exports.oberon = oberon;
exports.pandora = pandora;
exports.phobos = phobos;
exports.phoebe = phoebe;
exports.pluton = pluton;
exports.prometheus = prometheus;
exports.proteus = proteus;
exports.rhea = rhea;
exports.saturn = saturn;
exports.solarystem = solarystem;
exports.sun = sun;
exports.tethys = tethys;
exports.titan = titan;
exports.umbrieel = umbrieel;
exports.uranus = uranus;
exports.venus = venus;
exports.vesta = vesta;