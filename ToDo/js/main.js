$(function(){
    $('#due').datepicker();

    $('#add').button({
        icons: {
            primary: "ui-icon-circle-plus"
        }
    }).click(function(){
        $('#new').dialog('open');
    });
        $('#new').dialog({
            width: 350,
            height: 300,
            modal: true,
            autoOpen: false,
            close: function(){
                $('#new input').val('');
            },
            buttons: {
                "Add task": function() {
                    var name = $('#task').val();
                    var date = $('#due').val();

                    var begin = '<li><span class="done"></span><span class="delete">X</span>';
                    var task = '<span class="task">' + name + '</span>';
                    var date = '<span class="due">' + date + '</span>';
                    var end = '</li>';
                    $('#list').prepend(begin + task + date + end);
                    $('#list').hide().slideDown(400).find('li:first').animate({
                        'background-color': 'rgb(255,255,204)'
                    },400).animate({
                        'background-color': 'white'
                    },700).animate();
                    $(this).dialog('close');
                },
                "Cancel": function(){
                    $(this).dialog('close');
                }
            }
        });

//Marking as complete
    $('#list').on('click', '.done', function(){
        var item = $(this).parent('li');
        item.slideUp(400, function(){
            var $this = $(this);
            $this.detach();
            $('#finished').prepend($this);
            $this.slideDown()
        });
    });

    //Sortable
    $('.sort').sortable({
        connectWith: '.sort',
        cursor: 'pointer',
        placeholder: 'ui-state-highlight',
        cancel: '.delete, .done'
    });

    //Delete
    $('.sort').on('click', '.delete', function(){
        $(this).parent('li').effect('fade', function(){
            $(this).remove();
        });
    });
});