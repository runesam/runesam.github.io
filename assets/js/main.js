function ga () {
    $(window).on("hashchange", function() {
        "references" == location.hash.slice(1) && ga("send", "event", "navigation", "scroll", "FR-rÃ©fÃ©rences"), "case-studies" == location.hash.slice(1) && ga("send", "event", "navigation", "scroll", "EN-case-studies")
    }), $(document).on("mousedown touchstart pointerdown", ".c-btn-quote__inner", function() {
        ga("send", "event", "button", "click", "devis")
    }), $(document).on("mousedown touchstart pointerdown", 'a[data-form="classic"]', function() {
        ga("send", "event", "button", "click", "form-classic-enter")
    }), $(document).on("click", "section-form-classic button", function() {
        var n = $("input[name=email]").val();
        ga("send", "event", "button", "click", "form-classic-send"), heap.identify({
            email: n
        })
    }), $(document).on("mousedown touchstart pointerdown", 'a[data-form="tailorMade"]', function() {
        ga("send", "event", "button", "click", "form-custom-enter")
    }), $(document).on("click", "section-form-tailor-made button", function() {
        var n = $("input[name=first_name]").val(),
            e = $("input[name=last_name]").val(),
            o = $("input[name=email]").val(),
            t = $("input[name=entreprise]").val();
        ga("send", "event", "button", "click", "form-custom-send"), heap.identify({
            name: n,
            prenom: e,
            email: o,
            entreprise: t
        })
    })
};