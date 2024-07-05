function MultTable() {
    document.write('<table border="1" cellspacing="0" cellpadding="5">');
    for (let i = 1; i <= 12; i++) {
        document.write('<tr>');
        for (let j=1; j <= 12; j++) {
            document.write('<td>' + (i*j) + '</td>');
        }
    }
}

MultTable();