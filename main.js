document.addEventListener('DOMContentLoaded', () => { 
    const  calculateScreen = (size) => { 
        if (size > 1000) {
            return 'xl';
        } else if (size > 767 && size <= 1000) {
            return 'lg';
        } else if (size > 576 && size <= 767) {
            return 'md';
        } else { 
            return 'sm';
        }
    }
    const setSliderAndRun = (screen) => { 
        switch (screen) { 
            case 'xl':
                runSlider({ slidesToShow: 4, arrows: true });
                return;
            case 'lg':
                runSlider({ slidesToShow: 3, arrows: true });
                return;
            case 'md':
                runSlider({ slidesToShow: 2, dots: true });
                return;
            case 'sm':
                runSlider({ slidesToShow: 1, dots: true })
        }
    }
    const runSlider = (props) => { 
        $(document).ready(function () { 
            $('.slider').slick({
                arrows:false,
                speed: 1000,
                infinite: false,
                slidesToShow: 4,
                ...props
            });
        })
    }   
    const screen = calculateScreen(window.innerWidth);
    setSliderAndRun(screen);

    $(document).ready(function() {
    const $button = $('.modal__btn-check');
    const $modal = $('.modal-content');
    const $formInputs = $('.form-control');
    const $errorInfo = $('.error-message');

    const validateForm = (e) => {
        e.preventDefault();
        $formInputs.each(function(id, input) {
            if ($(input).val() === '') {
                $(input).addClass('error');
                $errorInfo.eq(id).addClass(`error-message-${id + 1}`);
                if (!$modal.hasClass('error')) {
                    $modal.addClass('error');
                }
            }
        });
    };

    $formInputs.on('click', function() {
        $formInputs.each(function(id, el) {
            $(el).removeClass('error');
            $errorInfo.eq(id).removeClass(`error-message-${id + 1}`);
            $modal.removeClass('error');
        });
    });

    $button.on('click', validateForm);
});
})