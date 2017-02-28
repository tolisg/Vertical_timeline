this.on('expand_collapse', function(event){
                $(this.find('li.active')).toggleClass('active inactive');
                $(event.node).closest('li.inactive').toggleClass('active inactive');
            });
