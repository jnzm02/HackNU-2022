import XLSX from "xlsx";

const parse = (filename) => {
    const excelData = XLSX.readFile(filename);

    return Object.keys(excelData.Sheets).map((name) => ({
        name,
        data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
    }));
};



// console.log(dataFromExcel);

export let dataFromExcel = new Array;
    parse("hacknu-dev-data.xlsx").forEach((e) => {
        dataFromExcel.push(e.data);
});