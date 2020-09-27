$("#fitTestform").change(function() {
    if ($(this).val() == "yes") {
        $('#loanMortgage').show();
    }
    else {
        $('#loanMortgage').hide();
    }
});