(function($) {
    var cultures = $.cultures,
        en = cultures.en,
        standard = en.calendars.standard,
        culture = cultures["cs-CZ"] = $.extend(true, {}, en, {
        name: "cs-CZ",
        englishName: "Czech (Czech Republic)",
        nativeName: "čeština (Česká republika)",
        language: "cs",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "Kč"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                '/': ".",
                firstDay: 1,
                days: {
                    names: ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],
                    namesAbbr: ["ne","po","út","st","čt","pá","so"],
                    namesShort: ["ne","po","út","st","čt","pá","so"]
                },
                months: {
                    names: ["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec",""],
                    namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
                },
                monthsGenitive: {
                    names: ["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince",""],
                    namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
                },
                AM: ["dop.","dop.","DOP."],
                PM: ["odp.","odp.","ODP."],
                eras: [{"name":"n. l.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["cs-CZ"]);
    culture.calendar = culture.calendars.standard;
})(Globalization);