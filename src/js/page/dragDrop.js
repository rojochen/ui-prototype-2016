define(function(){
    $(document).ready(function(){
        $.event.props.push('dataTransfer');

        var dragDropFun = {
            treeObject : [],
            dragStart : function(e){
                // this.style.opacity = '0.5';
                this.style.transform = 'scale(0.9,0.9)';
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text', this.innerHTML);
                //console.log('start');
            },
            dragEnter : function(e){
                this.classList.add('over');
                //console.log('enter');
            },
            dragOver : function(e){
                e.preventDefault();
                e.dataTransfer.effectAllow = 'move';
                //console.log('over');
            },
            dragLeave : function(e){
                this.classList.remove('over');
                //console.log('leave');
            },
            drop : function(e){
                this.innerHTML = e.dataTransfer.getData('text');
                dragDropFun.treeObject.push({
                    imgSrc : e.toElement.children[0].children[0].currentSrc,
                    text : e.toElement.innerText
                });
                console.log(dragDropFun.treeObject);
                //console.log('drop');
            },
            dragEnd : function(e){
                [].forEach.call(areas, function(area){
                    area.classList.remove('over');
                });
                // this.style.opacity = '1';
                this.style.transform = 'scale(1,1)';
                //console.log('end');
            }
        };

        

        var dragItem = $('.user-list .dragdrop');
        [].forEach.call(dragItem, function(item){
            $(item).on('dragstart', dragDropFun.dragStart);
            $(item).on('dragend', dragDropFun.dragEnd);
        });

        var areas = $('#dragdropArea .area');
        [].forEach.call(areas, function(area){
            $(area).on('dragenter', dragDropFun.dragEnter);
            $(area).on('dragover', dragDropFun.dragOver);
            $(area).on('dragleave', dragDropFun.dragLeave);
            $(area).on('drop', dragDropFun.drop);
        });

    });
});