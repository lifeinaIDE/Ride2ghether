function switchTab(id, btn) {
    document.querySelectorAll('.pool-section').forEach(s =>
        s.classList.remove('active')
    );
    document.querySelectorAll('.tab').forEach(t =>
        t.classList.remove('active')
    );

    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
}

/* SEARCH (later → results page) */
function searchRide(e, type) {
    e.preventDefault();

    const form = e.target;
    const selects = form.querySelectorAll("select");
    const inputs = form.querySelectorAll("input");

    const searchData = {
        type,
        from: selects[0].value,
        to: selects[1].value,
        date: inputs[0].value,
        seats: inputs[1] ? inputs[1].value : 1,
        vehicle: type === "car" ? "Sedan" : "Bike"
    };

    const demoResults = [
        { ...searchData, seats: 2, vehicle: "Sedan" },
        { ...searchData, seats: 3, vehicle: "SUV" },
        { ...searchData, seats: 1, vehicle: "Hatchback" }
    ];

    localStorage.setItem("searchResults", JSON.stringify(demoResults));
    window.location.href = "passenger-results.html";
}


function postRide(e, type) {
    e.preventDefault();

    const form = e.target;
    const selects = form.querySelectorAll("select");
    const inputs = form.querySelectorAll("input");

    const rideData = {
        type,
        from: selects[0].value,
        to: selects[1].value,
        date: inputs[0].value,
        vehicle: type === "car" ? selects[2].value : "Bike",
        seats: inputs[1] ? inputs[1].value : 1
    };

    localStorage.setItem("postedRide", JSON.stringify(rideData));
    window.location.href = "ride-posted.html";
}

/* =========================
   BIKE: SEARCH (INTRA-CITY)
========================= */
function searchBikeRide(e) {
    e.preventDefault();

    const form = e.target;
    const city = form.querySelector("select").value;
    const inputs = form.querySelectorAll("input");

    const bikeSearch = {
        type: "bike",
        city,
        from: inputs[0].value,
        to: inputs[1].value,
        date: inputs[2].value,
        seats: 1
    };

    // Demo bike results (same city only)
    const demoResults = [
        { ...bikeSearch },
        { ...bikeSearch },
        { ...bikeSearch }
    ];

    localStorage.setItem("searchResults", JSON.stringify(demoResults));
    window.location.href = "passenger-results.html";
}

/* =========================
   BIKE: POST (INTRA-CITY)
========================= */
function postBikeRide(e) {
    e.preventDefault();

    const form = e.target;
    const city = form.querySelector("select").value;
    const inputs = form.querySelectorAll("input");

    const bikeRide = {
        type: "bike",
        city,
        from: inputs[0].value,
        to: inputs[1].value,
        date: inputs[2].value,
        vehicle: "Bike",
        seats: 1
    };

    localStorage.setItem("postedRide", JSON.stringify(bikeRide));
    window.location.href = "ride-posted.html";
}
