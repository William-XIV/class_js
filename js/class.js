document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
    console.log(e.target)
  
    /* class js */
    const bdd = ({
        login: "Will",
        mdp: 2003
    })
  
    class Admin {
  
        /* constructeur */
        constructor(login, pass) {
            this.login = document.getElementsByName("login")[0];
            this.pass = document.getElementsByName("pass")[0];
        }

        /* getter */
        get_out() {
        return `${this.login} : ${this.pass}`
        }

        /* setter */
        set_out() {
        this.login.value == bdd.login && this.pass.value == bdd.mdp ?
            Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
            ) :
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Saisir un nombre',
            footer: '<a href="">Why do I have this issue?</a>'
            })
        }
        
        static msg() {
        console.log("message privé")
        }
    }
  
    //suite
    let btn = document.querySelector("#btn");
        btn.addEventListener("click", e => {
        e.preventDefault;
  
        let new_user_admin = new Admin(this.login, this.pass);
        new_user_admin.get_out()
        new_user_admin.set_out()
  
    })
  
});