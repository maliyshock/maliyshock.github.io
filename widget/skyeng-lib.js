(function(global) {

    if (global.SKYENG_ORDER_CREATOR_SCRIPT_INCLUDED) {
        return;
    } else {
        global.SKYENG_ORDER_CREATOR_SCRIPT_INCLUDED = true;
    }

    var BASE_DOMAIN = location.hostname.indexOf('local') === -1
        ? 'test-a17.skyeng.link'
        : 'test-a17.skyeng.link';  // for debugging proposes

    // init
    checkScriptRequirements();
    // global functions
    global.skyengCreateOrder = skyengCreateOrder;

    /**
     * Проверяет зависимости скрипта
     */
    function checkScriptRequirements() {
        if ('function' !== typeof $) {
            throw 'Skyeng script must be used with jQuery library and included after it!';
        }
    }

    var _orderDefaultParams = {
        extraData: {}
    };

    /**
     * Функция создания заявки
     */
    function skyengCreateOrder(params) {
        params = $.extend(_orderDefaultParams, params);
        var dfr = $.Deferred();
        var validationRes = _validateOrderParams(params);

        if (!validationRes.valid) {
            setTimeout(function() {
                dfr.reject(validationRes);
            }, 0);
        } else {
            var requestData = $.extend({
                name: params.name,
                email: params.email,
                phone: params.phone,
                ajaxMode: 1
            }, params.extraData);

            $.ajax({
                url: '//cabinet.'+BASE_DOMAIN+'/order/lpgenerator',
                data: $.param(requestData),
                xhrFields: {
                    withCredentials: true
                },
                dataType: 'JSON',
                beforeSend: function() {
                },
                success: function(res) {
                    var redirect = false;
                    if (res.success) {
                        dfr.resolve(res);
                    } else {
                        dfr.reject(res);
                    }
                },
                error: function(error) {
                    dfr.reject(error);
                }
            });
        }

        return dfr.promise();
    }

    /**
     * Валидирует данные заявки
     * @param params
     * @private
     */
    function _validateOrderParams(params) {
        var errors = {};
        var errorsMsg = '';

        // имя
        if (params.name && '' !== params.name) {
            if (!/^[-_$\^&\*\(\)\t A-Za-zА-Яа-я]+$/.test(params.name)) {
                errorsMsg += 'Имя не может содержать цифр и специальных символов. ';
                errors['name'] = 'Имя не может содержать цифр и специальных символов';
            }
        } else {
            errorsMsg += 'Имя не может быть пустым. ';
            errors['name'] = 'Имя не может быть пустым';
        }

        // email
        if (params.email && '' !== params.email) {
            if (!/.+\@.+\..+/.test(params.email)) {
                errorsMsg += 'Email некорректен. ';
                errors['email'] = 'Email некорректен';
            }
        } else {
            errorsMsg += 'Email не может быть пустым. ';
            errors['email'] = 'Email не может быть пустым';
        }

        // phone
        if (!(params.phone && '' !== params.phone)) {
            errorsMsg += 'Телефон не может быть пустым.'
            errors['email'] = 'Телефон не может быть пустым';
        }

        return $.extend({
            valid: ('' === errorsMsg && 0 === Object.keys(errors).length),
            errorsMsg: errorsMsg
        }, errors);
    }
})(window);
