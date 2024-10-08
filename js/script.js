function Salvar(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    
    const user ={ 
       nome: nome,
       idade: idade
    };
   
    const userItem=buscaUser();
    userItem.push(user);
    localStorage.setItem('user', JSON.stringify(userItem));
    document.getElementById("nome").value = '';
    document.getElementById("idade").value = '';
   
    carregaUser();
   }
   
   function buscaUser() {
       const item = localStorage.getItem('user');
       return item ? JSON.parse(item) : [];
   }
   
   function carregaUser() {
       const lista = document.getElementById("lista");
       const userItem = buscaUser(); 
       lista.innerHTML = '';
       userItem.forEach(usuario => { 
           const li = document.createElement("li");
           li.textContent = `nome: ${usuario.nome} idade: ${usuario.idade}`;
           lista.appendChild(li);
       });
   }
   
   window.onload = carregaUser;