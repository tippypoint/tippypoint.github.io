
const stateInput = $("#state");
const zipcodeInput = $("#zipcode");
const emailInput = $("#email");

widgets = [stateInput, zipcodeInput, emailInput];

jQuery.fn.any = function (filter) {
    for (i = 0; i < this.length; i++) {
        if (filter.call(this[i])) return true;
    }
    return false;
};

jQuery.fn.all = function (filter) {
    for (i = 0; i < this.length; i++) {
        if (!filter.call(this[i]))
            return false;
        else
            console.log()
    }
    return true;
};

const zipData = {
    "AL": ["350", "369"],
    "AK": ["995", "999"],
    "AZ": ["850", "865"],
    "AR": ["716", "729", ["755"]], //case "AR": ZIPrange('(ZIP >= 716 && ZIP <= 729) || (ZIP == 755)')
    "AS": ["967", "967"], //case "AS": ZIPrange('ZIP == 967')
    "AL": ["350", "369"],
    "AK": ["995", "999"],
    "AZ": ["850", "865"],
    "AR": ["716", "729", ["755"]], //case "AR": ZIPrange('(ZIP >= 716 && ZIP <= 729) || (ZIP == 755)')
    "AS": ["967", "967"], //case "AS": ZIPrange('ZIP == 967')
    "CA": ["900", "966"],
    "CO": ["800", "816"],
    "CT": ["60", "69"],
    "DC": ["200", "205"],
    "DE": ["197", "199"],
    "FL": ["320", "349", [],
        ["343", "345", "348"]
    ], //case "FL": ZIPrange('(ZIP >= 320 && ZIP <= 349) && (ZIP != 343 && ZIP !=345 && ZIP!=348)')
    "GA": ["300", "319"],
    "GU": ["969", "969"], //case "GU": ZIPrange('ZIP == 969')
    "HI": ["967", "968"],
    "ID": ["832", "838"],
    "IL": ["600", "629"],
    "IN": ["460", "479"],
    "IA": ["500", "528"],
    "KS": ["660", "679"],
    "KY": ["400", "427"],
    "LA": ["700", "714"],
    "ME": ["39", "49"],
    "MH": ["969", "969"], //case "MH": ZIPrange('ZIP == 969')
    "MD": ["206", "219"],
    "MA": ["10", "27", ["55"]], //case "MA": ZIPrange('(ZIP >= 10 && ZIP <= 27) || (ZIP == 55)')
    "MI": ["480", "499"],
    "MN": ["550", "567"],
    "MS": ["386", "397"],
    "MO": ["630", "658"],
    "MT": ["590", "599"],
    "NE": ["680", "693"],
    "NV": ["889", "898"],
    "NH": ["30", "38"],
    "NJ": ["70", "89"],
    "NM": ["870", "884"],
    "NY": ["90", "149", ["4", "63"]], //case "NY": ZIPrange('(ZIP >= 90 && ZIP <= 149) || (ZIP == 4) || (ZIP == 63)')
    "NC": ["269", "289"],
    "ND": ["580", "588"],
    "MP": ["969", "969"], //case "MP": ZIPrange('ZIP == 969')
    "OH": ["430", "458"],
    "OK": ["730", "749"],
    "OR": ["970", "979"],
    "PA": ["150", "196"],
    "PR": ["6", "9"],
    "RI": ["28", "29"],
    "SC": ["290", "299"],
    "SD": ["570", "577"],
    "TN": ["370", "385"],
    "TX": ["750", "799", ["885"]], //case "TX": ZIPrange('(ZIP >= 750 && ZIP <= 799) || (ZIP == 885)')
    "UT": ["840", "847"],
    "VT": ["50", "59"],
    "VA": ["220", "246", ["201"]], //case "VA": ZIPrange('(ZIP >= 220 && ZIP <= 246) || (ZIP == 201)')
    "VI": ["8", "8"], //case "VI": ZIPrange('ZIP == 8')
    "WA": ["980", "994"],
    "WI": ["530", "549"],
    "WV": ["247", "268"],
    "WY": ["820", "831"],

    "AA": ["340", "340"], //case "AA": ZIPrange('ZIP == 340')
    "AE": ["90", "98"],
    "AP": ["962", "966"],
    "MP": ["969", "969"],
}

function validateZip(state, zip) {
    zd = zipData[state]
    if (!zd)
        return false;
    min = zd[0] * 100;
    max = zd[1] * 100;
    if (zd[2])
        add = zd[2].map(function (prefix) {
            return prefix * 100
        })
    else
        add = [];
    if (zd[3])
        remove = zd[3].map(function (prefix) {
            return prefix * 100
        })
    else
        remove = [];

    //console.info("Zip data for", state, zd);
    //console.info("Add", add);
    //console.info("Remove", remove);

    if (add.includes(zip)) {
        //console.log("Matches include", zip, add);
        return true;
    } else if (remove.includes(zip)) {
        //console.log("Matches 'remove'", zip, remove);
        return false;
    } else if ((zip >= min) && (zip <= max)) {
        //console.log("In range:", zip, min, max);
        return true;
    } else {
        //console.log("Out of range:", zip, min, max);
        return false;
    }
}

console.log(!validateZip("33333"));
console.log(validateZip("TX", 88500));
console.log(validateZip("NY", 6300));
console.log(validateZip("MO", 63126));
console.log(!validateZip("FL", 34800));

function zipOrStateChange(e) {
    console.log("zip or state change", e);

    state = stateInput[0].value;
    zipcode = zipcodeInput[0].value;

    if (state == "") {
        stateInput.removeClass("valid");
        stateInput.addClass("invalid");
    } else {
        stateInput.removeClass("invalid");
        stateInput.addClass("valid");
    }

    if (zipcode == "") {
        zipcodeInput.removeClass("valid");
        // Don't explicitly flag it is invalid if it wasn't before.
    } else if (state == "") {
        // Leave the state validity as it was before.
        return;
    } else if (validateZip(state, zipcode)) {
        zipcodeInput.removeClass("invalid");
        zipcodeInput.addClass("valid");
    } else {
        zipcodeInput.removeClass("valid");
        zipcodeInput.addClass("invalid");
    }
}

$(document).on('change', '#state', zipOrStateChange);
$(document).on('change', '#zipcode', zipOrStateChange);

function zipKeyUp(e) {
    if (zipcodeInput.hasClass("valid") || zipcodeInput.hasClass("invalid")) {
        // Only on a given keystroke if it is being edited after the first change.
        zipOrStateChange(e);
    }
}

$(document).on('keyup', '#zipcode', zipKeyUp);

const email_regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function validateEmail(email) {
    return email_regex.test(String(email).toLowerCase());
}

function emailChange(e) {
    const email = emailInput[0].value;
    if (validateEmail(email)) {
        emailInput.removeClass("invalid");
        emailInput.addClass("valid");
    } else {
        emailInput.removeClass("valid");
        emailInput.addClass("invalid");
    }
}

$(document).on('change', '#email', emailChange);

function email_keyup(e) {
    if (emailInput.hasClass("valid") || emailInput.hasClass("invalid")) {
        // Only validate the email on a given keystroke if it is being edited after the first change.
        emailChange(e);
    }
}

$(document).on('keyup', '#email', email_keyup);

function resetInputs() {
    // statInput.value = "";  // Leave the state input.
    zipcodeInput.prop("value", "");
    emailInput.prop("value", "");
    $(widgets).each(function () {
        this.removeClass("valid");
        this.removeClass("invalid");
    });
}

$("#m_-4449408468207555261ss-form").submit(
    function (e) {
        // Don't let the regular form submit occur.
        e.preventDefault();

        validityUncertainAtSubmitTime = !$(widgets).all(
            function () {
                if (this.hasClass("valid") || this.hasClass("invalid")) {
                    console.info("Has tags:", this);
                    return true;
                } else {
                    console.info("NO tags:", this);
                    return false;
                }
            }
        );

        // The widget state may have changed but not be registered yet.
        // Re-evaluate state explicilty.
        zipOrStateChange(e);
        emailChange(e);

        valid =
            $(widgets).all(
                function () {
                    return this.hasClass("valid");
                }
            );

        if ((!valid) & validityUncertainAtSubmitTime) {
            console.warn("Ignoring submit because the fields are invalid with changes the UI was not yet showing in red.")
            return;
        }

        if (!valid) {
            Swal.fire(
                "Field errors!"
            )
            return;
        }

        const form = $(this);
        const targetUrl = form.attr('action');
        const button = $("#m_5949356732789988194ss-submit")
        const buttonDiv = $("#buttondiv")
        console.log(form);

        // Deal with CORS conflicts.
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const finalUrl = proxyUrl + targetUrl;

        request = {
            type: "POST",
            url: finalUrl,
            data: form.serialize(), // serializes the form's elements.
        };

        promise = $.ajax(request);
        console.log(promise);

        promise.done(function (data) {
            console.info(data);
            Swal.fire('Submitted!', 'Thank you for your support!')
                .then(function () {
                    resetInputs();
                });
        }).fail(function (err) {
            console.error(err);
            if (err.statusText == "Bad Request") {
                Swal.fire('Please fill out all fields.')
            } else {
                Swal.fire("Submission Error!:", err.statusText)
            }
        });
    }
);
