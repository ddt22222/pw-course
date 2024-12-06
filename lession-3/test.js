function getDDMMYYYY(dateString) {
    var dateParts = dateString.split("/");
    // Tháng bắt đầu từ 0 nên ta phải giảm đi 1: dataParts[1] - 1
    return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
    
}
console.log(dateParts);
getDDMMYYYY("2025/10/12");