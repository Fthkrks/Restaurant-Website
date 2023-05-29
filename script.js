const SearchForm = document.querySelector(".search-form");
const CartItems = document.querySelector(".cart-items-container");
const Navbar = document.querySelector(".navbar");


//! buttons
const SearchBtn = document.querySelector("#search-btn");
const ShoppingCardBtn = document.querySelector("#shopping-card");
const MenuBtn = document.querySelector("#menu-btn");


SearchBtn.addEventListener("click", ()=>{
    SearchForm.classList.toggle("active");

    document.addEventListener("click", (e)=>{

        if(!e.composedPath().includes(SearchBtn) && !e.composedPath().includes(SearchForm)){
            SearchForm.classList.remove("active");


        }
    })
})

ShoppingCardBtn.addEventListener("click", ()=>{
    CartItems.classList.toggle("active");

    document.addEventListener("click", (e)=>{
        if(!e.composedPath().includes(ShoppingCardBtn) && !e.composedPath().includes(CartItems)){
            CartItems.classList.remove("active");
        }
    })

})



MenuBtn.addEventListener("click", ()=>{
    Navbar.classList.toggle("active");

    document.addEventListener("click", (e)=>{
        if(!e.composedPath().includes(MenuBtn) && !e.composedPath().includes(Navbar)){
            Navbar.classList.remove("active");
        }
    })
})