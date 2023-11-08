function busqueda(){
    filter = inputSearch.value.topUpperCase();
    li = box_search.GetElementsByTagName("buscar")

    for(i = 0; i < li.length; i++){

        a=li[i].GetElementsByTagName("a")[0]; 
        textValue = a.textContent, a.innerText;
    }
}