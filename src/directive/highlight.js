import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'

@sine.decorator.directive({
    namespace: 'sine.app',
    selector: 'highlight'
})
class HighlightDirective extends sine.Directive {
    constructor() {
        super();
    }

    onInsert() {
        hljs.highlightBlock(this.$htmlElement);

        // var blocks = this.$htmlElement.querySelectorAll('pre code');
        // blocks.forEach((block) => {
        //     hljs.highlightBlock(block)
        // });
    }
}