define(function(){
    $(document).ready(function(){
        $.event.props.push('dataTransfer');

        var dragDropFun = {
            item : null,
            dragStart : function(e){
                this.style.opacity = '0.5';
                item = this;
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text', this.innerHTML);
                console.log('start');
            },
            dragEnter : function(e){
                this.classList.add('over');
                console.log('enter');
            },
            dragOver : function(e){
                e.preventDefault();
                e.dataTransfer.effectAllow = 'move';
                console.log('over');
            },
            dragLeave : function(e){
                this.classList.remove('over');
                console.log('leave');
            },
            drop : function(e){
                this.innerHTML = e.dataTransfer.getData('text');
                item.style.opacity = '1';
                console.log('drop');
            }
        };

        

        var dragItem = $('.user-list .dragdrop');
        [].forEach.call(dragItem, function(item){
            $(item).on('dragstart', dragDropFun.dragStart);
        });

        var areas = $('#area');
        [].forEach.call(areas, function(area){
            $(area).on('dragenter', dragDropFun.dragEnter);
            $(area).on('dragover', dragDropFun.dragOver);
            $(area).on('dragleave', dragDropFun.dragLeave);
            $(area).on('drop', dragDropFun.drop);
        });

                


    });
});