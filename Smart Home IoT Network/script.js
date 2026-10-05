// Device states

let devices = {

    light: false,

    fan: false,

    ac: false,

    tv: false,

    camera: true,

    door: true

};


// Show sections

function showSection(sectionName) {

    const sections =
        document.querySelectorAll(".section");

    sections.forEach(function (section) {

        section.classList.add("hidden");

    });

    document
        .getElementById(sectionName)
        .classList.remove("hidden");
}


// Toggle normal devices

function toggleDevice(device) {

    devices[device] =
        !devices[device];

    updateDevice(device);

    updateEnergy();

}


// Update device UI

function updateDevice(device) {

    const status =
        document.getElementById(
            device + "Status"
        );

    const button =
        document.getElementById(
            device + "Button"
        );


    if (devices[device]) {

        status.textContent =
            device === "camera"
                ? "ACTIVE"
                : "ON";

        status.className =
            "device-status on";

        button.textContent =
            device === "camera"
                ? "Disable Camera"
                : "Turn OFF";

    } else {

        status.textContent = "OFF";

        status.className =
            "device-status off";

        button.textContent =
            "Turn ON";
    }
}


// Door control

function toggleDoor() {

    devices.door =
        !devices.door;

    const status =
        document.getElementById(
            "doorStatus"
        );

    const button =
        document.getElementById(
            "doorButton"
        );


    if (devices.door) {

        status.textContent =
            "LOCKED";

        status.className =
            "device-status on";

        button.textContent =
            "Unlock Door";

    } else {

        status.textContent =
            "UNLOCKED";

        status.className =
            "device-status off";

        button.textContent =
            "Lock Door";
    }
}


// Turn all devices ON

function turnAllOn() {

    devices.light = true;

    devices.fan = true;

    devices.ac = true;

    devices.tv = true;

    devices.camera = true;


    updateDevice("light");

    updateDevice("fan");

    updateDevice("ac");

    updateDevice("tv");

    updateDevice("camera");

    updateEnergy();

}


// Turn all devices OFF

function turnAllOff() {

    devices.light = false;

    devices.fan = false;

    devices.ac = false;

    devices.tv = false;

    devices.camera = false;


    updateDevice("light");

    updateDevice("fan");

    updateDevice("ac");

    updateDevice("tv");

    updateDevice("camera");

    updateEnergy();
}


// Update energy consumption

function updateEnergy() {

    let energy = 1.2;


    if (devices.light) {

        energy += 0.3;

    }

    if (devices.fan) {

        energy += 0.5;

    }

    if (devices.ac) {

        energy += 1.5;

    }

    if (devices.tv) {

        energy += 0.2;

    }

    if (devices.camera) {

        energy += 0.1;

    }


    document.getElementById(
        "energy"
    ).textContent =
        energy.toFixed(1) + " kW";


    document.getElementById(
        "energyLarge"
    ).textContent =
        energy.toFixed(1) + " kW";
}


// Update online devices

function updateOnlineDevices() {

    let count = 0;


    if (devices.light) count++;

    if (devices.fan) count++;

    if (devices.ac) count++;

    if (devices.tv) count++;

    if (devices.camera) count++;


    document.getElementById(
        "onlineDevices"
    ).textContent =
        count + " / 6";
}


// Save settings

function saveSettings() {

    alert(
        "✅ Smart Home settings saved successfully!"
    );
}


// Simulate temperature changes

function updateEnvironment() {

    const temperature =
        Math.floor(
            Math.random() * 5
        ) + 25;

    const humidity =
        Math.floor(
            Math.random() * 10
        ) + 55;


    document.getElementById(
        "temperature"
    ).textContent =
        temperature + "°C";


    document.getElementById(
        "humidity"
    ).textContent =
        humidity + "%";
}


// Update every few seconds

setInterval(function () {

    updateEnvironment();

    updateOnlineDevices();

}, 3000);


// Initial values

updateEnergy();

updateOnlineDevices();