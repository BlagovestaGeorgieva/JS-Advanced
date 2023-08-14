
function solve() {

    let inputDOMElements = {
        task: document.getElementById("task"),
        description: document.getElementById("description"),
        dueDate: document.getElementById("date"),
    };

    let otherDOMElements = {
        addTaskBtn: document.getElementById("add"),
        form: Array.from(document.getElementsByTagName("form"))[0],
        sectionOpenDiv: Array.from(document.getElementsByClassName("orange"))[0].parentNode.nextElementSibling,
        sectionInProgressDiv: Array.from(document.getElementsByClassName("yellow"))[0].parentNode.nextElementSibling,
        sectionCompleteDiv: Array.from(document.getElementsByClassName("green"))[0].parentNode.nextElementSibling,
    };

    const addNewTaskHandler = (e) => {
        e.preventDefault();
        const allFieldsHaveValue = Object.values(inputDOMElements).every(
            (input) => input.value !== ""
        );

        if (!allFieldsHaveValue) {
            return;
        }
        let newArticle = createElement("article", otherDOMElements.sectionOpenDiv);
        let h3 = createElement("h3", newArticle, inputDOMElements.task.value);
        let p1 = createElement(
            "p",
            newArticle,
            `Description: ${inputDOMElements.description.value}`
        );
        let p2 = createElement(
            "p",
            newArticle,
            `Due Date: ${inputDOMElements.dueDate.value}`
        );
        let div = createElement("div", newArticle, '', ["flex"]);
        let startButton = createElement("button", div, "Start", ["green"]);
        let deleteButton = createElement("button", div, "Delete", ["red"]);
        otherDOMElements.form.reset();

        startButton.addEventListener('click', startTaskHandler)
        deleteButton.addEventListener('click', deleteTaskHandler)
    };

    otherDOMElements.addTaskBtn.addEventListener("click", addNewTaskHandler);

    function deleteTaskHandler(e) {
        e.target.parentNode.parentNode.remove();
    }

    function startTaskHandler(e) {
        let article = e.target.parentNode.parentNode;
        let deleteButton = e.target;
        otherDOMElements.sectionInProgressDiv.appendChild(article);
        deleteButton.textContent = 'Delete';
        deleteButton.setAttribute('class', 'red');
        let finishButton = deleteButton.nextElementSibling;
        finishButton.textContent = 'Finish';
        finishButton.setAttribute('class', 'orange')

        deleteButton.addEventListener('click', (e) => e.target.parentNode.parentNode.remove());
        finishButton.addEventListener('click', finishTaskHandler);
    }

    function finishTaskHandler(e) {
        let article = e.target.parentNode.parentNode;
        e.target.parentNode.remove();
        otherDOMElements.sectionCompleteDiv.appendChild(article);
    }

    function createElement(
        type,
        parentNode,
        content,
        classes,
        id,
        attributes,
        useInnerHtml
    ) {
        //useInnerHtml to add innerHtml if needed
        const htmlElement = document.createElement(type);

        if (content && useInnerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== "input") {
                htmlElement.textContent = content;
            }

            if (content && type === "input") {
                htmlElement.value = content;
            }
        }

        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }

        if (id) {
            htmlElement.id = id;
        }

        // { scr = 'link', href: http}
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }
}