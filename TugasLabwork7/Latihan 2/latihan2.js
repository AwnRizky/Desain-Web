const highlight = document.querySelectorAll('.highlight');

        function Highlight() {
            highlight.forEach( (item) => {
                if(item.classList.contains('activated')) {
                    item.classList.remove('activated')
                } else {
                    item.classList.add('activated')
                }
            })       
        };