
import {bootstrap} from 'angular2/platform/browser';
import {
	Component, 
	Pipe, 
	PipeTransform,
	Input
} from 'angular2/core';

@Pipe({
	name: 't'
})
class TwigTranslatePipe implements PipeTransform {
	transform(value: string, args: string[]): any {
		return value;
	}
}

@Component({
	selector: 'angular2-comment-list',
	template: 'angular2-comment-list'
})
class DrupalCommentList {

}

@Component({
	selector: 'angular2-comment-form',
	template: 'angular2-comment-form'
})
class DrupalCommentForm {

}

@Component({
	selector: 'angular2-comment-field',
	templateUrl: '/core/themes/classy/templates/field/field--comment.html.ng2',
	directives: [DrupalCommentList, DrupalCommentForm],
	pipes: [TwigTranslatePipe],
	inputs: ['classes']
})
class DrupalCommentField {

	@Input('field-name') field_name: string = '';
	@Input('field-type') field_type: string = '';
	@Input('label-display') label_display: string = '';
	
	//@Input('classes') classes: string = '';
	@Input('title-classes') title_classes: string = '';

	@Input('label-hidden') label_hidden: boolean = true;
	@Input('label') label: string = 'Angular 2 comments';
	@Input('title-prefix') title_prefix: string = '';
	@Input('title-suffix') title_suffix: string = '';

	constructor() {}
	ngOnChanges() {
		setTimeout(_ => console.log(this.classes), 2000);
	}

}

@Component({
	selector: 'angular2-comment',
	template: '<angular2-comment-field></angular2-comment-field>',
	directives: [DrupalCommentField]
})
class DrupalCommentsApp {}

bootstrap(DrupalCommentsApp, [])
  .catch(err => console.error(err));