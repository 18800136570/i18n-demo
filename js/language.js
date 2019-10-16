var lang=sessionStorage.getItem("lang");
        if (lang === null) {
            lang='zh';
        }
        loadProperties(lang);
        $("#lang").val(lang);
        function loadProperties(types){
            jQuery.i18n.properties({
                name: 'strings',
                path: 'i18n/',
                mode: 'map',
                language: types,
                cache: false,
                encoding: 'UTF-8',
                callback: function() {
                    $('#button_login').html($.i18n.prop('Login'));
                    $('#label_username').html($.i18n.prop('UserName'));
                    $('#label_password').html($.i18n.prop('Password'));
                }
            })
        };
        $(document).ready(function(){
            $("#lang").on('change',function(){
                sessionStorage.setItem("lang",$(this).val());
                loadProperties($(this).val());
            });
        });