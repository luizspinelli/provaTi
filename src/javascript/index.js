
  const button = document.getElementById('button')

  button.onclick = function() {
    const nome = document.getElementById('nome');
    const sobrenome = document.getElementById('sobrenome');
    const email = document.getElementById('email');

    const data = {nome: nome.value, sobrenome: sobrenome.value, email: email.value}

    fetch('http://138.68.29.250:8082/',{method: "POST", data: JSON.stringify(data),headers: {"Content-Type": "application/x-www-form-urlencoded"}}).then(response => console.log(response))

    console.log(data)
  }


