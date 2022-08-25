import React from "react"

const ChoiceList = (props) => {

  const { choices } = props


  // Fonction qui permet de sélectionner/désélectionner une réponse

  // ----------Première méthode-----------------

  // const answers = document.querySelectorAll(".answer")

  // let indexAnswer = 0

  // answers.forEach(answer => {

  //   answer.addEventListener("click", () => {

  //     // if (answer.classList.contains("checked")) {
  //     //   return
  //     // } else {
  //     //   answer.classList.add("checked")
  //     // }

  //         // answer.classList.toggle("checked")
      
  //     indexAnswer = answer.getAttribute("id")
  //     console.log("id de la réponse:", indexAnswer)
      
  //     let i = 0

  //     for (i; i < answers.length; i++) {
  //       if (answers[i].getAttribute("checked")) {
  //         answers[i].classList.remove("checked")
  //       }
  //     }

  //   })

  // })

  // const choicesItemsJsx = choices.map(({id, value, weight}, index) => {
  //   return <li
  //     className="answer"
  //     id={id}
  //     key={index}
  //     onClick={() => {}}
  //   >{value}</li>
  // })


  // ----------Deuxième méthode-----------------

  const cb = document.querySelector(`${id}`);
    const btn = document.querySelector('#btn');
    btn.onclick = () => {
        alert(cb.value);
  };

  const choicesItemsJsx = choices.map(({id, value, weight}, index) => {
    return <li>
      <label for="ok">
        <input
        name="ok"
        type="checkbox"
        id={id}
        key={index}
        placeholder={value}
        >
          {/* {value} */}
        </input>
      </label>
    </li>
  })

  return <ul>{choicesItemsJsx}</ul>
}

ChoiceList.defaultProps = {
  choises: []
}

export default ChoiceList