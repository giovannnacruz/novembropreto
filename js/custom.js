// to get current year
document.addEventListener("DOMContentLoaded", () => {
    const dicas = [
        "Reconheça e celebre a diversidade cultural na sala de aula.",
        "Crie espaços seguros para que os alunos compartilhem suas experiências.",
        "Incentive o diálogo aberto sobre temas raciais e sociais.",
        "Promova atividades que valorizem as diferentes culturas.",
        "Converse com outros professores sobre práticas antirracistas.",
        "Incorpore materiais e livros que representem diversas culturas no currículo."
    ];

    const dicaBtn = document.getElementById("dicaBtn");
    const dicaModal = document.getElementById("dicaModal");
    const dicaTexto = document.getElementById("dicaTexto");
    const closeBtn = document.querySelector(".close-btn");

    // Exibir uma dica aleatória
    dicaBtn.addEventListener("click", () => {
        const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
        dicaTexto.textContent = dicaAleatoria;
        dicaModal.style.display = "flex";
    });

    // Fechar o modal
    closeBtn.addEventListener("click", () => {
        dicaModal.style.display = "none";
    });

    // Fechar o modal ao clicar fora do conteúdo
    window.addEventListener("click", (event) => {
        if (event.target === dicaModal) {
            dicaModal.style.display = "none";
        }
    });
});










function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});