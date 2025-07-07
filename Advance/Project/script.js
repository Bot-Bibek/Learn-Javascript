const courses = [
  {
    name: "React Js Course",
    price: "5,000",
  },
  {
    name: "Node Js Course",
    price: "4,000",
  },
  {
    name: "Next JS Course",
    price: "6,000",
  },
  {
    name: "C# Course",
    price: "14,000",
  },
];

function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((courses) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(courses.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode("Rs. " + courses.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

// generateList();

window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateList();
});
