function createTable(element, numTr, numTd, className) {
    for (let i = 0; i < numTr; i++) {
        let tr = document.createElement("tr");
        tr.classList.add(`tr`)
        tr.classList.add(`${className}Tr`)
        for (let j = 0; j < numTd; j++) {
            let td = document.createElement("td");
            td.classList.add(`td`)
            td.classList.add(`${className}Td`)
            tr.appendChild(td);
        }
        element.appendChild(tr);
    }
}

function createMarkupPage() {
    const main = document.createElement("main")
    document.body.appendChild(main)
    const table = document.createElement("table")
    main.appendChild(table)
    table.classList.add("table")
    const thead = document.createElement("thead")
    table.appendChild(thead)
    const tbody = document.createElement("tbody")
    table.appendChild(tbody)
    createTable(thead, 1, 2, "head")
    createTable(tbody, 10, 2, "body")
}

function getValueTd(targetArr, valueArr) {
    for (let i = 0; i < targetArr.length; i++) {
        targetArr[i].innerText = valueArr[i]
        if (targetArr[i].innerText === "true") {
            targetArr[i].classList.add("trueTd")
            targetArr[i].previousSibling.classList.add("trueTd")
        } else if (targetArr[i].innerText === "false") {
            targetArr[i].classList.add("falseTd")
            targetArr[i].previousSibling.classList.add("falseTd")
        }
    }
}

function getValueTable() {
    const headTd = document.querySelectorAll(".headTd")
    const bodyTd = document.querySelectorAll(".bodyTd")
    const headArr = ["Array method", "Mutatable"]
    const bodyArr = ["map", "false", "push", "true", "filter", "false", "sort", "true", "pop", "true",
        "shift", "true", "reverse", "true", "unshift", "true", "concat", "false", "slice", "false",]

    getValueTd(headTd, headArr)
    getValueTd(bodyTd, bodyArr)
}

function getRemoveNewStyle(className, targetArr) {
    for (element of targetArr) {
        element.classList.toggle(`${className}`)
    }
}

function changeTrueElements() {
    const trueTd = document.querySelectorAll(".trueTd")
    setInterval(() => getRemoveNewStyle("transparent", trueTd), 3000)
    setTimeout(() => getRemoveNewStyle("fontStyle", trueTd), 5000)
    setTimeout(() => getRemoveNewStyle("fontStyle", trueTd), 15000)
}

function deleteTable() {
    const main = document.querySelector("main")
    setInterval(() => {
        document.body.removeChild(main)
    }, 90000)
}

function main() {
    createMarkupPage()
    getValueTable()
    changeTrueElements()
    deleteTable()
}

main()