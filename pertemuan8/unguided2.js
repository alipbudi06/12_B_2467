class Hewan {
    suara () {
        console.log("Hewan ini bersuara");
    }
}

class Anjing extends Hewan {
    suara () {
        console.log("Anjing menggonggong: Woof woof!");
    }

    lari () {
        console.log("Hewan ini berlari dengan kecepatan 20km/jam.");
    }
}
class Kucing extends Hewan {
    suara () {
        console.log("Kucing mengeong: Meow meow!");
    }

    lari () {
        console.log("Hewan ini berlari dengan kecepatan 15km/jam.");
    }
}
class Burung extends Hewan {
    suara () {
        console.log("Burung berkicau: Tweet tweet!");
    }

    lari () {
        console.log("Hewan ini sedang terbang dengan kecepatan 100km/jam.");
    }
}

function tampilkaninfoHewan(hewan) {
    hewan.suara();
    hewan.lari();
}

const anjing_2467 = new Anjing();
const kucing_2467 = new Kucing();
const burung_2467 = new Burung();

tampilkaninfoHewan(anjing_2467);
tampilkaninfoHewan(kucing_2467);
tampilkaninfoHewan(burung_2467);
