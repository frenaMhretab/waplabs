$(function() {
    $('#form-submit').click(function(event) {
        event.preventDefault();
       let serializedData = $("form").serialize();

        let request = $.ajax({
            url: "http://localhost:8000/search/",
            type: "POST",
            method: "POST",
            dataType: 'json',
            crossDomain: true,
            data: serializedData
        });

        request.done(function(response, textStatus, jqXHR) {
           let el = $('table');
            if (el.length !== 0) {
                el.remove();
            }
           let body = document.getElementById('page-results');
           let tbl = document.createElement('table');
            tbl.style.width = '100%';
            tbl.setAttribute('border', '1');
           let tbdy = document.createElement('tbody');
            const obj = JSON.parse(JSON.stringify(response));

            for (let i = 0; i < obj.length; i++) {
               let tr = document.createElement('tr');
                let row = obj[i];
               let td = document.createElement('td');
                td.appendChild(document.createTextNode(i + "(" + row.wordtype + ") : " + row.definition))
                tr.appendChild(td)
                tbdy.appendChild(tr);
            }
            tbl.appendChild(tbdy);
            body.appendChild(tbl)
        });

        request.fail(function(jqXHR, textStatus, errorThrown) {
            console.error(
                "The following error occurred: " +
                textStatus, errorThrown
            );
        });
    });
})