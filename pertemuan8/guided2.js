const ayah = {
    bekerja : function() {
        console.log("Ayah sedang bekerja di kantor");
    }
}

const ibu = {
    bekerja : function() {
        console.log("Ibu sedanng menjahit")
    },
    memasak : function() {
        console.log("Ibu sedang memasak spaghetti Aglio e Olio")
    }
}

function doTugas(objek) {
    if(objek.bekerja) {
        objek.bekerja();
    } if (objek.memasak) {
        objek.memasak();
    }else {
        console.log("Perilaku tidak dikenali.");   
    }
}

doTugas(ayah);
doTugas(ibu);