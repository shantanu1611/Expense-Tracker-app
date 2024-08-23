const formInput = $('#form-input');

const explist = $('#exp-list');


formInput.on('submit',function(e){
    e.preventDefault();

    const desc=$('#exp-dec').val();

    const category=$('#exp-cate').val();

    const amount= $('#amount').val();



    if(document && category && !isNaN(amount)){

        const newRow=document.createElement('tr');

        $(newRow).html(`<td>${desc}</td><td>${category}</td><td>${amount}</td>`);

        explist.append(newRow);

    }

    $('#exp-dec').val('');    

    $('#exp-cate').val('');

    $('#amount').val('');
})