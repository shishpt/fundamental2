<script>
    document.getElementById("fitTestform").onsubmit=function() {
        tax = parseInt(document.querySelector('input[name = "tax"]:checked').value;
        contribute= parseInt(document.querySelector('input[name = "contribute"]:checked').value;
        loanmortgage= parseInt(document.querySelector('input[name = "loanmortgage"]:checked').value;
        loanormortgage= parseInt(document.querySelector('input[name = "loanormortgage"]:checked').value;
        lifeinsurance= parseInt(document.querySelector('input[name = "lifeinsurance"]:checked').value;
        lifeinsurancetype= parseInt(document.querySelector('input[name = "lifeinsurancetype"]:checked').value;
        invest= parseInt(document.querySelector('input[name = "invest"]:checked').value;
        creditcard= parseInt(document.querySelector('input[name = "creditcard"]:checked').value;
        currentlifestyle= document.querySelector('input[name = "currentlifestyle"]:checked').value;



            result = tax + contribute + loanmortgage + loanormortgage + lifeinsurance + lifeinsurancetype + invest + creditcard + currentlifestyle;

            document.getElementById("grade").innerHTML = result;

        return false; // Do not want page refresh
    }
</script>