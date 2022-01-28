let selectedElementTitleWrapper = document.getElementsByClassName("faq-page__body__element__title")



for (let n = 0; n < selectedElementTitleWrapper.length; n++) {


    selectedElementTitleWrapper[n].addEventListener('click', function () {
        this.classList.toggle("active");

        let selectedElementTitle = this.firstElementChild;
        let arrow = selectedElementTitle.nextElementSibling;

        selectedElementTitle.classList.toggle("active");
        arrow.classList.toggle("arrow-rotation")

        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";


        } else {
            content.style.display = "block";

        }
    });
}