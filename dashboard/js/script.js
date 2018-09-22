var desc = 1150;
var mob = 768;

function is_touch_device() {
    return 'ontouchstart' in window || navigator.maxTouchPoints
}

$(document).ready(function () {
    // DataTable
    // var table = $('#implants_datatable').DataTable({
    //     "pageLength": 8,
    //     "ordering": false,
    //     "info": false,
    //     "lengthChange": false,
    //     "language": {
    //         "paginate": {
    //             "previous": "&lsaquo;",
    //             "next": "&rsaquo;"
    //         }
    //     },
    //     responsive: true
    //     });

    $('.search_order input').on('keyup change', function () {
        table.search(this.value).draw();
    });

    $('.sidenav').sidenav();

    $('.search_wrap').on('click', function () {
        $(this).addClass('active');
    });
    $('.menu_icon').on('click', function () {
        $(this).toggleClass('active');
        $("#sidebar").toggleClass('active');
    });

    if (window.innerWidth < mob) {
        $('.js-collapser:not(.active)').next().removeClass('show');

        $('.js-collapser').on('click', function (e) {
            e.stopPropagation();
            if ( !$(this).hasClass('active') ) {
                $('html, body').animate({
                    scrollTop: $(this).offset().top - 60
                }, 500);
            }
            $(this).toggleClass('active');
            $(this).next().stop().slideToggle();

        });
    } else {
        $('.collapse').addClass('show');
    }

    $('.cad_files_link').on('click', function (e) {
        e.preventDefault();
        $('.cad_files_list').toggleClass('active');
    });

    if (is_touch_device()) {
        $("*").off('mouseover mouseenter mousemove mouseleave mouseout mousedown mouseup')
    }
    if (window.innerWidth < mob) {

        // var stickySearch = $('.search_order').offset().top - 70;
        // $(window).on('scroll', function () {
        //     if ($(window).scrollTop() >= stickySearch) {
        //         $('.search_order').addClass('fixed-search');
        //         $('.implants_table').addClass('fixed-search');
        //     } else {
        //         $('.search_order').removeClass('fixed-search');
        //         $('.implants_table').removeClass('fixed-search');
        //     }
        // });
    }
    if (window.innerWidth < mob) {
        $('.step_select_group .dropdown-menu a').on('click', function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top - 65
            }, 500);

        });
        $('.search_order').on('click', function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top - 60
            }, 500);
        });

        // $('#implants_datatable').DataTable().page.len(100000).draw();
    }
    $('.items_list select').formSelect();
});
