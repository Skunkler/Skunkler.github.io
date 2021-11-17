function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
let ShowUpdates = () =>{
$(document).ready(()=>{
    
        
    $("#Home").prop('hidden', !this.checked);
    $("#Releases").prop('hidden', !this.checked);
    $("#Updates").removeAttr("hidden");
});
}

let showHome = () =>{
    $(document).ready(()=>{
       
        
        $("#Updates").prop('hidden', !this.checked);
    $("#Releases").prop('hidden', !this.checked);
    $("#Home").removeAttr("hidden");
        $('p').hide();
        $('p').each(function(i){
            $(this).fadeIn(3000);
        })
    })
}

let showRelease = ()=>{
    $(document).ready(()=>{
        $("#Updates").prop('hidden', !this.checked);
    $("#Home").prop('hidden', !this.checked);
       $('img').hide();
    $("#Releases").removeAttr("hidden");
       
        $('img').each(function(i){
            if(this.complete){
                $(this).fadeIn(3000);
                
            }else{
                $(this).load(function(){
                    $(this).fadein(3000);
                })
            }
        })
    })
}
