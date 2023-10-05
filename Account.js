var details=JSON.parse(localStorage.getItem("registrationData"))
    var name=details.name;
    var st=""
    for(var i=0;i<name.length;i++)
    {
        st+=name[i];
    if(name[i]==" ")
      break;
    }

    var cname=document.createElement("h1")
    cname.innerText="Howdy! "+st;
    document.querySelector("#customer").append(cname)
    console.log(st)