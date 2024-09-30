function save(){
    let title = $('#txtTitle').val()
    let description = $('#txtDescription').val()
    let colo = $('#txtColor').val()
    let standarDate = $('#txtStandarDate').val()
    let status = $('#txtStatus').val()
    let budget = $('#txtBudget').val()

    let task = {title:title,description: description, color: colo, date:standarDate, status : status, budget:budget}


    console.log(task)
}











window.onloadstart = $('#btnSave').click(save)