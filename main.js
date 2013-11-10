//Sorry for the Swedish, will translate later...
//Run code on a regular google search in console

//Lägg till checkbox / Add checkboxes
$("li.g").each(function(a,b){
  if($(b).hasClass("hasCheckBox")){
  }else{
    $(b).addClass("hasCheckBox").append("<input type='checkbox' value='"+a+"' name='keepresult' />Resultat nr "+a+"")
  }
});


//Do stuff for changing page
getNextPage($(".navend a").attr("href"))

getNextPage = function(nexturl){
//Ta bort ocheckade
$("li.g").each(function(a,b){
  if($(b).find("input[name=keepresult]").is(':checked')){
    console.log("Behåller resultat " + a)
  }else{
    console.log("Tar bort resultat " + a);
    $(b).css({"background-color":"#fbb","position":"relative"})
      .animate({"left":"200px","opacity":"0"},5000)
      .animate({"height":"0px","opacity":"0", "margin":"0px"},300);
  }
});

//Hämta resultat från nästa sida och appenda
$.get( nexturl,function(data){
  $(data).find(".g").each(function(i,e){
    $("#rso").append(e)
  });

  //Uppdatera 'nästa sida'-länken
  $(".navend a").attr("href", $(data).find(".navend a").attr("href"));

  //Lägg till checkbox
  $("li.g").each(function(a,b){
    if($(b).hasClass("hasCheckBox")){
    }else{
      $(b).addClass("hasCheckBox").append("<input type='checkbox' value='"+a+"' name='keepresult' />Resultat nr "+a+"")
    }
  });
});
}
